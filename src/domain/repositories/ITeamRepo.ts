import { CreatePlayerOutput, CreateTeamInput, CreateTeamOutput } from "../payload";

export interface ITeamRepo {
  create(input: CreateTeamInput): Promise<CreateTeamOutput>
  findById(id: string): Promise<CreateTeamOutput>
  findAll(id: string): Promise<CreateTeamOutput[]>
  addPlayerToTeam(input: CreatePlayerOutput): Promise<void>
  delete(id: string): Promise<void>
}