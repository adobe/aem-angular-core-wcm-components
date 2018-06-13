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

// This file is needed in order to keep the versions of the lib and the app/demo packages in sync.
// Angular official way of creating a library using their CLI requires that the we first
// create a root Angular application which will act as the demo app of the lib
// Then we create the library inside this root application. The library has its own package.json
// which will influence the published version.
//
// When using `npm version` we need to keep in sync both package versions( the root app package.json and
// the library package.json ).
//
// This script will receive the version as arguments and call `npm version` using this arg for both version.
// For now we support only one argument - the new version.

const { spawn } = require('child_process');
const path = require('path');
const args = process.argv.slice(2);
console.log(args);
if (args && args.length) {
  let version = args[0];
  let libNpmVersion = spawn('npm', ['--no-git-tag-version', 'version', version],
    {
      stdio: [process.stdin, process.stdout, process.stderr],
      cwd: path.resolve(__dirname, 'projects', 'cq-angular-editable-components')
    });
  let rootVersion = spawn('npm', ['version', version],
    {
      stdio: [process.stdin, process.stdout, process.stderr],
      cwd: path.resolve(__dirname)
    });
}
