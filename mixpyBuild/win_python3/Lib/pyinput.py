import sys
import urllib.parse
  
def input(message):
	print(">>>",message,end ="")
	line = ''
	while True:
		line = sys.stdin.readline()
		if line:
			return urllib.parse.unquote(line.replace("\n", ""))