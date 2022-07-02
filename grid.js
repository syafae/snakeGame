import { onSnake } from './snake.js'

const GRID_SIZE = 24
export function getRandomFoodPosition() {
  let newPosition
  while (newPosition == null || onSnake(newPosition)) {
    let x = Math.floor(Math.random() * GRID_SIZE) + 1
    let y = Math.floor(Math.random() * GRID_SIZE) + 1
    return (newPosition = { x: x, y: y })
  }
}

export function outsideGrid(position) {
  if (
    position.x < 1 ||
    position.x > GRID_SIZE ||
    position.y < 1 ||
    position.y > GRID_SIZE
  ) {
    return true
  }
  return false
}
