//javascript program that will find the sum of numbers in an array. 
var arr1=[10,2];
var arr2=[10,2]; 
//The array can have elements which are array
var arr=[arr1,arr2];
var sum=0;
var arrn=[];
for(i=0;i<arr.length;i++)
{
arrn=arr[i];
for(j=0;j<arrn.length;j++)
{
sum=sum+arrn[i];
}
}
console.log(sum);