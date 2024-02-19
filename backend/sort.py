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

        def getAllSortedScores(self):
            scores = []
            for key, values in self.currentAssignments.items():
                for assignment in values:
                    scores.append([key + assignment["name"], self.classGrades[key] - assignment["did"]])
            a = []
            b = []
            for z in scores:
                a.append(z[1])
                b.append(z[0])
            a = self.insertionSort(a,b)
            return a[1]
        def isAsending(self,l: list, index):
            if(index-1 > 0 and index+1<len(list)):
                return l[index-1] < l[index] < l[index+1]
            elif(index == 0):
                return l[0] < l[1]
            else:
                return l[index-1] < l[index]
        def insertionSort(self,arr,anotherArr):
            for i in range(1, len(arr)):
                print(arr)
                key = arr[i]
                key2 = anotherArr[i]
                j = i-1
                while j >= 0 and key < arr[j]:
                    arr[j + 1] = arr[j]
                    anotherArr[j+1] = anotherArr[j]
                    j -= 1
                arr[j + 1] = key
                anotherArr[j + 1] = key2
            return [arr,anotherArr]
c = Clas(["CSA","Meth","Rizzics","English","APES"])
c.addAssignment("English"," Dharmen",10)
c.addAssignment("CSA"," Picture Leb",420)
c.addAssignment("Meth"," Web",5)

print(c.getAllSortedScores())
               
