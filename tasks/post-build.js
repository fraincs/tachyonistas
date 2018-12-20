const fs = require("fs-extra");
const copyfiles = require("copyfiles");

fs.removeSync("publish");
console.log("** Cleared publish folder **");

function copy(src, dest, options) {
    return {
        src,
        dest,
        options
    };
}

const toCopy = [
    copy("css/*.css", "publish"),
    copy("package.json", "publish"),
    copy("LICENSE", "publish"),
    copy("README.md", "publish")
]

toCopy.forEach(({ src, dest, options = {} }) => {
    copyfiles([src, dest], options, err => {
        if (err) {
            console.log(err);
        }
    });
    console.log(`** Copied ${src} to ${dest} **`);
});