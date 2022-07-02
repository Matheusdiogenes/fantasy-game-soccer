import { randomUUID as uuid } from 'crypto'
import { Team, FreePlayers, Player } from './src/domain/entities'

class TransferPlayer {
  constructor(
    private freePlayer: FreePlayers,
    private team: Team,
    private idPlayer: string
  ) { }

  execute() {
    const player = this.freePlayer.getPlayerById(this.idPlayer)
    if (player.getSalary > this.team.patrimony) throw new Error('Patrimônio insuficiente.')
    this.freePlayer.sellPlayer(this.idPlayer)
    this.team.addPlayerToTeam(player)
  }
}

class DismissPlayer {
  constructor(
    private freePlayer: FreePlayers,
    private team: Team,
    private idPlayer: string
  ) { }

  execute() {
    const player = this.team.getPlayer(this.idPlayer)
    if (!player) throw new Error('Jogador não encontrado.')
    this.team.sellPlayer(this.idPlayer)
    this.freePlayer.addPlayer(player)
  }
}

describe('Fantasy Game', () => {

  const freePlayer = new FreePlayers()

  test('Deve adicionar jogadores ao mercado', () => {
    const [id1, id2, id3] = [uuid(), uuid(), uuid()]
    const player1 = new Player(id1, 'Ronaldo', 'Atacante', 20)
    const player2 = new Player(id2, 'Zico', 'Atacante', 50)
    const player3 = new Player(id3, 'Messi', 'Atacante', 40)
    freePlayer.addPlayer(player1)
    freePlayer.addPlayer(player2)
    freePlayer.addPlayer(player3)

    const actual = freePlayer.amountPlayer()
    const expected = 3
    expect(actual).toBe(expected)
  })

  test('Deve criar um time', () => {
    const team = new Team('Flamengo', 100.0)
    expect(team.amountPlayer()).toBe(0)
    expect(team.patrimony).toBe(100)
  })

  test('Deve adicionar um jogador ao time', () => {
    const team = new Team('Flamengo', 100.0)
    const [player, _p2, _p3] = freePlayer.getPlayers()
    const transferFreePlayer = new TransferPlayer(freePlayer, team, player.id)
    const expectedPatrimony = team.patrimony - player.getSalary
    transferFreePlayer.execute()

    expect(team.amountPlayer()).toBe(1)
    expect(team.patrimony).toBe(expectedPatrimony)
  })

  test('Não deve comprar um jogador com salário maior que o patrimônio do clube.', () => {
    const team = new Team('Avai', 20)
    const [_p1, player, _p3] = freePlayer.getPlayers()
    const transferFreePlayer = new TransferPlayer(freePlayer, team, player.id)

    expect(() => transferFreePlayer.execute()).toThrowError('Patrimônio insuficiente.')
  })

  test('Não deve encontrar um jogador que não existe..', () => {
    const team = new Team('Flamengo', 100.0)
    const id = uuid()

    expect(() => team.getPlayer(id)).toThrowError('Nenhum jogador encontrado.')
  })

  test('Não deve ser possivel vender um jogador sem ter contratado nenhum.', () => {
    const team = new Team('Flamengo', 100.0)
    const id = uuid()
    expect(() => team.sellPlayer(id)).toThrowError('Nenhum jogador para vender/dispensar.')
  })
})
