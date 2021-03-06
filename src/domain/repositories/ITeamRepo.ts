import { CreatePlayerOutput, CreateTeamInput, CreateTeamOutput } from "../payload";

export interface ITeamRepo {
  create(input: CreateTeamInput): Promise<CreateTeamOutput>
  findById(id: string): Promise<CreateTeamOutput>
  findPlayers(id: string): Promise<CreatePlayerOutput[]>
  findAll(id: string): Promise<CreateTeamOutput[]>
  addPlayerToTeam(input: CreatePlayerOutput): Promise<boolean>
  removePlayerTeam(id: string): Promise<void>
  delete(id: string): Promise<void>
  updatePatrimony(patrimony: number): Promise<void>
}