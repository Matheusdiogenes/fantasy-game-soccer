import { IMarketRepo } from "../../../domain/repositories";

export class FindAllPlayerUseCase {
  constructor(private marketRepo: IMarketRepo) { }

  async execute(idMarket: string) {
    const players = await this.marketRepo.findAllPlayer(idMarket)
    return players
  }
}