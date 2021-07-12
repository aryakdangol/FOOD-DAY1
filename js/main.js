
//to make the navbar 
let nav = document.querySelector(".nav-wrap");
window.onscroll = function()
{
    if (document.documentElement.scrollTop > 20)
    {
        nav.classList.add("scroll-on");
    }
    else
    {
        nav.classList.remove("scroll-on");
    }
}

//to make navbar close after clicking something under hamburger icon
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){ 
    a.addEventListener("click" , function(){
        navCollapse.classList.remove("show");
    });
})

//counter design
document.addEventListener("DOMContentLoaded", ()=>{
    function counter(id,start,end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range));
        console.log("HELLO");
        const timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            console.log(current);
            if(current == end)
            {
                clearInterval(timer);
                console.log("clear");
            }
        }, step);

    };
    counter("count1", 0, 1500, 1000);
    counter("count2", 0, 2000, 1000);
    
});