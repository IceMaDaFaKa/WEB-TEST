var modal = document.getElementById('demo');

// When the user clicks anywhere outside of the modal, close it
function myFunction1(){
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        console.log("Hello world!");
    }
}

}

function showMore() {
    
  var review = document.getElementsByClassName("more");
  var btnText = document.getElementById("show-more-btn");
    if(review[0].style.display == "none"){
    review[0].style.display = "inline";
    review[1].style.display = "inline";
    review[2].style.display = "inline";
    review[3].style.display = "inline";
    btnText.innerHTML = "Скрии";
    }
    else{
    review[0].style.display = "none";
    review[1].style.display = "none";
    review[2].style.display = "none";
    review[3].style.display = "none";
    btnText.innerHTML = "Покажи още"; 
    }
}

function showReg(){
    var modal = document.getElementById("id01");
    var reg = document.getElementById("regform");
    modal.style.display = "none";
    reg.style.display = "block";
}

function showRegHide(){
    var reg = document.getElementById("regform");
    reg.style.display = "none";
}

function pswForget(){
    var modal = document.getElementById("id01");
    var reg = document.getElementById("pswforget");
    modal.style.display = "none";
    reg.style.display = "block";
}

function pswForgetHide(){
    var reg = document.getElementById("pswforget");
    reg.style.display = "none";
}

function showAlert(){
    
    var form = document.getElementById("login-form");

function myFunction() {
  if (form.checkValidity()) {
    var modal = document.getElementById("id01");
    $('.alert').show();
    setTimeout(function(){ $(".alert").fadeTo(1000, 0.4).slideUp(800); }, 3000);
    $(modal).fadeTo(1000, 0);
  }
}
    
    
    
}

function showLogin(){
    var modal = document.getElementById('id01');
    modal.style.display='block';
    modal.style.opacity='100';
}

function showLoginHide(){
    document.getElementById("id01").style.display = 'none';
}

var a;
function input(){
    showAlert();
    var name = document.getElementById("bname").value;
    var price = document.getElementById("price").value;
    
    var list = document.getElementsByClassName("col-xs-6");
    list[a].getElementsByClassName("lbname")[0].innerHTML = name;
    
    var p1 = price.substring(0,2);
    var p2 = price.substring(2,4);
     
    list[a].getElementsByClassName("lbprice")[0].innerHTML = p1;
    
    list[a].getElementsByClassName("lbpricedecimal")[0].innerHTML = p2;
    
    list[a].getElementsByClassName("lbpricename")[0].innerHTML = " лв";
    
    /*
    console.log(typeof curIdx);
    var name = document.getElementById("bname").value;
    document.getElementById("lbname").innerHTML = name;
    var price = document.getElementById("price").value;
    document.getElementById("lbprice").innerHTML = price + " лв";
    */
}


$('.panel').on("click",function() { 
    $(this).css('background', 'green'); 
});
/*
$(document).ready(function(){
  $(".col-xs-6").click(function(){
    alert($(".col-xs-6").index());
  });
});

$(document).ready(function(){
  $(".probata").click(function(){
    alert($(this).index());
  });
});
*/

$(".col-xs-6").bind("click", function(){
    var divs = $(".col-xs-6");
    var curIdx = divs.index($(this));
    
    a=curIdx;
});