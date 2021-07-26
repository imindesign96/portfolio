// About Tabs

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

/* ----------------- Toggle Navbar -----------------*/
const navToggleer = document.querySelector(".nav-toggler");
navToggleer.addEventListener("click", () =>{
    hideSection();    
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
})

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

/* --------------- ACTIVE SECTION ------------------- */
document.addEventListener("click", (e) => {
    navToggleer.classList.add("hide"); 
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        const hash = e.target.hash;
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggleer.classList.remove("hide"); 

        },500)
    }
})

tabsContainer.addEventListener("click",(e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

// Portfolio Item Details Popup

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement )
    }
})

function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling"); 
    document.querySelector(".main").classList.toggle("fade-out");
}

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
})
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src = 
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
    document.querySelector(".pp-header h3").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}


