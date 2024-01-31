// 18_4 Introduction To For Loop
for(let i = 0; i < 10; i++){
    console.log(i);
}

for(let i = 1; i < 10; i++){
    console.log(i);
}

for(let i = 2; i < 10; i++){
    console.log(i)
}

for(let i = 5; i < 10; i++){
    console.log(i)
}

for(let i = 9; i > 0; i--){
    console.log(i);
}

// ========== even number ==========
for(let i = 0; i < 20; i=i+2){
    console.log(i);
}
// ========== odd number ===========
for(let i = 1; i < 20; i=i+2){
    console.log(i);
}


// 18_5 Problem Solving With For Loop
// ============ sum number ==========
let sum = 0;
for(let i = 11; i <= 20; i++){
    sum = sum + i;
    console.log(sum);
}

let sum = 0;
for(let i = 1; i <= 5; i++){
    sum = sum + i;
    console.log(sum);
}

let sum = 0;
for(let i = 11; i <= 20; i++){
    sum = sum + i;
    console.log(i);
}
console.log("Total:",sum);

let sum = 0;
for(let i = 1; i <= 5; i++){
    sum = sum + i;
    console.log(i);
}
console.log("Total:", sum);
