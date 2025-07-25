const form=document.querySelector('form');
// console.log(form);
alert("Are you ready to calculate BMI ")
console.log(alert);


form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseFloat(document.querySelector('#Height').value);
    const weight = parseFloat(document.querySelector('#Weight').value);
    const result = document.querySelector('#result');


    if (height=== '' || height<=0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height.... ${height}`;
    }else if (weight=== '' || weight<=0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight... ${weight}`;
    } else {
//    result.innerHTML=`${weight}`;

//formula to calculate BMI
const bmi=(weight / ((height * height) / 10000)).toFixed(2);
//show the result
result.innerHTML=`<span>Your BMI is:${bmi}</span>`
    }
})
