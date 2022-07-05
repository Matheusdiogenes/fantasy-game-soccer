import { Team } from "../../../domain/entities";
import { CreateTeamInput, CreateTeamOutput } from "../../../domain/payload";
import { ITeamRepo } from "../../../domain/repositories/ITeamRepo";

export class CreateTeamUseCase {
  constructor(private teamRepo: ITeamRepo) { }

  async execute(teamData: CreateTeamInput, id?: string): Promise<CreateTeamOutput> {
    const createTeam = new Team(
      teamData.name,
      teamData.patrimony,
      id
    )
      .toJSON()
    const team = await this.teamRepo.create(createTeam)

    return team
  }
}
