import requests
import json

url = "http://localhost:5000/api/student"
new_student = {
    "name": "david",
    "account": {
        "password": 1234,
        "classes": [10, 10],
        "grades": [90, 85],
        "token": 5678,
    },
}

response = requests.post(url, json=new_student)
if response.status_code == 200:
    print("Account created successfully")
else:
    print("creation failed,", response.text)

url = "http://localhost:5000/api/student/login"
login_data = {"name": "John", "password": 1234}
response = requests.post(url, json=login_data)
if response.status_code == 200:
    print("Login successful")
else:
    print("login failed:", response.text)

url = "http://localhost:5000/api/student/classes"
data = {"name": "John", "classes": ["id1", "id2"]}
response = requests.post(url, json=data)
if response.status_code == 200:
    print("classes added successfully")
else:
    print("failed to add classes:", response.text)

url = "http://localhost:5000/api/student/classes/grades"
data = {"name": "John", "grades": [85, 90]}
response = requests.post(url, json=data)
if response.status_code == 200:
    print("grades added successfully")
else:
    print("failed to add grades:", response.text)
