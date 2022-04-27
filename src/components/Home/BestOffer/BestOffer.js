import React from 'react';
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import icon1 from '../../../images/icons-1.webp'
import icon2 from '../../../images/icons-2.webp'
import icon3 from '../../../images/icon-3.webp'
import icon4 from '../../../images/icons-4.webp'

const BestOffer = () => {
  return (
    <div className='offer-section '>
      <h2 className='text-center title'><b>THE BEST OFFERS WITH ROOMS</b></h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 offer-img">
                <img className='' src="https://images.unsplash.com/photo-1534085257125-2a318a47c1ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFwcHklMjB0cmF2ZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
             <div className="subs-title">GRAND CASTLE</div>
              </div>
              <div className="col-lg-6">
                <div className="offer-info">
                    <div className="d-flex align-items-center">
                    <div className="price">
                      <h1>$70</h1>
                     <div className="d-flex justify-content-around">
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiOutlineStar/></li>
                     </div>
                    </div>
                    <p className='ms-2'>per night</p>
                    </div>
                    <p className='text-start py-3'>Suspensive potent. In faucet's massa. Lorem ipsum dolor sit amer,
                       consenter advising elite. Nulled eu corvallis torpor.</p>
                      <div className="offer-icons d-flex gap-4">
                        <li><img src={icon1} alt="" /></li>
                        <li><img src={icon2} alt="" /></li>
                        <li><img src={icon3} alt="" /></li>
                        <li><img src={icon4} alt="" /></li>
                      </div>
                    <button className='' href="http://">READ MORE</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 offer-img">
                <img className='' src="https://images.unsplash.com/photo-1534085257125-2a318a47c1ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFwcHklMjB0cmF2ZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
             <div className="subs-title">GRAND CASTLE</div>
              </div>
              <div className="col-lg-6">
                <div className="offer-info">
                    <div className="d-flex align-items-center">
                    <div className="price">
                      <h1>$70</h1>
                     <div className="d-flex justify-content-around">
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiTwotoneStar/></li>
                     <li><AiOutlineStar/></li>
                     </div>
                    </div>
                    <p className='ms-2'>per night</p>
                    </div>
                    <p className='text-start py-3'>Suspensive potent. In faucet's massa. Lorem ipsum dolor sit amer,
                       consenter advising elite. Nulled eu corvallis torpor.</p>
                      <div className="offer-icons d-flex gap-4">
                        <li><img src={icon1} alt="" /></li>
                        <li><img src={icon2} alt="" /></li>
                        <li><img src={icon3} alt="" /></li>
                        <li><img src={icon4} alt="" /></li>
                      </div>
                    <button className='' href="http://">READ MORE</button>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default BestOffer;