// change nav bar style on scroll
window.addEventListener('scroll',()=> {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})
//------------------------------------
//show hide questions


const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        const icon=faq.querySelector('.faq_icon i');
        if(icon.className=='uil uil-plus'){
            icon.className="uil uil-minus";
        }
        else{
            icon.className="uil uil-plus";
        }
    })
})
//----------------------------------------------

const menu=document.querySelector(".nav_menu");
const menuBtn=document.querySelector("#open-menu-bar");
const closeBtn=document.querySelector("#close-menu-bar");
menuBtn.addEventListener('click',()=>{
    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";
}
)
closeBtn.addEventListener('click',()=>{
    menu.style.display="none";
    menuBtn.style.display="inline-block";
    closeBtn.style.display="none";
}
)




