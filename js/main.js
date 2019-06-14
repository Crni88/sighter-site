var ham = document.getElementById("ham-trigger");

ham.onclick = function() {
        var navigacija = document.getElementById("menu");
        navigacija.classList.toggle("open");
        ham.classList.toggle('fa-times');
        ham.classList.toggle('fa-bars');
        var navbar = document.getElementById("navbar");
        navbar.classList.toggle("black");
    }

