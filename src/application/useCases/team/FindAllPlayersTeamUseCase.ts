import { ITeamRepo } from "../../../domain/repositories"

export class FindAllPlayerTeamUseCase {
  constructor(private teamRepo: ITeamRepo) { }

  async execute(idTeam: string) {
    const players = await this.teamRepo.findPlayers(idTeam)
    return players
  }
}