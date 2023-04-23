// Start Variable
let theHeader = document.querySelector("header");
let btnToggle = document.querySelector(".bars");
let headerLinks = document.querySelector(".links");
let btnLearnMore = document.querySelector(".landing-page .info button");
let lastParagraphHeader = document.querySelector(".landing-page .info .p-hidden");

// Start Variable Skills
let skills = document.querySelector(".skills");
let scrolling = document.querySelectorAll(".skills .progress .progress-bar span");
// End Variable Skills

// Start Variable Gallery
let btn = document.querySelector(".gallery .btn");
let imgs = document.querySelectorAll(".gallery .imgs img");
let links = document.querySelectorAll(".gallery .links li");
// End Variable Gallery

// Start Variable Statistics
let stats = document.querySelector(".statistics");
let nums = document.querySelectorAll(".statistics .box .number");
// End Variable Statistics
// Variable Scrolling
let scrollArrow = document.querySelector(".scrolling");

// Start Variable Contact
let errorMsg = document.querySelector(".error-msg");
let userName = document.querySelector("[name='username']");
let password = document.querySelector("[name='pass']");
let userEmail = document.querySelector("[name='useremail']");
let phoneNumber = document.querySelector("[name='phoneNumber']");
let btnSent = document.querySelector('[value="Contact Us"]');
let text;
// End Variable Contact
// End Variable

// When Window Scroll Affect Header
window.addEventListener("scroll", function () {
    if (window.scrollY >= innerHeight) {
        if (theHeader.classList.contains("header-background")) {

        } else {
            theHeader.classList.add("header-background");
        }
    } else {
        theHeader.classList.remove("header-background");
    }
})

// Event Click On Toggle btn
btnToggle.addEventListener("click", function () {
    btnToggle.classList.toggle("toggle");
})

// Event Click On btnLearnMore 
btnLearnMore.addEventListener("click", function () {
    if (btnLearnMore.innerHTML === "Learn More") {

        lastParagraphHeader.style.display = "block";
        btnLearnMore.innerHTML = "Learn Less";
    } else {
        lastParagraphHeader.style.display = "none";
        btnLearnMore.innerHTML = "Learn More";
    }

})

// When Window Scrolling To offsetTop Section Skills
window.addEventListener("scroll", function () {
    if (this.window.scrollY >= skills.offsetTop - 100) {
        scrolling.forEach(span => {
            span.style.width = span.dataset.target;
        })
    }
})

// Event When Click On The btn (Gallery)
btn.addEventListener("click", function () {

    if (btn.innerHTML === "Show More") {

        btn.innerHTML = "Show Less";
        imgs.forEach(img => {
            if (img.classList.contains("hidden")) {
                img.style.display = "block"
            }
        })

    } else {

        btn.innerHTML = "Show More";
        imgs.forEach(img => {
            if (img.classList.contains("hidden")) {
                img.style.display = "none"
            }
        })
    }
})

links.forEach(li => {
    li.addEventListener("click", function () {
        // Remove btn IF dataset cat != app
        if (this.dataset.cat !== ".all") {
            btn.style.display = "none";
        } else {
            btn.style.display = "block";
            btn.innerHTML = "Show Less";
        }
        // Remove Class Active For All Links
        links.forEach(li => {
            li.classList.remove("active");
        })
        // Add Class Active On Current Element
        this.classList.add("active");
        // Hidden All Images In Gallery
        imgs.forEach(img => {
            img.style.display = "none";
        })
        document.querySelectorAll(this.dataset.cat).forEach(img => {
            img.style.display = "block"
        })
    })
})

imgs.forEach(img => {
    img.addEventListener("click", function () {
        // Create Overlay
        let overlay = document.createElement("div");
        overlay.className = "overlay";
        document.body.appendChild(overlay);

        // Create popup-box
        let popupBox = document.createElement("div");
        popupBox.className = "popup-box";

        // Create Heading In Img And Append In PopupBox
        let imgHeading = document.createElement("h3");
        let imgHeadingText = document.createTextNode(img.alt);
        imgHeading.appendChild(imgHeadingText);
        popupBox.appendChild(imgHeading);

        // Create P Under the Heading
        let imgParagraph = document.createElement("p");
        let imgParagraphText = document.createTextNode("My Work Is Very Beautiful And Simple");
        imgParagraph.appendChild(imgParagraphText)
        popupBox.appendChild(imgParagraph);

        // Create popup-Img
        let popupImg = document.createElement("img");
        popupImg.src = img.src;

        popupBox.appendChild(popupImg);
        document.body.appendChild(popupBox);

        // Creat Close btn
        let closeButton = document.createElement("span");
        let closeButtonText = document.createTextNode("x");
        closeButton.appendChild(closeButtonText);
        closeButton.className = "close-btn";
        popupBox.appendChild(closeButton);

    })
})

document.addEventListener("click", function (e) {
    if (e.target.classList == "close-btn") {
        // Remove popupBox
        document.querySelector(".popup-box").remove();

        // Remove Overlay
        document.querySelector(".overlay").remove();
    }
})

// Window Scrolling On (Statistics  Section)
window.addEventListener("scroll", function () {
    if (this.window.scrollY > stats.offsetTop - 150) {
        nums.forEach(num => {
            num.innerHTML = num.dataset.target;
        });
    };
});

// Scrolling Arrow
window.addEventListener("scroll", function () {
    if (this.window.scrollY >= 500) {
        scrollArrow.style.display = "block";
    } else {
        scrollArrow.style.display = "none";
    }
});

scrollArrow.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})

// Start Programming Contact
btnSent.addEventListener("click", function (e) {

    errorMsg.style.padding = "10px";

    if (userName.value.length == 0) {
        e.preventDefault();
        text = "Plz Enter Name";
        errorMsg.innerHTML = text;
    } else if (userName.value.length < 10) {
        e.preventDefault();
        text = "Plz Enter Name Grater Than 10 Chars";
        errorMsg.innerHTML = text;
    } else if (password.value.length == 0) {
        e.preventDefault();
        text = "Plz Enter  Password";
        errorMsg.innerHTML = text;
    } else if (password.value.length < 10) {
        e.preventDefault();
        text = "Plz Enter Strong Password";
        errorMsg.innerHTML = text;
    } else if (userEmail.value.length < 8) {
        e.preventDefault();
        text = "Plz Enter Email";
        errorMsg.innerHTML = text;
    } else if (userEmail.value.indexOf("@") == -1) {
        e.preventDefault();
        text = "Plz Enter Valid Email";
        errorMsg.innerHTML = text;
    } else if (phoneNumber.value.length == 0) {
        e.preventDefault();
        text = "Plz Enter Phone Number";
        errorMsg.innerHTML = text;
    } else if (phoneNumber.value.length < 11) {
        e.preventDefault();
        text = "Plz Enter Valid Phone Number";
        errorMsg.innerHTML = text;
    }
})

// End Programming Contact