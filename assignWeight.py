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


def sortStuff(input: list) -> list:
     
    return []