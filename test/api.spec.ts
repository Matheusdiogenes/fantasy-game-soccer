import axios from "axios";

describe('API Test', () => {
  describe('Adicionando jogadores ao mercado', () => {
    test("Deve criar um mercado", async () => {
      const request = await axios({
        url: "http://localhost:3333/market",
        method: "post",
        data: {
          name: 'Europa',
        }
      });
      idMarket = request.data.id
      expect(request.data.id).toBeDefined()
      expect(request.data.name).toBeDefined()
    });
    let idMarket: string

    test('Adicionando primeiro jogador ao mercado.', async () => {
      const body = {
        idMarket,
        playerData: {
          name: 'Ronaldinho',
          position: 'Meia',
          salary: 100
        }
      }
      await axios({
        url: "http://localhost:3333/market/addplayer",
        method: "post",
        data: body
      });
      const response = await axios({
        url: 'http://localhost:3333/market/players',
        method: 'get',
        data: {
          idMarket
        }
      })
      expect(response.data).toHaveLength(1)
    })

    test('Adicionando segundo jogador ao mercado.', async () => {
      const body = {
        idMarket,
        playerData: {
          name: 'Neymar',
          position: 'Atacante',
          salary: 100
        }
      }
      await axios({
        url: "http://localhost:3333/market/addplayer",
        method: "post",
        data: body
      });
      const response = await axios({
        url: 'http://localhost:3333/market/players',
        method: 'get',
        data: {
          idMarket
        }
      })
      expect(response.data).toHaveLength(2)
    })

    test('Adicionando terceiro jogador ao mercado.', async () => {
      const body = {
        idMarket,
        playerData: {
          name: 'Neymar',
          position: 'Atacante',
          salary: 100
        }
      }
      await axios({
        url: "http://localhost:3333/market/addplayer",
        method: "post",
        data: body
      });
      const response = await axios({
        url: 'http://localhost:3333/market/players',
        method: 'get',
        data: {
          idMarket
        }
      })
      expect(response.data).toHaveLength(3)
    })

    describe('Criando times e adicionando jogadores', () => {
      let idTeam: string
      test('Criando o Real Medrid', async () => {
        const body = {
          name: 'Real Madrid',
          patrimony: 100
        }

        const request = await axios({
          url: "http://localhost:3333/team",
          method: "post",
          data: body
        });

        idTeam = request.data.id

        const response = await axios({
          url: `http://localhost:3333/team/players/${idTeam}`,
          method: 'get',
        })

        expect(response.data).toHaveLength(0)
      })
      test('Contratação de jogadores', async () => {
        const players = await axios({
          url: 'http://localhost:3333/market/players',
          method: 'get',
          data: {
            idMarket
          }
        })        
        
        const body = {
          idTeam: idTeam,
          idMarket: idMarket,
          idPlayer: players.data[0].id
        }

        await axios({
          url: "http://localhost:3333/team/contract",
          method: "post",
          data: body
        });
        const playersTeam = await axios({
          url: `http://localhost:3333/team/players/${idTeam}`,
          method: 'get',
        })

        const playersMarket = await axios({
          url: 'http://localhost:3333/market/players',
          method: 'get',
          data: {
            idMarket
          }
        })
        expect(playersMarket.data).toHaveLength(2)

        expect(playersTeam.data).toHaveLength(1)
      })      
    })
  })
})
