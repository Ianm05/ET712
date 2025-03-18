console.log("student's full name")
// example 1
// collect the element
let btnscrollby = document.querySelector(".btnscrollby")
btnscrollb.addEventListener("Click", function (){
    window.scrollBy(100,0)
})

/**
 * 
 */ 
// collect the elements
letbtnright = document.querySelector(".btnright")
letbtnleft = document.querySelector(".btnleft")

// function to scroll the gallery container
function scrollgallery(pexels){
    let gallerycontainer = document.querySelector(".gallerycontainer")
    gallerycontainer.scrollBy({
        left:pexels,
        behavior:"smooth"
    })
}
// add a click event to each buttons
btnright.addEventListener("click", function(){
    scrollgallery(600)
    })
    btnleft.addEventListener("click", function(){
        scrollgallery(-600)
    })

    /**
     * example 3
     */
    let topcontainer = document.querySelector(".topcontainer")

    window.addEventListener("scroll", function(){
        let pxTop = this.window.screenY
        if(pxTop>100){
            topcontainer.style.display = "block"
        }
        else{
            topcontainer.style.display = "none"
        }
    
 })