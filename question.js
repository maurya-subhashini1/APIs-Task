// let arr = [34,22,56,2,78,22,88,11]

// arr.sort()
// arr.reverse()
// console.log(arr);

// for(i=0; i <arr.length;i++){
//     for(j=0; j<i ;j++){
//         if(arr[i] > arr[j]){
//             var x=arr[i]
//             arr[i]=arr[j]
//             arr[j]=x
//         }
//     }
// }
// console.log(arr);

// console.log(arr.sort((a,b) => b-a));

// console.log(arr.reverse());

// for (var i = 0; i < 3; i++) {
//     (function(i){
//         setTimeout(function(){
//             console.log(i);
//         },1000*i);
        
//     })(i)
//   }

  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), i*1000);
  }