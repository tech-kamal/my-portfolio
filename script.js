
const crsr = document.getElementById("cursor")
const manu = document.getElementById("manu")
const manuShow = document.getElementById("show-nav")
const cancelBtn = document.getElementById("namu-cancel")
const main = document.getElementById("main")
const active = document.querySelectorAll(".tab")
const quality = document.querySelectorAll(".quality")

active.forEach(elem => {
    elem.addEventListener("click", () => {
        active.forEach(elem => elem.classList.remove("active-yellow"))
        elem.classList.add("active-yellow")
    })
})

main.addEventListener("mousemove", (dets) => {
    gsap.to(crsr, {
        x: dets.x,
        y: dets.y,
    })
})
manu.addEventListener("click", (dets) => {
    manuShow.style.right = "0%",
        manuShow.style.transition = "all 0.5s ease-in"
})
cancelBtn.addEventListener("click", (dets) => {
    manuShow.style.right = "-100%",
        manuShow.style.transition = "all 0.5s ease-in"
})

quality.forEach(elem => {
    elem.addEventListener("mouseenter", () => {
        let photo = elem.getAttribute("data-img")
        crsr.style.width = "400px"
        crsr.style.height = "400px"
        crsr.style.borderRadius = "10px"
        crsr.style.backgroundImage = `url(${photo})`
        crsr.style.objectFit = "cover"
        crsr.style.transition = "0.3s ease"
    })
})
quality.forEach(elem => {
    elem.addEventListener("mouseleave", () => {
        let photo = elem.getAttribute("data-img")
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50px"
        crsr.style.backgroundImage = `none`
        crsr.style.transition = "0.3s ease"
    })
})




let load = gsap.timeline();
load.from("#loader h3 span", {
    x: 100,
    duration: 0.8,
    stagger: 0.1,
    opacity: 0
})
load.to("#loader h3 span", {
    x: -100,
    duration: 0.8,
    stagger: 0.1,
    opacity: 0
})
load.to("#loader", {
    duration: 0.5,
    opacity: 0,
    display: "none"
})

load.from(".logo h2", {
    y: -100,
    duration: 0.8,
    stagger: 1,
}, "dil")

load.from(".nav-items li", {
    y: -100,
    duration: 0.8,
    stagger: 0.1,
}, "dil")
load.from(".manu-bar", {
    y: -100,
    duration: 0.8,
    stagger: 0.1,
}, "dil")

load.from(".content h2", {
    x: -150,
    duration: 0.6,
    opacity: 0,
}, "same")
load.from(".content h1", {
    x: -250,
    duration: 0.8,
    opacity: 0,
}, "same")
load.from(".content p", {
    x: -300,
    duration: 1,
    opacity: 0,
}, "same")
load.from(".btn-element a", {
    y: -150,
    duration: 0.8,
    opacity: 0,
    stagger: 0.1
}, "same")
load.from("#photo img", {
    x: 150,
    duration: 1,
    opacity: 0,
    stagger: 0.1
}, "same")
load.from("#hero-part2 h6", {
    x: -150,
    duration: 0.7,
    opacity: 0,
    stagger: 0.1
}, "same")
load.from("#hero-part2 h4", {
    x: -150,
    duration: 1,
    opacity: 0,
    stagger: 0.1
}, "same")
load.from(".heading-color", {
    x: 150,
    duration: 1,
    opacity: 0,
    stagger: 0.1
}, "same")

let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#cards-padding",
        scroller: "body",
        start: "top 50%",
        end: "top 30%",
        scrub: 2
    }
})
tl1.from("#left1", {
    x: -300,
    duration: 0.8,
    opacity: 0,
}, "anime")
tl1.from("#middle1", {
    y: 300,
    duration: 0.8,
    opacity: 0,
}, "anime")
tl1.from("#right1", {
    x: 300,
    duration: 0.8,
    opacity: 0,
}, "anime")


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#middle-part",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 2
    }
})

tl2.from("#left2", {
    x: -300,
    duration: 0.8,
    opacity: 0,
}, "anime1")
tl2.from("#middle2", {
    y: 300,
    duration: 0.8,
    opacity: 0,
}, "anime1")
tl2.from("#right2", {
    x: 300,
    duration: 0.8,
    opacity: 0,
}, "anime1")


let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#latest-pro",
        scroller: "body",
        start: "top 70%",
        end: "top 30%",
        scrub: 2
    }
})
tl3.from("#one-side", {
    x: 300,
    duration: 0.8,
    opacity: 0,
}, "anime2")
tl3.from("#mid-side", {
    y: 300,
    duration: 0.8,
    opacity: 0,
}, "anime2")
tl3.from("#two-side", {
    x: -300,
    duration: 0.8,
    opacity: 0,
}, "anime2")




let footerAnime = gsap.timeline({
    scrollTrigger: {
        trigger: "#footer",
        scroller: "body",
        start: "top 90%",
        end: "top 75%",
        scrub: 2
    }
})

footerAnime.from(".footer-text", {
    x: -300,
    duration: 0.8,
    opacity: 0,
}, "anime2")
footerAnime.from(".icons-symble a", {
    x: 300,
    duration: 0.8,
    opacity: 0,
    stagger: 0.1
}, "anime2")
footerAnime.from("#footer p", {
    y: 100,
    duration: 0.8,
    opacity: 0,
    delay: 0.5
}, "anime2")