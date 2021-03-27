interface Rect {
  readonly id: string //только для чтения
  color?: string //не обязательный
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30
  },
  color: '#ccc'
}

const rect2: Rect = {
  id: '12345',
  size: {
    width: 10,
    height: 5
  }
}

rect2.color = 'black';
const rect3 = {} as Rect
const rect4 = <Rect>{}

//===
interface RectWithArea extends Rect {
  getArea1: () => number //фукция которая должна вернуть number
}
const rect6: RectWithArea = {
  id: '123',
  size: {
    width: 15,
    height: 2
  },
  getArea1(): number {
    return 4445
  }
}

// ====
interface IClock {
  time: Date
  setTime(date: Date): void
}
class Clock implements IClock {
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date
  }
}

//=====
interface Style {
  [key: string]: string

}
const css: Style = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}