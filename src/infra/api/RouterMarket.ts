import { CreateMarketUseCase, AddPlayerMarketUseCase, FindAllPlayerUseCase } from "../../application/useCases/market";
import { IMarketRepo } from "../../domain/repositories";
import { IHttpServer } from "./IHttpServer";

export class RouterMarket {
  constructor(
    readonly httpServer: IHttpServer,
    readonly repository: IMarketRepo
  ) { }

  async init() {
    this.httpServer.on('post', '/market', async (params: any, body: any) => {
      const createMarket = new CreateMarketUseCase(this.repository)
      const market = await createMarket.execute(body)
      return market
    })

    this.httpServer.on('post', '/market/addplayer', async (params: any, body: any) => {
      const addPlayer = new AddPlayerMarketUseCase(this.repository)
      const result = await addPlayer.execute(body.idMarket, body.playerData)
      return result
    })

    this.httpServer.on('get', '/market/players', async (params: any, body: any) => {
      const findPlayers = new FindAllPlayerUseCase(this.repository)
      const result = await findPlayers.execute(body.idMarket)
      return result
    })

  }
}