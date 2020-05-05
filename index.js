// 1. Add student
//     1. It should accept name, id
// 2. Enter mark for a student
// 3. Enter mark for a subject for multiple students
// 4. Edit mark for a particular subject of a student
// 5. Change the class teacher of a class
// 6. Remove a student from a class
// 7. Delete a subject entry from every students
// 8.  Find the topper of a class given a subject
// 9. Find the average mark for a given subject
// 10. Sort and display the list of students in any order
//  - ordered by name, mark etc

//  Extra things

// 1. Find the total mark for a student and save it in the user object

const fs = require("fs");
const studentsList = require("./studentsList.json");
const division = require("./division.json");
const classObject = require("./classObj.json");

const addStudent = (name, id) => {
    let studentsDetails = {
        name: name,
        id: id,
        marks: []
    };

    fs.readFile('studentsList.json', function (err, data) {
        let json = JSON.parse(data);
        console.log("json", json)
        json.students.push(studentsDetails);
        fs.writeFile("studentsList.json", JSON.stringify(json), function (err) {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
        });
    })
}

const marksForStudent = (id, subject, mark) => {
    let index = studentsList.students.findIndex(obj => obj.id == id);
    let marksDetails = {
        subject: subject,
        mark: mark
    };

    studentsList.students[index].marks.push(marksDetails);
    fs.writeFile("studentsList.json", JSON.stringify(studentsList), err => {
        if (err) throw err;
        console.log("Done writing");
    });
}

const subjectForMultipleStudents = (subject, idMarksPair) => {//[[53, 90], [54, 80]]
    console.log(idMarksPair.length);

    for (let i = 0; i < idMarksPair.length; i++) {
        marksForStudent(idMarksPair[i][0], subject, idMarksPair[i][1]);

    }
}

const editMarks = (id, subject, marks) => {
    let index = studentsList.students.findIndex(obj => obj.id == id);
    let correspondingObject = studentsList.students[index].marks;

    for (let i = 0; i < correspondingObject.length; i++) {
        if (correspondingObject[i].subject === subject) {
            correspondingObject[i].mark = marks;

        }

    }

    fs.writeFile("studentsList.json", JSON.stringify(studentsList), err => {
        if (err) throw err;
        console.log("Done writing");
    });
}

const changeClassTeacher = (className, newTeacherName) => {
    if( studentsList.name === className){
        studentsList.teacherName =newTeacherName;

        fs.writeFile("studentsList.json", JSON.stringify(studentsList), err => {
            if (err) throw err;
            console.log("Done writing");
        });
    }
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

// addDivision("Class A", "Renjisha e rajan", ["ritheesh", "renjith", "anandhu", "rupesh"]);
// console.log("class object =",classObject.students[0].name);

// subjectForMultipleStudents("Biology", [[53, 90], [54, 80]]);

// editMarks(54, "Biology", 70);
changeClassTeacher("class A","Anoop")