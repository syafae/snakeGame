import { Input } from './input.js'
import { Position } from './position.js'

export class Snake {
    private SnakeBody: Position[]
    private newSegments = 0
    constructor() {
        this.SnakeBody = [{ x: 12, y: 12 }]
    }
    public update(): void {
        this.addSegments()
        let direction = Input.getInputDirection()
        for (let i = this.SnakeBody.length - 2; i >= 0; i--) {
            this.SnakeBody[i + 1] = { ...this.SnakeBody[i]! }
        }
        this.SnakeBody[0]!.x += direction.x
        this.SnakeBody[0]!.y += direction.y
    }
    public draw(gameBoard: HTMLDivElement): void {
        this.SnakeBody.forEach((segment) => {
            const snakeElement = document.createElement('div')
            snakeElement.style.gridRowStart = segment.y.toString()
            snakeElement.style.gridColumnStart = segment.x.toString()
            snakeElement.classList.add('snake')
            gameBoard.appendChild(snakeElement)
        })
    }
    public expandSnake(amount: number): void {
        this.newSegments += amount
    }
    public onSnake(position: Position, { ignoreHead = false } = {}): boolean {
        return this.SnakeBody.some((segment, index) => {
            if (ignoreHead && index === 0) return false
            return segment.x === position.x && segment.y === position.y
        })
    }
    private getSnakeHead(): Position {
        return this.SnakeBody[0]!
    }
    private snakeIntersection(): boolean {
        return this.onSnake(this.getSnakeHead(), { ignoreHead: true })
    }
    addSegments(): void {
        for (let i = 0; i < this.newSegments; i++) {
            this.SnakeBody.push({ ...this.SnakeBody[this.SnakeBody.length - 1]! })
        }
        this.newSegments = 0
    }
    private outsideGrid(position: Position): boolean {
        if (
            position.x < 1 ||
            position.x > 24 ||
            position.y < 1 ||
            position.y > 24
        ) {
            return true
        }
        return false
    }
    public checkDeath(): boolean {
        return this.outsideGrid(this.getSnakeHead()) || this.snakeIntersection()
    }

}