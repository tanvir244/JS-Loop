// 18_2 Introduction To While Loop
var num = 0;
while(num < 5){
    console.log('Hello Loop')
    num = num + 1;
}


// 18_3 Problem Solving With While Loop
let num = 1;
while (num < 5){
    console.log(num);
    num++;
}

let num = 1;
while (num < 5){
    num++;
    console.log(num);
}

// ======================================
let num = 10;
while (num < 20){
    console.log(num);
    num++;
}

let num = 10;
while (num < 20){
    num++;
    console.log(num);
}

// ====================================== 
let num = 50;
while (num < 60){
    console.log(num)
    num+=1;
}

let num = 50;
while (num < 60){
    num+=1;
    console.log(num);
}

// =================== sum number ===================
let num = 1;
let sum = 0;
while (num < 5){
    console.log(sum);
    sum = sum + num;
    num++;
}

let num = 1;
let sum = 0;
while (num < 5){
    sum = sum + num;
    console.log(sum);
    num++;
}

let num = 1;
let sum = 0;
while (num < 5){
    num++;
    sum = sum + num;
    console.log(sum);
}

// =================== even number ===================
let num = 1;
while (num < 10){
    if(num % 2 === 0){
        console.log(num);
    }
    num++;
}

let num = 10;
while (num < 20){
    if(num % 2 === 0){
        console.log(num);
    }
    num++;
}