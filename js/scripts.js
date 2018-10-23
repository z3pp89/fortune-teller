$(document).ready(function(){
    $("form#fortune-teller").submit(function(event){
      event.preventDefault();
      
    var counter1 = 0;
    var counter2 = 0;

    $("input:checkbox[name=question1]:checked").each(function(){
      counter1 ++;
    });
    
    $("input:checkbox[name=question2]:checked").each(function(){
      counter2 ++;
    });

    $("#fortune").show();
    
    if(counter2 > counter1) {
        $("#fortune").append("<p>You are lucky</p>");
    } else if(counter1 > counter2) {
        $("#fortune").append("<p>You are unlucky</p>");
    } else if(counter1 === counter2) {
        $("#fortune").append("<p>You are balanced</p>");
    }   




    //   var userResponses = [];
    //   $("input:checkbox[name=question1]:checked").each(function(){
    //   var unluckyResponse = $(this).val();
    //   userResponses.push(unluckyResponse);
    //   }); 
       
    //  var userResponses2 = [];
    //  $("input:checkbox[name=question2]:checked").each(function(){
    //  var luckyResponse = $(this).val();
    //  userResponses2.push(luckyResponse);
    //   });

    });
});
