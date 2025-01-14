let switchNav = true;
    let hamburger = document.getElementById("NavOpen");
    let hamburgerClose = document.getElementById("NavClose");
    let NavHead = document.getElementById("NavHead");
    let HeadSearchBar = document.getElementById("HeadSearchBar");

    function navShow() {
        if(switchNav) {
            hamburger.style = "display: none;";
            hamburgerClose.style = "display: block;";
            NavHead.style = "display: block;";
            
            switchNav = false;
        }else {
            hamburger.style = "display: block;";
            hamburgerClose.style = "display: none;";
            NavHead.style = "display: none;";
            switchNav = true;
        }
    } 

    function SearchChangeText(){
        if(HeadSearchBar.value.length > 0){
            HeadSearchBar.style.width = "200px";
        }else{
            HeadSearchBar.style.width = "100px";
        }
    }

    function initMarqueeImages() {
        const marqueeContainer = document.querySelector('.inner-Slide');
        const images = marqueeContainer.querySelectorAll('.img-Slide');
        images.forEach(image => {
            const clone = image.cloneNode(true);
            marqueeContainer.appendChild(clone);
        });
    }

    document.addEventListener('DOMContentLoaded', initMarqueeImages);
