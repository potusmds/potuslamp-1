'use strict';
const cmd = require('node-cmd');

const cmdVal = {
	reset : function(){
		return new Promise(function(resolve, reject){
			cmd.get("sudo /home/pi/trumpmood/resetPotus.sh", function(err, data, stderr){
				
				if(err){
					reject(err);
				}

	            resolve(true);

			});
        });
	}
}

module.exports = cmdVal;