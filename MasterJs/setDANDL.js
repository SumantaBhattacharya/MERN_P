export function setDANDL() {
     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
         // document.querySelector("body").classList.add("dark")
         document.body.classList.add("dark")
         document.body.classList.remove("light")
     } else {
         document.body.classList.remove("dark");
         document.body.classList.add("light");
     }
}