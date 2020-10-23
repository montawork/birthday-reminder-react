import React from 'react';

const List = (props) => {
  const { name, age, image } = props;
  return (
    <>
      <img src={image} alt="" />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </>
  );
};

export default List;
