// bài 1
const users = [{
    firstName: 'Susan',
    lastName: 'Steward',},
    {
        firstName: 'Daniel',
        lastName: 'Longbottom',
    },
    {
        firstName: 'Jacob',
        lastName: 'Black'
    }]
;
     let newUsers = users.map(function(user) {
          return user.firstName + ' ' + user.lastName
     })
    console.log(newUsers)
   // BÀI 2
  const creatures = [ {name: "Shark", habitat: "Ocean"},
                    {name: "Whale", habitat: "Ocean"},
                    {name: "Lion", habitat: "Savanna"},
                    {name: "Monkey", habitat: "Jungle"} ];

                   var newarr = creatures.filter(function(creature) {
                         return creature.habitat === 'Ocean'
                   }) 
 console.log(newarr);




                   // BÀI 3
            const numbers = [1, 3, 6, 8, 11];
          let number = numbers.filter(function(number) {
                 return number > 7;
            
            })     

            console.log(number)
        