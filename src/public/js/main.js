document.addEventListener("DOMContentLoaded", () => {
    // Nav Dropdowns
    const $nav = document.querySelector("nav#main-nav-lg")
    $nav.querySelectorAll(".lower ul li.dropdown a.dropdown-toggle").forEach(($a) => {
        $a.addEventListener("mouseenter", (ev) => {
            $a.click()
        })
    })


    // mike's carousel
    document.querySelectorAll(".scroll-row").forEach(($scrollRow) => {
        const $scrollRowItem = $scrollRow.querySelector(".scroll-row-item")
        const $scrollRowScrollLeft = $scrollRow.parentElement.querySelector(".scroll-row-left")
        const $scrollRowScrollRight = $scrollRow.parentElement.querySelector(".scroll-row-right")
        $scrollRowScrollLeft.addEventListener("click", () => {
            $scrollRow.scrollLeft -= $scrollRowItem.scrollWidth
        })
        $scrollRowScrollRight.addEventListener("click", () => {
            $scrollRow.scrollLeft += $scrollRowItem.scrollWidth
        })
    })
})