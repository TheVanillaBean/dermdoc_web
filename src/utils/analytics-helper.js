import ReactPixel from '@bettercart/react-facebook-pixel';
import axios from 'axios';
import * as rdd from 'react-device-detect';
import TiktokPixel from 'tiktok-pixel';

export const configureAnalyticsObject = async (cookies) => {
  const fbp = cookies.get('_fbp') || '';
  const ttp = cookies.get('_ttp') || '';

  let ipv4 = '';
  try {
    const ipRequest = await axios.get('https://geolocation-db.com/json/');
    ipv4 = ipRequest.data.IPv4;
  } catch (e) {
    ipv4 = 'Error - ' + e;
  }

  const analytics_data = {
    source_url: window.location.href || 'dermdoc.com',
    fbp: fbp,
    ttp: ttp,
    client_ip: ipv4,
    client_user_agent: rdd.getUA || '',
  };

  return analytics_data;
};

export const trackViewContent = ({ visit_id }) => {
  ReactPixel.track(
    'ViewContent',
    {
      value: 1,
      currency: 'USD',
    },
    { eventID: `${visit_id}-ViewContent` }
  );

  TiktokPixel.track(
    'ViewContent',
    {
      value: 1,
      currency: 'USD',
    },
    { eventID: `${visit_id}-ViewContent` }
  );
};

export const trackCompleteRegistration = ({ visit_id }) => {
  ReactPixel.track(
    'CompleteRegistration',
    {
      value: 2,
      currency: 'USD',
    },
    { eventID: `${visit_id}-CompleteRegistration` }
  );

  TiktokPixel.track(
    'CompleteRegistration',
    {
      value: 2,
      currency: 'USD',
    },
    { eventID: `${visit_id}-CompleteRegistration` }
  );
};

export const trackLead = ({ visit_id }) => {
  ReactPixel.track(
    'Lead',
    {
      value: 3,
      currency: 'USD',
    },
    { eventID: `${visit_id}-Lead` }
  );
  TiktokPixel.track(
    'SubmitForm',
    {
      value: 3,
      currency: 'USD',
    },
    { eventID: `${visit_id}-SubmitForm` }
  );
};

export const trackInitiateCheckout = ({ visit_id }) => {
  ReactPixel.track(
    'InitiateCheckout',
    {
      value: 4,
      currency: 'USD',
    },
    { eventID: `${visit_id}-InitiateCheckout` }
  );
  TiktokPixel.track(
    'InitiateCheckout',
    {
      value: 4,
      currency: 'USD',
    },
    { eventID: `${visit_id}-InitiateCheckout` }
  );
};
