#!..\..\mixpyBuild\win_python3\python3.exe

import sys
import os

sys.path.append('../Lib/site-packages')
from mp.mpfshell import main
# from hello import hello

# if __name__ == '__main__':
#     hello()

try:
    main()
except Exception as e:
    sys.stderr.write(str(e) + "\n")
    exit(1)
