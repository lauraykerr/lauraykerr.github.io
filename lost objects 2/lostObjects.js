
var tweets = [];
var phrase = "i lost my";
var lostThings = [];
var lostThings2 = [];
var lostList;
var searchTerm = "weight";
var termResults = [];
var json;
var json2;
var tweetNumber;
var categories = false;


$(document).ready(function() {


			loadData();
			displayLostItems();
			displayLostStories();
			


function loadData() {

		$.ajax({
                    url: "test.json",
                    //force to handle it as text
                    dataType: "text",
                    success: function(data) {
                    	json = $.parseJSON(data);
              

                  	for (i = 0; i < json.statuses.length; i++) {
                   		tweets.push(json.statuses[i].text);
                   	}

                   	$.ajax({
                    url: "tweets.json",
                    //force to handle it as text
                    dataType: "text",
                    success: function(data) {
                    	json2 = $.parseJSON(data);
              

                  	for (j = 0; j < json2.tweets.length; j++) {
                   		tweets.push(json2.tweets[j].tweet);
                   	}
                 
            	}
			})
          }
	})	
}

function displayLostItems() {

	lostThings = ["mind", "way", "voice", "family", "favorite ring", "passion", "fire", "sita", "patience", "keys", "chill", "wallet", "phone", "virginity", "bet", "twitter", "password", "chapstick", "sister", "mind", "fave hoodie", "heart", "blackberry", "toe ring", "diary", "front tooth", "tiddies", "retainer", "faith", "bracelet", "NINTENDOGS", "license", "brother", "appetite", "confidence", "key", "16.8k", "DIPBROW", "abortion money", "umbrella", "eyeglasses", "glow", "fucking ball", "way", "giftcards", "Engine", "training gloves", "12.7k", "nose ring", "best friend", "passion", "shit"];
	lostThings2 = ["home", "toy", "earphones", "dad and mom", "mojo", "keys", "wallet", "putter", "girl", "tea", "HEART", "arms", "apple earbuds", "SHIT", "hat", "juice", "way", "halo", "phone", "beats headphones", "Mind", "left breast", "LOGIN", "remote", "sister", "glasses", "bestfriend", "appetite", "soul", "debit card", "sharpener", "retainer"];

			for (j = 0; j < lostThings2.length; j++) {
				lostList = $('<div class="lost-thing normal"></div>').appendTo(".lost-items");
				lostList.text(lostThings2[j]);
			}

			for (j = 0; j < lostThings.length; j++) {
				lostList = $('<div class="lost-thing normal"></div>').appendTo(".lost-items");
				lostList.text(lostThings[j]);
			}

	

	
}


// click on term; display tweets containing that term 
function displayLostStories() {
	
		$("div.lost-thing").each(function() {
			$(this).hover(function() {
				searchTerm = $(this).text();
				for (i = 0; i < tweets.length; i++) {
					if (tweets[i].search(searchTerm) > -1) {
						termResults = i;
						}
					}
		

			if ($(".lost-stories").css("opacity") > 0) {
				$(".lost-stories").clearQueue();
				$(".lost-stories").html(tweets[termResults]);
				$(".lost-stories").fadeTo(1000, 1).delay(3500).fadeTo(3500, 0);
			} else {	
				$(".lost-stories").html(tweets[termResults]);
				$(".lost-stories").fadeTo(1000, 1).delay(3500).fadeTo(3500, 0);
				}
			})

		})

		


}

});

 	
$(document).click(function() {

	var people = ["dad and mom", "girl", "sister", "bestfriend", "family", "sita", "brother", "best friend"];
	var things = ["toy", "earphones", "voice", "keys", "wallet", "putter", "arms", "apple earbuds", "giftcards", "Engine", "training gloves", "12.7k", "nose ring", "hat", "phone", "beats headphones", "left breast", "remote", "key", "umbrella", "eyeglasses", "glow", "fucking ball", "16.8k", "DIPBROW", "abortion money", "glasses", "debit card", "sharpener", "retainer", "favorite ring", "fire", "keys", "wallet", "phone", "twitter", "LOGIN", "password", "chapstick", "fave hoodie", "blackberry", "toe ring", "diary", "front tooth", "tiddies", "bracelet", "NINTENDOGS"];
	var mindset = ["mojo", "HEART", "SHIT", "way", "halo", "Mind", "appetite", "shit", "soul", "mind", "passion", "patience", "chill", "heart", "faith", "confidence", "way"];
	var other = ["home", "virginity", "tea", "juice", "voice", "bet", "license"];


	$("div.lost-thing").each(function() {
		
		categories = true;
		
		if (categories) {
			

			if (people.indexOf($(this).text()) > -1) {
				$(this).css("background-color", "#76cfe4");
				//$(this).toggleClass(".people");
			}

			if (things.indexOf($(this).text()) > -1) {
				$(this).css("background-color", "#ADE0DB");
				//$(this).toggleClass(".people");
			}

			if (mindset.indexOf($(this).text()) > -1) {
				$(this).css("background-color", "#3B8686");
				//$(this).toggleClass(".people");
			}

			if (other.indexOf($(this).text()) > -1) {
				$(this).css("background-color", "#EBF2F2");
				//$(this).toggleClass(".people");
			}

			categories = !categories;
		}
	})	
})






	// $(document).click(function() {
		
	// 	var result;
	// 	var position;
	// 	var spacePos;
	// 	var nextSpace;


	// 	for (i = 0; i < tweets.length; i++) {
	// 		var spaces = [];
	// 		for (j = 0; j < tweets[i].length; j++) {
						

	// 					if (tweets[i][j] === " ") {
	// 						spaces.push(j);
	// 					}
						
	// 					position = tweets[i].indexOf("i lost my") + phrase.length;
	// 					if (spaces.indexOf(position) > -1) {
	// 						spacePos = spaces.indexOf(position);			
	// 						}
	// 					if (spacePos != undefined) {
	// 						nextSpace = spaces[(spacePos + 1)];
	// 						}
	// 						//console.log(position + " " + "," + " " + nextSpace);
	// 						// if (nextSpace != undefined && nextSpace > position) {
	// 						// console.log(nextSpace);
	// 						// }

	// 						if (j < nextSpace && nextSpace != undefined && nextSpace > position) {
	// 							console.log(tweets[i][j]);
	// 						}

	// 					 // if (j <= nextSpace && nextSpace != undefined && nextSpace > position) {
	// 						// console.log(tweets[i][j]);
	// 						// }
	// 					}

	// 			}

		 
		


 



// loop through tweets array and find the word after 'i lost my,' return result 
	// look for "i lost my" substring using inArray method 
	// find indexOf space after "i lost my"
	// find indexOf next space
	// can find substring between two indexes? 
// for each result, first check to see if array exists called name of result (how??)
// if array exists, add tweet object to array
// if array does not exist, create new array called [result]