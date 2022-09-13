
let str="VIV";
count=0;  
for(let i=0;i<=str.length-1;i++)
  {
    for(let j=str.length-1-i; j>=str.length-1-i; j--)
      {
        if(str[i]==str[j])
           {
          count++;
            
           }
        
      }
  }
if(count==str.length)
{
  console.log("Palindrome");
}
else
{
  console.log("Not Palindrome");
}