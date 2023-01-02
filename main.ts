basic.clearScreen()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
