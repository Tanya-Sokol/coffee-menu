function mutateText(text, character) {
    // Если текст или символ пустые, вернуть пустую строку
    console.log('!text: ', !text);
    console.log('!character: ', !character);
    if (!text || !character) {
        return "";
    }

    // Заменить все символы в тексте на указанный символ
    console.log('length: ', text.length);
    return character.repeat(text.length);
}

// Примеры использования
console.log(mutateText("1d", "*")); // Вывод: "***********"
console.log(mutateText("hello world", "#")); // Вывод: "###########"
console.log(mutateText("", "*"));            // Вывод: ""
console.log(mutateText("text", ""));         // Вывод: ""
