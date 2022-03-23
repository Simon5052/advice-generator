export const randomAdvice = async setAd => {
  const response = await fetch(`https://api.adviceslip.com/advice`)
  const data = await response.json()
  setAd(data)
}
