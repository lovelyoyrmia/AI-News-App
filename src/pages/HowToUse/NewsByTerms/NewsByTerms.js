import React, { useEffect } from 'react'
import { NavBar, FooterContainer } from '../../../components'

function NewsByTerms() {

  useEffect(() => {
    document.title = 'AI News for news by terms'
  },[])

  return (
    <>
      <NavBar />
      <div>
        <h1>News By Terms</h1>
      </div>
      <FooterContainer/>
    </>
  )
}

export default NewsByTerms
