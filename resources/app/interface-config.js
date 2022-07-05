var MixlyConfig = {};

MixlyConfig.softwareConfig = {
	"version": "Mixly 2.0 rc2",
	"board.url": "http://106.52.57.223:8081/cloud-boards/boards.json",
	"defaultPath": {
		"win32": {
			"arduinoCli": "../arduino-cli-win32/arduino-cli/arduino-cli.exe",
			"python3": "None"
		},
		"darwin": {
			"arduinoCli": "None",
			"python3": "None"
		},
		"linux": {
			"arduinoCli": "None",
			"python3": "None"
		}
	},
	"nodeServer": {
		"enabled": false,
		"url": "ws://192.168.1.15:8081/"
	},
	"webCompiler": {
		"enabled": false,
		"url": "http://192.168.1.15:8082/"
	}
}