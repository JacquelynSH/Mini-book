import React from 'react'

const Book = (props ) => {
  const { img, title, author, children } = props;
  const clickHandlder = (e) => {
    console.log("HERE", e.target);
    alert('Yeehaw');
  }
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h2>{title}</h2>
      <h3>{author}</h3>
    <button type="button" onClick={clickHandlder}>click here!</button>
    </article>
  );
};

export default Book
