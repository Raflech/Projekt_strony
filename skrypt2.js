$(function(){
    $('#generuj').on("click", function(){
        var text=document.formularz1.typeText.value;
        var haslo="";

        const znak=["!","%","&","@","#","$","^","*","?","_","~","."];
        const cyfra=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        const litera=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var random_z=Math.floor(Math.random()*znak.length);
        var random_z1=Math.floor(Math.random()*znak.length);
        var random_c=Math.floor(Math.random()*cyfra.length);
        var random_c1=Math.floor(Math.random()*cyfra.length);
        var random_l=Math.floor(Math.random()*litera.length);
        var random_l1=Math.floor(Math.random()*litera.length);

        haslo=litera[random_l1].toLocaleUpperCase()+text[0].toUpperCase()+text.substring(1);
        haslo=haslo+cyfra[random_c]+litera[random_l]+cyfra[random_c1];
        haslo=haslo+znak[random_z1];
        if(haslo.match(/\s/g)){
            haslo=haslo.replace(/\s/g, znak[random_z]);
        }
        while(haslo.length<10){
            haslo=haslo+haslo;
        }
        $('#demo').text(haslo);
    })
    $('#typeText').on("keyup", function(){
        $('#label2').text("");
    })
})