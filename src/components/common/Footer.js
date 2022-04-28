import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className=''>
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-lg-3">
              <div className="footer-logo">
                <h1>Mr. Travel </h1>
                <p>Lorem ipsum dolor sit 
                  ametco nsec te tuer adipiscing elitae</p>
                  <li>mr.travel123@gmail.com</li>
                  <li>1562 867 5309</li>
                  <li>Dhaka , Bangladesh</li>
              </div>
            </div>
            <div className="col-lg-3 services">
              <h4>Services</h4>
              <li>About Us</li>
              <li>How It Works</li>
              <li>Our Blog</li>
              <li>Our Services</li>
              <li>Contact Us</li>
            </div>
            <div className="col-lg-3">
              <h4>Subscribe to our Newsletter</h4>
              <p>Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Eum, officiis!</p>

                <div className="subs-input">
                  <input type="text" placeholder='Name'/>
                  <input type="email" name="" id="" placeholder='Email' /> <br />
                   <input type="submit" value="Subscribe" className='subscribe'/>
                </div>
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