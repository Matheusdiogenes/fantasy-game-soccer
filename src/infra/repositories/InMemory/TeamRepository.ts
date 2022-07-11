import { Player, Team } from "../../../domain/entities";
import { CreateTeamInput, CreateTeamOutput, CreatePlayerOutput } from "../../../domain/payload";
import { ITeamRepo } from "../../../domain/repositories";

export class TeamRepositoryInMemory implements ITeamRepo {
  players: Player[] = []
  teams: Team[] = []

  async create(input: CreateTeamInput): Promise<CreateTeamOutput> {
    const team = new Team(input.name, input.patrimony)
    this.teams.push(team)
    return team.toJSON()
  }
  async findById(id: string): Promise<CreateTeamOutput> {
    const team = this.teams.find( t => t.id === id)
    if(!team) throw new Error('Time não encontrado.')
    return team
  }
  async findPlayers(id: string): Promise<CreatePlayerOutput[]> {
    const player = this.players.filter(p => p.idTeam === id)
    if(!player) throw new Error('Time não encontrado.')
    return player.map( p => p.toJSON())
  }
  async findAll(): Promise<CreateTeamOutput[]> {
    return this.teams
  }
  addPlayerToTeam(input: CreatePlayerOutput): Promise<void> {
    throw new Error("Method not implemented.");
  }
  removePlayerTeam(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  updatePatrimony(patrimony: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

}