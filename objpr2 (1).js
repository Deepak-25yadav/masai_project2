let arr1=["rohan","rohit","ajay","vijay","ajit"];

let arr2=['pankaj','kishan','mohit','Dhiraj','Avinash'];

let obj={};

obj["name"]="arun";
obj["age"]=22,
  obj['contact']=9140444444
obj['hobbies']=['ram','shyam','amit','vikash']
//obj['group1']=arr1,
obj['name']='arunita';
obj['state']="Madhya Pradesh";


//obj['group']=arr2[0];
//obj[arr2[3]]=2;
//obj[arr2[2]]=10;
for(i=0;i<arr1.length;i++)
  {
  obj[arr1[i]]=arr2[i]
  }
  
console.log(obj['ajit']);
