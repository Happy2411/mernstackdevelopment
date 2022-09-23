let num=10;
while(num<20){
    console.log(num);
    num++;
}
let b=5;
do{
    b++;
    console.log(b);
}while(b<10);
for(let i=1;i<1000;i++)
{
    let r=i**0.5;
    if(r==parseInt(r)){
        console.log(i);
    }
}
let c=3456;
let rev=0;
while(c>0){
    let r=c%10;
    rev=rev*10+ r;
    c=parseInt(c/10);
}
console.log(rev);