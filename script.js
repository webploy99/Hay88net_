// Show and hide menu
    function OpenNav(){
    document.getElementById("Nav").style.width = "100%";
    }
    function CloseNav(){
    document.getElementById("Nav").style.width = "0%";
    }

    // url

    function url() {
        location.href="https://www.hay8833.com/?inviteCode=3128320";
    }

    // ========================================================================================
    // Get the button
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }