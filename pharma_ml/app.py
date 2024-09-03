# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from Drug_sales_prediction1 import predict_sales

# app = Flask(__name__)
# CORS(app)

# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         data = request.get_json()
        
#         start_date = data.get('start_date')
#         end_date = data.get('end_date')
#         drug = data.get('drug')
        
#         result = predict_sales(start_date, end_date, drug)
        
#         return result
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)
from flask import Flask, request, jsonify
import joblib
import pandas as pd
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)


model = joblib.load('model.pkl')

def dataframe_to_json(df):
    return df.to_json(orient='records')

def predict_sales(start_date, end_date, drug):
    dates = pd.date_range(start=start_date, end=end_date, freq='D')
    df_test = pd.DataFrame(index=dates)
    df_test['Year'] = df_test.index.year
    df_test['Month'] = df_test.index.month
    df_test['Weekday Name'] = df_test.index.weekday
    df_test['Drug'] = drug

    le = LabelEncoder()
    df_test['Weekday Name'] = le.fit_transform(df_test['Weekday Name'])

    df_test['predicted_quantity'] = model.predict(df_test)
    json_output = dataframe_to_json(df_test)

    return json_output

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        start_date = data['start_date']
        end_date = data['end_date']
        drug = data['drug']

        prediction = predict_sales(start_date, end_date, drug)
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

