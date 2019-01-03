import React, { useState } from 'react';

const Priview = ({location}) => {
  
  const [invoice] = useState(JSON.parse(sessionStorage.getItem('invoice')));

  console.log(invoice);

  return (
    <div>
      Priview {invoice.igstRate}
    </div>
  )
}

export default Priview;