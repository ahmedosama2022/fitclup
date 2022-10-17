import React,{useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import {Container ,Row ,Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import CountUp from 'react-countup';
import './App.css';
const Header = () => {
    useEffect(() => {
        Aos.init({duration:1000});
      }, []);
  return (
    <div> <section className='navvv' id='Home'>
     <Container>
     <Navbar  expand="lg">
        <Container fluid>
        <Navbar.Brand to="/#"><img src='imgg\تنزيل.png' style={{ width:"200px" }}/></Navbar.Brand>        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <HashLink to="/#Home" style={{marginLeft: "30px", color:"white", textDecoration:"none"}}>Home</HashLink>
            <HashLink to="/#Programs" style={{marginLeft: "30px", color:"white" , textDecoration:"none"}}>Programs</HashLink>
            <HashLink to="/#Plans" style={{marginLeft: "30px",color:"white" , textDecoration:"none"}}>Plans</HashLink>
            <HashLink to="/#Why us" disabled style={{marginLeft: "30px",color:"white" , textDecoration:"none"}}> Why us</HashLink>
            <HashLink to="/#Testimonials" disabled style={{marginLeft: "30px",color:"white" , textDecoration:"none"}}>Testimonials</HashLink>
          </Nav>
          <Form className="d-flex">
            
           
            <Button  style={{backgroundColor: "white" , color:"black",border:"none",zIndex:"1" }}>join Now</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       

        <section className='sec2'>
            <div data-aos="fade-right">
                <button className='bb3'><span style={{ backgroundColor:  "#f48916",borderRadius: "3rem", padding: "13px"}}>THE BEST</span> FITNESS CLUB IN THE TOWN</button>
                <h1 style={{fontWeight: "700", textTransform: "uppercase" , marginTop:"40px"}}><span className='nn'style={{fontWeight: "700", textTransform: "uppercase"}}>SHAPE </span>YOUR</h1>
                <h1 style={{fontWeight: "700", textTransform: "uppercase"}}>IDEAL BODY</h1>
                <p style={{color:"white"}}>In here we will help you to shape and build your ideal body and live up your life to fullest</p>
                <div className='vv'>
                <div className='div1'>
                    <h1>+ <CountUp end={140} /> </h1>
                    <p>EXPERT COACHES</p>
                </div>
                <div className='div1'>
                    <h1>+ <CountUp end={987} /> </h1>
                    <p>MEMBERS JOINED</p>
                </div>
                <div className='div1'>
                    <h1>+ <CountUp end={50} /> </h1>
                    <p>FITNESS PROGRAMS</p>
                </div>
                </div>
                <button className='b1'>Get Started</button>
                <button className='b2'>Learn More</button>
            </div>
            <div className='co'>
                <div className='dd2' data-aos="fade-left">
                    <img src='imgg\تنزيل (1).png' style={{width: "32px", height:"30px"}}/>
                    <p>Heart Rate</p>
                    <h3><CountUp end={116} /> bpm</h3>
                </div>
                <div className='imm'>
                <img src='imgg\r.png' data-aos="fade-left" style={{ position: "relative" ,right:"60px" , top:"300px", width: "240px", height:"441px",zIndex:"-1" }}/>
                <img  data-aos="fade-left" src='imgg\hero_image.e19ac0c6b1009c7280f5.png' style={{width: "340px", height:"441px" }}/>
                </div>
                <div data-aos="fade-left" className='sec22'>
                    <img src='imgg\تنزيل (2).png'/>
                   <div style={{ marginLeft: "30px"}}>
                   <p>Calories burned</p>
                    <h6><CountUp end={220} /> kcal</h6>
                   </div>
                </div>
                
            </div>
        </section>
     </Container>
    
 </section>
    </div>
  )
}

export default Header