from flask import Flask, request, jsonify
import json

app = Flask(__name__)


def student_is_valid(input):
    return (
        isinstance(input["password"], int)
        and isinstance(input["classes"], list)
        and isinstance(input["grades"], list)
        and isinstance(input["token"], int)
    )


# name: name, account: {password: num, classes: [id1, id2], grades: [1, 2], token : num}
@app.route("/api/student", methods=["POST"])
def create_account():
    student = request.get_json()
    with open("data.json", "r") as file:
        data = json.load(file)
    new_entry = student["account"]
    data[student["name"]] = new_entry
    print(new_entry)
    if student_is_valid(new_entry):
        with open("data.json", "w") as file:
            json.dump(data, file)
            return "success", 200
    else:
        "format invalid", 400


# {name: name, password: num}
@app.route("/api/student/login", methods=["POST"])
def login():
    input = request.get_json()
    name = input["name"]
    password = input["password"]
    with open("data.json", "r") as file:
        data = json.load(file)
    if password == data[name]["password"]:
        return jsonify(data[name]), 200
    return "account not found", 404


#@app.route("/api/student/classes", methods=["POST"])
#def add_classes();
    
if __name__ == "__main__":
    app.run(port=5000)
