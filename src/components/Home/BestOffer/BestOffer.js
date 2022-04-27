import React from 'react';
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import icon1 from '../../../images/icons-1.webp'
import icon2 from '../../../images/icons-2.webp'
import icon3 from '../../../images/icon-3.webp'
import icon4 from '../../../images/icons-4.webp'
import offers1 from '../../../images/offer-1.jpg'
import offers2 from '../../../images/rena-1.webp'
import offers3 from '../../../images/sea-5.jpg'
import offers4 from '../../../images/sea-4.jpg'
const BestOffer = () => {
  return (
    <div className='offer-section '>
      <h2 className='text-center title'><b>THE BEST OFFERS WITH ROOMS</b></h2>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 offer-img">
                <img className='border' src={offers1} alt="" />
             <div className="subs-title">GRAND SULTAN RESORT</div>
              </div>
              <div className="col-lg-6">
                <div className="offer-info">
                    <div className="d-flex align-items-center">
                    <div className="price">
                      <h1>$60</h1>
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
                    <p className='text-start py-3'> Starting from BDT 999++ per person. Enjoy Srimongal- the tea capital of Bangladesh, is famous for its nature, forests and wildlife.</p>
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
                <img className='' src={offers2} alt="" />
             <div className="subs-title">Renaissance Gulshan Hotel</div>
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
 <p className='text-start py-3'>Welcome to RENAISSANCE DHAKA GULSHAN HOTEL
Step into stylish rooms at our luxury hotel in Gulshan Dhaka</p>
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
          <div className="col-lg-6 Second-row">
            <div className="row">
              <div className="col-lg-6 offer-img">
                <img className='' src={offers3} alt="" />
             <div className="subs-title">Sea Pearl Beach Resort</div>
              </div>
              <div className="col-lg-6">
                <div className="offer-info">
                    <div className="d-flex align-items-center">
                    <div className="price">
                      <h1>$100</h1>
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
 <p className='text-start py-3'>Get special offers from Sea Pearl Beach Resort & Spa
 Emerald Honeymoon Package (3 DAYS & 2 NIGHT PACKAGE)</p>
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
          <div className="col-lg-6 Second-row">
            <div className="row">
              <div className="col-lg-6 offer-img">
                <img className='' src={offers4} alt="" />
             <div className="subs-title">Sea Pearl Beach Resort</div>
              </div>
              <div className="col-lg-6">
                <div className="offer-info">
                    <div className="d-flex align-items-center">
                    <div className="price">
                      <h1>$90</h1>
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
 <p className='text-start py-3'>Get special offers from Sea Pearl Beach Resort & Spa
 SEA PEARL FULL BOARD PACKAGE (2 DAYS & 1 NIGHT PACKAGE)</p>
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