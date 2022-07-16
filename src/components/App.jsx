// import React from 'react';
import Header from './Header';
import StepProgress from './StepProgress';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Cart from './Cart';
import ProgressControl from './ProgressControl';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <StepProgress />
        <section className="row g-2">
          <div id="progress-section" className="col-md-7 col-12 pe-4">
            <form action="">
              <Step1 />
              <Step2 />
              <Step3 />
            </form>
            <hr />
            <ProgressControl />
          </div>
          <div id="cart-section" className="col-md-5 col-12">
            <Cart />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default App;
