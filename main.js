		var repo_site = "https://home/izumalab/www/AK/RM_onlineExp/";
	
		var option_L = '<div style="position: absolute; top: 40%; left: 20%"><img src= " + repo_site + 1_C.png" width="200px"/></div>'
		var option_R = '<div style="position: absolute; top: 40%; right: 20%"><img src=" + repo_site + 2_C.png" width="200px"/></div>'
	
	  var trial = {
	    type: 'html-button-response',
		/*stimulus:'',*/
		stimulus: '<div style="position: absolute; top: 40%; left: 50%"><img src=" + repo_site + Q.png" width="100px"/></div>',
	    choices: [option_L, option_R],
		button_html: '%choice%',  
	    save_trial_parameters: {
	          choices: true,
	      }
	  
	  }


	  jsPsych.init({
	    timeline: [trial]
	  });