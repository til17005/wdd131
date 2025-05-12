const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// for loop
for (let i = 0; i < 7; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// while loop
let i = 0;
while (i < 7) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

// forEach loop
studentReport.forEach((grade) => {
    if (grade < LIMIT) {
        console.log(grade);
    }
});


// for...in loop
for (let grade in studentReport) {
    if ((studentReport[grade]) < LIMIT) {
        console.log(studentReport[grade]);
    }
}


// Today + for the next 6 days
for (let i = 0; i < DAYS; i++) {
    const weekDay = new Date();
    weekDay.setDate(weekDay.getDate() + i);
    const dayName = weekDay.toLocaleDateString('en-US', { weekday: 'long' });

    console.log(dayName)
}





// Answers from Week02 Loops Lesson
// for loop
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// while loop
//let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

// forEach loop
studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

// for...in loop
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}