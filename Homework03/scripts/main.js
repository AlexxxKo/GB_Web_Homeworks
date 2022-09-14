const GetName = () => {
    let question = null;
    while (!question) {
        question = prompt('Введите Ваше имя:');
    }
    alert(question);
}

GetName();