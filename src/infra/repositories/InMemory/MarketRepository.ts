import { Market, Player } from "../../../domain/entities";
import { CreateMarketInput, CreateMarketOutput, CreatePlayerInput, CreatePlayerOutput } from "../../../domain/payload";
import { IMarketRepo } from "../../../domain/repositories";

export class MarketRepoInMemory implements IMarketRepo {
  market: Market[] = []
  // players: Player[] = []

  async create(input: CreateMarketInput): Promise<CreateMarketOutput> {
    const market = new Market(input.name)
    this.market.push(market)
    return market.toJSON()
  }
  findMarketById(id: string): Promise<CreateMarketOutput> {
    throw new Error("Method not implemented.");
  }
  findPlayerById(idMarket: string, idPlayer: string): Promise<CreatePlayerOutput> {
    throw new Error("Method not implemented.");
  }
  async findAllPlayer(idMarket: string): Promise<CreatePlayerOutput[]> {
    const market = this.market.find(m => m.id === idMarket)
    if (!market) throw new Error("Mercado não existe.");
    return market.getPlayers.map(p => p.toJSON())
  }
  async addPlayerToMarket(idMarket: string, input: CreatePlayerInput): Promise<boolean> {
    const player = new Player(input.name, input.position, input.salary)
    const market = this.market.find(m => m.id === idMarket)
    if (!market) throw new Error("Mercado não existe.");
    market.addPlayer(player)
    return true
  }
  update(input: Partial<CreateMarketInput>): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async deletePlayerMarket(idMarket: string, idPlayer: string): Promise<boolean> {
    const market = this.market.find(m => m.id === idMarket)
    if (!market) throw new Error("Mercado não existe.");
    market.sellPlayer(idPlayer)
    throw new Error("Method not implemented.");
  }

}