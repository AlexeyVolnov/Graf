function idCreator() {
  let idCounter = 100
  return function () {
    idCounter += 1
    return idCounter
  }
}
export const idCounter = idCreator()