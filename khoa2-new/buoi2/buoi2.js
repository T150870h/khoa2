// Includes
// let number = [1, 2, 3, 4, 5, 6];
// let res = number.includes(2)
// console.log(res)
// indexOf - lastIndexOf
  // lastIndexOf lấy từ cuối mảng lên
  // indexOf lấy giá trị từ đầu nảng xuống
//findIndex -  



// // asynchronous learning  : bất đồng bộ
//    function baz() {
//        console.log("Baz function")
//    }
//    function foo() {
//        console.log("foo function")
//    }
//    function () {}


   // blocking 
//    console.log('bắt đầu')
//      setTimeout(() => { 
//         console.log("học bài")
//      }, 2000)
//      console.log('đi ngủ')


//      let myPromise = new Promise((resole, reject) =>
//          {
//               if(conc === true) {
//                      reject('kh có nc')
//               }
              
//          }
//      );// bỏ qua các code để thực thì code sau

     // tetch data
    //  async function getData() {
    //     const reqrest = await fetch('https://reqres.in/api/users?page=2')
    //     //  .then((res) => res.json());
    //     const response = (await reqrest).json()
    //   return response.data;
    //  } catch (error) {
    //      console.log('loi')
    //  }
    //  const data = getData();


     // await 
     // promise.all() chay đồng thời tat ca cac bien

     // class
     // this đúng bên ngoài 1 phương thức , this luôn tham chiếu đén oj gloa
    // thisb thể hiện cho 1 đội tượng đc tạo trong oj
     // this bên trong 1 phương thức (method), this luôn tham chiếu đang truy cập vào pt đó 
    //  let person = {
    //      //Key: value
    //      firstName: 'Minh',
    //      lastName: 'Quang',
    //      // Method
    //      getName: function () {
    //           console.log(`${this.firstName} ${this.lastName}`);
    //      },
    //      child: {
    //          childName: 'Child Name',
    //          age: 20,

    //          chilMethod: function() {
    //              console.log(this)
    //          }
    //      }
    //  }
    //  console.log(person)

    //  function Car(name, color, weight) {
    //      this.name = name;
    //      this.color = color;
    //      this.weight = weight;
    //  }
    //  this.run = function() {
    //      console.log(this)
    //      const  test =  () => {
    //         console.log(test, this)           
    //      }
    //      test();
    //      // arow function lấy giá trị gần nhất
    //  }
    //  let ferrari = new Car('ferarri', 'red', 1300);
    //  ferrari.run();


//     const students = {
//         name: 'Student',
//         age: 13,
//         log: function () {
//             console.log(this)
//         }
//     }


// document.querySelector('button').addEventListener('click', students.log.bind(students))
//  constructor tự động chạy
// class Iphone {
//    constructor(name, color, weight) {
//          this.name= name;
//          this.color= color;
//          this.weight= weight;
//    }
//    takePhoto() {
//        console.log('takePhoto')
//    }
// }

// class Samsum extends Iphone {
//     constructor(name, color, weight, model) {
//          super(name, color, weight);
//          this.model= model;
//     }
// }

// const samsum1 = new Samsum('Note 10', 'black', 100, 'A' );
// console.log('samsum1', samsum1.takePhoto());



// const Iphone6= new Iphone('ip 6', 'gray', 600);
// console.log(Iphone6.color)
// console.log(Iphone6.weight)
// console.log(Object.getPrototypeOf(Iphone));











// // Includes   gán lại giá trị nếu thoả mãn (tìm giá trị) (có thể dùng cho str vs arr)
// // không thể update cho giá trị str
//            let number = [1, 2, 3, 2];
//            let str = 'hello wold '
//            let res = number.includes(2);
//            let res2 = str.includes('hello')
// console.log(res )
// console.log(res2)
// // IndexOf  tìm vị trí index đầu của .../ lastIndexOf tìm vị trí index cuối của ...
// // nếu kh  tìm ra vị trí giá trị trả về là -1
//            let index = number.indexOf(7)
//              console.log(index)
//            if(index === -1) {
//              console.log("làm ng iu nhé")
//             } else {
//                console.log("đéo")
//          }
//               let index2 =number.lastIndexOf(2);
//                 console.log(index2)
// // findIndex: tìm vị trí value trong một mảng oj
//             let persons = [{name: "a", age:1 }, {name: "b", age:2}]
//             let valOf = persons.findIndex((person) => person.name === 'a');
//             console.log(valOf)
// // find: tìm ví trí của 1 mảng và trả về oj và chỉ lấy giá trị đầu tiền
//              let var2 = persons.find((person) => person.name === 'a');
//              console.log(var2);
//some
//every
// concat       
//join



//  asynchronous programming
// stack dữ liệu nào chạy trước sẽ đc trả giá trị sau cùng
            //    function baz() {
            //        console.log('Baz function')
            //    }
            //    function foo() {
            //        baz();
            //        console.log('foo function');
            //    }
            //    function run() {
            //        foo();
            //    }
            //    run(); 
 // main -> foo -> baz -> console.log(baz) -> console.log(foo)

 // blocking
          //    setTimeout(() => {
           //        let input = prompt("điền");
            //        console.log(input);
            //    }, 1000);
            //    console.log("1")

            //   console.log('start');
            //  setTimeout(() => {
            //      console.log('học bài')
            //    }, 2000);
            //     console.log('đi ngủ')
   // satrt -> học bài -> đi ngủ( chạy sau 2 giây vì đã đc chuyển sang web IPA )


// promise (lời hứa)
// resolve đoạn hành động thực thi thành công
// reject  đoạn hành động thực hiện kh thành công
            // let co_nuoc = true;
            // let myPromise = new Promise((resolve, reject) => {
            //      if(co_nuoc === true) {
            //                resolve('có nước')
            //      } else {
            //                reject('kh có nước')
            //      }
            // });
        //     let myPromise = new Promise((resolve, reject) => {
        //                  reject('kh có nước')
        //                   resolve('có nước')
        //    });
            // console.log(promise)
            //pending: gía  trị lúc chưa chạy
            // fulfilled(resolve) trả về gái trị thành công
            //rejected giá trị thất bại thất bại
            // .then nhận 1 value của resolve
            // .catch nếu thất bại
                    //   myPromise.then((value) => {
                    //    console.log(value);
                    //     return 'nấu cơm';
                    //   }).then((val2) => {
                    //    console.log(val2);
                    //  }).catch((err) => {
                    //      console.log(err);
                    //  })
          // giá trị returm của then trước sẽ là giá trị của then tiếp theo
              // giá trị returm sẽ là giá trị của val2
                    //  console.log('quét nhà') // sẽ đc thực hiện trước kh phải đợi bỏ qua code bên trên

//fetch data
// json() khá giống oj 
            // function getUser(){
            //  return fetch('https://reqres.in/api/users?page=2').then((res) => {
            //     //   console.log(res);
            //      return res.json(); // chuyển sang dạng json()
            //   }).then((data) => {
            //       return data.data;
            //   })
            // }
            // getUser()
            // console.log(getUser())
          
            // dùng arrow function
            // function getUser() {
            //   return  fetch('https://reqres.in/api/users?page=2')
            //     .then((res) => res.json())
            //     // .then((data) => data.data)
            //     .then((data) => {
            //        let temp = data.data.map((user) => {
            //            const {id, firs_Name, last_Name, email ,avatar} = user;
            //            let person = {
            //                id,
            //                fullName: `${last_Name} ${firs_Name}`,
            //                email,
            //                avatar

            //            }
            //            console.log(person);
            //            return person;
            //        })
            //        console.log(temp);
            //        return temp;
            //     })
            //     .catch((err) => {
            //         alert('Error')
            //     })
            // }
          
            // getUser().then(user => {
            //     renderUser(user);
            // })
           
            // const rootEl = document.querySelector('#root')

            // function renderUser(users) {
            //       console.log(users);
            //       let userHtml = '';
            //      for (let user of users) {
            //          userHtml += `
            //            <div>
            //               <img src="${user.avatar}" />
            //               <h2>${user.fullName}</h2>
            //               <p>${user.email}</p> </p>
            //            </div>
            //          `
            //      }
            //      rootEl.innerHTML = userHtml;
            // }
          


// asynd await
            
            // async function getData() {
            //      return 1;
            // } 
            // const data = getData();
            // console.log(data);// luôn tạo ra 1 promise
            // data.then(val => {
            //     console.log(val);
            // })
        //    async function getData() {
        //       try{ const reqrest = await fetch('https://reqres.in/api/users?page=2');
        //        const response = await reqrest.json()
        //        console.log(response);
        //        return response.data;
        //     } catch(error) {
        //        console.log(error);
        //        // kh nên dùng return cho hàm cach
        //     }
        //    };
        // //    getData().then(users => {
        // //        console.log(users)
        // //    })
        // async function main() {
        //     const users = await getData()
        //     console.log(users)
        // }
        // main()
           // try thực hiện các công việc thành công 
           // catch báo lỗi nếu cv lỗi

// class
// this đề cập đối tượng đang thuộc về
       // this đứng bên ngoài 1 phương thức, this luôn tam chiếu đến object global
        //   console.log(this)
        //       function main() {
        //           console.log(this)
        //           // nếu dùng console.log('mail', this) sẽ trả giá trị là undifil
        //       }
        //       main();
//this bên trong 1 phương thức method, thì this luôn tham chiếu dến đối tượng đang truy cập
        
            //   let person = {
            //          firstName: 'Minh',
            //        lastName: 'quang',
            //         //method
            //           getName: function () {
            //         console.log(this)
            //         // this là person
            //     },
            //     child: {
            //         childName: 'child',
            //         age: 2,
            //         childMethod: function () {
            //             console.log(this)
            //             // this sẽ chạy phương thức child
            //         }

            //     }
            //    }
            //  console.log(person.getName());
            //  person.child.childMethod 

           
           
// this mà nằm bên trong 1 hàm tạo, nó đại diện cho đối tượng đc tạo
          //   function Car(name, color, weight) {
          //     this.name = name;
          //     this.color = color;
          //     this.weight = weight;
          //     this.run = function() {
          //         console.log(this)
          //         // function test() {
          //         //   console.log(this)
          //         // } // this này sẽ trỏ vào một global
          //         // test();
          //         const test = () => {
          //           console.log(this)
          //         } // khi dùng arrow function this sẽ trỏ vào this contrac gần nhất (this gần nhất)
          //       test();
          //     }
          //   }
          //   let ferarri = new Car('ferarri', 'red', 1300  );
          //    ferarri.run();
          //       let audi = new Car('audi', 'green', 1200 );
          //       audi.run();

          //  console.log(ferarri);
          //  console.log(audi);
          //  console.log(ferarri.weight);
                
           
           
           
           
           
           
           
           
           
           // const student = {
                //    name: 'Student',
                //    age: 13,
                //    log: function () {
                //      console.log(this.name)
                //    },
                
                // }
                // let person2 = {
                //   name: 'Mindx'
                // }
                // // student.log();// gọi đến student
                // // let logStudent = student.log.bind(student);//bind dùng để ràng buộc để để logstudent trỏ về student
                // // console.log(logStudent === student.log);
                // // logStudent(); // gọi lại 1 oj khác trỏ đến global (gọi window)
                //  document.querySelector('button').addEventListener('click', student.log.bind(person2))
                         // bind ràng buộc this vào name
                // document.querySelector('button').addEventListener('click', () => {
                //   student.log()
                // })
                 
        
             

                //  function a() {

                //  }

               //   class Iphone {
               //         constructor(name, color, weight) {
               //            this.name = name;
               //            this.color = color;
               //            this.weight = weight;
               //         }
               //         takePhoto() {
               //           console.log('take a photo');
               //         }
               //   }
               //       // tính kế thừa
               //       class Samsung extends Iphone {
               //          constructor(name, color, weight, model) {
               //               super(name, color, weight) // từ khoá super dùng để lấy dữ liệu từ Iphone (lấy dữ liệu từ cha nó)
               //               this.model = model
               //          }
               //          takePhoto() {
               //            console.log('hdjhjkf')
               //          }
               //       }
               //       const xiaomi = new Iphone('note 10', 'green', 500)
               //       const samsum1 = new Samsung('samsung7', 'red', 400, 'a')
               //       console.log(samsum1.takePhoto())
               //       console.log(xiaomi)
                     
                //  const Iphone6 = new Iphone('ip6', 'red', 600);
                //  console.log(Iphone6.name)
                //  Iphone6.takePhoto()
                //  console.log(Object.getPrototypeOf(a))
                //  console.log(Object.getPrototypeOf(Iphone))

              class  Clock {
                 _intervalID;// trong class nó trả vè giá trị undifine
                  constructor(timer) {
                      this._timer = timer;
                      this.$clockContainer = document.createElement('div');
                      this.$timer = document.createElement('h2');
                      this.$timer.innerText = this._timer;
                      
                      this.$startBtn = document.createElement('button');
                      this.$startBtn.innerText = 'Start';
                      this.$startBtn.addEventListener('click', this.start)

                      this.$pauseBtn = document.createElement('button');
                      this.$pauseBtn.innerText = 'Pause';
                      this.$pauseBtn.addEventListener('click', this.pause)

                      this.$stopBtn = document.createElement('button');
                      this.$stopBtn.innerText = 'Stop';
                      this.$stopBtn.addEventListener('click', this.stop)

                  }
                 start = () => {
                  //   setInterval Phương setInterval()thức này gọi một hàm trong các khoảng thời gian xác định (tính bằng mili giây).
                     this._intervalID = setInterval(() => {
                           this._timer += 1;
                           this.$timer.innerText = this._timer;

                        }, 1000)
                 }

                 pause = () => {
                        //   console.log(this._intervalID)
                        if (this._intervalID !== undefined) {
                             clearInterval(this._intervalID);
                        }
                 }

                 stop = () => {
                  if (this._intervalID !== undefined) {
                     clearInterval(this._intervalID);
                     this._timer = 0;
                     this.$timer.innerText = 0;
                }
                 }


                  render() {
                     this.$clockContainer.appendChild(this.$timer);
                     this.$clockContainer.appendChild(this.$startBtn);
                     this.$clockContainer.appendChild(this.$pauseBtn);
                     this.$clockContainer.appendChild(this.$stopBtn);
                  return this.$clockContainer
                    
                  }
         }
         const rootElm = document.querySelector('#root');
         const _1stClock = new Clock(0);
         // const _2ndClock = new Clock(5);
         //  _1stClock.render();


           rootElm.appendChild( _1stClock.render())
         //   console.log(_1stClock._intervalID)


         //   rootElm.appendChild( _2ndClock.render())

   // for (let i = 0; i <= 5; i++) {
   //    const clock = new Clock(i);
   //      rootElm.appendChild(clock.render())
   // }
       for (let i = 0; i < 10; i++) {
          const myClock = new Clock(i);
          rootElm.appendChild(myClock.render())
       }
            