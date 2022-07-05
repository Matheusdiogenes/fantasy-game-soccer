import { Player } from "../../../domain/entities";
import { CreatePlayerInput, CreatePlayerOutput } from "../../../domain/payload";
import { IPlayerRepo } from "../../../domain/repositories";

export class CreatePlayerUseCase {
  constructor(private playerRepo: IPlayerRepo) { }

  async execute(playerData: CreatePlayerInput, id?: string): Promise<CreatePlayerOutput> {
    const createPlayer = new Player(
      playerData.name,
      playerData.position,
      playerData.salary,
      id
    )
      .toJSON()
    const player = await this.playerRepo.create(createPlayer)

    return player
  }
}