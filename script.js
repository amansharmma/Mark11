// mark11
const DateOfBirth = document.querySelector("#date-of-birth");
const LuckyNumber  = document.querySelector("#lucky-number");
const CheckNumber = document.querySelector("#check-number");
const Outputs = document.querySelector("#Output");



CheckNumber.addEventListener("click", sum)
function sum(){
    const BD = DateOfBirth.value;
    const date = BD.replaceAll("-","");
    const numberr = LuckyNumber.value;

    let add = 0;
    if (BD&&numberr){
        for (let inisyalizer = 0; inisyalizer < date.length; inisyalizer++){
            add = add + Number(date.charAt(inisyalizer));
        }
        if (add % numberr == 0){
            Outputs.innerText = ("Lucky number he");
        }else {
            Outputs.innerText = ("Lucky number nhi he");
        }
    }else{
    Outputs.innerText = "Please enter both the fields:)"
    }
}