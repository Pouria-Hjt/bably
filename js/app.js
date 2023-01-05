const $ = document
// ======== Parallax.js ===========
let parallaxScene = $.querySelector(".parallax")
    
var parallaxInstance = new Parallax(parallaxScene, {
   relativeInput: true
});
// ======== Typed.js ===========
const typedElem = $.querySelector(".typed")
new Typed(typedElem , {
    strings: [
        "طراح وب",
        "عکاس",
        "گرافیست",
        "فیلمبردار"
    ],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 500,
    showCursor: true,
    loop: true
})
// ======== main ===========

let categorys = $.querySelectorAll(".category")

categorys.forEach((category)=> {
    category.addEventListener("click", (event)=> {
        categorys.forEach((c)=> {
            c.classList.remove("category-active")
        })
        let targetCategory = event.target
        targetCategory.classList.toggle("category-active")
    })
})