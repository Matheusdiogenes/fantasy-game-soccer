import { CreatePlayerInput, CreatePlayerOutput, UpdatePlayer } from "../payload";

export interface IPlayerRepo {
  create(input: CreatePlayerInput): Promise<CreatePlayerOutput>
  findById(id: string): Promise<CreatePlayerOutput>
  findAll(id: string): Promise<CreatePlayerOutput[]>
  update(input: UpdatePlayer): Promise<void>
  delete(id: string): Promise<void>
}