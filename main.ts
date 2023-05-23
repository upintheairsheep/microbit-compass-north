basic.forever(function () {
    if (input.compassHeading() < 45 || input.compassHeading() > 310) {
        basic.showString("N")
    } else {
        basic.showString("X")
    }
})
