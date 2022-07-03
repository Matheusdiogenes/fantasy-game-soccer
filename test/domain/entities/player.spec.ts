import { randomUUID as uuid } from 'crypto'
import { Player } from "../../../src/domain/entities"
import { CreatePlayerInput } from '../../../src/domain/payload'

describe('Criação de jogadores', () => {
  test('Deve criar jogador', () => {
    const playerId = uuid()
    const player1Data: CreatePlayerInput = {
      name: 'Ronaldo',
      position: 'Atacante',
      salary: 20
    }
    const player1 = new Player(
      player1Data.name,
      player1Data.position,
      player1Data.salary,
      playerId,
    )

    expect(player1.toJSON()).toStrictEqual({ id: playerId, ...player1Data, })
  })
})
