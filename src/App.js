import React from 'react';
import logo from './resources/images/document-logo.svg';
import iPhoneImage from './resources/images/app-iPhone.png';
import iPhoneApp from './resources/images/download-app.svg';
import playStoreApp from './resources/images/download-app-android.png';
import './Grid.css';
import './App.css';
import './resources/css/queries.css';
import DocumentTable from './DocumentTable';
import DatePicker from 'react-date-picker';



function App() {
  return (
    <div className="App">

     <header>
      <nav>
       <div className="row">

          <img src={logo} alt="Logo" className="logo"/>
          <ul className="main-nav">
          <li><a href="#section-steps">How it works</a></li>
          <li><a href="#">Sign Up</a></li>
          </ul>

       </div>

      </nav>
       <div className="img-text-box">
          <h1>Document Tracker </h1>
          <h2>Never miss a Renewal Date</h2>
          <a href="#section-list-data" className="btn btn-full"> Add Documents</a>
          <a href="#section-steps" className="btn btn-ghost"> Show me more</a>
       </div>

     </header>



     <section className="section-features">
     <div className="row">
         <h2>Never miss a renewal  date &mdash; ever</h2>
         <p className="long-copy">
         Hello, keep track of the expiry dates of all your important documents and get automatic reminders
         on when to renew. Have the peace of mind!
         </p>
      </div>
     <div className="row">
      <div className="col span-1-of-3 box">
         <h3>Lorem ipsum</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
         </p>
      </div>
      <div className="col span-1-of-3 box">
         <h3>Duis aute</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
         </p>
      </div>
      <div className="col span-1-of-3 box">
         <h3>Excepteur sint</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
         </p>
      </div>
     </div>
     </section>


     <section id="section-list-data" className="section-list-data">
  
      <ul>
        <DocumentTable />
      </ul>
     </section>

     <section id="section-steps" className="section-steps">

      <div className="row">
         <h2>How it works &mdash; Simple as 1, 2, 3</h2>
      </div>
      <div className="row">
       <div className="col span-1-of-2 steps-box">
          <img src={iPhoneImage}  alt="App on Iphone" className="app-screen"/>
       </div>
       <div className="col span-1-of-2 steps-box">
        <div class="work-steps">
         <div>1</div>
         <p>Add the document name and expiry date</p>
        </div>
        <div class="work-steps">
         <div>2</div>
         <p>Add a reminder date - defaults to 3 months before expiry date</p>
        </div>
        <div className="work-steps">
         <div>3</div>
         <p>You will get email reminders</p>
        </div>
        <a href="#" className="btn-app"><img src={iPhoneApp} alt="App Store Button"/></a>
        <a href="#" className="btn-app"><img src={playStoreApp} alt="Play Store Button"/></a>
       </div>
       </div>

     </section>

     <section className="section-testimonials">

      <div className="row">
         <h2>Customer Testimonials</h2>
      </div>
      <div className="row">
       <div className="col span-1-of-3">
          <blockquote>
            The service was awesome!!
            <cite>Joan Felipe</cite>
          </blockquote>
       </div>
       <div className="col span-1-of-3">
          <blockquote>
            Excellent service!!
            <cite>Joan Felipe</cite>
          </blockquote>
       </div>
       <div className="col span-1-of-3">
          <blockquote>
            Amazing!!
            <cite>Joan Felipe</cite>
          </blockquote>
       </div>

       </div>

     </section>

     <section className="section-plans">
     <div className="row">
        <h2>Start using the app</h2>
     </div>
     <div className="row">
     <div className="col span-1-of-3">
         <div className="plan-box">
           <div>
              <h3>Premium</h3>
              <p className="plan-price">$20<span>/month</span></p>
              <p className="plan-price-meal">$5 per day</p>
           </div>
           <div>
             <ul>
              <li>24/7 support</li>
              <li>Free delivery</li>
             </ul>
           </div>
           <div>
                <a href="#" className="btn btn-full"> Sign up now</a>
           </div>
         </div>
     </div>
     <div className="col span-1-of-3">
         <div class="plan-box">
           <div>
              <h3>Pro</h3>
              <p class="plan-price">$15<span>/month</span></p>
              <p class="plan-price-meal">$5 per day</p>
           </div>
           <div>
             <ul>
              <li>24/7 support</li>
              <li>Free delivery</li>
             </ul>
           </div>
           <div>
                <a href="#" className="btn btn-ghost"> Sign up now</a>
           </div>
         </div>
     </div>
     <div className="col span-1-of-3">
         <div class="plan-box">
           <div>
              <h3>Starter</h3>
              <p class="plan-price">$5<span>/month</span></p>
              <p class="plan-price-meal">&nbsp;</p>
           </div>
           <div>
             <ul>
              <li>24/7 support</li>
              <li>Free delivery</li>
             </ul>
           </div>
           <div>
                <a href="#" className="btn btn-ghost"> Sign up now</a>
           </div>
         </div>
         </div>
     </div>
      </section>

      <section class="section-contact">
      <div className="row">
         <h2>We're happy to hear from you</h2>
      </div>
      <div className="row">
        <form method="post" action="#" class="contact-form">
        <div class="row">
          <div class="col span-1-of-3">
             <label for="name">Name</label>
          </div>
          <div class="col span-2-of-3">
             <input type="text" name="name" id="name" placeholder="Your name" required/>
          </div>
        </div>

        <div class="row">
          <div class="col span-1-of-3">
             <label for="email">Email</label>
          </div>
          <div class="col span-2-of-3">
             <input type="email" name="email" id="email" placeholder="Your email" required/>
          </div>
        </div>

        <div class="row">
          <div class="col span-1-of-3">
             <label for="find-us">How did you find us?</label>
          </div>
          <div class="col span-2-of-3">
             <select name="find-us" id="find-us">
                <option value="friends">Friends</option>
                <option value="search">Search Engine</option>
                <option value="search">Other</option>
             </select>
          </div>
        </div>

        <div class="row">
          <div class="col span-1-of-3">
             <label>Newsletter</label>
          </div>
          <div class="col span-2-of-3">
             <input type="checkbox" name="news" id="news" checked/>Yes, please
          </div>
        </div>

        <div class="row">
          <div class="col span-1-of-3">
             <label>Drop us a line</label>
          </div>
          <div class="col span-2-of-3">
             <textarea name="message" placeholder="Your message"></textarea>
          </div>
        </div>

        <div class="row">
          <div class="col span-1-of-3">
             <label>&nbsp;</label>
          </div>
          <div class="col span-2-of-3">
             <input type="submit" value="Send it!"/>
          </div>
        </div>

        </form>
      </div>
      </section>
      <footer>
      <div class="row">
        <div class="col span-1-of-2">
           <ul class="footer-nav">
             <li><a href="#">About us</a></li>
             <li><a href="#">Blog</a></li>
             <li><a href="#">iOS App</a></li>
           </ul>
        </div>
        <div class="col span-1-of-2">
        <ul class="social-links">
          <li><a href="#">Facebook</a></li>
        </ul>
        </div>
      </div>

      <div class="row">
      <p> Copyright &copy; 2020 by ThinkLambda. All rights reserved.
      </p>
      </div>

      </footer>

    </div>
  );
}

export default App;
