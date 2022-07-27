import { useState, memo } from 'react';
import Header from './Header';
import StepProgress from './StepProgress';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Cart from './Cart';
import ProgressControl from './ProgressControl';
import Footer from './Footer';
import StepConstants from '../constants/StepConstants';

const App = () => {
  const HeaderMemo = memo(Header);
  const StepProgressMemo = memo(StepProgress);
  const Step1Memo = memo(Step1);
  const Step2Memo = memo(Step2);
  const Step3Memo = memo(Step3);
  const CartMemo = memo(Cart);
  const ProgressControlMemo = memo(ProgressControl);
  const FooterMemo = memo(Footer);
  const [step, setStep] = useState(StepConstants.STEP_ONE);

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

  let currentStep;

  switch (step) {
    case StepConstants.STEP_ONE:
      currentStep = <Step1Memo />;
      break;
    case StepConstants.STEP_TWO:
      currentStep = <Step2Memo />;
      break;
    case StepConstants.STEP_THREE:
      currentStep = <Step3Memo />;
      break;
    default:
      break;
  }

  return (
    <>
      <HeaderMemo />
      <div className="container">
        <StepProgressMemo step={step} />
        <section className="row g-2">
          <div id="progress-section" className="col-md-7 col-12 pe-4">
            <form action="">{currentStep}</form>
            <hr />
            <ProgressControlMemo step={step} setStep={setStep} />
          </div>
          <div id="cart-section" className="col-md-5 col-12">
            <CartMemo
              cartLineItems={cartLineItems}
              setCartLineItems={setCartLineItems}
            />
          </div>
        </section>
      </div>
      <FooterMemo />
    </>
  );
};

export default App;
