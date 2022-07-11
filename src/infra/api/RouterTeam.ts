import { CreateTeamUseCase, FindAllPlayerTeamUseCase } from "../../application/useCases/team";
import { ITeamRepo } from "../../domain/repositories";
import { IHttpServer } from "./IHttpServer";

export class RouterTeam {
  constructor(
    readonly httpServer: IHttpServer,
    readonly repository: ITeamRepo
  ) { }

  async init() {
    this.httpServer.on('post', '/team', async (params: any, body: any) => {
      const createTeam = new CreateTeamUseCase(this.repository)
      const team = await createTeam.execute(body)
      return team
    })

    this.httpServer.on('get', '/team/players/:idTeam', async (params: any, body: any) => {
      const createTeam = new FindAllPlayerTeamUseCase(this.repository)
      const team = await createTeam.execute(params.idTeam)
      return team
    })
  }
}