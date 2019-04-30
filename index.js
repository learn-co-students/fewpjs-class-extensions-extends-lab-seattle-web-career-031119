
class Polygon {
  constructor(array) {
    this.array = array
  }

  get getCount() {
    return this.array.length
  }

  get perimeter() {
    let sum = 0
    for ( const side of this.array ) {
      sum += side
    }
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    const side1 = this.array[0]
    const side2 = this.array[1]
    const side3 = this.array[2]

    if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side3 + side2 > side1)) {
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    const side1 = this.array[0]
    const side2 = this.array[1]
    const side3 = this.array[2]
    const side4 = this.array[3]

    if (side1 === side2 && side1 === side3 && side1 === side4) {
      return true
    } else {
      return false
    }
  }

  get area() {
    const side1 = this.array[0]
    return Math.pow(side1, 2)
  }
}
