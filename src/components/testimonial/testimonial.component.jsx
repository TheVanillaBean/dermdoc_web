const Testimonial = ({ service, text, date }) => {
  return (
    <figure className='testimonial'>
      <blockquote className='testimonial--text'>{text}</blockquote>
      <p className='testimonial--date'>&mdash; {date}</p>
    </figure>
  );
};

export default Testimonial;
