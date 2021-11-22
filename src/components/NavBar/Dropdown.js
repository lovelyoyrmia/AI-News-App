import React from 'react'
import { infoCards } from '../NewsCard/InfoCards'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DropdownStyle = styled.li`
  width: 14rem;
  .nav-link-hover:hover {
    color: rgb(138, 117, 114);
  }
`

function Dropdown({ classes }) {
  return ( 
    <ul className={classes.dropdownStyle}>
      {infoCards.map((item) => {
        return (
          <DropdownStyle key={item.id} >
            <Link to={item.url} className={classes.dropdownItem}>
              <div className='nav-link-hover'>{item.title}</div>
            </Link>
          </DropdownStyle>
        )
      })}
    </ul>  
  )
}

export default Dropdown
