export const getAdviceData = async (id, setId) => {
  const adviceId = `https://api.adviceslip.com/advice/${id}`

  const response = await fetch(adviceId)
  const data = await response.json()
  setId(data)
}
