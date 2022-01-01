"use strict";

class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    equal(vector) {
        return this.x === vector.x && this.y == vector.y;
    }

    summ(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
    
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }

    static summVectors(vector1, vector2) {
        return new Vector2(vector1.x + vector2.x, vector1.y + vector2.y);
    }

    static subtractVectors(vector1, vector2) {
        return new Vector2(vector1.x - vector2.x, vector1.y - vector2.y);
    }
}

class Square {
    constructor(letfTopPos, rightBottomPos) {
        this.letfTopPos = letfTopPos;
        this.rightBottomPos = rightBottomPos;
    }

    checkVectorInSquare(vector) {
        return 
            this.letfTopPos.x <= vector.x && 
            this.rightBottomPos.x >= vector.x && 
            this.letfTopPos.y <= vector.y && 
            this.rightBottomPos.y >= vector.y;
    }
}

class Renderer {
    constructor() {

    }
}

class IMap {
    /**
     * @param {Vector2} size - размеры карты 
     */
    constructor(size) {
        this.size = size;
    }

    /**
     * @param {Vector2} vector - позиция по которой нужно получить часть карты
     */
    getPartMap(vector) {}
}

class ConsoleMap extends IMap {
    /**
     * @param {Vector2} size - размеры карты
     * @param {String} charFill - символ заполнитель карты
     */
    constructor(size, charFill) {
        super(this.size)
        this.charFill = charFill;
        this.squareMap = new Square(new Vector2(0, 0), size);
    }

    /**
     * @param {Vector2} vector - позиция по которой нужно получить часть карты
     * @returns {String} - часть карты в виде символа
     * @throws {Error} - исключение выбрасыватся если переданная позиция находится за пределами карты
     * @override
     */
    getPartMap(vector) {
        if(!this.squareMap.checkVectorInSquare(vector))
            throw new Error("Index out of Range");
        return this.charFill;
    }
}

class ObjectOnField {
    /**
     * @param {String} object - размещаемый объект
     */
    constructor(object) {
        this.object = object;
    }
}

class ObjectOnFieldWithPosition extends ObjectOnField{
    /**
     * @param {Vector2} vector - позиция объекта 
     * @param {String} object - сам объект 
     */
    constructor(vector, object) {
        super(object);
        this.vector = vector;
    }
}

class Field {
    objectsOnField = [];
    /**
     * @param {IMap} map - карта на которой будут располагаться объекты
     */
    constructor(map) {
        this.map = map;
    }

    addObjectOnField(object, position) {
        if(this.objectsOnField.length > 0 && this.objectsOnField.some((val) => position.equal(val.position))) {
            return false;
        }

        this.objectsOnField.push(new ObjectOnFieldWithPosition(position, object));
    }
}

class Game {
    playerPosition = new Vector2(0, 0);

    constructor() {

    }

    start() {

    }
}