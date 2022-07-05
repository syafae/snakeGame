import { Position } from './position.js';
import { Snake } from './snake.js';

export class Food {
    private food: Position
    private expansionRate = 5
    private snake: Snake
    constructor(snake: Snake) {
        this.food = { x: 10, y: 10 };
        this.snake = snake
    }
    public update(): void {
        if (this.snake.onSnake(this.food)) {
            this.snake.expandSnake(this.expansionRate)
            this.food = <Position>this.getRandomFoodPosition()
        }
    }
    public draw(gameBoard: HTMLDivElement): void {
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = this.food.y.toString()
        foodElement.style.gridColumnStart = this.food.x.toString()
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
    }
    private getRandomFoodPosition(): Position {
        let newPosition = this.randomize()
        while (this.snake.onSnake(newPosition)) {
            newPosition = this.randomize()
        }
        return newPosition
    }
    private randomize(): Position {
        let x = Math.floor(Math.random() * 24) + 1
        let y = Math.floor(Math.random() * 24) + 1
        return { x: x, y: y }
    }
}