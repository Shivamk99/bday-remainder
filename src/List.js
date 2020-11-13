import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, Name, Age, img } = person;
        return (
          <article key={id} className='person'>
            <img src={img} alt={Name} />
            <div>
              <h4>{Name}</h4>
              <p>{Age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;