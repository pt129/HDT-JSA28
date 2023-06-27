// let i=1;
// while(i<=10){
//     if( i % 2 == 0 ){
//         console.log(i);
//     }
    
//     i = i + 1
  
// }



// let i=1;
// do{
//     console.log(i);
//     i=i+1;
// }

// while(i<=10);


// for(let i=1; i < 10;  i = i + 1){
//     if(i%2 != 0 ){
//         console.log(i);
//     }
   
//   }


// // C1:
//   let arr = []; // KDL là Array

//C2:
// let arr1 = new Array();


// console.log(typeof arr);
// console.log(
//     Array.isArray(1)
// );

let arr = [123, 'Hello' , true ];

console.log(
    arr.length
);

arr.push("hi",0);
console.log(arr);

for(let i=0;i < arr.length; i= i+1 ){
    console.log(
        arr[i]
    );
}

arr[1]="hola";
console.log(
    arr[1]
);

arr.splice(0,1);
console.log(arr);



