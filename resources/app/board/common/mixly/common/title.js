(() => {
    goog.provide('Mixly.Title');
    goog.require('Mixly.Config');

    let { Url, Config, Title } = Mixly;
    let { BOARD, SOFTWARE } = Config;
    if (SOFTWARE?.version && BOARD?.boardName) {
        Title.title = SOFTWARE.version + " For " + BOARD.boardName;
        document.title = Title.title;
    } else {
        Title.title = document.title;
    }
    Title.NOWTITLE = Title.title;

    Title.updeteVersionNumber = (newVersionNumber) => {
        try {
            Title.NOWTITLE = document.title.replace(/Mixly[\s]?[\d.]+/g, "Mixly " + newVersionNumber);
            document.title = Title.NOWTITLE;
        } catch (e) {
            console.log(e);
        }
    }

    Title.getVersionNumber = () => {
        try {
            Title.NOWTITLE = document.title.match(/Mixly[\s]?[\d.]+/g);
            return Title.NOWTITLE;
        } catch (e) {
            console.log(e);
            return "";
        }
    }

    Title.updeteFilePath = function (newPath) {
        try {
            var pathArr = Title.NOWTITLE.match(/\([^\n\r]+\)/g);
            if (pathArr) {
                Title.NOWTITLE = document.title.replace(/\([^\n\r]+\)/g, "(" + newPath + ")");
                document.title = Title.NOWTITLE;
            } else {
                Title.NOWTITLE = document.title + " (" + newPath + ")";
                document.title = Title.NOWTITLE;
            }
        } catch (e) {
            console.log(e);
        }
    }

    Title.getFilePath = () => {
        try {
            let filePathArr = document.title.match(/(?<=\()[^\n\r]+(?=\))/g);
            if (filePathArr && filePathArr.length > 0) {
                return filePathArr[0];
            }
        } catch (e) {
            console.log(e);
        }
        return null;
    }

    Title.updateTitle = (newTitle) => {
        Title.NOWTITLE = newTitle;
        document.title = newTitle;
    }
})();