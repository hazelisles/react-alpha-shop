import { useState, useMemo } from 'react';
import Header from './Header';
import StepProgress from './StepProgress';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Cart from './Cart';
import ProgressControl from './ProgressControl';
import Footer from './Footer';
import StepConstants from '../constants/StepConstants';
import { CartContext } from './Contexts/CartContext';

const App = () => {
  const [step, setStep] = useState(StepConstants.STEP_ADDRESS);

  const [cartLineItems, setCartLineItems] = useState(() => {
    return [
      {
        id: '1',
        name: '貓咪罐罐',
        img: 'https://picsum.photos/300/300?text=1',
        price: 100,
        quantity: 2,
      },
      {
        id: '2',
        name: '貓咪干干',
        img: 'https://picsum.photos/300/300?text=2',
        price: 200,
        quantity: 1,
      },
      {
        id: '3',
        name: '破壞補釘修身牛仔褲',
        img: './images/product-1.jpg',
        price: 3999,
        quantity: 1,
      },
      {
        id: '4',
        name: '刷色直筒牛仔褲',
        img: './images/product-2.jpg',
        price: 1299,
        quantity: 2,
      },
    ];
  });

  const cartContextProviderValue = useMemo(() => {
    return { step, setStep, cartLineItems, setCartLineItems };
  }, [step, setStep, cartLineItems, setCartLineItems]);

  let currentStep;

  switch (step) {
    case StepConstants.STEP_ADDRESS:
      currentStep = <Step1 />;
      break;
    case StepConstants.STEP_DELIVERY:
      currentStep = <Step2 />;
      break;
    case StepConstants.STEP_PAYMENT:
      currentStep = <Step3 />;
      break;
    default:
      break;
  }

  return (
    <>
      <Header />
      <div className="container">
        <CartContext.Provider value={cartContextProviderValue}>
          <StepProgress />
          <section className="row g-2">
            <div id="progress-section" className="col-md-7 col-12 pe-4">
              <form action="">{currentStep}</form>
              <hr />
              <ProgressControl />
            </div>
            <div id="cart-section" className="col-md-5 col-12">
              <Cart />
            </div>
          </section>
        </CartContext.Provider>
      </div>
      <Footer />
    </>
  );
};

export default App;
