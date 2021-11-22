import React, { useEffect } from 'react'
import { NavBar, FooterContainer } from '../../../components'

function NewsByCategories() {

  useEffect(() => {
    document.title = 'AI News for news by categories'
  },[])

  return (
    <>
      <NavBar />
      <div>
        <h1>News By Categories</h1>
      </div>
      <FooterContainer/>
    </>
  )
}

export default NewsByCategories
