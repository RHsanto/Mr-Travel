import React from 'react';

const BusResults = ({searchValue}) => {
  return (
    <div>
        {searchValue.map(data=>
      <>
       <li>{data?.from}</li>
       {/* <img className='r-img' src={data?.img} alt="" /> */}
      </>

    )}
    </div>
  );
};

export default BusResults;