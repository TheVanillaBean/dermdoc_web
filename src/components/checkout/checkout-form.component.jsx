import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import CTAButton from '../cta/cta.component';

const CheckoutForm = ({ handlePayBtnPressed }) => {
  const stripe = useStripe();
  const elements = useElements();

  return (
    <>
      <h2 className='heading-secondary margin-bottom-ex-sm'>Payment Details</h2>
      <p className='paragraph'>
        We use <a href='https://stripe.com'>Stripe</a>, the leader in online payments, to securely
        process your payment information.
      </p>
      <p className='paragraph'>
        We will only renew your subscription after confirming with you that you would like another
        shipment.
      </p>
      <form className='payment-form' onSubmit={(e) => handlePayBtnPressed(stripe, elements, e)}>
        <PaymentElement className='margin-bottom-sm' id='payment-element' />

        <CTAButton
          additionalClassName='margin-center'
          buttonText='Pay now'
          disabled={!stripe || !elements}
          id='submit'
        />
      </form>
    </>
  );
};

export default CheckoutForm;
