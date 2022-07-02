import { getInputDirection } from './input.js'

export const SNAKE_SPEED = 5
const SnakeBody = [{ x: 12, y: 12 }]
let newSegments = 0

export function update() {
  addSegments()
  let direction = getInputDirection()
  for (let i = SnakeBody.length - 2; i >= 0; i--) {
    SnakeBody[i + 1] = { ...SnakeBody[i] }
  }
  SnakeBody[0].x += direction.x
  SnakeBody[0].y += direction.y
}

export function draw(gameBoard) {
  SnakeBody.forEach((segment) => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}
export function expandSnake(amount) {
  newSegments += amount
}
export function onSnake(position, { ignoreHead = false } = {}) {
  return SnakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return segment.x === position.x && segment.y === position.y
  })
}

export function getSnakeHead() {
  return SnakeBody[0]
}

export function snakeIntersection() {
  return onSnake(getSnakeHead(), { ignoreHead: true })
}
function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    SnakeBody.push({ ...SnakeBody[SnakeBody.length - 1] })
  }
  newSegments = 0
}
