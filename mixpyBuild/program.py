import esptool
command0 = ['--port', 'COM3', '--baud', '460800', r'erase_flash']
print('Using command %s' % ' '.join(command0))
esptool.main(command0)
command1 = ['--port', 'COM3', '--baud', '460800', '--after', 'no_reset', 'write_flash', '0x1000', 'D:\mixly\Electron\mithon4\Mixly-win32-x64\mpBuild\ESP32_MixGo\esp32.bin', '0x200000', r'D:\mixly\Electron\mithon4\Mixly-win32-x64\mpBuild\ESP32_MixGo\Noto_Sans_CJK_SC_Light16.bin']
print('Using command %s' % ' '.join(command1))
esptool.main(command1)
