export class Food {
    food;
    expansionRate = 5;
    snake;
    constructor(snake) {
        this.food = { x: 10, y: 1 };
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
        let newPosition;
        while (newPosition === undefined || this.snake.onSnake(newPosition)) {
            const x = Math.floor(Math.random() * 24) + 1;
            const y = Math.floor(Math.random() * 24) + 1;
            newPosition = { x: x, y: y };
        }
        return newPosition;
    }
}
//# sourceMappingURL=food.js.map