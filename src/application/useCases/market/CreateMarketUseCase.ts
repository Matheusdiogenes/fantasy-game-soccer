import { Market } from "../../../domain/entities";
import { CreateMarketInput, CreateMarketOutput } from "../../../domain/payload";
import { IMarketRepo } from "../../../domain/repositories/IMarketRepo";

export class CreateMarketUseCase {
  constructor(private marketRepo: IMarketRepo) { }

  async extecute(marketData: CreateMarketInput, id?: string): Promise<CreateMarketOutput> {
    const createMarket = new Market(marketData.name, id)
    const market = await this.marketRepo.create(createMarket)
    return market
  }
}