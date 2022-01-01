"use strict";

/**
 * Функция проверяет входит ли индекс в допустимый диапазон массива
 * @param {Number} index - передавамый индекс для проверки
 * @returns {Boolean} - возвращает true если индекс находится в диапазоне от 0 до длинны массива
 */
Array.prototype.indexInRange = function(index) {
    return index >= 0 && index < this.length;
};

class QuestionData {
    /**
     * Функция конструктор возвращает объект с переданными данными для вопроса
     * @param {String} question - Вопрос
     * @param {Array} answerOptions - Варианты ответов
     * @param {Number} rightAnswerOption - Правильный вариант ответа 
     */
    constructor(question, answerOptions, rightAnswerOption) {
        this.question = question;
        this.answerOptions = answerOptions;
        this.rightAnswerOption = rightAnswerOption;
    }

    get countAnswer()
    {
        return this.answerOptions.length;
    }

    /**
     * геттер возвращает строку с вариантами ответов
     * @returns {String} - строка с вариантами ответов
     */
    get getQuestionWithAnswerOptions()
    {
        return `Вопрос: ${this.question};\
        \nВарианты ответов:\n${
            this.answerOptions
            .map(function(answer, i) { 
                return `${i + 1}: ${answer};` 
            })
            .join('\n')
        }`;
    }

    /**
     * Функция проверяет переданный ответ
     * @param {(String|Number)} answer - ответ
     * @throws {Error} - будет выбрасываться исключение если передан неверный формат ответа
     * или если ответ указывает на несуществующий ответ
     * @returns {Boolean} - возвращает true если ответ правильный false если не правильный или выбрасывает
     * исключение если передан неверный формат ответа
     */
    checkRightAnswer(answer) {

        if( ["string", "number"].includes(typeof(answer)) && 
            Number.isInteger(answer = Number(answer) - 1) && 
            this.answerOptions.indexInRange(answer))
            return answer === this.rightAnswerOption;

        throw new Error('Введён неверный формат ответа.');
    }
}

class DataResultGame {
    /**
     * Функция конструктор которая возвращает объект с инф. о результате игры
     * @param {Number} countQuestionsGettingAnswer - Количество вопросов на которые ответили
     * @param {Number} countRightAnswer - Количество правильных ответов
     * @param {Boolean} gameHasBeenInterrupted - Была ли игра прервана. true если игра была прервана
     */
    constructor(countQuestionsGettingAnswer, countRightAnswer, gameHasBeenInterrupted) {
        this.countQuestionsGettingAnswer = countQuestionsGettingAnswer;
        this.countRightAnswer = countRightAnswer;
        this.gameHasBeenInterrupted = gameHasBeenInterrupted;
    }

    /**
     * Геттер возвращает сообщение с инф. о том как завершилась игра.
     */
    get getMessageResult() {
        return !this.gameHasBeenInterrupted && this.countRightAnswer == this.countQuestionsGettingAnswer ? 

            `Поздравляем вы ответили на все ${this.countQuestionsGettingAnswer} ${DataResultGame._getRightCase(this.countQuestionsGettingAnswer)}.` :

            `${this.gameHasBeenInterrupted ? "Игра была прервана." : ""}\
            \nВы ответили на ${this.countRightAnswer} ${DataResultGame._getRightCase(this.countRightAnswer)} из ${this.countQuestionsGettingAnswer} ${DataResultGame._getRightCase(this.countQuestionsGettingAnswer)}.`
    }

    /**
     * Функция возвращает слово 'вопрос' в правильном падеже в зависимости от переданного числа
     * @param {Number} value - число для которого нужно определить падеж
     * @throws {Error} - исключение выбрасывается если параметр не является числом
     * @returns {String} строка в правильном падеже
     */
    static _getRightCase(value)
    {
        if(typeof(value) !== 'number')
            throw new Error('Ошибка переданный параметр не является числом');

        let strValue = String(value);
        let beforeLastDigit = strValue.charAt(strValue.length - 2);
        let lastDigit = strValue.charAt(strValue.length - 1);

        if(beforeLastDigit === '1' && lastDigit !== '0')
            return 'вопросов';
        else
            switch(lastDigit)
            {
                case '1':
                    return 'вопрос';
                case '2':
                case '3':
                case '4':
                    return 'вопроса';
                case '0':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    return 'вопросов';
            }
    }
}

class Game {
    /**
     * 
     * @param {Function} functionGetAnswer - Функция которая вызывается для получения ответа на вопрос
     * должна принимать один строковый параметр в который передаётся сам вопрос с вариантами ответов.
     * @param {Function} functionOutputInfoAboutError - Функция которая вызывается для вывода инф. при неверном вводе
     */
    constructor(functionGetAnswer, functionOutputInfoAboutError) {
        this.functionGetAnswer = functionGetAnswer;
        this.functionOutputInfoAboutError = functionOutputInfoAboutError;
    }

    /**
     * Функция запускает игру и после её завершения возвращает объект
     * @param {QuestionData[]} questionsData - массив объектов с инф. о вопросах
     * @returns {DataResultGame} - возвращает объект с инф. о результате игры
     */
    run(questionsData) {

        let countQuestionsGettingAnswer = 0;
        let countRightAnswer = 0;
        let gameHasBeenInterrupted = false;

        for(let questionData of questionsData) {

            let questText = `${questionData.getQuestionWithAnswerOptions}\nВведите число от 1 до ${questionData.countAnswer} включительно в качестве ответа.\
            \nИли введите exit для остановки игры.`;
            
            let wrongInput;

            do{
                wrongInput = false;

                let answer = this.functionGetAnswer(questText);

                if(/^exit$/i.test(answer)) {
                    gameHasBeenInterrupted = true;
                    break;
                }

                try {
                    let answerIsRight = questionData.checkRightAnswer(answer);
                    countQuestionsGettingAnswer++;
                    countRightAnswer += Number(answerIsRight);
                } catch(exception) {
                    this.functionOutputInfoAboutError(`${exception.message}\nОтвет должен быть целым числом в диапазоне от 1 до ${questionData.countAnswer}`);
                    wrongInput = true;
                }
            } while(wrongInput);

            if(gameHasBeenInterrupted)
                break;
        }

        return new DataResultGame(countQuestionsGettingAnswer, countRightAnswer, gameHasBeenInterrupted);
    }
}

let questionsData = [
    new QuestionData("Как называется яйцо, сваренное гуще, чем всмятку, но не вкрутую?", [
        "В сумочку",
        "В кулёчек",
        "В мешочек",
        "В рюкзачок"
    ], 2),
    new QuestionData("Какого газа больше всего в составе атмосферы Земли?", [
        "Кислород",
        "Водород",
        "Азот",
        "Углекислый газ"
    ], 2),
    new QuestionData("Как называется популярный рецепт приготовления макарон с мясом?", [
        "По-деревенски",
        "По-флотски",
        "По-братски",
        "По-божески"
    ], 1),
    new QuestionData("Что открыл Христофор Колумб?", [
        "Африку",
        "Азию",
        "Консервы «Завтрак туриста»",
        "Америку"
    ], 3),
    new QuestionData("Что потерял Ослик Иа в сказке про Винни-Пуха?", [
        "Хвост",
        "Память",
        "Зубы",
        "Совесть"
    ], 0)
];

/**
 * Функция нужна для обхода исключения Illegal invocation
 * @param {String} message - сообщение передаваемое в фукнцию prompt
 * @returns {(String|null)} - значение возвращаемое функцией prompt
 */
function WithoutllegalInvocationPrompt(message) {
    return prompt(message);
}

/**
 * Функция нужна для обхода исключения Illegal invocation
 * @param {String} message - сообщение передаваемое в фукнцию alert
 */
function WithoutIllegalInvocationAlert(message) {
    alert(message);
}

//let game = new Game(prompt, alert); // Illegal invocation
let game = new Game(WithoutllegalInvocationPrompt, WithoutIllegalInvocationAlert);

do {
    alert(game.run(questionsData).getMessageResult);
} while(confirm('Хотите запустить игру повторно ?'));
