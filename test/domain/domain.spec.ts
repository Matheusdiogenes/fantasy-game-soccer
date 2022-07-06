import { Market, Player, Team } from "../../src/domain/entities"
import { CreatePlayerInput, CreatePlayerOutput } from "../../src/domain/payload"

describe('DomainLogic Test', () => {
  const market = new Market('Europa')

  let playerID: string
  test('Deve criar um jogador e adicionar ao mercado', () => {
    const playerInput: CreatePlayerInput = {
      name: 'Ronaldinho',
      position: 'Meia',
      salary: 100
    }
    const player = new Player(playerInput.name, playerInput.position, playerInput.salary)
    playerID = player.id
    const playerOutput: CreatePlayerOutput = {
      id: player.id,
      idTeam: '',
      name: playerInput.name,
      position: playerInput.position,
      salary: playerInput.salary,
    }
    market.addPlayer(player)
    expect(player.toJSON()).toStrictEqual({...playerOutput})
    expect(market.getPlayers).toHaveLength(1)
  })

  const team = new Team('Real Madrid', 200)
  test('Deve criar um time e contratar um jogador do mercado', () => {
    const findPlayer = market.sellPlayer(playerID)
    team.addPlayerToTeam(findPlayer)

    const actualPatrimony = 100
    expect(team.patrimony).toBe(actualPatrimony)
    expect(findPlayer.idTeam).toBe(team.id)
  })

  test('Deve demitir o jogador do time e adicionar de volta ao mercado', () => {
    const playerOff = team.sellPlayer(playerID)
    market.addPlayer(playerOff)
    
    const actualPatrimony = 200
    expect(team.patrimony).toBe(actualPatrimony)
    expect(playerOff.idTeam).toBe('')
  })

})