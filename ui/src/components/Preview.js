import React, { useState } from 'react';
import { Table } from 'reactstrap';

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
            : {invoice.billingParty ? invoice.billingParty.name : ''}
          </div>
        </div>
        <div className="row-field">
          <div className="field-header">
            Name
          </div>
          <div className="field-value">
            : {invoice.shippingParty ? invoice.shippingParty.name : ''}
          </div>
        </div>
      </div>
      <div className="preview-row">
        <div className="row-field">
          <div className="field-header">
            Address
          </div>
          <div className="field-value">
            : {invoice.billingParty ? invoice.billingParty.address : ''}
          </div>
        </div>
        <div className="row-field">
          <div className="field-header">
            Address
          </div>
          <div className="field-value">
            : {invoice.shippingParty ? invoice.shippingParty.address : ''}
          </div>
        </div>
      </div>
      <div className="preview-row">
        <div className="row-field">
          <div className="field-header">
            GSTIN
          </div>
          <div className="field-value">
            : {invoice.billingParty ? invoice.billingParty.gstin : ''}
          </div>
        </div>
        <div className="row-field">
          <div className="field-header">
            GSTIN
          </div>
          <div className="field-value">
            : {invoice.shippingParty ? invoice.shippingParty.gstin : ''}
          </div>
        </div>
      </div>
      <div className="preview-row">
        <div className="row-field">
          <div className="field-header">
            State
          </div>
          <div className="field-value">
            : {invoice.billingParty ? invoice.billingParty.state : ''}
          </div>
        </div>
        <div className="row-field">
          <div className="field-header">
            State
          </div>
          <div className="field-value">
            : {invoice.shippingParty ? invoice.shippingParty.state : ''}
          </div>
        </div>
      </div>
      <div className="horizontal-divider" />
      <div className="horizontal-divider" />
      <div className="preview-row">
        <Table bordered>
          <thead>
            <tr>
              <th className="sr-no">#</th>
              <th className="product-description">Product Description</th>
              <th className="hsn-code">HSN Code</th>
              <th className="bundles">Bundles</th>
              <th className="quantity">Quantity</th>
              <th className="rate">Rate</th>
              <th className="taxable-amount">Taxable Amount</th>
              <th className="igst">IGST</th>
              <th className="total">Total</th>
            </tr>
          </thead>
          <tbody>
            {
              invoice.invoiceItems.map((invoiceItem, index) => {

                return (
                  <tr key={index}>
                    <td className="sr-no-cell">{invoiceItem.srNo}</td>
                    <td className="product-description-cell">{invoiceItem.productDescription}</td>
                    <td className="hsn-code-cell">{invoiceItem.hsnCode}</td>
                    <td className="bundles-cell">{invoiceItem.bundles}</td>
                    <td className="quantity-cell">{invoiceItem.quantity}</td>
                    <td className="rate-cell">{invoiceItem.rate}</td>
                    <td className="taxable-amount-cell">{invoiceItem.taxableAmount}</td>
                    <td className="igst-cell">{invoiceItem.igst}</td>
                    <td className="total-cell">{invoiceItem.total}</td>
                  </tr>
                )
              })
            }

<tr>
              <td style={{borderRight: 'none'}}></td>
              <td style={{borderLeft: 'none', borderRight: 'none'}}></td>
              <td style={{borderLeft: 'none'}}></td>
              <td className="total-bundles">
                {
                  invoice.invoiceItems.reduce((totalBundles, invoiceItem) => parseInt(totalBundles) + parseInt(invoiceItem.bundles), 0)
                }
              </td>
              <td className="total-quantity">
                {
                  invoice.invoiceItems.reduce((totalQuantity, invoiceItem) => parseInt(totalQuantity) + parseInt(invoiceItem.quantity), 0)
                }
              </td>
              <td></td>
              <td className="total-taxable-amount">
                {
                  invoice.invoiceItems.reduce((totalTaxableAmount, invoiceItem) => parseInt(totalTaxableAmount) + parseInt(invoiceItem.taxableAmount), 0)
                }
              </td>
              <td className="total-igst">
                {
                  invoice.invoiceItems.reduce((totalIGST, invoiceItem) => parseInt(totalIGST) + parseInt(invoiceItem.igst), 0)
                }
              </td>
              <td className="final-total">
                {
                  invoice.invoiceItems.reduce((finalTotal, invoiceItem) => parseInt(finalTotal) + parseInt(invoiceItem.total), 0)
                }
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Priview;