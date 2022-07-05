var MixlyUpdater = {};

const nodeHttps = require("https");
const nodeAdmZip = require('adm-zip-iconv');
const nodeOs = require('os');
const nodePath = require('path');
const nodeFs = require('fs');
MixlyUpdater.localConfig = null;
MixlyUpdater.cloudConfig = null;
MixlyUpdater.softwareUrl = null;

//if (MixlyConfig.softwareConfig.hasOwnProperty("software.url"))

function getLocalConfigJson(path) {
    if (nodeFs.existsSync(path)) {
        var rawData = fs.readFileSync(path);
        var configData = null;
        try{
            configData = JSON.parse(rawData);
            return configData;
        } catch(e) {
            console.log(e);
            return null;
        }
    }
}