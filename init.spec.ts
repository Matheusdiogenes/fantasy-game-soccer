class Player {
  constructor(
    public name: string,
    public position: string,
    private salary: number
  ) { }

  public get getSalary(): number {
    return this.salary
  }
}

class Team {
  constructor(
    public name: string,
    public patrimony: number,
    private players: Player[] = []
  ) { }

  signPlayer(player: Player) {
    if(player.getSalary > this.patrimony) throw new Error('Patrimônio insuficiente.')
    this.patrimony -= player.getSalary
    this.players.push(player)
  }

  amontPlayer() {
    return this.players.length
  }
}

describe('Fantasy Game', () => {

  test('Deve criar um time', () => {
    const team = new Team('Flamengo', 100.0)
    expect(team.amontPlayer()).toBe(0)
    expect(team.patrimony).toBe(100)
  })

  test('Deve adicionar um jogador a um time', () => {
    const team = new Team('Flamengo', 100.0)
    const player = new Player('Ronaldo', 'Atacante', 10)
    team.signPlayer(player)

    expect(team.amontPlayer()).toBe(1)
    expect(team.patrimony).toBe(90)
  })

  test('Não deve comprar um jogador com salário maior que o patrimônio do clube.', () => {
    const team = new Team('Flamengo', 100.0)
    const player = new Player('Pelé', 'Atacante', 101)

    expect(() => team.signPlayer(player)).toThrowError('Patrimônio insuficiente.')
  })
})