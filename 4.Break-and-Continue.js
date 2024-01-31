// 18_7 When To Use A Break And Continue
// break
for(let i = 0; i < 50; i++){
    console.log(i);
    if(i > 5){
        break;
    }
}

let n = 54;
while(n > 25){
    console.log(n);
    if(n < 50){
        break;
    }
    n--;
}

// continue --> Skip rest of the code for this iteration
// break    --> I'm done with this loop, loop end.
for(let i = 1; i < 10; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(i);
}

let n = 0;
while(n < 50){
    n++;
    if(n % 5 !== 0){
        continue;
    }
    console.log(n);
}