document.addEventListener("DOMContentLoaded", () => {
    // Nav Dropdowns
    const $nav = document.querySelector("nav#main-nav-lg")
    $nav.querySelectorAll(".lower ul li.dropdown a.dropdown-toggle").forEach(($a) => {
        $a.addEventListener("mouseenter", (ev) => {
            $a.click()
        })
    })
})