export class Food {
    food;
    expansionRate = 5;
    snake;
    constructor(snake) {
        this.food = { x: 10, y: 10 };
        this.snake = snake;
    }
    update() {
        if (this.snake.onSnake(this.food)) {
            this.snake.expandSnake(this.expansionRate);
            this.food = this.getRandomFoodPosition();
        }
    }
    draw(gameBoard) {
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = this.food.y.toString();
        foodElement.style.gridColumnStart = this.food.x.toString();
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
    }
    getRandomFoodPosition() {
        let newPosition = this.randomize();
        while (this.snake.onSnake(newPosition)) {
            newPosition = this.randomize();
        }
        return newPosition;
    }
    randomize() {
        let x = Math.floor(Math.random() * 24) + 1;
        let y = Math.floor(Math.random() * 24) + 1;
        return { x: x, y: y };
    }
}
//# sourceMappingURL=food.js.map