export default (tempKevlin: number): string => {
  const convertedTemp = ((tempKevlin - 273.15) * 9) / 5 + 32
  return convertedTemp.toFixed(0) + String.fromCharCode(8457)
}
