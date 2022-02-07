export function sum(a, b) {
    return a + b;
}

export const Pi = Math.PI;



// import {sum} from './helper.js';
//      const a = sum(1, 2);

//      console.log(a);


//      import{ Pi} from './helper.js';
//            const b = Pi;
//            console.log(b)



    class Helper {
        static sum(a, b) {
            return a + b;
        }
    
        static Pi = Math.PI;
}
   export default Helper;

// import Pi from './helper.js';