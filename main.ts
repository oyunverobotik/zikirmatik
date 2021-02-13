function satırÇiz (num: number) {
    for (let j = 0; j <= 4; j++) {
        led.plot(j, num)
    }
}
function showNumber2 (num2: number) {
    clearDisplay()
    row = num2 / 5
    column = num2 % 5
    for (let i = 0; i <= row; i++) {
        satırÇiz(i)
        for (let j = 0; j <= column; j++) {
            led.plot(i, j)
        }
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
    num = num - 1
    showNumber2(num)
})
input.onButtonPressed(Button.B, function () {
    num = num + 1
    showNumber2(num)
})
function showNumber (num2: number) {
    column = num2 / 5
    row = num2 % 5
    led.plot(row, column)
}
let column = 0
let row = 0
let num = 0
num = -1
