$(function(){
	
	// Homepage crousle continuse rotation
	if($('#myCarousel').length>0){
		$('#myCarousel').carousel({
		  interval: 3000,
		  cycle: true
		}); 
	}
	
	// Navigation Active Class Funcion 
  	setNavigation()
	
	//Model custome scroll bar
	if($('.bs-example-modal-lg').length>0){
		$('.bs-example-modal-lg').on('shown.bs.modal', function (e) {
		  $(".scroll").jScrollPane();
		})
		
		$('.bs-example-modal-lg').on('hidden.bs.modal', function (e) {
		 // $(".modal-body").jScrollPane();
		})
	}
	
	//removing modal data when closed
	$('body').on('hidden.bs.modal', '.modal', function () {
	  $(this).removeData('bs.modal');
	});
	
	//$('.bs-example-modal-lg').modal('show')
// end of ready function
})

// Navigation Active Class Funcion
function setNavigation() {
	path = location.pathname.split('/').slice(-1)[0]
	//console.log(path)
	$(".nav>li>a").each(function () {
		var href = $(this).attr('href');
		//console.log(href)
		if (path.substring(0, href.length) === href) {
					$(this).closest('li').addClass('act');
		}
		/*else if(path==="PipelineAnalyser.html" || path==="Summary.html" || path==="RelativeCompetitiveStrength.html" || path==="LaunchTimelines.html" || path==="Brands.html"){
					$(".Navigation>ul>li:nth-child(2)").addClass('act');
			}*/
		
	});
	
}