// function hackerLetter() {
//     setInterval(() => {
//         const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ[] ';

//         let iterations = 0;

//         const devhead = document.querySelector('.developer-heading');
//         const interval = setInterval(() => {
//             devhead.innerText = devhead.innerText.split("").map((letter, index) => {
//                 if (index + 1 < iterations + 1) {
//                     return devhead.dataset.value[index];
//                 }
//                 return letters[Math.floor(Math.random() * 26)]
//             }).join("");

//             if (iterations >= devhead.dataset.value.length) {
//                 clearInterval(interval);
//                 iterations = 0;
//             }
//             iterations += 1 / 3;
//         }, 40);
//     }, 3500)
// }
$(window).on("load", function () {
    $(".preloader-wrapper").fadeOut("slow");
});
$(".btn-nav").click(function () {
    var i = $(this).attr('id');
    console.log(i)
    var that = $(this);

    $("." + i + "-container").addClass('active');
    that.closest('.section').removeClass('active');
    that.closest('.section').addClass('anim-prev');
})
function hackerLetters() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ[] ';
    const text1 = '[ DEVELOP ]';
    const text2 = '[ DESIGN ]';
    setInterval(() => {

        function animateText(targetText) {
            let iterations = 0;
            const targetHead = document.querySelector('.developer-heading');
            const interval = setInterval(() => {
                targetHead.innerText = targetText.split("").map((letter, index) => {
                    if (index + 1 < iterations + 1) {
                        return targetText[index];
                    }
                    return letters[Math.floor(Math.random() * 28)]
                }).join("");

                if (iterations >= targetText.length) {
                    clearInterval(interval);
                    iterations = 0;
                }

                iterations += 1 / 2;
            }, 55);
        }

        animateText(text1); // Animate "DEVELOPER" text

        // Wait for the first text to finish animation before animating the second text
        setTimeout(() => {
            animateText(text2); // Animate "DESIGNER" text
        }, (text1.length * 40) + 3000); // Delay the start of the second animation
    }, (text2.length * 40) + 6500); // Delay the next iteration

    // function developer() {
    //     let iterations = 0;
    //     const devhead = document.querySelector('.developer-heading');
    //     const interval = setInterval(() => {
    //         devhead.innerText = text1.split("").map((letter, index) => {
    //             if (index + 1 < iterations + 1) {
    //                 console.log(text1[index])
    //                 return text1[index];
    //             }
    //             return letters[Math.floor(Math.random() * 28)]
    //         }).join("");

    //         if (iterations >= text1.length) {
    //             clearInterval(interval);
    //             iterations = 0;
    //         }

    //         iterations += 1 / 2;

    //         console.log(iterations)
    //     }, 40);
    // }
    // function designer() {
    //     let iterations = 0;
    //     const devhead = document.querySelector('.developer-heading');
    //     const interval = setInterval(() => {
    //         devhead.innerText = text2.split("").map((letter, index) => {
    //             if (index + 1 < iterations + 1) {
    //                 console.log(text2[index]);
    //                 return text2[index];
    //             }
    //             return letters[Math.floor(Math.random() * 26)]
    //         }).join("");

    //         if (iterations >= text2.length) {
    //             clearInterval(interval);
    //             iterations = 0;
    //         }
    //         iterations += 1 / 3;

    //     }, 40);
    // }
    // developer();
    // designer();

    // }, 3500)
}
window.onload = hackerLetters;
const trailer = document.querySelector('.trailer')
window.onmousemove = e => {
    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetHeight / 2;
    trailer.style.transform = `translate(${x}px, ${y}px)`;
}

// function scrollHorizontally(e) {
//     e = window.event || e;
//     var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//     var scrollSpeed = 160; 
//     document.documentElement.scrollLeft -= (delta * scrollSpeed *10);
//     document.querySelector('body').scrollLeft -= (delta * scrollSpeed);
//     e.preventDefault();
// }

// if (document.querySelector('body').addEventListener) {
//     // IE9, Chrome, Safari, Opera
//     document.querySelector('body').addEventListener("mousewheel", scrollHorizontally, false);
//     // Firefox
//     document.querySelector('body').addEventListener("DOMMouseScroll", scrollHorizontally, false);
// } else {
//     // IE 6/7/8
//     document.querySelector('body').attachEvent("onmousewheel", scrollHorizontally);
// }

function displayWorkBox1() {
    const workbox1 = document.querySelector('.work-box-1');
    if (workbox1.style.display = "none") {
        return workbox1.style.display = "block";
    } else if (workbox1.style.display = "block") {
        return workbox1.style.display = "none";
    }
}

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
    const element = document.getElementById(id),
        text = element.innerText.split("");

    element.innerText = "";

    text.forEach((value, index) => {
        const outer = document.createElement("span");

        outer.className = "outer";

        const inner = document.createElement("span");

        inner.className = "inner";

        inner.style.animationDelay = `${rand(-5000, 0)}ms`;

        const letter = document.createElement("span");

        letter.className = "letter";

        letter.innerText = value;

        letter.style.animationDelay = `${index * 1000}ms`;

        inner.appendChild(letter);

        outer.appendChild(inner);

        element.appendChild(outer);
    });
}

enhance("instagram");
enhance('email');
enhance('number');