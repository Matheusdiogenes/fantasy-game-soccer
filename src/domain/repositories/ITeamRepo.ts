import { CreatePlayerOutput, CreateTeamInput, CreateTeamOutput } from "../payload";

export interface ITeamRepo {
  create(input: CreateTeamInput): Promise<CreateTeamOutput>
  findById(id: string): Promise<CreateTeamOutput>
  findPlayerById(id: string): Promise<CreatePlayerOutput>
  findAll(id: string): Promise<CreateTeamOutput[]>
  addPlayerToTeam(input: CreatePlayerOutput): Promise<void>
  removePlayerTeam(id: string): Promise<void>
  delete(id: string): Promise<void>
  updatePatrimony(patrimony: number): Promise<void>
}