import { Player } from "../../../domain/entities"
import { IMarketRepo, ITeamRepo } from "../../../domain/repositories"

export class AddPlayerTeamUseCase {
  constructor(
    private teamRepo: ITeamRepo,
    private marketRepo: IMarketRepo
  ) { }

  async execute(data: Input): Promise<boolean> {
    const findTeam = await this.teamRepo.findById(data.idTeam)
    if (!findTeam) throw new Error('Time não encontrado.')
    const findPlayer = await this.marketRepo.findPlayerById(data.idMarket, data.idPlayer)
    const player = new Player(findPlayer.name, findPlayer.position, findPlayer.salary, findPlayer.id)
    player.signContract(data.idTeam)
    await this.marketRepo.deletePlayerMarket(data.idMarket, data.idPlayer)
    await this.teamRepo.addPlayerToTeam(player.toJSON())
    return true
  }
}

type Input = {
  idMarket: string,
  idTeam: string,
  idPlayer: string
}