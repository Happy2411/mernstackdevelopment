sum=0;
for(i=1;i<=1000;i++)
{   a=i;
    i=i%10;
    sum=sum + i;
    i=i/10;
    if(a==i){
        console.log(a)
    }

}