import { AddPlayerTeamUseCase, CreateTeamUseCase, FindAllPlayerTeamUseCase } from "../../application/useCases/team";
import { IMarketRepo, ITeamRepo } from "../../domain/repositories";
import { IHttpServer } from "./IHttpServer";

export class RouterTeam {
  constructor(
    readonly httpServer: IHttpServer,
    readonly repositoryTeam: ITeamRepo,
    readonly repositoryMarket: IMarketRepo,
  ) { }

  async init() {
    this.httpServer.on('post', '/team', async (params: any, body: any) => {
      const createTeam = new CreateTeamUseCase(this.repositoryTeam)
      const team = await createTeam.execute(body)
      return team
    })

    this.httpServer.on('get', '/team/players/:idTeam', async (params: any, body: any) => {
      const findTeam = new FindAllPlayerTeamUseCase(this.repositoryTeam)
      const team = await findTeam.execute(params.idTeam)
      return team
    })

    this.httpServer.on('post', '/team/contract', async (params: any, body: any) => {
      const addPlayer = new AddPlayerTeamUseCase(this.repositoryTeam, this.repositoryMarket)
      const team = await addPlayer.execute(body)
      return team
    })
  }
}