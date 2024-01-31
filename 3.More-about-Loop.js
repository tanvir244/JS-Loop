// ========= 18_6 Different Ways To Use Loop ======

// ================================================
// ============ odd number using for-loop =========
// ================================================
// Iterative way
for(let i = 0; i < 20; i++){
    if(i % 2 === 1){
        console.log(i);
    }
}

// Recursive way
for(let i = 20; i > 0; i--){
    if(i % 2 === 1){
        console.log(i);
    }
}

// ============== even number using for-loop ========
// Iterative way
for(let i = 0; i < 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// Recursive way
for(let i = 20; i > 0; i--){
    if(i % 2 === 0){
        console.log(i);
    }
}


// ===================================================
// ============== odd number using while-loop ========
// ===================================================
// Iterative way
let i = 0;
while(i < 20){
    if(i % 2 === 1){
        console.log(i);
    }
    i++;
}

// Recursive way
let i = 20;
while(i > 0){
    if(i % 2 === 1){
        console.log(i);
    }
    i--;
}

// ============== even number using while-loop ========
// Iterative way 
let i = 0;
while(i < 20){
    if(i % 2 === 0){
        console.log(i);
    }
    i++;
}

// Recursive way
let i = 20;
while(i > 0){
    if(i % 2 === 0){
        console.log(i);
    }
    i--;
}


// ===========================================================
// Give me the list of numbers between 1 to 30 divisible by 5
// ===========================================================
// Iterative way 
for(let i = 1; i <= 30; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}

// Recursive way
for(let i = 30; i > 1; i--){
    if(i % 5 === 0){
        console.log(i);
    }
}

// ===========================================================
// Give me the list of numbers between 1 to 30 divisible by 3
// ===========================================================
// Iterative way
for(let i = 1; i <= 30; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}

// Recursive way
for(let i = 30; i > 1; i--){
    if(i % 3 === 0){
        console.log(i);
    }
}

// ================================================================
// Give me the list of numbers between 1 to 30 divisible by 3 or 5
// ================================================================
// Iterative way
for(let i = 1; i <= 30; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log(i);
    }
}

// Recursive way
for(let i = 30; i > 1; i--){
    if(i % 3 === 0 || i % 5 === 0){
        console.log(i);
    }
}

// ================================================================
// Give me the list of numbers between 1 to 30 divisible by 3 and 5
// ================================================================
// Iterative way
for(let i = 1; i <= 30; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}

// Recursive way
for(let i = 30; i > 1; i--){
    if(i % 3 === 0 && i % 5 == 0){
        console.log(i);
    }
}

// ===========================================
// Give me the sum from 1 to 30 divisible by 3
// ===========================================
let sum = 0;
for(let i = 1; i <= 30; i++){
    if(i % 3 === 0){
        sum = sum + i;
        console.log(i);
    }
}
console.log("Total", sum);

// different way to show sum numbers step by step
let sum = 0;
for(let i = 1; i <= 30; i++){
    if(i % 3 === 0){
        sum = sum + i;
        console.log(i);
        console.log("total", sum);
    }
}

// ===========================================
// Give me the sum from 1 to 30 divisible by 5
// ===========================================
let sum = 0;
for(let i = 1; i <= 30; i++){
    if(i % 5 === 0){
        sum = sum + i;
        console.log(i);
    }
}
console.log("Total:", sum);

// different way to show sum numbers step by step
let sum = 0;
for(let i = 1; i <= 30; i++){
    if(i % 5 === 0){
        sum = sum + i;
        console.log(i);
        console.log("total:", sum);
    }
}