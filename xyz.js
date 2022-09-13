let N=13;

for(i=1;i<=N;i++)
  {
    count=0;
    for(j=1;j<=i;j++)
      {
        if(i%j==0) 
           {
             count++;
           }  
      }
    if(count==2)
    {
     console.log(i,"Prime No.");
    }
    else
    {
      console.log("Not prime no.");
    }
  }