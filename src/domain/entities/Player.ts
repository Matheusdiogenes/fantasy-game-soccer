import { randomUUID as uuid } from "crypto";
import { CreatePlayerOutput } from "../payload";

export class Player {
  readonly id: string
  idTeam: string = ''
  constructor(
    public name: string,
    public position: string,
    private salary: number,
    id?: string
  ) {
    this.id = id || uuid()    
  }

  public get getSalary(): number {
    return this.salary
  }  
  
  public set setSalary(salary : number ) {
    this.salary = salary;
  }

  signContract(idTeam: string){
    this.idTeam = idTeam
  }

  toJSON(): CreatePlayerOutput {
    return {
      id: this.id,
      idTeam: this.idTeam,
      name: this.name,
      position: this.position,
      salary: this.salary,
    }
  }
}
