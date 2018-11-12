// =====================================================
// Log Messages
// =====================================================

'use strict';

// Modules
const sh = require('shelljs')
const cl = require('colors')

// Options
let warn  = cl.yellow
let error = cl.red
let done  = cl.green
let info  = cl.cyan
let cls   = cl.reset


// Logs
module.exports = function (msg, type) {
    switch (type) {
    case 'error':
        sh.echo(error('✖ ' + msg));
        break;
    case 'warning':
        sh.echo(warn('! ' + msg));
        break;
    case 'info':
        sh.echo(info('! ' + msg));
        break;
    case 'done':
        sh.echo(done('✔ ' + msg));
        break;
    case 'cls':
        sh.echo(cls);
        break;
    case 'nl':
        sh.echo('\n');
        break;
    }
};
