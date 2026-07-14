let captha_value = false;
function beforeSubmit(event){
    if(captha_value){
        let hiddenElement = document.querySelector("#hiddenLead");
        let actualInput = document.querySelector("#lead_date");
    
        let formattedDate = new Date(actualInput.value).toLocaleDateString("en-US");

        console.log(formattedDate);
        hiddenElement.value = formattedDate;
    }else{
        alert("Please check the reCAPTCHA box to submit the lead");
        event.preventDefault();
    }
}

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == ""){
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    } 
} 
setInterval(timestamp, 500);

function capthaSuccess(){
    captha_value = true;
}