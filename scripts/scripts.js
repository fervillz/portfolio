jQuery( document ).ready( function ( $ ) {
	
	$( ".link-icon--1" ).hover(
		function() {
			$('.content-projects--1').addClass('open');
			$(this).addClass('active');
			
			$('.content').css('padding','10px 0');
			$('.icons').css('margin','0');

			//remove classes 2
			$('.content-projects--2').removeClass('open');
			$('.link-icon--2').removeClass('active');
			//remove classes 3
			$('.content-projects--3').removeClass('open');
			$('.link-icon--3').removeClass('active');

			//show hidden content
			$('.hidden-content').css('display','block');

			//pointer events
			$('.content-projects--1').css('pointer-events','auto');
			$('.content-projects--2').css('pointer-events','none');
			$('.content-projects--3').css('pointer-events','none');

			//remove submenus
			$('.project-icons').removeClass('open');

			//close
			$('.close-box').addClass('open');

			//body
			$('body').addClass('open');

			//author 
			$('.author').addClass('open');

			hidesub(5);
			
		}
	);



	$( ".link-icon--2" ).hover(
		function() {
			$('.content-projects--2').addClass('open');
			$(this).addClass('active');
			$('.content').css('padding','10px 0');
			$('.icons').css('margin','0');

			//remove classes 1
			$('.content-projects--1').removeClass('open');
			$('.link-icon--1').removeClass('active');
			//remove classes 3
			$('.content-projects--3').removeClass('open');
			$('.link-icon--3').removeClass('active');

			//show hidden content
			$('.hidden-content').css('display','block');

			//pointer events
			$('.content-projects--1').css('pointer-events','none');
			$('.content-projects--2').css('pointer-events','auto');
			$('.content-projects--3').css('pointer-events','none');

			//remove submenus
			$('.project-icons').removeClass('open');

			//close
			$('.close-box').addClass('open');

			//body
			$('body').addClass('open');

			//author 
			$('.author').addClass('open');
		}
	);

	$( ".link-icon--3" ).hover(
		function() {
			$('.content-projects--3').addClass('open');
			$(this).addClass('active');
			$('.content').css('padding','10px 0');
			$('.icons').css('margin','0');
			
			//remove classes 2
			$('.content-projects--2').removeClass('open');
			$('.link-icon--2').removeClass('active');
			//remove classes 1
			$('.content-projects-1').removeClass('open');
			$('.link-icon--1').removeClass('active');

			//show hidden content
			$('.hidden-content').css('display','block');

			//pointer events
			$('.content-projects--1').css('pointer-events','none');
			$('.content-projects--2').css('pointer-events','none');
			$('.content-projects--3').css('pointer-events','auto');

			//show sub menus
			$('.project-icons').addClass('open');

			//close
			$('.close-box').addClass('open');

			//body
			$('body').addClass('open');

			//author 
			$('.author').addClass('open');
			
		}
	);

	$( ".close-box" ).hover(
		function() {
			$(this).removeClass('open');
			$('.content').css('padding','20% 0');
			//remove classes
			$('.content-projects--1').removeClass('open');
			$('.content-projects--2').removeClass('open');
			$('.content-projects--3').removeClass('open');
			$('.link-icon--1').removeClass('active');
			$('.link-icon--2').removeClass('active');
			$('.link-icon--3').removeClass('active');
			$('.hidden-content').css('pointer-events','none');
			$('.icons').css('margin','50px');
			$('.project-icons').removeClass('open');

			//body
			$('body').removeClass('open');

			//author 
			$('.author').removeClass('open');

			hidesub(5);
			
		}
	);

	//author
	$( ".author" ).hover(
		function() {
			$('.author-desc').addClass('hovered');
			$('.author-name').addClass('hovered');
			    
		},
		function() {
			$('.author-desc').removeClass('hovered');
			$('.author-name').removeClass('hovered');
		}
	);

	//focus on hover
	$( "input" ).hover(
		function() {
			$(this).focus();
		}
	);

	$( "select" ).hover(
		function() {
			$(this).focus();
		}
	);

	$( "textarea" ).hover(
		function() {
			$(this).focus();
		}
	);


	//sub projects
	$( ".project-icon--1" ).hover(
		function() {
			//args # 1 - class number
			//args # 2 - class count
			project_icon('1', 5);
		}
	);

	//sub projects
	$( ".project-icon--2" ).hover(
		function() {
			project_icon('2', 5);
		}
	);

	//sub projects
	$( ".project-icon--3" ).hover(
		function() {
			project_icon('3', 5);
		}
	);

	//sub projects
	$( ".project-icon--4" ).hover(
		function() {
			project_icon('4', 5);
		}
	);

	//sub projects
	$( ".project-icon--5" ).hover(
		function() {
			project_icon('5', 5);
		}
	);
	

	function project_icon(addclasss, count) {
		
		//other container then close
		for (i = 1; i <= count; i++) { 
		    $('.content-sub-projects--'+i).removeClass('open');
		}

		$('.content-sub-projects--'+addclasss).addClass('open');

		return 0;
	}

	function hidesub(count) {
		//other container then close
		for (i = 1; i <= count; i++) { 
		    $('.content-sub-projects--'+i).removeClass('open');
		}

		return 0;
	}


});


