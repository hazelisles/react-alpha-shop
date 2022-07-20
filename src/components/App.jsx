import { useState } from 'react';
import Header from './Header';
import StepProgress from './StepProgress';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Cart from './Cart';
import ProgressControl from './ProgressControl';
import Footer from './Footer';

const App = () => {
  const [step, setStep] = useState(1);

  let currentStep;

  switch (step) {
    case 1:
      currentStep = <Step1 />;
      break;
    case 2:
      currentStep = <Step2 />;
      break;
    case 3:
      currentStep = <Step3 />;
      break;
    default:
      break;
  }

  return (
    <>
      <Header />
      <div className="container">
        <StepProgress step={step} />
        <section className="row g-2">
          <div id="progress-section" className="col-md-7 col-12 pe-4">
            <form action="">{currentStep}</form>
            <hr />
            <ProgressControl step={step} setStep={setStep} />
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
