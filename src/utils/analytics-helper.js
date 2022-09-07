import axios from 'axios';
import * as rdd from 'react-device-detect';

export const configureAnalyticsObject = async (cookies) => {
  const fbp = cookies.get('_fbp') || '';

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
    client_ip: ipv4,
    client_user_agent: rdd.getUA || '',
  };

  return analytics_data;
};
