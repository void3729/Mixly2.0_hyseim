var boardConfig = {
    "burn": {
        "portSelect": "all",
        "command": "\"{kflash}\" --port {com} --baudrate 1500000 -n \"{indexPath}\\build\\maixpy_v0.6.2_72_g22a8555b5.bin\""
    },
    "upload": {
        "type": "mpfs",
        "portSelect": "all",
        "command": "cd {indexPath}\\build\\upload && rename main.py mixly.py && chdir && {indexPath}\\..\\..\\..\\..\\mixpyBuild\\win_python3\\Scripts\\mpfs.exe --nohelp -n -c \"open {com};put mixly.py\"",
        "filePath": "{indexPath}\\build\\upload\\main.py",
        "copyLib": true,
        "reset": [
            {
                "dtr": false,
                "rts": false
            }
        ]
    },
    "nav": {
        "burn": true,
        "upload": true,
        "save": {
            "img": true,
            "py": true
        }
    },
    "serial": {
        "ctrlCBtn": true,
        "ctrlDBtn": true,
        "baudRates": 115200,
        "yMax": 100,
        "yMin": 0,
        "pointNum": 100,
        "rts": false,
        "dtr": false
    },
    "pythonToBlockly": false
}