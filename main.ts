input.onButtonPressed(Button.A, function () {
    voeding += 5
})
input.onButtonPressed(Button.B, function () {
    knuffel += 5
})
let voeding = 0
let knuffel = 20
voeding += 20
let dood = 0
basic.forever(function () {
    if (dood == 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
basic.forever(function () {
    voeding += -1
    knuffel += -1
    dood += -1
})
