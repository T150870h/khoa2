// 1:default params
// regular function + arrow function
//
// rest
// function sum(a = 0, b = 0, ...rest) {
//     let result = 0;
//     for (let i = 0; i < rest.length; i++) {
//         result += rest[i];
//     }
//     return result;
// }
// console.log(sum(1, 2,4,5,6))
// sum();
             // template liteals
//  let str1 = 'hello';
//  let str2 = 'world';
//  let res = `${str1} 123 ${str2}`;
//  console.log(res);


//              //destructuring
//  let person = {
//      fullName: 'John',
//      age: 34,
//      language: ['js', 'ruby', 'python', 'c++'],
//      test: {
//          job:'SE',
//          github: 'hung'
//      }
//  };
//     // dung oj
//  const { fullName: getname, age, language} = person;
//    console.log(getname)
//  //c1
//  const {job, github} = person.test
//  //c2
//  const {
//      job, github
//  } = person
 
//  console.log({
//      fullName,
//      age,
//      language,
//  })

//   let name = person.fullName
//   let age = person.age
//   let language = person.language
//   console.log('name',name);
//   console.log('age',age);
//   console.log( 'language',language);
 

// const number = [1, 2, 3, 4, 5];
//     const [, ,_3] = number;
//     console.log({
//         _3,
//     });


        //Spread syntax (....)
  let a = {
      name: 'b',
      age: 1,
  } 
  
    //c1 sao chep value
//   const b = Object.assign({}, a)
//   b.name = 'B';
//   console.log()
     // c2 
//   const b2 = {
//        ...a,
//   }
//   console.log('A', a)
//   console.log('B', b2)


//   let ar = [1, 2, 3];
//      const ar2 = [ 2, ...ar, 6];
//      console.log( 'ar',ar)
//      console.log( 'ar2' ,ar2)
  


         // arow function
    //    function hello() {
    //     console.log( 'helo wold')
    //    }
    //    const hello_2 = () => { console.log('hello wold 2')}

    //    hello();


    //    const sum = (a, b) => { 
    //        return a + b;
    //    }
    //    const res = sum(1, 2);
    //    console.log(sum)




               // callback function
    // function sum(numbers = []) {

    // }






            // array method
            const numbers = [1, 6, 2, 9, 8, 4, 7];

            function evenNumber(arr = []) {
                // numbers++;
                // // let res = [];
                // // for (let i = 0; i < arr.length; i++) {
                // //     if (arr[i] %2 === 0) {
                // //         res.push(arr[i]);       
                // //     }
                // // }
                // for (let number of arr){
                //     let res = [];
                // for (let i = 0; i < arr.length; i++) {
                //     if (arr[i] %2 === 0) {
                //         res.push(arr[i]);       
                //     }
                // }
                // }
                //    arr.filter((numbers) => { 
                //        if(numbers % 2 === 0) {
                //            return true;
                //        }
                //        return false;
                //    })
                return arr.filter((numbers) => numbers % 2 == 0);
            }
            const isEven = (numbers) => numbers % 2 === 0;
        
            evenNumber(numbers); // 6, 2,8,4

                // filter
               