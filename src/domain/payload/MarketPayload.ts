export type CreateMarketInput = {
  name: string
}

export type CreateMarketOutput = CreateMarketInput & {
  id: string
}

export type UpdateMarket = Partial<CreateMarketInput>