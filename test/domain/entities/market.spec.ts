import { randomUUID as uuid } from 'crypto'
import { Market, Player } from "../../../src/domain/entities"

describe('Criar mercado e adicionar jogadores', () => {
  const market = new Market('Europa')
  const [id1, id2, id3] = [uuid(), uuid(), uuid()]
  const player1 = new Player('Ronaldo', 'Atacante', 20, id1)
  const player2 = new Player('Zico', 'Atacante', 50, id2)
  const player3 = new Player('Messi', 'Atacante', 40, id3)

  test('Deve adicionar jogadores ao mercado', () => {
    market.addPlayer(player1)
    market.addPlayer(player2)
    market.addPlayer(player3)

    const actual = market.getPlayers.length
    const expected = 3
    expect(actual).toBe(expected)
  })

  test('Deve vender um jogador', () => {
    market.sellPlayer(player1.id)
    const actual = market.getPlayers.length
    const expected = 2
    expect(actual).toBe(expected)
  })

  test('Não deve encontrar o jogador', () => {
    expect(() => market.sellPlayer(player1.id)).toThrowError('Nenhum jogador encontrado.')
  })

  test('Deve encontrar um jogador', () => {
    const actual = market.getPlayerById(player2.id)
    expect(actual.toJSON()).toEqual({ ...player2.toJSON() })
  })

})