const Testimonial = ({ img, alt, text, date }) => {
  return (
    <figure className="testimonial">
      <img className="testimonial--img" src={img} alt={alt} />
      <blockquote className="testimonial--text">{text}</blockquote>
      <p className="testimonial--date">&mdash; {date}</p>
    </figure>
  );
};

export default Testimonial;
