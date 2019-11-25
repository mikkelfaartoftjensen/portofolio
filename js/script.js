//function that enables submission in term of number
function insrt(num) {
  $(".calc-display").val($(".calc-display").val() + num);
}
//function that enables the equal sign
function eql() {
  $(".calc-display").val(eval($(".calc-display").val()));
}
//function that clears the display
function c() {
  $(".calc-display").val("");
}
//function that deletes one charachter
function del() {
  value = $(".calc-display").val();
  $(".calc-display").val(value.substring(0, value.length - 1));
}



//function that enables keypress enter in calc-display
$('.calc-display').keypress(function(e){
     if(e.keyCode==13){
     $('.calc-sign-eql').click();
     if(e.keyCode==67){
       $(".calc-sign-c").click();
     }
   return false;}
   });




//toggle light / dark mode
   $('#switch').click(function() {
     $(".calc-display, body, table, *").toggleClass("alt");
   });
