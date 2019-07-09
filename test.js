var xfs5152ce = require('./index');

xfs5152ce.open('COM3','female');
	
setTimeout(
    function() {
        xfs5152ce.speak('1，2，3，一起走')
    }
    ,1000);