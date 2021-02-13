function increase (amount: number) {
    num = num + amount
    counter = num / 20
    remainder = num % 20
}
function satırÇiz (num: number) {
    for (let j = 0; j <= 4; j++) {
        led.plot(j, num)
    }
}
function decrease (amount: number) {
    num = num - amount
    counter = num / 20
    remainder = num % 20
}
function showNumber2 (num2: number) {
    clearDisplay()
    row = num2 / 5
    column = num2 % 5
    // çizilmesi gerekli satırlar
    for (let index = 0; index <= row - 1; index++) {
        satırÇiz(index)
    }
    for (let i = 0; i <= column; i++) {
        for (let j = 0; j <= row; j++) {
            led.plot(i, j)
        }
    }
    // en alttaki 20'nin katı olan kısımlar
    for (let index = 0; index <= counter - 2; index++) {
        led.plot(index, 4)
    }
}
function clearDisplay () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            led.unplot(i, j)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    decrease(1)
    showNumber2(remainder)
})
let column = 0
let row = 0
let remainder = 0
let counter = 0
let num = 0
num = -1
counter = -1
basic.forever(function () {
    increase(1)
    showNumber2(remainder)
    basic.pause(500)
    if (num >= 100) {
        num = 0
    }
})
basic.forever(function () {
    led.plot(counter - 2, 4)
    basic.pause(200)
    led.unplot(counter - 2, 4)
    basic.pause(200)
})
