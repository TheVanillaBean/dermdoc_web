const Testimonial = ({ service, text, date }) => {
  return (
    <figure className='testimonial'>
      <p className='testimonial--date'>[Name ommited] - {service} visit</p>
      <blockquote className='testimonial--text'>{text}</blockquote>
      <p className='testimonial--date'>&mdash; {date}</p>
    </figure>
  );
};

export default Testimonial;
