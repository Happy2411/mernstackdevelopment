// Function declration- using function keyword
function addnums(a,b){
    console.log(a,b);
    var c=a+b;
    console.log(c);
}
// calling function
addnums(10);
// function declration using keyword expresions and assignment operator
const checkprime= function(p){
    let prime=true;
    for(let i=2;i<=p/2;i++){
        if(p%i==0){
            console.log("not prime");
            prime=false;
            break;
        }
    }
if(prime){
    console.log("prime");
}
}


// function declration using arrow function
const sumprod=(x,y) => {
    let s=x+y;
    let p=x*y;
    // returning multiple array
    return [s,p];
}
 const [sum, prod]=sumprod(34,45);
 console.log(sum,prod);

