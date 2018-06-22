/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2018 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

const fs = require('fs');
const path = require('path');

const basePath = './docs/classes';
// Read the docs generated files
fs.readdir(path.resolve(basePath), function (err, files) {
  files.forEach((file) => {
    let filePath = path.resolve(basePath, file);
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) return console.log(err);
      // Replace the file links references
      let fileRegex = `${file}#`;
      let re = new RegExp(fileRegex, "g");
      let result = data.replace(re, `#${file}_`);
      // Replace the file links urls
      let linkRegex = `<a id="(.*?)">`;
      re = new RegExp(linkRegex, "g");
      result = result.replace(re, `<a id="${file}_$1">`);
      // Increase all heading levels
      result = result.replace(/# /g, "## ");
      // Replace the first line of the file with a file link
      result = result.replace(/^(.*)$/m, `<a id="${file}"></a>`);
      // Replace all links to files with an inline link
      result = result.replace(/[\(]((\w*?).md)/g, `(#$1`);
      // Update the file to the disk
      fs.writeFile(filePath, result, 'utf8', function (err) {
         if (err) return console.log(err);
      });
    });
  });
});

const docsReadmePath = path.resolve('./docs/README.md');

fs.readFile(docsReadmePath, 'utf8', function(err, data) {
  if (err) return console.error(err);
  data = data.substr(data.indexOf("### Classes"), data.length);
  data = data.replace(/(\* \[.*])\((classes\/.*.md)\)/g, `#include "docs/$2"`)
  fs.writeFile("DOCUMENTATION.MD", data, 'utf8', function (err) {
     if (err) return console.error(err);
  });
});
