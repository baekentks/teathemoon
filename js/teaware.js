// JavaScript Document
$(document).ready(function(){

	/*$("a[href = '#']").click(function(e){
		e.preventDefault();
		return false;
	});*/

	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
		isMobile = true;
	}

/*~~~~~~~~~~~~~~~~~~~~teaware*/
					   
	var menu_btn = $("div.menu_li > ul > li > a");
	var menu_count = $("div.menu_char > div");
	var body = $('body');
					   
	menu_count.hide().eq(0).show();
					   
	menu_btn.click(function(e){
		e.preventDefault();
		var target = $(this).parent();
		var index = target.index();
		console.log(index);
		menu_btn.removeClass("active");
		target.children().addClass("active");
		menu_count.css("display", "none");
		menu_count.eq(index).css("display", "block");

	});

	/***** 디바이스별 분기 *****/
	// 데스크탑
	if(!isMobile){
		
		$("#Onclick").click(function(e){
			e.preventDefault();
			$("#layer > img").attr("src", "images/img_teaware_popup_teapot_D_01.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#Onclick_2").click(function(e){
			e.preventDefault();
			$("#layer > img").attr("src", "images/img_teaware_popup_teapot_D_02.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#Onclick_3").click(function(e){
			e.preventDefault();
			$("#layer > img").attr("src", "images/img_teaware_popup_teapot_D_03.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#Onclick_4").click(function(e){
			e.preventDefault();
			$("#layer > img").attr("src", "images/img_teaware_popup_teacup_D_01.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
						body.css('overflow','hidden');
body.css('overflow','hidden');
	});

		$("#Onclick_5").click(function(e){
			e.preventDefault();
			$("#layer > img").attr("src", "images/img_teaware_popup_teacup_D_02.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#Onclick_6").click(function(e){
			e.preventDefault();
			$("#layer > img").attr("src", "images/img_teaware_popup_teacup_D_03.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#Onclick_7").click(function(e){
			e.preventDefault();
			$("#layer > img").attr("src", "images/img_teaware_popup_tumblr_D_01.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#Onclick_8").click(function(e){
			e.preventDefault();
			$("#layer > img").attr("src", "images/img_teaware_popup_tumblr_D_02.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#Onclick_9").click(function(e){
			e.preventDefault();
			$("#layer > img").attr("src", "images/img_teaware_popup_tumblr_D_03.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("div.popup_bg").click(function(e){
			e.preventDefault();
			$("div.popup").css("display", "none");
			$("div.popup_bg").css("display", "none");
			body.css('overflow','auto');
		});
		
		$("#close").click(function(e){
			e.preventDefault();
			$("div.popup").css("display", "none");
			$("div.popup_bg").css("display", "none");
			body.css('overflow','auto');
		});	

	}

	else {

		// Tablet
		if(screen.width >= 768){

		$("#img_clk").click(function(e){
			e.preventDefault();
			$("#p_02").attr("src", "images/img_teaware_popup_teapot_T_01.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#img_clk_02").click(function(e){
			e.preventDefault();
			$("#p_02").attr("src", "images/img_teaware_popup_teapot_T_02.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#img_clk_03").click(function(e){
			e.preventDefault();
			$("#p_02").attr("src", "images/img_teaware_popup_teapot_T_03.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#img_clk_04").click(function(e){
			e.preventDefault();
			$("#p_02").attr("src", "images/img_teaware_popup_teacup_T_01.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#img_clk_05").click(function(e){
			e.preventDefault();
			$("#p_02").attr("src", "images/img_teaware_popup_teacup_T_02.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#img_clk_06").click(function(e){
			e.preventDefault();
			$("#p_02").attr("src", "images/img_teaware_popup_teacup_T_03.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#img_clk_07").click(function(e){
			e.preventDefault();
			$("#p_02").attr("src", "images/img_teaware_popup_tumblr_T_01.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#img_clk_08").click(function(e){
			e.preventDefault();
			$("#p_02").attr("src", "images/img_teaware_popup_tumblr_T_02.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#img_clk_09").click(function(e){
			e.preventDefault();
			$("#p_02").attr("src", "images/img_teaware_popup_tumblr_T_03.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("div.popup_bg").click(function(e){
			e.preventDefault();
			$("div.popup").css("display", "none");
			$("div.popup_bg").css("display", "none");
			body.css('overflow','auto');
		});
		
		$("#close").click(function(e){
			e.preventDefault();
			$("div.popup").css("display", "none");
			$("div.popup_bg").css("display", "none");
			body.css('overflow','auto');
		});

		}

		// Mobile
		else {

		$("#img_clk").click(function(e){
			e.preventDefault();
			$("#p_03").attr("src", "images/img_teaware_popup_teapot_M_01.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#img_clk_02").click(function(e){
			e.preventDefault();
			$("#p_03").attr("src", "images/img_teaware_popup_teapot_M_02.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#img_clk_03").click(function(e){
			e.preventDefault();
			$("#p_03").attr("src", "images/img_teaware_popup_teapot_M_03.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#img_clk_04").click(function(e){
			e.preventDefault();
			$("#p_03").attr("src", "images/img_teaware_popup_teacup_M_01.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#img_clk_05").click(function(e){
			e.preventDefault();
			$("#p_03").attr("src", "images/img_teaware_popup_teacup_M_02.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#img_clk_06").click(function(e){
			e.preventDefault();
			$("#p_03").attr("src", "images/img_teaware_popup_teacup_M_03.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#img_clk_07").click(function(e){
			e.preventDefault();
			$("#p_03").attr("src", "images/img_teaware_popup_tumblr_M_01.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#img_clk_08").click(function(e){
			e.preventDefault();
			$("#p_03").attr("src", "images/img_teaware_popup_tumblr_M_02.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("#img_clk_09").click(function(e){
			e.preventDefault();
			$("#p_03").attr("src", "images/img_teaware_popup_tumblr_M_03.jpg");
			$("div.popup").css("display", "block");
			$("div.popup_bg").css("display", "block");
			body.css('overflow','hidden');
		});

		$("div.popup_bg").click(function(e){
			e.preventDefault();
			$("div.popup").css("display", "none");
			$("div.popup_bg").css("display", "none");
			body.css('overflow','auto');
		});
		
		$("#close").click(function(e){
			e.preventDefault();
			$("div.popup").css("display", "none");
			$("div.popup_bg").css("display", "none");
			body.css('overflow','auto');
		});

		}
		
	}


});
