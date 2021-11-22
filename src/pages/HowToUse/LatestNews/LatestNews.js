import React, { useEffect } from 'react'
import { NavBar, FooterContainer } from '../../../components'

function LatestNews() {

  useEffect(() => {
    document.title = 'AI News for latest news'
  },[])

  return (
    <>
      <NavBar />
      <div>
        <h1>Latest News</h1>
      </div>
      <FooterContainer/>
    </>
  )
}

export default LatestNews
