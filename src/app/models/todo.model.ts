export class Todo {
  constructor(
    public text: string,
    public id: number = Math.random(),
    public completed: boolean = false
  ) {
    this.text = text;
  }
}
