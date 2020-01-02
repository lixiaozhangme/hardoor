#!/usr/bin/env node
const program = require('commander');
const ph = require('path');
const child_process = require('child_process');

const shutil = require("../lib/shutil");

const info = require(ph.resolve(__dirname, "../package.json"));

program.version(info.version)
    .name(info.name);
program
    .option('-a, --antd', 'generate react antd project')
    .option('-w, --webpack', 'generate react webpack project')
    .option('-k, --koa', 'generate koa project');

program.parse(process.argv);
if (program.antd) {
    generate(ph.resolve(__dirname, "../template/react/react-antd"));
}
if (program.webpack) {
    generate(ph.resolve(__dirname, "../template/react/react-webpack"));
}
if (program.koa) {
    generate(ph.resolve(__dirname, "../template/koa"));
}

function generate(template_dir) {
    let process_dir = process.cwd();
    shutil.copy.copyFolder(template_dir, process_dir).then(function (e) {
        console.log("result: ", e);
        console.log("wait install");
        if (!e.err) {
            let P = ["\\", "|", "/", "-"];
            let x = 0;
            let waitTimer = setInterval(function () {
                process.stdout.write("\r" + P[x++]);
                x &= 3;
            }, 250);
            const install = child_process.exec("npm install", (error) => {
                if (error) {
                    console.error(error);
                    return;
                }
                console.log("done install");
            });
            install.stdout.on('data', (data) => {
                clearInterval(waitTimer);
                console.log(data);
            });
        }
    });
}