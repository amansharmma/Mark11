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
            Outputs.innerText = ("Hey Great your birth date is lucky:)");
        }else {
            Outputs.innerText = ("Opps, your Birth day date is not lucky. ");
        }
    }else{
    Outputs.innerText = "Please Fill both the fields:)"
    }
}