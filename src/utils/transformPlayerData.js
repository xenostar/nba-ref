export const transformPlayerData = playerData => {
  const data = {}

  data.firstName = playerData.firstName ?? '--'

  return data
}
