



// class Post {
//     constructor() {
//         this.$postContainer = document.createElement('div');
//         this.$postContainer.setAttribute('class', 'post-item col-md-4');

//         this.$postImage = document.createElement('img');
//         this.$postImage.src = 
//        'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg'
//         this.$postImage.setAttribute('class', 'post-image');

//         this.$authour = document.createElement('h3');
//         this.$authour.innerText = 'Gaohong';

//         this.$postTitle = document.createElement('a');
//         this.$postTitle.innerText = 'Chia sẻ mấy bức hình đón Tết ở quê của mình'
//         this.$postTitle.href = '#';


//     }

//     render() {
//         this.$postContainer.appendChild(this.$postImage);
//         this.$postContainer.appendChild(this.$authour);
//         this.$postContainer.appendChild(this.$postTitle);

//         return this.$postContainer;
//     }
// }   
//           const appEl = document.querySelector('#app');

         
//      const post = new Post();
//      const post_2 = new Post();
//       appEl.appendChild(post.render())
//       appEl.appendChild(post_2.render())
    //  console.log(post.render());






    // class Post {
    //     constructor(Image, authour, title) {
    //         this.$postContainer = document.createElement('div');
    //         this.$postContainer.setAttribute('class', 'post-item col-md-4');
    
    //         this.$postImage = document.createElement('img');
    //         this.$postImage.src = Image;
    //         this.$postImage.setAttribute('class', 'post-image');
    
    //         this.$authour = document.createElement('h3');
    //         this.$authour.innerText = authour;
    
    //         this.$postTitle = document.createElement('a');
    //         this.$postTitle.innerText = title;
    //         this.$postTitle.href = '#';
    
    
    //     }
    
    //     render() {
    //         this.$postContainer.appendChild(this.$postImage);
    //         this.$postContainer.appendChild(this.$authour);
    //         this.$postContainer.appendChild(this.$postTitle);
    
    //         return this.$postContainer;
    //     }
    // }   
    //           const appEl = document.querySelector('#app');
    
             
        //  const post = new Post(
        //      'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg',
        //      'hung',
        //      'sahkhdsgfdhudufy'
        //  );
        //  const post_2 = new Post(
        //     'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg',
        //     'hung',
        //     'sahkhdsgfdhudufy'
        //  );
        //   appEl.appendChild(post.render())
        //   appEl.appendChild(post_2.render())
           


  // cách 2





    //     const mocData = [
    //         {
    //             image:'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg',
    //             authour:'hung',
    //             title:'vghxgfhxgfvhgxfvgxh'
            
    //     },
    //     {
    //         image:'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg',
    //         authour:'hung',
    //         title:'vghxgfhxgfv'
    //     },
    //     {
    //         image:'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg',
    //         authour:'hung',
    //         title:'vghxgfhxgfv'
    //     }
    // ];
    // mocData.forEach((postData) => {
    //        const post = new Post(postData.image, postData.authour, postData.title);
    //        appEl.appendChild(post.render());
    // })
        








    // class Annimal {
    //     constructor (name, age, weight) {
    //         this.name = name;
    //         this.age = age;
    //         this.weight = weight;
    //     }
    //     getname() {
    //          return `${this.name} is ${this.age} and ${this.weight} kg`
            
    //     }
    // }


    //  const dog = new Annimal('huky', 2, 10)
    //  const cat = new Annimal('tom', 2, 2)
    //    console.log(dog.getname())
    //    console.log(cat.getname())

// const appEl = document.getElementById('app');
    
//  class User {
//      constructor(objUser) {
//        this.$UserContainer =  document.createElement('div');
//        this.$UserContainer.setAttribute('class', 'user-item ');

//          this.$userAvatar = document.createElement('img');
//          this.$userAvatar.src = objUser.avatar;

//             this.$userName = document.createElement('h3');
//             this.$userName.innerText = `${objUser.first_Name} ${objUser.last_Name}`;

//             this.$userEmail = document.createElement('h5');
//             this.$userEmail.innerText = objUser.email;
//      }
//       render() {
//             this.$UserContainer.appendChild(this.$userAvatar);
//             this.$UserContainer.appendChild(this.$userName);
//             this.$UserContainer.appendChild(this.$userEmail);
//                   console.log(this.$UserContainer)
//             return this.$UserContainer;
          
//       }
     
//  }
//  const mocUser = {
//     "id":7,"email":"michael.lawson@reqres.in",
//     "first_name":"Michael","last_name":"Lawson",
//     "avatar":"https://reqres.in/img/faces/7-image.jpg",
//  }
//  const user = new User(mocUser);
//     appEl.appendChild(user.render());


//    async function getUser() {
//         const reqrest = await fetch('https://reqres.in/api/users?page=2');
//         const data = await reqrest.json();
    
//         data.data.forEach(user => {
//             const users = new User(user);
//     appEl.appendChild(users.render());
//         })
// }
// getUser();
 


import {sum} from './helper.js';

const user = sum(1, 2)
 console.log(user)