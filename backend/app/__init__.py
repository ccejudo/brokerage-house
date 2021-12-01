from flask import Flask, request
import json
import os

app = Flask(__name__)

dataFile = os.path.join(os.path.dirname(__file__), './data/user_data.json')

@app.route('/')
def index():
    return json.dumps({'message': 'Hello World!'})

@app.route('/user-data')
def user_data():
    with open(dataFile) as data_file:
        data = json.load(data_file)
    data_file.close()
    return json.dumps(data)

@app.route('/update-user-data', methods=['POST'])
def update_user_data():
    data = json.loads(request.data)
    with open(dataFile, "w+") as data_file:
        json.dump(data, data_file)
    data_file.close()
    return "success"

