import { Player, Team } from "../../domain/entities"
import { IMarketRepo, ITeamRepo } from "../../domain/repositories"

export class TransferPlayerUseCase {
  constructor(
    private marketRepo: IMarketRepo,
    private teamRepo: ITeamRepo
  ) { }

  async execute(idPlayer: string, idTeam: string): Promise<boolean> {    
    const findPlayer = await this.marketRepo.findPlayerById(idPlayer)
    if (!findPlayer) throw new Error('Jogador não encontrado')    
    const findTeam = await this.teamRepo.findById(idTeam)
    if (!findTeam) throw new Error('Time não encontrado')    

    const player = new Player(
      findPlayer.name,
      findPlayer.position,
      findPlayer.salary,
      findPlayer.id
    )
    const team = new Team(
      findTeam.name,
      findTeam.patrimony,
      findTeam.id
    )

    team.addPlayerToTeam(player)

    await this.teamRepo.updatePatrimony(team.patrimony)
    await this.teamRepo.addPlayerToTeam(player.toJSON())
    await this.marketRepo.deletePlayer(player.id)

    return true
  }
}
