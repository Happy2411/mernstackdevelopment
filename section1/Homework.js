number=124;
temp=number;
let rem;
let final=0;
while(number>0){
    rem = number%10;
					number = parseInt(number/10);
					final = final*10+rem;
}
if(temp==final){
    console.log("palidrome");
}
else{
    console.log("not palidrome");
}


// to find prime numbers
for(let i=100;i<=1000;i++){
    let isprime=true;
    for(let j=2;j<i;j++){
        if(i%j==0){
            isprime=false;
            break;
        }
    }
        if(isprime){
            console.log(i);  
    }
}