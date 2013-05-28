$.fn.exists = function () {
    return this.length !== 0;
}

var $candyHelper = $('#candyHelper');
var $candies = $('#cauldron_candies_quantity');
var $lollipops = $('#cauldron_lollipops_quantity');
var $mix = $('#cauldron_mix');
var $boil = $('#cauldron_boil');
var $stop = $('#cauldron_stop');
var $bottle = $('#cauldron_put_into_bottles');
var $healthPots = null;
var $invulnPots = null;
var $createPots = null;


var continuePotions = false;
var makingPotions = false;

if (!$candyHelper.exists()) {
	$('<div>', {
		css: {
			border: "1px solid #333333",
			position: "absolute",
			right: "5px",
			top: "5px",
			height: "200px",
			width: "400px",
			zIndex: 100000,
			backgroundColor: "#333333",
			color: "#ffffff",
			display: "none",
			padding: "5px"
		}
	}).attr('id',"candyHelper")
	.appendTo('body');
	$candyHelper = $('#candyHelper');	
	
	$candyHelper.load('http://static.codevinsky.com/candybox//helperLayout.html', function() {
		setupHelper();
		$candyHelper.fadeIn();
	});
} else {
	$chandyHelper.fadeIn();
}

function setupHelper() {

	//*variables*//
	$createPots = $('#autoCreatePotionsCheckbox');
	$healthPots = $('#healthPotions');
	$invulnPots = $('#invulnPotions');

	//*events*//
	$('#helperClose').click(function() {
		$candyHelper.fadeOut();
	});

	$createPots.change(function(e) {
	
		if($(this).is(':checked')) {
			continuePotions = true;
			makePotions();
		} else {
			continuePotions = false;
		}
	});
	$candyHelper.find('input[type=number]').change(function() {
		if (continuePotions && !makingPotions) {
			makePotions();
		}
	});
}

function makePotions() {

	if (continuePotions) {
		if ($healthPots.val() > 0) {
			makeHealthPotion();
		} else if ($invulnPots.val() > 0) {
			makeInvulnPotion();
		} else 
			makingPotions = false;
	} else 
		makingPotions = false;
}

function makeHealthPotion() {
		makingPotions = true;
		$lollipops.val(100);
		cauldron.putInTheCauldron();
		$mix.click();
		$candies.val(100);
		cauldron.putInTheCauldron();
		setTimeout(function() {
			$stop.click();
			$bottle.click();
			$healthPots.val($healthPots.val() -1);
			makePotions();
		}, 17000);
}

function makeInvulnPotion() {
	$candies.val(2000);
	cauldron.putInTheCauldron();
	$mix.click();
	setTimeout(function() {
		$stop.click();
		$bottle.click();
		$invulnPots.val($invulnPots.val() -1);
		makePotions();
	}, 60000);
}