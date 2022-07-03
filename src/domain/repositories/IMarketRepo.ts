import { CreateMarketInput, CreateMarketOutput, CreatePlayerOutput, UpdateMarket } from "../payload";

export interface IMarketRepo {
  create(input: CreateMarketInput): Promise<CreateMarketOutput>
  findPlayerById(id: string): Promise<CreatePlayerOutput>
  findAllPlayer(id: string): Promise<CreatePlayerOutput[]>
  update(input: UpdateMarket): Promise<void>
  deletePlayer(id: string): Promise<void>
}