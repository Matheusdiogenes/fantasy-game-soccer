import { CreatePlayerUseCase } from "../../application/useCases/player";
import { IPlayerRepo } from "../../domain/repositories";
import { IHttpServer } from "./IHttpServer";

export class RouterPlayer {
  constructor(
    readonly httpServer: IHttpServer,
    readonly repository: IPlayerRepo
  ) { }

  async init() {
    this.httpServer.on('post', '/player', async (params: any, body: any) => {
      const createPlayer = new CreatePlayerUseCase(this.repository) 
      const player = await createPlayer.execute(body)
      return player
    })
  }
}