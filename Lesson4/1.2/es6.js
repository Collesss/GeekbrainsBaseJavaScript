"use strict";

class Post {
    /**
     * Функция конструктор возвращающая пост
     * @param {String} author - автор поста
     * @param {String} text - текст поста
     * @param {Date} date - дата создания поста
     */
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    /**
     * Функция изменяет текст поста на переданный параметр
     * @param {String} text - отредактированый текст поста
     */
    edit(text) {
        this.text = text;
    }

    /**
     * Функция возращает строку с инф. о посте
     * @returns {String} - строка с инф. о посте
     */
    info() {
        return `Автор: ${this.author};\nДата создания поста: ${this.date};\nТекст поста: ${this.text};`;
    }
}

class AttachedPost extends Post {
    /**
     * Функция конструктор возвращающая пост с доп инф. о выделенном тесте
     * @param {String} author - автор поста
     * @param {String} text - текст поста
     * @param {Date} date - дата создания поста
     */
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    
    /**
     * Функция делающая тест выделенным
     */
    makeTextHighlighted() {
        this.highlighted = true;
    }

    /**
     * Функция возращает строку с доп. инф. о посте
     * @returns {String} - строка с доп. инф. о посте
     */
    info() {
        return `Автор: ${this.author};\nДата создания поста: ${this.date};\nВыделен ли текст: ${this.highlighted};\nТекст поста: ${this.text};`;
    }
}

let post = new Post("test", "lorem ipsum", new Date());

console.log(post.info());
post.edit("<this post was deleted>");
console.log(post.info());

let attachedPost = new AttachedPost("test", "lorem ipsum", new Date());

console.log(attachedPost.info());
attachedPost.edit("<this post was deleted>");
console.log(attachedPost.info());
attachedPost.makeTextHighlighted();
console.log(attachedPost.info());