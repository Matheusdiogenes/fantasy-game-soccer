import { CreateTeamInput } from "../../../../src/domain/payload"
import { TeamRepositoryInMemory } from "../../../../src/infra/repositories"

describe('Team Repository Test', () => {
  const repository = new TeamRepositoryInMemory()
  test('Deve criar um time', async () => {
    const team: CreateTeamInput = {
      name: 'Independente',
      patrimony: 100
    }
    await repository.create(team)
    const teams = await repository.findAll()
    expect(teams).toHaveLength(1)
  })
})