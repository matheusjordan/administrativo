export class Statistic {

  constructor(
    public name?: string,
    public value?: number,
    public color?: string
    ) { }
}

export class Visitor {
  constructor(
    public code?: number,
    public name?: string,
    public email?: string,
    public date?: Date
  ) {
  }
}
