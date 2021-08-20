
const ps=require('prompt-sync')
const prompt=ps()

function myCalculator()
{
  
    let num1=parseFloat(prompt('enter 1st number : '))      
    let num2=parseFloat(prompt('enter 2nd number : '))
    let op=prompt('enter operator : ')

    let ans=0
   
    if(op=='+')
    {
        return ans=num1+num2
    }
    if(op==='-')
    {
        return ans=num1-num2
    }
    if(op==='*')
    {
        return ans=num1*num2
    }
    if(op==='/')
    {
        return ans=num1/num2
    }
    if(op==='%')
    {
        return ans=num1%num2
    }
    else
    {
        return console.log('invalid input')
    }
}
myCalculator()
