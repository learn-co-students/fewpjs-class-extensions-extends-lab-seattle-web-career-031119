class Polygon {
  constructor(arr) {
    this.arr = arr
  }

  get getCount() {
    return this.arr.length
  }

  get perimeter() {
    let p = 0
    this.arr.forEach(val => {
      p += val
    })
    return p
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.arr[0]+this.arr[1] <= this.arr[2] || this.arr[1]+this.arr[2] <= this.arr[0] || this.arr[0]+this.arr[2] <= this.arr[1]) {
      return false
    } else {
      return true
    }
  }
}

class Square extends Polygon {
  get isValid() {
    return (this.getCount === 4) && (this.arr[0] === this.arr[1]) && (this.arr[1] === this.arr[2]) && (this.arr[2] === this.arr[3])
  }

  get area() {
    return this.arr[0]**2
  }
}
