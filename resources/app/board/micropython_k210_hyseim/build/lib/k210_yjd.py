from fpioa_manager import fm
from Maix import GPIO

def pins(board_pin):
    return_pin = [-1, -1]
    if board_pin > 47:
        return return_pin
    special_pin = [38, 37, 29, 44, 43]
    for i in range(0, 5, 1):
        if board_pin == special_pin[i]:
            return_pin[0] = 55 - i
            return_pin[1] = 31 - i
            return return_pin
    if i == 4:
        remap = board_pin % 35
        if remap > 26:
            remap = remap % 27
            return_pin[0] = 56 + remap
            return_pin[1] = 32 + remap
        else:
            return_pin[0] = 24 + remap
            return_pin[1] = remap
    return return_pin

board_pins = (3, 6, 7, 8, 9, 11, 15, 17, 19, 18, 10)
button_pins = (21, 24, 25, 31, 1, 2, 22, 23, 0, 16)