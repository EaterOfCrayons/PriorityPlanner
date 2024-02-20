class Clas{
    classGrades = {
    };
    currentAssignments = {

    };
    

    //the input gonna be like ["CSA","Pre Calc","Linglish 10 honors"]
    constructor(classes,grades) {
        for (var i = 0; i < classes.length;i++) {
            var course = classes[i];
            
            this.classGrades[course] = grades;
            this.currentAssignments[course] = [];  //is this for the assignments for each class
            
        }


            
    }
        

    //adds a previous assignment's grade to it (we dont care about the assignments name after its graded)
    addGradedProject(course, grade){
        return this.classGrades[course] = (this.classGrades[course] + grade) / 2;
    }


    addAssignment(course, name, dueDate){

        this.currentAssignments[course].append({"name": name, "did": dueDate});
    } 

    getAllSortedScores() {
        var scores = [];
        var names = [];
        for (const key in this.currentAssignments){
            values = this.currentAssignments[key];
            for (const assignment in values){
                scores.append([key + assignment["name"], this.classGrades[key] - assignment["did"]]);
                names.append(assignment["did"]);
            }
        }
            
        a = [];
        b = [];
        for (const z in scores) {
            a.append(z[1]);
            b.append(z[0]);
        }
            
        a = this.insertionSort(a,b,names);
        return a
    }
       
    isAsending(l, index) {
        if(index-1 > 0 && index+1<len(list)) {
            return l[index-1] < l[index] < l[index+1];
        }
        else if(index == 0){
            return l[0] < l[1];
        }
        else{
            return l[index-1] < l[index];
        }
    }
       
    insertionSort(arr,anotherArr,thirdArr){
        for (var i = 1; i<len(arr);i++) {
            key = arr[i];
            key2 = anotherArr[i];
            thirdKey = thirdArr[i];
            j = i-1;
            while (j >= 0 && key < arr[j]) {
                arr[j + 1] = arr[j];
                anotherArr[j+1] = anotherArr[j];
                thirdArr[j+1] = thirdArr[j];
                j -= 1;
            }
                
            arr[j + 1] = key;
            anotherArr[j + 1] = key2;
            thirdArr[j+1] = key3;
            return [thirdArr,anotherArr];
        }
    }
        
           

}