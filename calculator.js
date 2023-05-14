var pyA = document.querySelector('.py-a');
var pyB = document.querySelector('.py-b');
var pyC = document.querySelector('.py-c');
var choice = document.querySelector('select[name="choice"]');

choice.addEventListener('change', disableInput);

pyA.addEventListener('keyup', calcPyC);
pyB.addEventListener('keyup', calcPyA);
pyC.addEventListener('keyup', calcPyB);

function disableInput() {
  if (choice.value === "hypotenuse") {
    pyC.disabled = true;
    pyA.disabled = false;
    pyB.disabled = false;
  } else if (choice.value === "leg a") {
    pyA.disabled = true;
    pyB.disabled = false;
    pyC.disabled = false;
  } else if (choice.value === "leg b") {
    pyB.disabled = true;
    pyA.disabled = false;
    pyC.disabled = false;
  }
}

function calcPyC(event) {
  if (pyA.value.length > 0 && pyB.value.length > 0) {
    pyC.value = Cfind(pyA.value, pyB.value)
  } else {
    pyC.value = '';
  }
}

function calcPyA(event) {
  if (pyB.value.length > 0 && pyC.value.length > 0) {
    pyA.value = Afind(pyB.value, pyC.value)
  } else {
    pyA.value = '';
  }
}
function calcPyB(event) {
  if (pyA.value.length > 0 && pyC.value.length > 0) {
    pyB.value = Bfind(pyA.value, pyC.value)
  } else {
    pyB.value = '';
  }
}

function printvalue(leg1, leg2, hypotenuse) {
  if (choice.value === "leg a") {
    document.querySelector('#printvalue').innerText = 'a=' + leg1;
    pyA.innerText = 'a=' + leg1;
  }
  if (choice.value === "leg b") {
    document.querySelector('#printvalue').innerText = 'b=' + leg2;
    pyB.innerText = 'b=' + leg2;
  }
  if (choice.value === "hypotenuse") {
    document.querySelector('#printvalue').innerText = 'c=' + hypotenuse;
    pyC.innerText = 'c=' + hypotenuse;
  }
}

function Afind(leg2, hypotenuse) {
  var x = Math.sqrt;
  var q = leg2;
  var p = hypotenuse;
  var y = (q * q);
  var z = (p * p);
  var leg1 = x((z) - (y));
  return + leg1.toFixed(2);
}


function result() {
  var leg1
  var leg2;
  var hypotenuse;

  if (choice.value === "leg a") {
    leg2 = document.querySelector('#leg2').value;
    hypotenuse = document.querySelector('#hypotenuse').value;
    leg1 = Afind(leg2, hypotenuse);
    document.getElementById('result').innerText = 
    `
    √(${hypotenuse}^2)-√(${leg2}^2)=a`;
    printvalue(leg1, leg2, hypotenuse);
    document.querySelector('#leg1').innerText
  }
  if (choice.value === "leg b"){
    leg1 = document.querySelector('#leg1').value;
    hypotenuse = document.querySelector('#hypotenuse').value;
    leg2 = Bfind(leg1, hypotenuse);
    document.getElementById('result').innerText = 
    `
    √(${hypotenuse}^2)-√(${leg1}^2)=b`;
    printvalue(leg1, leg2, hypotenuse);
    document.querySelector('#leg2').innerText
  }
  if (choice.value === "hypotenuse"){
    leg1 = document.querySelector('#leg1').value;
    leg2 = document.querySelector('#leg2').value;
    hypotenuse = Cfind(leg1, leg2);
    document.getElementById('result').innerText = 
    `

    √(${leg1}^2)+√(${leg2}^2)=c`;
    printvalue(leg1, leg2, hypotenuse);
    document.querySelector('#leg2').innerText
  }
}

function Afind(leg2, hypotenuse) {
  var x = Math.sqrt;
  var q = leg2;
  var p = hypotenuse;
  var y = (q * q);
  var z = (p * p);
  var leg1 = x((z) - (y));
  return + leg1.toFixed(2);
}

function Bfind(leg1, hypotenuse) {
  var x = Math.sqrt;
  var v = leg1;
  var e = hypotenuse;
  var y = (e * e);
  var z = (v * v);
  var leg2 = x((y) - (z));
  return + leg2.toFixed(2);
}

function Cfind(leg1, leg2) {
  var x = Math.sqrt;
  var a = leg1;
  var b = leg2;
  var y = (a * a);
  var z = (b * b);
  var hypotenuse = x((y) + (z));
  return + hypotenuse.toFixed(2);
}

disableInput();