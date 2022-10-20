import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CTAButton from '../cta/cta.component';

const CheckoutForm = ({ handlePayBtnPressed }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.href}/visits/selfies`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

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

        {isLoading ? (
          <div className='spinner-overlay'>
            <div className='spinner-container' />
          </div>
        ) : (
          <CTAButton
            additionalClassName='margin-center'
            buttonText='Pay now'
            disabled={isLoading || !stripe || !elements}
            id='submit'
          />
        )}

        {/* Show any error or success messages */}
        {message && <div id='payment-message'>{message}</div>}
      </form>
    </>
  );
};

export default CheckoutForm;
