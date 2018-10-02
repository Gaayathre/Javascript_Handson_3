// javascript program that will push zeroes last
var number = 21004,
    output = [],
    Number = number.toString(),count=0;

for (var i = 0, len = Number.length; i < len; i += 1)
 {
    //charAt(i) converts number datatype to character array and pushes in to output varable 
    output.push(+Number.charAt(i));
}
//ouput now  a character array
for(i=0;i<output.length;i++)
{
    //keep track of counting number of zeros in a given number 
    if(output[i]==0)
        count++;
    //prints non ero value
    else console.log(output[i])
}
while(count>0){
    //prints the zeros
    console.log(0)
    count--;}
