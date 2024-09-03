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
Q1 = df_new['Quantity'].quantile(0.25)
Q3 = df_new['Quantity'].quantile(0.75)
Q1,Q3

# %%
IQR = Q3 - Q1
IQR

# %%
lower_lim = Q1 - 1.5*IQR
upper_lim = Q3 + 1.5*IQR
lower_lim,upper_lim

# %%
df_new_no_out = df_new[df_new['Quantity'] < 17.27]
df_new_no_out

# %%
train = df_new_no_out[df_new_no_out['Year'] < 2019]
test = df_new_no_out[df_new_no_out['Year'] >= 2019]

print(train.shape)
print(test.shape)

# %%
X_train = train.drop(['Hour','Quantity','datum'],axis = 1)
y_train = train['Quantity']

X_test = test.drop(['Hour','Quantity','datum'],axis = 1)
y_test = test['Quantity']

# %%
import xgboost as xgb
reg = xgb.XGBRegressor(n_estimators = 1000,early_stopping_rounds = 50, learning_rate = 0.005)
reg.fit(X_train,y_train,
       eval_set = [(X_train,y_train),(X_test,y_test)],
       verbose = 10)

# %%
from sklearn.metrics import mean_squared_error
y_pred =reg.predict(X_test)
mse = mean_squared_error(y_test,y_pred)
rmse = np.sqrt(mse)
rmse

# %%
test['Quantity Predictions'] = y_pred
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


