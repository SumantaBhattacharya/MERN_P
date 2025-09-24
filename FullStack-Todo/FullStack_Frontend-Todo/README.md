<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. 
-->

https://jsonformatter.org/

Spread 
---

Spread(...) - Expands an iterable into multiple values

This took me a lot of time to get this certificate i havce gone to ewvery lectures with skipping prioritising my integrity and following this course dadicately hope you guys like it :)

Rest - Allows a function to take a indefinite number of arguments and bundle them in an array

function sum(...args){ // arguments
     for(let i=0; i <args.length ; i++){
        console.log("you agve us: ", args[i])
     }
}

function min(){
    console.log(arguments); // arguments is a pre build. arguments is a collection.
}

function sum(){
    arguments.reduce((sum,elelement) =>{ // error because arguments is a collection not an array
        sum + el;
    })
}

function sum(...args){// rest coolect the elemebts in array
    return args.reduce((sum,el)=>{
        sum+el;
    })
}

function minimum(msg, ...args){

     console.log(msg)

    return args.reduce((min,el)=>{
        if(min > el)
        {
            return e;
        }else{
            return min
        }
    })
}

Destructuring
---

Storing values of array into multiple variables

let names = ["tony", "mike", "jack", "Rike"];
let [winner, runnerup, secondrunnerup, ...others] = names;
<!-- let losser = names[3]; -->
console.log(winner, runnerup);