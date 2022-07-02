export class Player {
  constructor(
    readonly id: string,
    public name: string,
    public position: string,
    private salary: number
  ) { }

  public get getSalary(): number {
    return this.salary
  }
}
