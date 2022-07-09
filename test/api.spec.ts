import axios from "axios";
describe('API Test', () => {
  describe('Adicionando jogadores ao mercado', () => {
    let idMarket: number
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
  })
})
