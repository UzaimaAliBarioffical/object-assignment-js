
// practice

// const students = [
//     {
//         name: "Muhammad Saqib",
//         semester: 3,
//         father_name: "Ghulam Jilani",
//         isFeePaid: true,
//         courses: ["Mathematics", "Physics", "Computer Science"]
//     },
//     {
//         name: "Muhammad Ubaid",
//         father_name: "Muhammad Aslam",
//         semester: 2,
//         isFeePaid: true,
//         courses: ["Biology", "Chemistry", "English"]
//     },
//     {
//         name: "Uzaima Bari",
//         father_name: "Irshad Bari",
//         semester: 4,
//         isFeePaid: false,
//         courses: ["Economics", "Statistics", "Marketing"]
//     }
// ];

// const container = document.getElementById('students-container');

// students.forEach(student => {
//     const studentDiv = document.createElement('div');
//     studentDiv.style.border = "1px solid #000";
//     studentDiv.style.margin = "10px";
//     studentDiv.style.padding = "10px";

//     const name = document.createElement('h2');
//     name.textContent = `Name: ${student.name}`;

//     const fatherName = document.createElement('p');
//     fatherName.textContent = `Father's Name: ${student.father_name}`;

//     const semester = document.createElement('p');
//     semester.textContent = `Semester: ${student.semester}`;

//     const isFeePaid = document.createElement('p');
//     isFeePaid.textContent = `Fee Paid: ${student.isFeePaid ? "Yes" : "No"}`;

//     const coursesTitle = document.createElement('p');
//     coursesTitle.textContent = `Courses:`;

//     const coursesList = document.createElement('ul');
//     student.courses.forEach(course => {
//         const courseItem = document.createElement('li');
//         courseItem.textContent = course;
//         coursesList.appendChild(courseItem);
//     });

//     studentDiv.appendChild(name);
//     studentDiv.appendChild(fatherName);
//     studentDiv.appendChild(semester);
//     studentDiv.appendChild(isFeePaid);
//     studentDiv.appendChild(coursesTitle);
//     studentDiv.appendChild(coursesList);

//     container.appendChild(studentDiv);
// });



let bikeInfo = [
    {
        // img: "download.jpeg",
        module: "Kawasaki Ninji H2R",
        manufactureDate: "20, 08, 2023",
        milage: "8KM",
        color: ["Red", "Black", "Green", "Blue"],
    },
    {
        // img2:"",
        module: "Honda 125",
        manufactureDate: "02, 01, 2020",
        milage: "20KM",
        color: ["Red", "Black"]
    },
    {
        module: "CG 70",
        manufactureDate: "10, 02, 2024",
        milage: "50KM",
        color: ["Red", "Black", "Custom Avalible"]
    }
]

let bikeContainer = document.getElementById("main");

bikeInfo.forEach(bike => {
    const bikeModule = document.createElement("h2");
    bikeModule.textContent = `Module: ${bike.module}`;

    const manufactureDate = document.createElement("h4");
    manufactureDate.textContent = `Manufacture Date: ${bike.manufactureDate}`;

    const milage = document.createElement("h4");
    milage.textContent = `Milage: ${bike.milage}`

    const textColor = document.createElement("h4");
    textColor.textContent = `Color:`

    let colorList = document.createElement("ul");
    bike.color.forEach(colors => {
        let colorItem = document.createElement("li")
        colorItem.textContent = colors;
        colorList.appendChild(colorItem)
    });

    bikeContainer.appendChild(bikeModule)
    bikeContainer.appendChild(manufactureDate)
    bikeContainer.appendChild(milage)
    bikeContainer.appendChild(textColor)
    bikeContainer.appendChild(colorList)
});