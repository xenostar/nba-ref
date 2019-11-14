export const transformPlayerData = playerData => {
  const data = {}

  data.firstName = playerData.firstName === undefined ? '--' : playerData.firstName

  return data
}
