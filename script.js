const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const button = document.querySelector(".button");
const result = document.querySelector(".result");
const htr = document.querySelector(".htr");
const rangeButton = document.querySelector(".range-button");
const rangeList  = document.querySelector(".range ul");


function showBmi() {

  let vWeight = weight.value;
  let vHeight = height.value;

  let BMI = vWeight/(vHeight*vHeight);


  result.textContent = `YOUR BMI:${BMI.toFixed(2)}`;

  if (BMI < 18.5) {
    htr.textContent = `status:Underweight`;
  } else if (BMI < 24.5) {
    htr.textContent = `Normal`;
  } else if (BMI < 29.5) {
    htr.textContent = `over weight`;
  } else if (BMI < 34.5) {
    htr.textContent = `obesity 2`;
  } else if (BMI <= 34.5) {
    htr.textContent = `Severe `;
  } else {
    htr.textContent = `Obesity `;
  }
}

function showData(){
  rangeList.innerHTML = '';
  const ranges = [
    'Underweight: BMI < 18.5',
    'Normal weight: BMI 18.5 - 24.9',
    'Overweight: BMI 25 - 29.9',
    'Obesity (Class 1): BMI 30 - 34.9',
    'Obesity (Class 2): BMI 35 - 39.9',
    'Obesity (Class 3): BMI ≥ 40'
];
for (let i=0;i<ranges.length;i++){
const listItem = document.createElement('li');
listItem.textContent = ranges[i];
rangeList.appendChild(listItem);
}

}

rangeButton.addEventListener("click", showData);
button.addEventListener("click", showBmi);


