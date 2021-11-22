import React, { useEffect } from 'react'
import { NavBar, FooterContainer } from '../../../components'


function NewsBySources() {

  useEffect(() => {
    document.title = 'AI News for news by sources'
  },[])

  return (
    <>
      <NavBar />
      <div>
        <h1>News By Sources</h1>
      </div>
      <FooterContainer/>
    </>
  )
}

export default NewsBySources
