export class Input {
    static inputDirection = { x: 0, y: 0 };
    static listen() {
        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    if (Input.inputDirection.x !== 0)
                        break;
                    Input.inputDirection = { x: -1, y: 0 };
                    break;
                case 'ArrowRight':
                    if (Input.inputDirection.x !== 0)
                        break;
                    Input.inputDirection = { x: 1, y: 0 };
                    break;
                case 'ArrowUp':
                    if (Input.inputDirection.y !== 0)
                        break;
                    Input.inputDirection = { x: 0, y: -1 };
                    break;
                case 'ArrowDown':
                    if (Input.inputDirection.y !== 0)
                        break;
                    Input.inputDirection = { x: 0, y: 1 };
                    break;
            }
        });
    }
    static getInputDirection() {
        return Input.inputDirection;
    }
}
//# sourceMappingURL=input.js.map