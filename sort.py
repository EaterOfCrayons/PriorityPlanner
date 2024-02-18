#alr
#so the idea is we need a score
#and we use this composite score to sort the assignments
#what if
#score is the lowest possible ur total grade will go
#if u get an N in the assignment (ranges from 0 to 100)
#and we sort from lowest (acc bussing bussing idea chat YFMG)
#im creating a grade class
#with different weightages
#so then we can store that
#and use that for the idea i put above
import requests
from msgraph import GraphServiceClient

graph_client = GraphServiceClient()

url = "https://assignments.onenote.com/api/v1.0/edu/classes/0e76d917-7c00-43ef-a86b-85423ea7d5b9/assignments/093919b0-325d-4ec6-a578-37927048ddb8/submissions?$expand=resources($expand=dependentResources),submittedResources($expand=dependentResources),outcomes&$top=1000"
access = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyIsImtpZCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyJ9.eyJhdWQiOiJodHRwczovL29uZW5vdGUuY29tLyIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzFmZDQ2NzNmLWRmOTYtNDYyMS04NjM4LWExZDg4YzRjODVkNy8iLCJpYXQiOjE3MDgyODk5MjYsIm5iZiI6MTcwODI4OTkyNiwiZXhwIjoxNzA4Mjk1MDQ4LCJhY3IiOiIxIiwiYWlvIjoiQVRRQXkvOFdBQUFBc3VzQW16Y0MvTnplWmJKZnNzZ2p5bkpjOVhsYk84YXpmZXg5eTI1NjJZSlViTEIrWVZxLzUvSGFMcXI2STdRKyIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI1ZTNjZTZjMC0yYjFmLTQyODUtOGQ0Yi03NWVlNzg3ODczNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlBBTkpBIiwiZ2l2ZW5fbmFtZSI6IlRFSkFTIiwiaXBhZGRyIjoiMTY3LjIyMC4xMDIuMTAiLCJuYW1lIjoiUEFOSkEsIFRFSkFTIiwib2lkIjoiYzdhYjdjZDQtZDAyNi00YmU3LTg5MTMtMzEwMWMzOWIwMDNhIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTExOTU4NDA5OTEtMTYyMzA4ODk3MC0xMTM2MjYzODYwLTI4MzAxNSIsInB1aWQiOiIxMDAzN0ZGRThBQ0FCMUZEIiwicmgiOiIwLkFWZ0FQMmZVSDViZklVYUdPS0hZakV5RjE0NDlUUzNqSy05TG40ZDRkYVljS2Q3eUFOWS4iLCJzY3AiOiJOb3Rlcy5SZWFkV3JpdGUgTm90ZXMuUmVhZFdyaXRlLkFsbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6Im9ZYUZDcmJsb0FNTllSNXdVS3pyOVNORk5wd3VZS1hrMnp4dGZFZDRNMlUiLCJ0aWQiOiIxZmQ0NjczZi1kZjk2LTQ2MjEtODYzOC1hMWQ4OGM0Yzg1ZDciLCJ1bmlxdWVfbmFtZSI6InMtdHBhbmphQGx3c2Qub3JnIiwidXBuIjoicy10cGFuamFAbHdzZC5vcmciLCJ1dGkiOiIwYjNLWFV5OHZVT2RqbktJSVhRTEFBIiwidmVyIjoiMS4wIn0.orDv58G5FFHwTT7f7edI6hil280ar4uBRn3Q2U7f1EEl1bhiyLEyvaogJilOGCXMfRCJ9WdBCk2jZaHXocCP7o5fYRh-M-jJYdFiAK8On9AZGS5CMGNWwz0wyGwRJUzVLvY_LlxEWCup7I4e1gLfA0jNpM9C1KyZTxy3EZNxwcPbrEHSbWjnPtwUlhPRJRVEBBVEtLCu52f6ixcRG_XHt0L9Dl6068MWutD0Q6hadfzOnsWJ0GExcB3AhWy30x-MHbUkvx1lmHB7Q0XYYAjvZyi-asMItM0Nr_UW2XFNzGowXBMxthOZ9seew54ESI_Go-6zJpuSCo_bmAFe2BmLsA"

data = requests.get(url, access)

class Clas:

        classGrades = {
        }
        currentAssignments = {

        }

        # the input gonna be like ["CSA","Pre Calc","Linglish 10 honors"]
        def __init__(self, classes: list):
            for course in classes:
                self.classGrades[course] = 0.0
                self.currentAssignments[course] = []  # is this for the assignments for each class

        # adds a previous assignment's grade to it (we dont care about the assignments name after its graded)
        def addGradedProject(self, course, grade):
            self.classGrades[course] = (self.classGrades[course] + grade) / 2

        def addAssignment(self, course, name, dueDate):
            self.currentAssignments[course].append({"name": name, "did": dueDate})

        def getAllScores(self):
            scores = []
            for key, values in self.currentAssignments.items():
                for assignment in values:
                    scores.append([key + assignment["name"], self.classGrades[key] - assignment["did"]])
            return scores


output = []
for i in range(100):
    output.append(-1)
#linear complexity chat O(n)
def bestSortingAlg(input: list):
    for z in input:
        output.append(z)
    input = []
    for i in output:
        if(i != -1):
            input.append(i)
    return input
#ask here bruh
#its too louyd 
    

