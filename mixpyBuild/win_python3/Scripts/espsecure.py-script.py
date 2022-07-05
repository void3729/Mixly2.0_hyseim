#!d:\mixly_win1.0\mixpybuild\win_python3\python3.exe
# EASY-INSTALL-ENTRY-SCRIPT: 'esptool==3.0','console_scripts','espsecure.py'
__requires__ = 'esptool==3.0'
import re
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw?|\.exe)?$', '', sys.argv[0])
    sys.exit(
        load_entry_point('esptool==3.0', 'console_scripts', 'espsecure.py')()
    )
