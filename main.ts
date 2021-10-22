input.onButtonPressed(Button.A, function () {
    if (_switch == 0) {
        Number_1 += 1
        basic.showNumber(Number_1)
    }
    if (_switch == 1) {
        Number_2 += 1
        basic.showNumber(Number_2)
    }
})
input.onButtonPressed(Button.AB, function () {
    op += 1
    if (op == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (op == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.clearScreen()
        } else {
            if (op == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(100)
                basic.clearScreen()
            } else {
                if (op == 4) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                } else {
                    op = 1
                    basic.showLeds(`
                        . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    _switch += 1
    if (_switch == 2) {
        if (op == 1) {
            basic.showNumber(Number_1 + Number_2)
        } else {
            if (op == 2) {
                basic.showNumber(Number_1 - Number_2)
            } else {
                if (op == 3) {
                    basic.showNumber(Number_1 * Number_2)
                } else {
                    basic.showNumber(Number_1 / Number_2)
                }
            }
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
let _switch = 0
let Number_2 = 0
let Number_1 = 0
let op = 0
op = 0
Number_1 = 0
Number_2 = 0
_switch = 0
