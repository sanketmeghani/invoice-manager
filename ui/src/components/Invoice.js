import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import './Invoice.css';

const Invoice = () => {
  return (
      <div className="invoice">
        <div className="header">
          New Invoice
        </div>
        <div className="content">
          <div className="invoice-form">
            Invoice Form
          </div>
          <div className="actions">
            <Link to="/preview" target="_blank">
              <Button color="success">Preview</Button>
            </Link>
          </div>
        </div>
        <div className="footer">
          Footer
        </div>
      </div>
  )
}

export default Invoice;