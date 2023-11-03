var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        // markers: true,
        start: "75% 50%",
        end: "100% 50%",
        scrub: 5,
        duration: 1,
        pin: true,
    }
});
tl
    .to(".img", {
        width: "100vw",
        height: "100vh",
    })


var t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".part-2",
        // markers: true,
        start: "0% 50%",
        end: "50% 59%",
        scrub: 2,
        pin: true
    }
});
t2
    .to("#image-anim-1", {
        opacity: 0,
    }, 'a')
    .to(".image-anim", {
        rotateX: "0deg",
        top: "-10vh"
    }, 'a')

var t3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#main-g",
        // markers: true,
        start: "50% 50%",
        end: "150% 50%",
        scrub: 2,
        pin: true
    }
});
t3
    .to("#center", {
        height: "100vh",
    }, 'a')
    .to("#top", {
        top: "-50%",
    }, 'a')
    .to("#bottom", {
        bottom: "-50%",
    }, 'a')
    .to("#top-h1", {
        top: "60%"
    }, 'a')
    .to("#bottom-h1", {
        bottom: "-30%"
    }, 'a')
    .to(".content", {
        delay: -0.2,
        marginTop: "0%"
    })

var t4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#main-h",
        // markers: true,
        start: "50% 50%",
        end: "150% 50%",
        scrub: 1.5,
        pin: true
    }
});
t4
    .to("#lineone", {
        marginTop: "-120vh",
    }, 'a')
    .to("#linetwo", {
        marginTop: "20vh",
    }, 'a')

var t5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#main-i",
        // markers:true,
        start: "38% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true
    }
});
t5
    .to("#card-one", {
        top: "35%",
    }, 'a')
    .to("#card-two", {
        top: "130%"
    }, 'a')
    .to("#card-two", {
        top: "42%"
    }, 'b')
    .to("#card-one", {
        width: "65%",
        height: "65vh"
    }, 'b')
    .to("#card-three", {
        top: "130%"
    }, 'b')
    .to("#card-three", {
        top: "50%"
    }, 'c')
    .to("#card-two", {
        width: "70%",
        height: "70vh"
    }, 'c')

// window.addEventListener("mousemove", function (chahcha) {
//     document.querySelector("#slidephoto").style.top = `${chahcha.clientY}px`
//     document.querySelector("#slidephoto").style.left = `${chahcha.clientX}px`
//     document.querySelector("#slidephoto").style.transform = `translate(${-chahcha.clientX * 0.20}px, ${-chahcha.clientY * 0.45}px)`
// });

// document.querySelector("#chainn")
//     .addEventListener("mousemove", function () {
//         document.querySelector("#slidephotos").style.marginTop = "0%"
//         document.querySelector("#chainn").style.color = "rgb(177, 177, 177)"
//     })

// document.querySelector("#chainn")
//     .addEventListener("mouseleave", function () {
//         document.querySelector("#chainn").style.color = "initial"
//     })

// document.querySelector("#aty")
//     .addEventListener("mousemove", function () {
//         document.querySelector("#slidephotos").style.marginTop = "-120%"
//         document.querySelector("#aty").style.color = "rgb(177, 177, 177)"
//     })

// document.querySelector("#aty")
//     .addEventListener("mouseleave", function () {
//         document.querySelector("#aty").style.color = "initial"
//     })

// document.querySelector("#mic")
//     .addEventListener("mousemove", function () {
//         document.querySelector("#slidephotos").style.marginTop = "-240%"
//         document.querySelector("#mic").style.color = "rgb(177, 177, 177)"
//     })

// document.querySelector("#mic")
//     .addEventListener("mouseleave", function () {
//         document.querySelector("#mic").style.color = "initial"
//     })

// document.querySelector("#tapso")
//     .addEventListener("mousemove", function () {
//         document.querySelector("#slidephotos").style.marginTop = "-360%"
//         document.querySelector("#tapso").style.color = "rgb(177, 177, 177)"
//     })

// document.querySelector("#tapso")
//     .addEventListener("mouseleave", function () {
//         document.querySelector("#tapso").style.color = "initial"
//     })

// document.querySelector("#eff")
//     .addEventListener("mousemove", function () {
//         document.querySelector("#slidephoto").style.display = "initial"
//         document.querySelector("#slidephoto").style.opacity = 1
//     })

// document.querySelector("#eff")
//     .addEventListener("mouseleave", function () {
//         document.querySelector("#slidephoto").style.display = "none"
//         document.querySelector("#slidephoto").style.opacity = 0
//     })


// document.querySelector("#btnsm")
//     .addEventListener("mousemove", function () {
//         document.querySelector("#btnsm").style.backgroundColor = "blue"
//         document.querySelector("#btnsm").style.cursor = "pointer"
//         document.querySelector("#btnsm h1").style.color = "white"
//     })

// document.querySelector("#btnsm")
//     .addEventListener("mouseleave", function () {
//         document.querySelector("#btnsm").style.backgroundColor = "initial"
//         document.querySelector("#btnsm h1").style.color = "rgb(95, 95, 95)"

//     })

Draggable.create("#dragme", { type: "x", inertia: true, bounds: ".container" });

function checkOverlap() {
    var div1 = document.querySelector("#cir");
    var div2 = document.querySelector("#dragme");

    var cir1 = div1.getBoundingClientRect();
    var cir2 = div2.getBoundingClientRect();

    if (cir1.left < cir2.left) {
        document.querySelector("#v1").style.opacity = 0
    } else {
        document.querySelector("#v1").style.opacity = 1
    }
}

window.addEventListener("mousemove", checkOverlap)