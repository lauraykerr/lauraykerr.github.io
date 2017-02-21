
$(document).ready(function(){

  $(".description").click(function(){
    $(".description").html("I. Lost in a single night in San Francisco in early 2013:")
    $(".images").fadeIn(1000);
  });

  $(".bag").hover(function(){
    $(".bag").fadeTo("fast", 1)
    $(".wallet").fadeTo("fast", .2)
    $(".notebook").fadeTo("fast", .2)
    $(".stories").fadeIn(500);
    $(".stories").delay(500).text("A bag, taken during a mugging at gunpoint late at night while walking with two others. It was leather with a bright blue lining that had bits of dirt and other debris stuck to it, and the morning after the experience (I was struck even while going through it by how much it resembled what I would expect of a mugging), my friend and I walked through the neighborhood looking into trashcans for our missing bags. I never found it.");
    $(this).css("-webkit-animation", "none")
  })

$(".notebook").hover(function(){
    $(".stories").fadeIn(1000);
    $(".notebook").fadeTo("fast", 1)
    $(".bag").fadeTo("fast", .2)
    $(".wallet").fadeTo("fast", .2)
    $(".stories").delay(500).text("In the stolen bag was a small notebook. Practically, its absence posed a problem: The notebook contained notes that I had taken for a story due in a few days at a newspaper internship. More than that, though, I missed the notebook because of a dream I had recorded in it, about my late grandmother. It is the only time I can recall waking up in the middle of the night and writing down a dream out of the desire to make it stick. It is strange to think that my dream floated out there in San Francisco, outside of my grasp.");
    $(this).css("-webkit-animation", "none")
  })

$(".wallet").hover(function(){
    $(".stories").fadeIn(1000);
    $(".wallet").fadeTo("fast", 1)
    $(".bag").fadeTo("fast", .2)
    $(".notebook").fadeTo("fast", .2)
    $(".stories").delay(500).text("A wallet is the one of most inconvenient objects to lose, but it also the least emotional. In this wallet, if I remember correctly, I had no more than $3 in cash, a few credit cards, and my driver's license. Only my loyal customer punch cards felt like any kind of sentimental loss.");
    $(this).css("-webkit-animation", "none")
  })



  $(".images").mouseleave(function(){
    console.log("left");
      $(".stories").fadeOut(500);
      $(".wallet").fadeTo("fast", .2)
      $(".bag").fadeTo("fast", .2)
      $(".notebook").fadeTo("fast", .2)
      $(this).css("-webkit-animation", "none")
  })



});




