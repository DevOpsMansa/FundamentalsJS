<<<<<<< HEAD
# Fundamentals of JavaScript #

## Grades of Students in a class
This evaluates students in a class over assignment grades and course average grade point for JavaScript.
## Objectives of this project:

### Employ basic JavaScript syntax accurately.
### Implement control flow structures such as conditionals and loops effectively.
### Use arrays and objects to organize and manage data.
### Develop functions to create reusable code.
### Utilize loops and iteration to navigate through data collections.
### Implement error handling to manage potential code failures gracefully.

## Project Details Instructions 
You will create a script that gathers data, processes it, and then outputs a consistent result as described by a specification. This is a very typical situation in industry, and this particular scenario has been modified from a real application. The data you will use is provided below.
You will be provided with four different types of data:

A CourseInfo object, which looks like this:
{"id": number, "name": string,}

An AssignmentGroup object, which looks like this:
{"id": number, "name": string, // the ID of the course the assignment group belongs to
  "course_id": number, // the percentage weight of the entire assignment group "group_weight": number,"assignments": [AssignmentInfo],}

Each AssignmentInfo object within the assignments array looks like this:
{"id": number,"name": string,// the due date for the assignment
  "due_at": Date string,// the maximum points possible for the assignment 
  "points_possible": number,
}

An array of LearnerSubmission objects, which each look like this:
{"learner_id": number,"assignment_id": number,"submission": {
"submitted_at": Date string,"score": number}
}

## The goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:
{
    // the ID of the learner for which this data has been collected
    "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
}

### Project main functions:

1. getLearnerData( CourseInfo, AssignmentGroup, [LearnerSubmission] ) - main function. input parameters:

* CourseInfo

* AssignmentGroup

* Array of LearnerSubmission output: array of student objects

2. getLearner(learners, learner_id) - additional function. Provide the student object for which the assignment score would be calculated. Function checked if in learners array we have information about the scores for student with id = "learner_id" then returns this student object. If we wanted to calculate score for new student, that function declate the student object, add it to learners array and return it. input parameters:

* learners - array of all students in course which has any kind of scores

* learner_id - the id of student output: student object that exists in learners

3. calculateAssignmentScore(student, assignmentInfo, learnerSubmition) - additional function. Function calculates the assignment score. input parameters:

* student - student object in which we will add information about the assignment score

* assignmentInfo - AssignmentInfo object

* learnerSubmission - LearnerSubmission.submission property information

4. calculateAverageScore(studentsScores) - additional function. Calculates average scores for all students who submitted any assignmnents input parameters:

* studentScores - array of students objects

5. deleteAdditionalProperties(dataArray, ...properties) - additional function. Function that delete any properlies from the object input parameters:

* dataArray - array of objects. We want to delete properties from every object in array

* properties - array of property's names

## Engineer

Skill Based Assessment completed as part of __Software Engineering Bootcamp__ at __Per Scholas__
by Eric (Mansa) Marah.

## Optional Resources

* https://www.w3schools.com/js/js_object_definition.asp
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
* https://stackoverflow.com/questions/8217419/how-to-determine-if-a-javascript-array-contains-an-object-with-an-attribute-that
=======
# FundamentalsJS
## Objectives:
1. Employ basic JavaScript syntax accurately.
2. Implement control flow structures such as conditionals and loops effectively.
3. Use arrays and objects to organize and manage data.
4. Develop functions to create reusable code.
5. Utilize loops and iteration to navigate through data collections.
6. Implement error handling to manage potential code failures gracefully.
## Instructions:
You will create a script that gathers data, processes it, and then outputs a consistent result as described by a specification. This is a very typical situation in industry, and this particular scenario has been modified from a real application. The data you will use is provided below.
You will be provided with four different types of data:


>>>>>>> 11d76cb3b3e79c96d88e80ec7f0bf9be96f5d951
