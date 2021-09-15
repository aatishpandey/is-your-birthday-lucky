const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#btn-check-number");

function calculateSum(Bdate){
    Bdate = Bdate.replaceAll("-","");
    let sum = 0;
    for(let i=0;i<Bdate.length;i++)
    {
        sum += Number(Bdate.charAt(i));
    }
    return sum;
}

function checkLuckyNumber{
    const Bdate =  dateOfBirth.value;
    const sum = calculateSum(Bdate);

    
}


checkBtn.addEventListener('click',function checkLuckyNumber(){


})

