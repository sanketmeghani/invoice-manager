import React, { useState } from 'react';

import './Preview.css';

const Priview = ({location}) => {
  
  const [invoice] = useState(JSON.parse(sessionStorage.getItem('invoice')));

  console.log(invoice);
  const { company } = invoice;

  return (
    <div className="preview">
      <div className="company-header">
        <h3>{company.displayName}</h3>
        <h6>{company.address.lineOne}, {company.address.city} - {company.address.pincode}</h6>
        <h6>Telephone: {company.telephone}</h6>
        <h6>GSTIN: {company.gstin}</h6>
      </div>
      <div className="copy-details">
        {invoice.copy}
      </div>
      <div className="horizontal-divider" />
      <div className="horizontal-divider" />
      <div className="invoice-header">
        <h3>Tax Invoice</h3>
      </div>
      <div className="horizontal-divider" />
      <div className="preview-row">
        <div className="row-field">
          <div className="field-header">
            Invoice No
          </div>
          <div className="field-value">
            : {invoice.invoiceNo}
          </div>
        </div>
        <div className="row-field">
          <div className="field-header">
            Transport Mode
          </div>
          <div className="field-value">
            : {invoice.transportMode}
          </div>
        </div>
      </div>
      <div className="preview-row">
        <div className="row-field">
          <div className="field-header">
            Invoice Date
          </div>
          <div className="field-value">
            : {invoice.invoiceDate}
          </div>
        </div>
        <div className="row-field">
          <div className="field-header">
            Vehicle Number
          </div>
          <div className="field-value">
            : {invoice.vehicleNumber}
          </div>
        </div>
      </div>
      <div className="preview-row">
        <div className="row-field">
          <div className="field-header">
            Reverse Charge
          </div>
          <div className="field-value">
            : {invoice.reverseCharge ? 'Yes' : 'No'}
          </div>
        </div>
        <div className="row-field">
          <div className="field-header">
            Date Of Supply
          </div>
          <div className="field-value">
            : {invoice.dateOfSupply}
          </div>
        </div>
      </div>
      <div className="preview-row">
        <div className="row-field">
          <div className="field-header">
            State
          </div>
          <div className="field-value">
            : {invoice.state}
          </div>
        </div>
        <div className="row-field">
          <div className="field-header">
            Place Of Supply
          </div>
          <div className="field-value">
            : {invoice.placeOfSupply}
          </div>
        </div>
      </div>
      <div className="horizontal-divider" />
      <div className="preview-row">
        <div className="row-field bill-to-party">
          Bill To Party          
        </div>
        <div className="row-field ship-to-party">
          Ship To Party
        </div>
      </div>
      <div className="preview-row">
        <div className="row-field">
          <div className="field-header">
            Name
          </div>
          <div className="field-value">
            : {invoice.billingParty.name}
          </div>
        </div>
        <div className="row-field">
          <div className="field-header">
            Name
          </div>
          <div className="field-value">
            : {invoice.shippingParty.name}
          </div>
        </div>
      </div>
      <div className="preview-row">
        <div className="row-field">
          <div className="field-header">
            Address
          </div>
          <div className="field-value">
            : {invoice.billingParty.address}
          </div>
        </div>
        <div className="row-field">
          <div className="field-header">
            Address
          </div>
          <div className="field-value">
            : {invoice.shippingParty.address}
          </div>
        </div>
      </div>
      <div className="preview-row">
        <div className="row-field">
          <div className="field-header">
            GSTIN
          </div>
          <div className="field-value">
            : {invoice.billingParty.gstin}
          </div>
        </div>
        <div className="row-field">
          <div className="field-header">
            GSTIN
          </div>
          <div className="field-value">
            : {invoice.shippingParty.gstin}
          </div>
        </div>
      </div>
      <div className="preview-row">
        <div className="row-field">
          <div className="field-header">
            State
          </div>
          <div className="field-value">
            : {invoice.billingParty.state}
          </div>
        </div>
        <div className="row-field">
          <div className="field-header">
            State
          </div>
          <div className="field-value">
            : {invoice.shippingParty.state}
          </div>
        </div>
      </div>
      <div className="horizontal-divider" />
      <div className="preview-row">
      </div>
    </div>
  )
}

export default Priview;