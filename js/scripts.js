$(document).ready(function() {
  $('#lang1').hide();
  $('#lang2').hide();
  $('#lang3').hide();

  $("#question1").submit(function(event) {

    event.preventDefault()
  
    const quest1 = parseInt($("#quest1").val());
    const quest2 = parseInt($("#quest2").val());
    const quest3 = parseInt($("#quest3").val());
    const quest4 = parseInt($("#quest4").val()); 
    const quest5 = parseInt($("#quest5").val());

  


    let price = quest1+quest2+quest3+quest4+quest5



   if (price >= 3 && price <= 8) {
      console.log(">=3 && <= 8");
      $('#lang1').show();
    } else if (price >= 8 && price<=13) {
      console.log(">=8 && <= 13");
      $('#lang2').show();
    } else if (price >= 13) {
      console.log(">=13");
      $('#lang3').show();
    }


    console.log($('#question1'));
;


  });

  $("#goaway").click(function() {
    $('#lang1').hide("");
    $('#lang2').hide("");
    $('#lang3').hide("");
    });
}); 