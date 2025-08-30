/*
 * @file            Script JS
 * @description     JavaScript file implementing the accordion logic of the application. Through DOM element selection, event binding, iterative loops, and method-based manipulation, the site's core and unique functionality was developed.
 * @author          Mário Miguel de Almeida
 * @last-modified   08/22/2025
 * @dependencies    Vanilla JS
*/

const accordionHeaders = document.querySelectorAll(".faq__accordion-header");

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        let targetId = header.getAttribute("data-target");
        let targetContent = document.getElementById(targetId);

        const isCurrentlyActive = header.classList.contains("active");

        accordionHeaders.forEach( (headerToClean) => {
            headerToClean.classList.remove("active")
            let targetIdClean = headerToClean.getAttribute("data-target");
            let targetContentClean = document.getElementById(targetIdClean);
            targetContentClean.classList.remove("active")
        })

        if (!isCurrentlyActive) {
            header.classList.add("active")
            targetContent.classList.add("active")
        }
    })
})
