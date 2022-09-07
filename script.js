var btn=document.querySelector('.btn');
console.log(btn);
var txtInput=document.querySelector('.txtareainput');
var txtOutput=document.querySelector('.txtarearesult');
var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL +"?"+"text="+text;
}
function clickHandler(){
    var input=txtInput.value;

    fetch(getTranslationURL(input))
        .then(response=>response.json())
        .then(json =>{
            var translated =json.contents.translated
            txtOutput.innerText=translated;
        })   
};
btn.addEventListener("click",clickHandler())