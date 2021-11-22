import React from 'react'
import Footer  from './Footer'
import { Link } from 'react-router-dom'
import { FooterItems, SocialMedia } from './FooterItems'
import Icons from './Icon'

export default function FooterContainer() {
  
  const navStyle = {
    color: 'black',
    textDecoration: 'none',
    cursor: 'pointer'
  }

  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          {FooterItems.map((item) => {
              return (
                <Footer.Column key={item.id}>
                  <Footer.Title>{item.title}</Footer.Title>
                  <br />
                  {item.subTitle.map((itemSub) => (
                    <Link key={itemSub.subId} style={navStyle} to={itemSub.path}>
                        <Footer.Link>
                            {itemSub.name}
                        </Footer.Link>
                    </Link>
                  ))}
                </Footer.Column>
              )
          })}
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <br />
            {SocialMedia.map((social) => {
              return (
                <div key={social.id} style={navStyle} onClick={social.target}>
                  <Footer.Link>
                    <Icons className={social.cName} />{social.title}
                  </Footer.Link>
                </div>
              ) 
            })}
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  )
}