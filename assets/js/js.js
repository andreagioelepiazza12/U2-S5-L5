window.addEventListener("scroll", function(){
    const scrollPosition = window.scrollY;
    const triggerHeight = 100;

    const navbar = document.querySelector("nav");
    const btnContainer = document.getElementsByClassName("navBtnContainerFull")
    const btn = document.getElementsByClassName("navBtnFull")

    if(scrollPosition > triggerHeight){
        navbar.classList.add("navbarContainerScrolled")
        btnContainer.classList.add("navBtnContainerFullScrolled")
        btn.classList.add("navBtnFullScrolled")
    } else {
        navbar.classList.remove("navbarContainerScrolled")
        btnContainer.classList.remove("navBtnContainerFullScrolled")
        btn.classList.remove("navBtnFullScrolled")
    }
})