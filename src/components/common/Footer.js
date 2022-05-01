import React from 'react';
import { FaMapMarkedAlt,FaFacebookF,FaYoutube,FaInstagram,FaTwitter } from 'react-icons/fa';
import { MdCall ,MdEmail} from 'react-icons/md';
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3">
              <div className="footer-logo">
                <h1>Mr. Travel </h1>
                <p>Lorem ipsum dolor sit 
                  ametco nsec te tuer adipiscing elitae</p>
                  <div className="footer-icons">
                  <li><FaFacebookF/></li>
                  <li><FaYoutube/></li>
                  <li><FaInstagram/></li>
                  <li><FaTwitter/></li>
                  </div>
              </div>
            </div>
            <div className="col-lg-3 services px-5">
              <h4>Services</h4>
              <li>About Us</li>
              <li>How It Works</li>
              <li>Our Services</li>
              <li>Contact Us</li>
            </div>
            <div className="col-lg-3 contact">
             <h4>Contact Info</h4>
               <li><FaMapMarkedAlt className='me-2'/> Dhaka, Bangladesh</li>
               <li><MdCall className='me-2'/> +8801887403752</li>
               <li><MdEmail className='me-2'/> mrtravel123@gmail.com</li>
            </div>
            <div className="col-lg-3">
              <h4>Our Instagram</h4>
              <div className="gallery-img">
                <div className="d-flex">
                <li> <img src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/footer-gallery-1.jpg" 
                alt="" /></li>
              
                <li> <img src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/footer-gallery-1.jpg" 
                alt="" /></li>
                <li> <img src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/footer-gallery-1.jpg" 
                alt="" /></li>
                </div>
                <div className="d-flex">
                <li> <img src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/footer-gallery-1.jpg" 
                alt="" /></li>
                <li> <img src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/footer-gallery-1.jpg" 
                alt="" /></li>
              
                <li> <img src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/footer-gallery-1.jpg" 
                alt="" /></li>
                </div>
                
             </div>
             
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;