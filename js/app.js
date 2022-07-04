import { Food } from './food.js';
import { Input } from './input.js';
import { Snake } from './snake.js';
let SNAKE_SPEED = 5;
let lastRenderTime = 0;
let gameOver = false;
let snake = new Snake();
let food = new Food(snake);
const gameBoard = document.getElementById('game-board');
Input.listen();
function main(currentTime) {
    if (gameOver) {
        if (confirm('you lost. Press ok to restart.')) {
            window.location.href = '/';
        }
        return;
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED)
        return;
    lastRenderTime = currentTime;
    update();
    draw();
}
window.requestAnimationFrame(main);
function update() {
    snake.update();
    food.update();
    gameOver = snake.checkDeath();
}
function draw() {
    gameBoard.innerHTML = '';
    snake.draw(gameBoard);
    food.draw(gameBoard);
}
//# sourceMappingURL=app.js.map