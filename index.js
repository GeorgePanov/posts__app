settimeout.addEventListener('click', () => {
    console.log("Начало программы");

    setTimeout(function () {
        console.log("Асинхронная операция завершена");
    }, 2000);

    console.log("Конец программы");
})

promise.addEventListener('click', () => {
    console.log("Начало программы");

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("Данные получены:", data);
        })
        .catch(function (error) {
            console.log("Ошибка при получении данных:", error);
        });

    console.log("Конец программы");
})

async.addEventListener('click', () => {
    console.log("Начало программы");

    async function getData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log("Данные получены:", data);
        } catch (error) {
            console.log("Ошибка при получении данных:", error);
        }
    }

    getData();

    console.log("Конец программы");
})







