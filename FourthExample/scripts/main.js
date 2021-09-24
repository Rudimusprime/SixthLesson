const addBtn = document.querySelector('.add');
const cleanBtn = document.querySelector('.clean');
const showAdviceBtn = document.querySelector('.showAdvice');
const showOptionsBtn = document.querySelector('.showOptions');

const options = ["value 1", "value 2"];

const addOption = (e) => {
    e.preventDefault();
    const input = document.querySelector('input')
    options.push(input.value);
    alert(`Dodałeś ${input.value}!`)
    input.value = "";
    console.log(options);
}

const cleanInput = (e) => {
    e.preventDefault();
    options.length = 0;
}

const showAdvice = () => {
    const indexAdvice = Math.floor(Math.random() * options.length);
    const h1 = document.querySelector('h1');
    h1.textContent = options[indexAdvice];
}

const showOptions = () => {
    alert(options);
}

addBtn.addEventListener('click', addOption);
cleanBtn.addEventListener('click', cleanInput);
showAdviceBtn.addEventListener('click', showAdvice)
showOptionsBtn.addEventListener('click', showOptions)