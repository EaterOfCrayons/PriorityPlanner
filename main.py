import requests
import json

# URL of the Flask server (replace with your actual URL)
url = "http://localhost:5000/api/student"

# Data for the new student account
new_student = {
    "name": "John",
    "account": {
        "password": 1234,
        "classes": [10, 10],
        "grades": [90, 85],
        "token": 5678,
    },
}

# Send a POST request to create the new account
response = requests.post(url, json=new_student)

# Check the response
if response.status_code == 200:
    print("Account created successfully")
else:
    print("Failed to create account:", response.text)

# Now try to log in
url = "http://localhost:5000/api/student/login"

login_data = {"name": "John", "password": 1234}

response = requests.post(url, json=login_data)

# Check the response
if response.status_code == 200:
    print("Login successful")
    print("Response data:", response.json())
else:
    print("Login failed:", response.text)
