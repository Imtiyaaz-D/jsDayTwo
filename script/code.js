let arry= ['Python' , 'C++' , 'VB.Net' ,'Javascript' ,'Assembly','c#']
// let lastElement = arry.pop();
// console.log(lastElement);
console.log(arry.at(-1))

// let middleElement = arry.pop()
// console.log(middleElement);

// let middleEle = arry[Math.round((arry.length - 1) / 2)]
// console.log(middleEle);
//5/2=2.5
// let x = math.floor(arry.length/2)
// console.log(arry[x])

let x = Math.floor(arry.length/2)
if(x % 2 == 0){
    console.log(arry[x])
}else{
    console.log(arry.slice(x-1,x=1))
}