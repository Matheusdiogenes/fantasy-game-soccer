import { Player } from "../../../domain/entities";
import { CreatePlayerInput } from "../../../domain/payload";
import { IMarketRepo } from "../../../domain/repositories";

export class AddPlayerMarketUseCase {

  constructor(
    private maarketRepo: IMarketRepo
  ) { }

  async execute(idMarket: string, playerData: CreatePlayerInput, idPlayer?: string) {
    const player = new Player(playerData.name, playerData.position, playerData.salary, idPlayer)
    await this.maarketRepo.addPlayerToMarket(idMarket, player.toJSON())
    return true
  }
}