import React, { useEffect, useState } from 'react'
import Card from './Card'
import divider from '../assets/pattern-divider-desktop.svg'
import '../styles/content.css'
import Button from './Button'
import { getAdviceData } from '../utils/getAdviceData'
import { randomAdvice } from '../utils/getRandomAdvice'

const Content = () => {
  const [ad, setAd] = useState({})
  const [loading, setLoading] = useState(false)
  const [id] = useState(1)

  const fetchdata = async () => {
    try {
      await getAdviceData(id, setAd)
    } catch (e) {
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    fetchdata()
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { slip = [] } = ad

  if (loading) {
    return <p>Loading.....</p>
  }

  return (
    <Card>
      <div className='wrapper'>
        <h5 className='title'>advice #{slip.id}</h5>
        <p className='content'>
          <q>{slip.advice}</q>
        </p>
      </div>
      <div className='divider'>
        <img src={divider} alt='divider' />
      </div>
      <div
        className='button-wrapper'
        onClick={async () => await randomAdvice(setAd)}
      >
        <Button />
      </div>
    </Card>
  )
}

export default Content
