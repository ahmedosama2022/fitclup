import React from 'react'
import { Container } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <div className='navvv'>
         <section className='Footer' id=''>
    <hr></hr>
    <div className='ico'>
    <iconify-icon icon="ant-design:instagram-filled" ></iconify-icon>
    <iconify-icon icon="cib:linkedin" style={{marginLeft:"50px"}}></iconify-icon>
    <iconify-icon icon="akar-icons:github-fill" style={{marginLeft:"50px"}}></iconify-icon>
   
    </div>
    <img src='imgg\تنزيل.png' style={{ width:"300px" }}/>
    </section>
    <div className='Arr'>
        <Container>
        <HashLink to="/#Home"><iconify-icon icon="akar-icons:arrow-up-thick"></iconify-icon></HashLink>
        </Container>
     
     </div>
    </div>
  )
}

export default Footer