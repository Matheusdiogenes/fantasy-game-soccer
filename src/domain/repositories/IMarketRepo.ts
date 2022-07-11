import { CreateMarketInput, CreateMarketOutput, CreatePlayerInput, CreatePlayerOutput, UpdateMarket } from "../payload";

export interface IMarketRepo {
  create(input: CreateMarketInput): Promise<CreateMarketOutput>
  findMarketById(idMarket: string): Promise<CreateMarketOutput>
  findPlayerById(idMarket: string, idPlayer: string): Promise<CreatePlayerOutput>
  findAllPlayer(idMarket: string): Promise<CreatePlayerOutput[]>
  addPlayerToMarket(idMarket: string, input: CreatePlayerOutput): Promise<boolean>
  update(input: UpdateMarket): Promise<void>
  deletePlayerMarket(idMarket: string, idPlayer: string): Promise<boolean>
}