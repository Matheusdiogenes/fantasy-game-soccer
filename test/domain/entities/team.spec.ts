import {randomUUID as uuid} from 'crypto'
import { Player, Team } from "../../../src/domain/entities"

describe('Criação de times', () => {
  const team = new Team('Flamengo', 100.0)
  
  test('Deve criar um time', () => {
    expect(team.getPlayers.length).toBe(0)
    expect(team.patrimony).toBe(100)
  })

  const id = uuid()
  test('Deve adicionar um jogador ao time', () => {
    const player = new Player(
      'Messi',
      'Meia',
      100,
      id
    )
    team.addPlayerToTeam(player)
    
    expect(team.getPlayers.length).toBe(1)
    expect(team.patrimony).toBe(0)
  })

  test('Deve vender um jogador', () => {    
    team.sellPlayer(id)
    expect(team.getPlayers.length).toBe(0)
    expect(team.patrimony).toBe(100)
  })

  test('Deve lançar um erro.', () => {
    expect(() => team.sellPlayer(id)).toThrowError('Nenhum jogador encontrado.')
  })

})