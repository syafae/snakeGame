export const gameBoard = document.getElementById('game-board');
let inputDirection = { x: 0, y: 0 };
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            if (inputDirection.x !== 0)
                break;
            inputDirection = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (inputDirection.x !== 0)
                break;
            inputDirection = { x: 1, y: 0 };
            break;
        case 'ArrowUp':
            if (inputDirection.y !== 0)
                break;
            inputDirection = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (inputDirection.y !== 0)
                break;
            inputDirection = { x: 0, y: 1 };
            break;
    }
});
export function getInputDirection() {
    return inputDirection;
}
//# sourceMappingURL=grid.js.map