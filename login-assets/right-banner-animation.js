var i = 0;
function closeBanner() {
    if (i==0){
        document.getElementById("main-frame").style.animation = "main-expand 0.5s 1";
        document.getElementById("right-banner").style.animation = "banner-slide-out 0.5s 1";
        document.getElementById("close-right-banner").style.backgroundImage = "url('login-assets/expand.png')";
        setTimeout(function () {
            document.getElementById("right-banner").style.display = "none";
            document.getElementById("main-frame").style.width = "100%";
            i=1;
        }, 450);
        
    } else {
        document.getElementById("right-banner").style.display = "block";
        document.getElementById("main-frame").style.animation = "main-expand-2 0.5s 1";
        document.getElementById("right-banner").style.animation = "banner-slide-out-2 0.5s 1";
        document.getElementById("close-right-banner").style.backgroundImage = "url('login-assets/image.png')";
        setTimeout(function () {
            document.getElementById("main-frame").style.width = "70%";
            i=0;
        }, 450);
    }
}