document.getElementById("bmiForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100;
  
    let resultBox = document.getElementById("result");
  
    if (isNaN(weight) || isNaN(height) || height === 0) {
      resultBox.textContent = "Please enter valid numbers.";
      resultBox.classList.remove("show");
      resultBox.style.color = "red";
      return;
    }
  
    let bmi = weight / (height * height);
    let status = "";
  
    if (bmi < 18.5) {
      status = "Underweight";
    } else if (bmi < 25) {
      status = "Normal weight";
    } else if (bmi < 30) {
      status = "Overweight";
    } else {
      status = "Obese";
    }
  
    resultBox.textContent =`Your BMI is ${bmi.toFixed(2)} — ${status}`;
    resultBox.style.color = "#222";
    resultBox.classList.add("show");
  });