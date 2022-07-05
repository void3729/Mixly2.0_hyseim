#!c:\users\fredqian\appdata\local\programs\python\python37-32\python.exe
# EASY-INSTALL-ENTRY-SCRIPT: 'metaplot==1.0.0.dev1','console_scripts','mpl'
__requires__ = 'metaplot==1.0.0.dev1'
import re
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw?|\.exe)?$', '', sys.argv[0])
    sys.exit(
        load_entry_point('metaplot==1.0.0.dev1', 'console_scripts', 'mpl')()
    )
