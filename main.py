def showNumber2(num2: number):
    global column, row
    images.create_image("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """).show_image(0)
    column = num2 / 5
    row = num2 % 5
    i = 0
    while i <= row:
        j = 0
        while j <= column:
            led.plot(i, j)
            j += 1
        i += 1

def on_button_pressed_a():
    global num
    num = num - 1
    showNumber2(num)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global num
    num = num + 1
    showNumber2(num)
input.on_button_pressed(Button.B, on_button_pressed_b)

def showNumber(num2: number):
    global column, row
    column = num2 / 5
    row = num2 % 5
    led.plot(row, column)
row = 0
column = 0
num = 0
num = -1
led.plot_bar_graph(0, 2)