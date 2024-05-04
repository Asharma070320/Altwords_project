import React from 'react'
import './Details.css'
import dummydata from './DummyData'
import profile from '../profile.png'
import { GetCtx } from '../ContextDemo'

const Details = () => {

    const ctx = GetCtx();
    // console.log(ctx);

    const getuser = (e, userData) => {
      ctx.setData(userData);
    };

  return (
    <div className='details_container'>

     <div className="pages">
        <p className='light'>Pages<span className='dark'> / Assignment</span></p>
        <b>Sales BDE</b>
     </div>

     <div className="sales_Bde">

        <div className="active">
            <p className="BDE">Sales BDE</p>
            <p className="activee">Active <i class="ri-pencil-fill pencil"></i></p>
        </div>

        <div className="assignment_link">
            <p>Assignment Link</p>
            <a href="/">https://tiny.url/asknakdna</a>
        </div>

        <div className="assignment_link">
            <p>Assignment Hour</p>
            <p>3 Hours</p>
        </div>

        <div className="assignment_link">
            <p>Assignment Ends at</p>
            <p>11 March 2024</p>
        </div>

        <div className="review_shortlisted">
            <div className="review">
            <p><i class="ri-pantone-fill"></i> TO REVIEW</p>
            </div>
            <p className="shortlisted"><i class="ri-pantone-fill"></i>SHORTLISTED</p>
        </div>

        <div className="candidate_score">
            <p className='candidate'>CANDIDATE</p>
            <p className='score'>SCORE</p>
        </div>

        <div className="lists">
        {dummydata.map((user, index) => (
          <div key={index} className="li">
            <div onClick={(e) => getuser(e, user)} className="img_about">
              <div className="img">
                <img src={profile} alt="profile.img" />
              </div>
              <div className="name_mail">
                <p className='nameSet'>{user.name}</p>
                <p className='email'>{user.email}</p>
              </div>
            </div>
            <b>{user.rating > "70%" ? <div className='greenclr'>{user.rating}</div> : <div className='yellowclr'>{user.rating}</div>}</b>
          </div>
        ))}
      </div>

     </div>


    </div>
  )
}

export default Details
