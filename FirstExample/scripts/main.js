const btn = document.querySelector('button');
const names = ["Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", "Marysia", "Anastazja"];
const prefix = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"]
const nameGenerator = () => {

    const indexName = Math.floor(Math.random() * names.length);
    const indexPrefix = Math.floor(Math.random() * prefix.length);
    const div = document.querySelector('div');

    div.textContent = `${prefix[indexPrefix]}, że najlepsze będzie imię ${names[indexName]}`;
}

btn.addEventListener('click', nameGenerator);