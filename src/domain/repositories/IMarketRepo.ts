import { CreateMarketInput, CreateMarketOutput, CreatePlayerOutput, UpdateMarket } from "../payload";

export interface IMarketRepo {
  create(input: CreateMarketInput): Promise<CreateMarketOutput>
  findMarketById(id: string): Promise<CreateMarketOutput>
  findPlayerById(id: string): Promise<CreatePlayerOutput>
  findAllPlayer(id: string): Promise<CreatePlayerOutput[]>
  addPlayerToMarket(input: CreatePlayerOutput): Promise<boolean>
  update(input: UpdateMarket): Promise<void>
  deletePlayer(id: string): Promise<void>
}