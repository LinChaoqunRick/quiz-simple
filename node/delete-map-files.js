/**
 * @description 实现这个方法，能够删除指定文件夹下的所有 `.map` 文件。
 * @param {string} p
 * @return {void}
 */
const fs = require('fs')
const path = require("path");

const deleteMapFiles = (p) => {
  // 请实现……
  fs.readdir(p, function (err, files) {
    if (err) {
      console.log(err)
      return
    }
    // 遍历文件
    for (let i = 0; i < files.length; i++) {
      // console.log(p + `/${files[i]}`)
      fs.stat(p + `/${files[i]}`, function (err, stats) {
        if (err) {
          console.log(err)
          return
        }
        // 判断文件类型，文件or文件夹
        if (stats.isFile()) {
          // 判断并删除文件
          if (path.extname(files[i]) === '.map') {
            fs.unlink(p + `/${files[i]}`, function (err) {
              if (err) {
                console.error(err);
                return
              }
              console.log("文件删除成功！");
            });
          }
        } else {
          // 递归删除子文件夹的文件
          deleteMapFiles(p + `/${files[i]}`)
        }
      })
    }
  });
};
deleteMapFiles('./playground')
// console.log('hello')
// * ------------------------------------------------

// * playground 文件夹目前的目录结构如下：

/*
playground
├── index.html
├── index.js
├── index.js.map
└── static
    ├── main.js
    ├── main.js.map
    ├── style.css
    └── style.css.map
*/

// * 调用 deleteMapFiles('./playground') ，将删除所有 map 文件
// * 然后文件结构应该如下：

/*
playground
├── index.html
├── index.js
└── static
    ├── main.js
    └── style.css
*/
