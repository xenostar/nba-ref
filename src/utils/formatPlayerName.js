/**
 * Formats player names
 * @param {string} name
 * @returns formatted player name
 */
export const formatPlayerName = name => name.toLowerCase().replace(/[\s-'.]/g, "")
