import { IMarketRepo } from "../../../domain/repositories";

export class DeletePlayerMarketUseCase {
  constructor(
    readonly marketRepo: IMarketRepo
  ) { }

  async execute(idMarket: string, idPlayer: string) {
    const player = await this.marketRepo.findPlayerById(idMarket, idPlayer)
    if(!player) throw Error('Jogador não encontrado.')
    await this.marketRepo.deletePlayerMarket(idMarket, idPlayer)
    return true
  }
}