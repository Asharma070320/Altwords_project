import React from 'react'
import './About.css'
import {motion} from 'framer-motion'
import girl from '../girl.png'
import { GetCtx } from '../ContextDemo'
import profile from '../profile.png'


const About = () => {
  const ctx = GetCtx();
  console.log(ctx);
  return (
    <div className='about_container'>

      {ctx.data===null ? ( <div className='center'>
        <h1>No Data</h1>
        <p>Please select the candidate</p>
      </div> ) : (<>
      <div className="left">

<div className="profile_details">

    <div className="img_details">

      <div className="profile_imgg">
        <img src={profile} alt="" />
      </div>
      <div className="namee_details">
        <p className='right_name'>{ctx.data.name}</p>
        <p className='right_email'>{ctx.data.email}</p>
      </div>

      <p className='percentage'>{ctx.data.rating > "70%" ? <div className='greenclr'>{ctx.data.rating}</div> : <div className='yellowclr'>{ctx.data.rating}</div>}</p>

    </div>
</div>

<div className="judgement">

  <div className="behaviour">
    <p className='set_name'>Behavioural</p>
    <p className='set_name'>Communication</p>
    <p className='set_name'>Situation handling</p>
  </div>

  <div className="score_line">
   {ctx.data.behaviour > "7" ? <div  className='green_line' style={{width:`${ctx.data.behaviour*10}%`}} ></div> : <div  className='yellow_line' style={{width:`${ctx.data.behaviour*10}%`}} ></div>}
  
   {ctx.data.communication > "7" ? <div  className='green_line' style={{width:`${ctx.data.communication*10}%`}} ></div> : <div  className='yellow_line' style={{width:`${ctx.data.behaviour*10}%`}} ></div>}
   
   {ctx.data.situationhandling > "7" ? <div  className='green_line' style={{width:`${ctx.data.situationhandling*10}%`}} ></div> : <div  className='yellow_line' style={{width:`${ctx.data.behaviour*10}%`}} ></div>}
    
  </div>

  <div className="score_mark">
  {ctx.data.behaviour > "7" ? <div className='greenclr'>{ctx.data.behaviour}/10</div> : <div className='yellowclr'>{ctx.data.behaviour}/10</div>}
  {ctx.data.communication > "7" ? <div className='greenclr'>{ctx.data.communication}/10</div> : <div className='yellowclr'>{ctx.data.communication}/10</div>}
  {ctx.data.situationhandling > "7" ? <div className='greenclr'>{ctx.data.situationhandling}/10</div> : <div className='yellowclr'>{ctx.data.situationhandling}/10</div>}
   
  </div>
  
</div>

<div className="about_para">
    <p className='about'>About</p>
    <p className='light_clr'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>

<div className="experience">
<p className='about'>Experience</p>
    <p className='light_clr'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>

<div className="hobbies">
<p className='about'>Hobbies</p>
    <p className='light_clr'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>

<div className="introduction">
<p className='about'>Introduction</p>
    <p className='light_clr'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>

<motion.div whileTap={{scale: 0.9}} className="btnn">SHORTLIST</motion.div>
</div>

<div className="right">
<div className="upper"></div>
<div className="images">
    <img src={girl} alt="" />
</div>
</div>
</>) 
}
     
    </div>
  )
}

export default About
