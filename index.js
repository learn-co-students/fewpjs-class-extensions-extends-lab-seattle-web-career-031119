class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get getCount() {
    return this.count
  }

  get perimeter() {
    let i = 0
    let perimeter = 0
    while (i < this.count) {
      perimeter += this.sides[i]
      i++
    }
    return perimeter;
  }

}

class Triangle extends Polygon {
  get isValid() {
    let one = this.sides[0] + this.sides[1]
    let two = this.sides[0] + this.sides[2]
    let three = this.sides[1] + this.sides[2]

    if (one < this.sides[2] || two < this.sides[1] || three < this.sides[0]) {
      return false
    }
      else {
        return true
      }
  }
}


class Square extends Polygon {
  get isValid() {
    if (this.sides[0] === this.sides[1] &&  this.sides[2] === this.sides[3] && this.sides[0] === this.sides[3]) {
      return true
    }
      else {
        return false
      }
  }

  get area() {
    let area = this.sides[0] * this.sides[1];
    return area
  }
}
