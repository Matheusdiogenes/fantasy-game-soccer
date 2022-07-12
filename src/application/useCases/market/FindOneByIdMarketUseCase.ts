import { IMarketRepo } from "../../../domain/repositories";

export class FindOneByIdMarketUseCase {
  constructor(
    readonly marketRepo: IMarketRepo
  ) { }

  async execute(idPlayer: string, idMarket: string) {
    const player = await this.marketRepo.findPlayerById(idMarket, idPlayer)
    return player    
  }
}