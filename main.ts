radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showString("A")
    } else {
        if (receivedNumber == 2) {
            basic.showString("B")
        } else {
            basic.showLeds(`
                . # # # .
                # . . . #
                . . . # .
                . . . . .
                . . # . .
                `)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showString("A sent")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showString("B sent")
})
basic.showLeds(`
    # # # # #
    # . . . .
    # # # . .
    # . . . .
    # . . . .
    `)
radio.setGroup(3)
basic.forever(function () {
	
})
