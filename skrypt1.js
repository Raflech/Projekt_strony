$(document).ready(function(){
    $('#typePassword').keyup(function(){
        var strength=0;
        var a, b, c, d, e;
        var password=document.formularz.typePassword.value;

        
        if(password.length>9){
            b=1;
            $('#a').attr("style", "color: green");
            strength=a+b+c+d+e;
        }else{
            b=0;
            $('#a').attr("style", "color: red");
            strength=a+b+c+d+e;
        }
        if(password.match(/[A-Ż]/g)){
            c=1;
            $('#c').attr("style", "color: green");
            strength=a+b+c+d+e;
        }else{
            c=0;
            $('#c').attr("style", "color: red");
            strength=a+b+c+d+e;
        }
        if(password.match(/[a-ż]/g)){
            a=1;
            $('#b').attr("style", "color: green");
            strength=a+b+c+d+e;
        }else{
            a=0;
            $('#b').attr("style", "color: red");
            strength=a+b+c+d+e;
        }
        if(password.match(/[!,%,&,@,#,$,^,*,?,_,~,.]/g)){
            d=1;
            $('#d').attr("style", "color: green");
            strength=a+b+c+d+e;
        }else{
            d=0;
            $('#d').attr("style", "color: red");
            strength=a+b+c+d+e;
        }
        if(password.match(/\d/g)){
            e=1;
            $('#e').attr("style", "color: green");
            strength=a+b+c+d+e;
        }else{
            e=0;
            $('#e').attr("style", "color: red");
            strength=a+b+c+d+e;
        }

        if(strength==0){
            $('#strength').removeAttr("style", "aria-valuenow");
            $('#strength').attr("aria-valuenow", "0");
        }
        if(strength==1){
            $('#strength').removeAttr("style", "aria-valuenow");
            $('#strength').attr("aria-valuenow", "20");
            $('#strength').css({"background-color": "#ff0000", "width": "20%"});
        }
        if(strength==2){
            $('#strength').removeAttr("style", "aria-valuenow");
            $('#strength').attr("aria-valuenow", "40");
            $('#strength').css({"background-color": "#ffa700", "width": "40%"});
        }
        if(strength==3){
            $('#strength').removeAttr("style", "aria-valuenow");
            $('#strength').attr("aria-valuenow", "60");
            $('#strength').css({"background-color": "#fff400", "width": "60%"});
        }
        if(strength==4){
            $('#strength').removeAttr("style", "aria-valuenow");
            $('#strength').attr("aria-valuenow", "80");
            $('#strength').css({"background-color": "#a3ff00", "width": "80%"});
        }
        if(strength==5){
            $('#strength').removeAttr("style", "aria-valuenow");
            $('#strength').attr("aria-valuenow", "100");
            $('#strength').css({"background-color": "#2cba00", "width": "100%"});
        }
    })
    $('#toggle').on("click", function(){
        if($('#toggle').attr("src")=="eye_close.png"){
            $('#toggle').attr({"src": "eye_open.png", "type": "text"});
        }
    })
    $('#typePassword').on("keyup", function(){
        $('#label1').text("");
    })
})