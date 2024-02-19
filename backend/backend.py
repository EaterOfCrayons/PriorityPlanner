from flask import Flask, request, jsonify
import json

app = Flask(__name__)

def student_is_valid(input):
    return (
        isinstance(input["password"], str)
        and isinstance(input["classes"], list)
        and isinstance(input["grades"], list)
        and isinstance(input["assignments"], list)
        and isinstance(input["assignment_weights"], list)
    )


# name: name, account: {password: num, classes: [id1, id2], grades: [1, 2], assignments: [], assignment_weights: []}
@app.route("/api/student/create-account", methods=["POST"])
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


# {name: name, classes: [id1, id2]}
@app.route("/api/student/classes", methods=["POST"])
def add_classes():
    input = request.get_json()
    classList = input["classes"]
    with open("data.json", "r") as file:
        data = json.load(file)
    data[input["name"]]["classes"] = classList
    if input["name"] in data:
        with open("data.json", "w") as file:
            json.dump(data, file)
        return "success", 200
    else:
        return "account not found", 404


# {name: name, grades: [grade1, grade2]}
@app.route("/api/student/classes/grades", methods=["POST"])
def add_grades():
    input = request.get_json()
    grades = input["grades"]
    with open("data.json", "r") as file:
        data = json.load(file)
    data[input["name"]]["grades"] = grades
    if input["name"] in data:
        with open("data.json", "w") as file:
            json.dump(data, file)
        return "success", 200
    else:
        return "account not found", 404


# {name: name}
@app.route("/api/student", methods=["GET"])
def get_student():
    input = request.get_json()
    with open("data.json", "r") as file:
        data = json.load(file)
    if input["name"] in data:
        return jsonify(data[input["name"]]), 200
    else:
        return "account not found", 404

# {name: name, assignmentName: className, assignmentName: weight}
@app.route("/api/student/assignments/new", methods=["POST"])
def new_assignment():
    input = request.get_json()
    with open("data.json", "r") as file:
        data = json.load(file)
    data[input["name"]]["assignments"].append(input["assignment"])
    data[input["name"]]["assignment_weights"].append(input["weight"])
    if input["name"] in data:
        with open("data.json", "w") as file:
            json.dump(data, file)
        return "success", 200
    else:
        return "account not found", 404


if __name__ == "__main__":
    app.run(host='0.0.0.0')
