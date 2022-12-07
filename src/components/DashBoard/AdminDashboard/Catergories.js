import React from 'react';
import AdminDashHeader from './AdminDashHeader';

const Catergories = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <div>
      <AdminDashHeader/>
      <h1>Catergories {date}
</h1>
    </div>
  );
};

export default Catergories;