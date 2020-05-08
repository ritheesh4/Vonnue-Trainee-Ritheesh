const fs = require("fs");
const studentsList = require("./studentsList.json");
const division = require("./division.json");

const writeIntoFile = () => {
    fs.writeFile("studentsList.json", JSON.stringify(studentsList), err => {
        if (err) throw err;
    });

}
// 1. Add student//     1. It should accept name, id
const addStudent = (name, id) => {
    let studentsDetails = {
        name: name,
        id: id,
        marks: []
    };

    fs.readFile('studentsList.json', function (err, data) {
        let json = JSON.parse(data);
        json.students.push(studentsDetails);
        fs.writeFile("studentsList.json", JSON.stringify(json), function (err) {
            if (err) throw err;
            console.log('Done');
        });
    });
    return studentsDetails
};

// 2. Enter mark for a student
const marksForStudent = (id, subject, mark) => {
    let index = studentsList.students.findIndex(obj => obj.id == id);
    let marksDetails = {
        subject: subject,
        mark: mark
    };

    studentsList.students[index].marks.push(marksDetails);
    writeIntoFile();
    return marksDetails
};

// 3. Enter mark for a subject for multiple students
const subjectForMultipleStudents = (subject, idMarksPair) => {//[[53, 90], [54, 80]]
    for (let i = 0; i < idMarksPair.length; i++) {
        marksForStudent(idMarksPair[i][0], subject, idMarksPair[i][1]);
    }
    return "Done"
};

// 4. Edit mark for a particular subject of a student
const editMarks = (id, subject, marks) => {
    let index = studentsList.students.findIndex(obj => obj.id == id);
    let correspondingObject = studentsList.students[index].marks;

    for (let i = 0; i < correspondingObject.length; i++) {
        if (correspondingObject[i].subject === subject) {
            correspondingObject[i].mark = marks;

        }
    }

    writeIntoFile();
    return "Done writing"
};

// 5. Change the class teacher of a class
const changeClassTeacher = (className, newTeacherName) => {
    if (studentsList.name === className) {
        studentsList.teacherName = newTeacherName;
        writeIntoFile();
        return "Done"
    }
    
};

// 6. Remove a student from a class
const removeStudent = (className, id, studentName) => {
    for (let i = 0; i < studentsList.students.length; i++) {
        if (studentsList.students[i].name == studentName) {
            studentsList.students = studentsList.students.slice(0, i).concat(studentsList.students.slice(i + 1, studentsList.students.length));
            writeIntoFile();
            return "Removed"
        }
        return "Invalid input"
    }
};

// 7. Delete a subject entry from every students
const deleteSubEntry = (subject) => {
    for (let i = 0; i < studentsList.students.length; i++) {
        for (let j = 0; j < studentsList.students[i].marks.length; j++) {
            if (studentsList.students[i].marks[j].subject === subject) {
                studentsList.students[i].marks = studentsList.students[i].marks.slice(0, j).concat(studentsList.students[i].marks.slice(j + 1, studentsList.students[i].marks.length));

            }
        }
    }

    fs.writeFile("studentsList.json", JSON.stringify(studentsList), err => {
        if (err) throw err;
        console.log("Done writing");
    });
};

// 8. Find the topper of a class given a subject
const topperOfClass = (subject) => {
    let topMark = 0;
    let topStudent = '';

    for (let i = 0; i < studentsList.students.length; i++) {
        for (let j = 0; j < studentsList.students[i].marks.length; j++) {
            if (studentsList.students[i].marks[j].subject === subject) {
                if (studentsList.students[i].marks[j].mark > topMark) {
                    topMark = studentsList.students[i].marks[j].mark;
                    topStudent = studentsList.students[i].name
                }
            }
        }
    }

    return topStudent
}

// 9. Find the average mark for a given subject
const avgOfSubject = (subject) => {
    let totalMarks = 0;
    let count = 0;
    let avgMark = 0;

    for (let i = 0; i < studentsList.students.length; i++) {
        for (let j = 0; j < studentsList.students[i].marks.length; j++) {
            if (studentsList.students[i].marks[j].subject === subject) {
                totalMarks = totalMarks + studentsList.students[i].marks[j].mark;
                count++;
            }
        }
    }

    avgMark = totalMarks / count;
    return avgMark

}

// 10. Sort and display the list of students in any order
//  - ordered by name, mark etc
const sortStudents = () => {
    let sortedList = [];
    for (let i = 0; i < studentsList.students.length; i++) {
        sortedList[i] = studentsList.students[i].name
    }
    sortedList.sort();
    return sortedList
}


//Extra 1. Find the total mark for a student and save it in the user object
const studentTotalMark = (student) => {
    let totalMarks = 0;
    let studentId = 0;

    for (let i = 0; i < studentsList.students.length; i++) {
        if (studentsList.students[i].name === student) {
            studentId = i;
            for (let j = 0; j < studentsList.students[i].marks.length; j++) {
                totalMarks = totalMarks + studentsList.students[i].marks[j].mark;
            }
        }
        break
    }

    let userObject = {
        name: student,
        totalMarks: totalMarks,
        id: studentId
    }

    fs.readFile('user.json', function (err, data) {
        let json = JSON.parse(data);
        json.push(userObject);
        fs.writeFile("user.json", JSON.stringify(json), function (err) {
            if (err) throw err;
            console.log('Done');
        });
    })
    return totalMarks
}

const addDivision = (name, teacherName, students) => {
    let divisionInput = {
        name: name,
        teacherName: teacherName,
        students: students
    };
    division.push(divisionInput);

    fs.writeFile("division.json", JSON.stringify(division), err => {
        if (err) throw err;
        console.log("Done writing");
        console.log(division)
    });
}

// console.log("To add student with name and id:",addStudent("roma",59));
// console.log("Enter the mark for a student with id subject and mark :", marksForStudent(55, "malayalam", 100));
// console.log("Enter mark for a subject for multiple students by the given input subject name, and array of id and marks pairs:",subjectForMultipleStudents("Biology", [[56, 90], [57, 80],[58,100]]));
// console.log("Edit mark for a particular subject of a student. Input id, Subject and marks:", editMarks(55, "Biology", 80));
// console.log("Change class teacher name. Input class and new teacher name:", changeClassTeacher("class A", "Anoop"))
console.log("Remove a student from a class:\n",removeStudent("class A", 56, "renjisha"))
// console.log(studentTotalMark('renjisha'))
// console.log(sortStudents())

// addDivision("Class A", "Renjisha e rajan", ["ritheesh", "renjith", "anandhu", "rupesh"]);
// console.log("class object =",classObject.students[0].name);



// editMarks(54, "Biology", 70);

// removeStudent("class A", 56, "renjisha")

// deleteSubEntry("malayalam")

// console.log(topperOfClass("Biology"))
// console.log(avgOfSubject("malayalam"))