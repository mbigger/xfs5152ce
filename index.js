var SerialPort = require('serialport');
var g_com = null;
var g_header = Buffer.from([0xFD, 0x00, 0x00, 0x01, 0x03, 0xFF, 0xFE],'utf16le');
var g_port = '/dev/tty-usbserial1';
var g_speaker = 'female';

function LoByte(byte){
    return byte & 0xFF;
}

function HiByte(byte){
    return (byte >> 8) & 0xFF;
}

function decode(msg) {
    if(g_speaker !== 'female') {
        msg = '[m51]' + msg;
    }else{
        msg = '[m3]' + msg;
    }
    var content = Buffer.from(msg,'utf16le');
    var frame = Buffer.concat([g_header,content]);
    var len = content.length + 4;
    var hi = HiByte(len);
    var lo = LoByte(len);
    frame[1] = hi;
    frame[2] = lo;
    return frame;
}

function open(port,speaker) {
    g_port = port;
    if(speaker){
        g_speaker = speaker;
    }
    g_com = new SerialPort(port,{
        baudRate: 9600,
        parity: 'none',
        dataBits: 8,
        stopBits: 1
    });
    g_com.on('open', function() {
        g_com.set({
            dtr: false,
            rts: false
        });
    })
}

function isOpen() {
    if (g_com == null) return false;
    return com.isOpen();
}

function close(callback) {
    if (g_com == null) return;
    g_com.close(callback);
}

function speak(msg) {
    if (g_com == null || msg == null || msg == undefined || msg == '') return;
    if (g_com.isOpen) {
        var vocice = decode(msg);
        g_com.write(vocice, function(err) {
            if (err) {
                return console.log('Error on write: ', err.message);
            }
        });
    }else{
        g_com.open(g_port);
    }
}

exports.open = open;
exports.isOpen = isOpen;
exports.close = close;
exports.speak = speak;