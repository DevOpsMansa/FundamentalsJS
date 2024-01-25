
// Given course information

const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

const NewCourseInfo = {
    id: 423,
    name: "Introduction to Python"
};

// Given assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
    {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
    },
    {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
    },
    {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
    },
    {
//case for 0 possible points
        id: 4,
        name: "Look at Loops",
            due_at: "2023-02-13",
        points_possible: 0
    },
    {
//case for string in  possible points
        id: 5,
        name: "Look at Arrays",
        due_at: "2023-02-13",
        points_possible: "Not graded"
    }
    ]
};

// Given learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    },
//Given additional test cases
    {
        learner_id: 125,
        assignment_id: 4,
        submission: {
            submitted_at: "2023-01-29",
            score: 0,
        }
    },
    {
        learner_id: 132,
        assignment_id: 4,
        submission: {
            submitted_at: "2023-02-20",
            score: 100,
        }
    },
    {
        learner_id: 111,
        assignment_id: 4,
        submission: {
            submitted_at: "2023-02-21",
            score: 0,
        }
    },
    {
        learner_id: 111,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-01",
            score: "25", //string instead of number, but still number
        }
    },
    {
        learner_id: 111,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-01-21",
            score: "I didn't do it" , //string
        }
    },
    {
        learner_id: 111,
        assignment_id: 5, //test for possible points not a number
        submission: {
            submitted_at: "2023-01-21",
            score: 10
        }
    }
];

//  Expected Output format:

const result = [
    {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
    },
    {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
    }
];

console.log(`
**************************************
***SBA 308: JavaScript Fundamentals***
**************************************
Objectives:
1. Employ basic JavaScript syntax accurately.
2. Implement control flow structures such as conditionals and loops effectively.
3. Use arrays and objects to organize and manage data.
4. Develop functions to create reusable code.
5. Utilize loops and iteration to navigate through data collections.
6. Implement error handling to manage potential code failures gracefully.
Instructions:
You will create a script that gathers data, processes it, and then outputs a consistent result as described by a specification. This is a very typical situation in industry, and this particular scenario has been modified from a real application. The data you will use is provided below.
You will be provided with four different types of data:
`);

console.log(`
***************
***The Logic***
***************
`);

try {
    console.log(`Assignment for '${CourseInfo.name}'`);
//result for correct assignment
    let result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

    console.log(result);

    console.log(`Assignment for '${NewCourseInfo.name}'`);
//result for wrong course
    result = getLearnerData(NewCourseInfo, AssignmentGroup, LearnerSubmissions);
    console.log(result);
}
catch (err) {
    console.log(err);
}

console.log(`
******************************
***1st Function Declaration***
******************************
1) take the assignment group and loop for each assignment
2) check if this assignment's due date has passed if not - skip this assignment
3) check submissions
4) if there is a first submission for a student - create an object, else add new submission
5) create additional properties for average score calculation
6) calculate all average scores
7) output result


Scores counting Function
@param {object} ag  - assignment info for each course
@param {object} course  - the course that would be evaluated
@param {array of object} submissions  - student submission
@returns  {array of objects} - return info about each  student - average score and for each given assignment
`);

function getLearnerData(course, ag, submissions) {
//Learner information in an Array
   let result = [];
//First, check assignment group belong to course. Otherwise... throw an error
   if (course.id !== ag.course_id) { throw new Error("Check Assignment Group for another Course!")
};
//Take the current date
const currentDate = String(new Date().toJSON()).slice(0, 10);
//Run loop for each assignment
   for (const assignment of ag.assignments) {
//Check for the due date whether we need to estimate this assignment or not


if (assignment.due_at <= currentDate) {
//Check all student submission for that given assignment
   for (const learnerSubmition of submissions.filter(submission => submission.assignment_id === assignment.id)) {

//get reference of a learner from the result array
let student = getLearner(result, learnerSubmition.learner_id);

//Add a new property where the key is an assignment id and the value is a calculated score
student[assignment.id] = calculateAssignmentScore(student, assignment, learnerSubmition.submission); // Assignment score calculation
};
//Skip over the assignment if it is not yet due
} else {
    continue; 
}
}

calculateAverageScore(result); //calculate the average score for each student in the list
deleteAdditionalProperties(result, "avg_result", "avg_max"); //delete additional properties that we need to calculate average score

//return the output
return result;
}


console.log(`
******************************
***2nd Function Declaration***
******************************
A function that gets an existing student from the list or adds a new student to the list and then returns the result
@param {array of objects} learners  - A list of all students who submitted assignments
@param {number} learner_id  - id of examine learner
@returns - the reference for the learner 
`);

function getLearner(learners, learner_id) {
    let learner = {}; //Creates a new object

const isStudentExist = learners.some(item => item.id === learner_id); //Boolean variable

if (isStudentExist) { //check if there we have any other assignments for that student in our result array

learner = learners.find(item => item.id === learner_id) //if yes, assign the link for the existing object
}

else {
//If there is a new student, create a new object and add it to our  array of result
    learner = {
        id: learner_id,
        avg: 0,
        avg_result: 0, //added properties for average score calculation
        avg_max: 0 //added properties for average score calculation
    }
//Add new students to the list to be sure that next time we will work with the same object
   learners.push(learner); 
}
return learner; // return the learner object, connected with  an array of result
}
console.log(`
******************************
***3rd Function Declaration***
******************************
Function to calculate assignment score
@param {object} student - student who submits the assignment
@param {object} assignmentInfo - assignment info
@param {object} learnerSubmition - submition information
@returns assignment score rounded to 3 decimal
`);
function calculateAssignmentScore(student, assignmentInfo, learnerSubmition) {
    let studentScore = 0;
//check if the score is a number
    if (typeof learnerSubmition.score !== 'number'){
//if not try to convert it to a number
    let scoreValue = Number(learnerSubmition.score);
    if (!isNaN(scoreValue) ){
//use converted value
    studentScore = scoreValue;
}
else{
    //Do not use this assignment in the average score.
    return `Student has wrong information for assignment score: ${learnerSubmition.score}`; //string variable
}

} else { studentScore = learnerSubmition.score; } // local variable for student score

//Check to see if the  was not late for submission
if (learnerSubmition.submitted_at > assignmentInfo.due_at) {
studentScore -= assignmentInfo.points_possible * 0.1 //penalty for late submission of assignment
}
//check if the assignment counts or not toward final grade
//Decide if possible scores is 0 - assignment doesn't count
//Also Decide if possible points are not a number - assignment doesn't count
const possiblePoints = Number(assignmentInfo.points_possible);
if (possiblePoints === 0 || isNaN(possiblePoints)) {
const scoreMsg = "This assignment does not count toward the final grade."; //string variable
return scoreMsg;
}
//Increase additional properties for average score
student.avg_result += studentScore;
student.avg_max += possiblePoints;
//Return the result
return (studentScore / possiblePoints).toFixed(3); //Round up number to 3 decimal
}

console.log(`
******************************
***4th Function Declaration***
******************************
The function calculates average score for each student
@param {array of objects} studentsScores 
`);
function calculateAverageScore(studentsScores) {
//Looping through all student score info
    for (const index in studentsScores) {
//If the  maximum available score is 0 skip this student
    if (studentsScores[index].avg_max !== 0) {
//Calculate average score
    studentsScores[index].avg = (studentsScores[index].avg_result / studentsScores[index].avg_max).toFixed(3);
}
else { continue; }
}
//No return value as we are working with references
}

console.log(`
******************************
***5th Function Declaration***
******************************
This function deletes listed properties from objects in the given array
@param {array of objects with properties} dataArray 
@param  {property names} properties  
`);

function deleteAdditionalProperties(dataArray, ...properties){
if(properties.length > 0) // If there is any properties that we want to delete
{
//Looping for each element in the dataArray
dataArray.forEach(element => { 
//Looping for each property in the property list
    properties.forEach(property =>{
//Delete property in object
        delete element[property]
    });
    });
}
}
































