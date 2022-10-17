import React from 'react'
import CountUp from 'react-countup';
import {Container ,Row ,Col} from 'react-bootstrap';
const WhyUs = () => {
  return (
    <div className='navvv' id='Why us'>
    <Container>
<Row>
<section style={{display: "flex"}} className='Whyus'>

<Col>
<div className='immmm' data-aos="fade-left">  
<img src='imgg\image1.1091417d32e491f0bbb6.png' style={{width:"250px" , height:"472px"}}/>
<img src='imgg\image2.82da8b2725df896d8a8e.png'style={{width:"440px" , height:"290px",position:"relative", left:"10px"}}/>
<img src='imgg\image3.69484cb0ee7687a8c28b.png'style={{width:"160px" , height:"160px" ,position:"relative", top:"300px", right:"430px"}}/>
<img src='imgg\image4.2c0d30b9ce1579eb1109.png'style={{width:"270px" , height:"160px" ,position:"relative", top:"300px", right:"420px"}}/>
</div>
</Col>

<Col data-aos="fade-right">
<div className='ffg'>
<h6>SOME REASONS</h6>
<h1><span className='nn'>WHY</span> CHOOSE US?</h1>
<div style={{ display: "flex"}} className='mm1'>
<img style={{ width:"30px" ,height:"30px"}} src='imgg\تنزيل (4).png'/>
<h6>OVER <CountUp end={140} />+ EXPERT COACHS</h6>
</div>
<div style={{ display: "flex"}} className='mm1'>
<img style={{ width:"30px" ,height:"30px"}} src='imgg\تنزيل (4).png'/>
<h6>OVER <CountUp end={140} />+ EXPERT COACHS</h6>
</div>
<div style={{ display: "flex"}} className='mm1'>
<img style={{ width:"30px" ,height:"30px"}} src='imgg\تنزيل (4).png'/>
<h6>OVER <CountUp end={140} />+ EXPERT COACHS</h6>
</div>
<div style={{ display: "flex"}} className='mm1'>
<img style={{ width:"30px" ,height:"30px"}} src='imgg\تنزيل (4).png'/>
<h6>OVER <CountUp end={140} />+ EXPERT COACHS</h6>
</div>
<div style={{ display: "flex"}} className='mm1'>
<img style={{ width:"30px" ,height:"30px"}} src='imgg\تنزيل (4).png'/>
<h6>OVER <CountUp end={140} />+ EXPERT COACHS</h6>


</div>
<p>OUR PARTNERS</p>
<div className='gg'>
    <img src='imgg\تنزيل (5).png'/>
    <img src='imgg\تنزيل (6).png'/>
    <img src='imgg\تنزيل (7).png'/>
</div>

</div>
</Col>



</section>
</Row>
</Container>
</div>

  )
}

export default WhyUs