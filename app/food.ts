import { Position } from './position.js';
import { Snake } from './snake.js';

export class Food {
    food: Position
    private expansionRate = 5
    snake: Snake
    constructor(snake: Snake) {
        this.food = { x: 10, y: 1 };
        this.snake = snake
    }
    update(): void {
        if (this.snake.onSnake(this.food)) {
            this.snake.expandSnake(this.expansionRate)
            this.food = <Position>this.getRandomFoodPosition()
        }
    }
    draw(gameBoard: HTMLDivElement): void {
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = this.food.y.toString()
        foodElement.style.gridColumnStart = this.food.x.toString()
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
    }
    getRandomFoodPosition(): Position | undefined {
        let newPosition: Position | undefined
        while (newPosition === undefined || this.snake.onSnake(newPosition)) {
            let x = Math.floor(Math.random() * 24) + 1
            let y = Math.floor(Math.random() * 24) + 1
            newPosition = { x: x, y: y }
            return newPosition
        }
    }
}