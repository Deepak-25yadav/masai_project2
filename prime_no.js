let N=17;

for(i=1;i<=N;i++)
  {
    count=0;
    for(j=1;j<=i;j++)
      {
        if(i%j==1) 
           {
             count++;
           }  
      }
    if(count==5)
    {
     console.log(i,"Not Prime No.");
    }
    else
    {
      console.log(" prime no.");
    }
  }