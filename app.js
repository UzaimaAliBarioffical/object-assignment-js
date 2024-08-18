const studentsInfo = [
  {
    name: "John Doe",
    semester: 3,
    father_name: "Doe",
    isFeePaid: true,
    courses: ["Mathematics", "Physics", "Computer Science"],
  },
  {
    name: "Jane Smith",
    father_name: "Smith",
    semester: 2,
    isFeePaid: true,
    courses: ["Biology", "Chemistry", "English"],
  },
  {
    name: "Emily Johnson",
    father_name: "Johnson",
    semester: 4,
    isFeePaid: false,
    courses: ["Economics", "Statistics", "Marketing"],
  },
];
function printStudentsInfo() {
  let mainDiv = document.getElementById("main");
  for (let i = 0; i < studentsInfo.length; i++) {
    let students = studentsInfo[i];
    let h2ForName = document.createElement("h2");
    h2ForName.innerHTML = "Name : " + students.name;
    mainDiv.appendChild(h2ForName);

    let father_name = studentsInfo[i];
    let h2ForFname = document.createElement("h2");
    h2ForFname.innerHTML = "Father_name : " + father_name.father_name;

    mainDiv.appendChild(h2ForFname);

    let semester = studentsInfo[i];
    let h2ForSemester = document.createElement("h2");
    h2ForSemester.innerHTML = "Semester : " + semester.semester;

    mainDiv.appendChild(h2ForSemester);

    let fee = studentsInfo[i];
    let h2ForFee = document.createElement("h2");
    // console.log(h2ForFee);
    h2ForFee.innerHTML = "Feepaid : " + fee.isFeePaid;
    // console.log(h2ForFee);
    mainDiv.appendChild(h2ForFee);
    let ulForcourses = document.createElement("ul");
    for (let j = 0; j < students.courses.length; j++) {
      // console.log(j);
      let courseList = document.createElement("li");
      //  console.log(courseList);
      courseList.innerHTML = "courses :" + " " + students.courses[j];
      //  console.log(courseList);
      mainDiv.appendChild(courseList);
    }
  }
}
printStudentsInfo();
