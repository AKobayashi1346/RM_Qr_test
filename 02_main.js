	var repo_site = "https://akobayashi1346.github.io/RM_Qr_test/";
	
	var timeline = [];
	
	var scene_1 = '<div class="text_scene">どちらをおすすめしますか？</div>'
	
	var option_L = '<div style="position: absolute; top: 40%; right: 20%"><img src="https://akobayashi1346.github.io/RM_Qr_test/1_C.png" width="200px"></div>'
	var option_R = '<div style="position: absolute; top: 40%; left: 20%"><img src="https://akobayashi1346.github.io/RM_Qr_test/2_C.png" width="200px"></div>'
	var Q = '<div style="position: absolute; top: 45%; right: 45%"><img src="https://akobayashi1346.github.io/RM_Qr_test/Q.png" width="150px"/></div>'
	
	var rew_A = '<div style="position: absolute; top: 35%; right: 20%"><img src="https://akobayashi1346.github.io/RM_Qr_test/100jpy.png" width="200px"/></div>'
	
	var total = 0;
	var total_dis = String(total);
	var total_point = '<div class="text_total">あなたの獲得金額：　' + total_dis + '　円</div>'
	
  var trial_A_1 = {
    type: 'html-button-response',
	stimulus: [scene_1, Q, total_point],
    choices: [option_L, option_R],
	button_html: '%choice%',
	  on_finish: function(data){
		  var advice = jsPsych.data.get().select('response');
	  }	    
    }
	
	timeline.push(trial_A_1);
