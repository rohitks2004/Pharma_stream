# %%
import pandas as pd
import numpy as np

# %%
df=pd.read_csv("salesdaily.csv")
df

# %%
df_new = df.melt(id_vars=['datum', 'Year', 'Month', 'Hour', 'Weekday Name'], var_name='Drug', value_name='Quantity')
df_new.head()

# %%
df_new.shape

# %%
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
df_new['Weekday Name'] = le.fit_transform(df_new['Weekday Name'])
df_new['Drug'] = le.fit_transform(df_new['Drug'])
df_new

# %%
train = df_new[df_new['Year'] < 2019]
test = df_new[df_new['Year'] >= 2019]

print(train.shape)
print(test.shape)

# %%
X_train = train.drop(['Hour','Quantity','datum'],axis = 1)
y_train = train['Quantity']

X_test = test.drop(['Hour','Quantity','datum'],axis = 1)
y_test = test['Quantity']

# %%
X_train

# %%
from sklearn.ensemble import RandomForestRegressor
reg_rf = RandomForestRegressor(max_depth=2, random_state=0)
reg_rf.fit(X_train, y_train)


# %%
from sklearn.metrics import mean_squared_error
rf_pred = reg_rf.predict(X_test)
mse = mean_squared_error(y_test,rf_pred)
rmse = np.sqrt(mse)
rmse

# %%
import xgboost as xgb
reg = xgb.XGBRegressor(n_estimators = 1000,early_stopping_rounds = 50, learning_rate = 0.005)
reg.fit(X_train,y_train,
       eval_set = [(X_train,y_train),(X_test,y_test)],
       verbose = 10)
y_pred =reg.predict(X_test)
rmse = np.sqrt(mse)
print(rmse)

# %%
param_grid = {
    'n_estimators': [100, 500, 1000],    # Number of trees in the forest
    'learning_rate': [0.01, 0.1, 0.2],   # Learning rate
    'max_depth': [3, 5, 7],               # Maximum depth of each tree
    'subsample': [0.8, 1.0],              # Subsample ratio of the training instances
    'colsample_bytree': [0.8, 1.0]        # Subsample ratio of columns when constructing each tree
}

# %%
import xgboost as xgb

# %%
xgb = xgb.XGBRegressor(random_state=42)
from sklearn.model_selection import GridSearchCV
grid_search = GridSearchCV(xgb, param_grid, scoring='neg_mean_squared_error', cv=5)
grid_search.fit(X_train, y_train)

# %%
print("Best Hyperparameters:", grid_search.best_params_)
best_xgb = grid_search.best_estimator_
y_pred = best_xgb.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
print("Test Root Mean Squared Error:", rmse)

# %%
test.loc[:, 'Quantity Predictions'] = y_pred
test

# %%
def predict_sales(start_date,end_date,drug):
    dates = pd.date_range(start=start_date, end=end_date, freq='D')
    df_test = pd.DataFrame(index=dates)
    df_test['Year'] = df_test.index.year
    df_test['Month'] = df_test.index.month
    df_test['Weekday Name'] = df_test.index.weekday
    df_test['Drug'] = drug
    from sklearn.preprocessing import LabelEncoder
    le = LabelEncoder()
    df_test['Weekday Name'] = le.fit_transform(df_test['Weekday Name'])
    df_test['predicted_quantity'] = reg.predict(df_test)
    json_output = dataframe_to_json(df_test)

    return json_output

# %%
import json

def dataframe_to_json(df):
    """
    Convert a pandas DataFrame to a JSON string.
    
    Parameters:
    df (pandas.DataFrame): The DataFrame to convert.

    Returns:
    str: The JSON string representation of the DataFrame.
    """
    # Convert DataFrame to JSON
    json_output = df.to_json(orient='records')
    return json_output





