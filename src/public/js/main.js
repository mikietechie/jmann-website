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
    // footer subscribe email address
    const $subscribeEmailAddressForm = document.querySelector("form#subscribe-email-address-form")
    $subscribeEmailAddressForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        const $subscribeEmailAddressInput = document.querySelector("form#subscribe-email-address-form")
        try {
            const res = await fetch({
                url: $subscribeEmailAddressForm.action,
                body: {emailAddress: $subscribeEmailAddressInput.value}
            })
            if (res.ok) {
                alert("Email subscription successful!")
                $subscribeEmailAddressForm.reset()
            } else {
                alert("Email subscription failed!")
            }
        } catch (error) {
            alert("Error!")
        }
        return false
    })
})