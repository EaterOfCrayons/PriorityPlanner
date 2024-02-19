import requests
import json

url = "http://localhost:5000/api/student/create-account"
new_student = {
    "name": "John Cena",
    "account": {
        "password": "1234",  #6969696969696696969696966969669696969696969669696969696969696969696969696969696696966969696969
        "classes": [10, 10],
        "grades": [90, 85],
        "assignments": [{"have sex": 1}],
        "assignment_weights": [{"have sex": 0.5}],
    },
}

response = requests.post(url, json=new_student)
if response.status_code == 200:
    print("Account created successfully")
else:
    print("creation x,", response.text)

url = "http://localhost:5000/api/student/login"
login_data = {"name": "John Cena", "password": "1234"}
response = requests.post(url, json=login_data)
if response.status_code == 200:
    print("Login successful")
else:
    print("login failed:", response.text)

url = "http://localhost:5000/api/student/classes"
data = {"name": "John Cena", "classes": ["id1", "id2"]}
response = requests.post(url, json=data)
if response.status_code == 200:
    print("classes added successfully")
else:
    print("failed to add classes:", response.text)

url = "http://localhost:5000/api/student/classes/grades"
data = {"name": "John Cena", "grades": [85, 90]}
response = requests.post(url, json=data)
if response.status_code == 200:
    print("grades added successfully")
else:
    print("failed to add grades:", response.text)
