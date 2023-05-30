const celsius = document.querySelector(".c")
const fahrenheit = document.querySelector(".f")

const submit = document.querySelector("#submit");
submit.addEventListener("click",()=>{
	let c = celsius.value
	console.log(c);
	fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
});

window.addEventListener("load",()=> celsius.focus());

celsius.addEventListener("input",()=>{
	if (celsius.value == 0) {fahrenheit.value = 0}
});