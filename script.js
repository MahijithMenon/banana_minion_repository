var btn=document.querySelector('.btn');
var txtInput=document.querySelector('.txtareainput');
var outputDiv = document.querySelector("#output");
var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL +"?"+"text="+text;
}
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}
function clickHandler(){
    var input=txtInput.value;
    

    fetch(getTranslationURL(input))
        .then(response=>response.json())
        .then(json =>{
            var translated =json.contents.translated
            outputDiv.innerText = translated;
        })   
        .catch(errorHandler)
};
btn.addEventListener("click",clickHandler)