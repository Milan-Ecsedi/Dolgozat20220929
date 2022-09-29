


function dark(){

   document.getElementById('body').classList.add('DarkMode');
   

}
function kepszeles(){

       // let url= document.getElementById('inputkep').value;
        let kepszel= document.getElementById('inputkepszelesseg').value;
        
        let keretsz= document.getElementById('inputkeretszin').value;

        

    return  document.getElementById('akep').width = kepszel;
   

}
function kepkeret(){

    let keretvast= document.getElementById('inputkeretvastagsag').value;


    return document.getElementById('akep').style.borderRadius= keretvast;
}
 
function kepkszin(){


    let keretszin= document.getElementById('inputkeretszin').value;

return document.getElementById('akep').style.borderColor = keretszin;

}


 function init(){


        document.getElementById('darkmode').addEventListener('click', dark);
        document.getElementById('inputkep').addEventListener('click', kepeditor);
        document.getElementById('inputkeretvastagsag').addEventListener('change', kepkeret);
        document.getElementById('inputkepszelesseg').addEventListener('change', kepszeles);
        document.getElementById('inputkeretszin').addEventListener('change', kepkszin);


}

document.addEventListener("DOMContentLoaded", init);
