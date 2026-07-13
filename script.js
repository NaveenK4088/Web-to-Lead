
function beforeSubmit(){
    let hiddenElement = document.querySelector("#hiddenLead");
    let actualInput = document.querySelector("#lead_date");
    
    let formattedDate = new Date(actualInput.value).toLocaleDateString("en-US");

    console.log(formattedDate);
    hiddenElement.value = formattedDate;
}