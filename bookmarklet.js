javascript:(
	function() {	
		console.log("testing"); 
		if (typeof($candyHelper) == "undefined" || $candyHelper == null) { 		
			console.log("adding script"); 
			document.body.appendChild(
				document.createElement("script").src ="http://localhost:3000/javascripts/candybox.js";
			)
		} else { 
			console.log("already a helper"); 
			$candyHelper.fadeIn();
		}  
	}
)();