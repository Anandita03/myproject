
$(document).ready(function(){

 
$('#form').submit(function(e){
e.preventDefault();
      var obj = {
        fname: $('input#fname').val(),
        lname: $('input#lname').val(),
        email: $('input#email').val(),
        gender: $('input[name=answer]:radio:checked').val()
      }
      console.log(obj);
    

alert("Thnku!");
    });
});
