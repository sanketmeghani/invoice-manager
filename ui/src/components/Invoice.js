import React, { useState } from 'react';
import Switch from "react-switch";
import { Link } from 'react-router-dom';
import { Alert, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, InputGroup, InputGroupAddon, InputGroupText, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'

import './Invoice.css';

import companyInfo from '../config/company-info';

const copyTypes = ['Original', 'Duplicate', 'Triplicate'];

const Invoice = () => {

  const [isCompanyOpen, toggleCompanyDropdown] = useState(false);
  const [isCopyTypeOpen, toggleCopyTypeDropdown] = useState(false);
  const [invoice, setInvoice] = useState({
    reverseCharge: false,
    invoiceItems: []
  });

  console.log(invoice);

  return (
    <div className="invoice">
      <div className="header">
        Tax Invoice
      </div>
      <div className="content">
        <div className="invoice-form">
          <div className="invoice-form-row">
            <div className="company">
              <Dropdown isOpen={isCompanyOpen} toggle={() => toggleCompanyDropdown(!isCompanyOpen)} direction="right">
                <DropdownToggle caret>
                  Company
                </DropdownToggle>
                <DropdownMenu>
                  {
                    Object.keys(companyInfo).map((key) => {
                      return (
                        <DropdownItem key={key} onClick={() => setInvoice({...invoice, company: companyInfo[key]})}>{companyInfo[key].displayName}</DropdownItem>
                      )
                    })
                  }
                </DropdownMenu>
              </Dropdown>
            </div>
            <Input className="company-name" placeholder={invoice.company ? invoice.company.displayName : ''} disabled/>
          </div>
          <div className="invoice-form-row">
            <div className="copy-type">
              <Dropdown isOpen={isCopyTypeOpen} toggle={() => toggleCopyTypeDropdown(!isCopyTypeOpen)} direction="right">
                <DropdownToggle caret>
                  Copy
                </DropdownToggle>
                <DropdownMenu>
                  {
                    copyTypes.map((key) => {
                      return (
                        <DropdownItem key={key} onClick={() => setInvoice({...invoice, copy: key})}>{key}</DropdownItem>
                        )
                      })
                    }
                </DropdownMenu>
              </Dropdown>
            </div>
            <Input className="selected-copy-type" placeholder={invoice.copy || ''} disabled/>
          </div>
          <div className="invoice-form-row horizontal-divider" />
          <div className="invoice-form-row">
            <div className="invoice-section-left">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Invoice No</InputGroupText>
                </InputGroupAddon>
                <Input onChange={e => setInvoice({...invoice, invoiceNo: e.target.value})} />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Invoice Date</InputGroupText>
                </InputGroupAddon>
                <Input onChange={e => setInvoice({...invoice, invoiceDate: e.target.value})}/>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Reverse Charge</InputGroupText>
                </InputGroupAddon>
                  <div className="reverse-charge">
                    <Switch onChange={() => setInvoice({...invoice, reverseCharge: !invoice.reverseCharge})} checked={invoice.reverseCharge} />
                    <h5>{invoice.reverseCharge ? 'Yes' : 'No'}</h5>
                  </div>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>State</InputGroupText>
                </InputGroupAddon>
                <Input onChange={e => setInvoice({...invoice, state: e.target.value})}/>
              </InputGroup>
            </div>
            <div className="verticle-divider"/>
            <div className="invoice-section-right">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Transport Mode</InputGroupText>
                </InputGroupAddon>
                <Input onChange={e => setInvoice({...invoice, transportMode: e.target.value})}/>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Vehicle Number</InputGroupText>
                </InputGroupAddon>
                <Input onChange={e => setInvoice({...invoice, vehicleNumber: e.target.value})}/>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Date Of Supply</InputGroupText>
                </InputGroupAddon>
                <Input onChange={e => setInvoice({...invoice, dateOfSupply: e.target.value})}/>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Place Of Supply</InputGroupText>
                </InputGroupAddon>
                <Input onChange={e => setInvoice({...invoice, placeOfSupply: e.target.value})}/>
              </InputGroup>
            </div>
          </div>
          <div className="invoice-form-row horizontal-divider" />
          <div className="invoice-form-row">
            <div className="invoice-section-left">
              <Alert color="dark">
                Bill To Party
              </Alert>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Name</InputGroupText>
                </InputGroupAddon>
                <Input onChange={e => {
                  const billingParty = {...invoice.billingParty, name: e.target.value};
                  setInvoice({...invoice, billingParty})
                }}/>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Address</InputGroupText>
                </InputGroupAddon>
                <Input onChange={e => {
                  const billingParty = {...invoice.billingParty, address: e.target.value};
                  setInvoice({...invoice, billingParty})
                }}/>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>GSTIN</InputGroupText>
                </InputGroupAddon>
                <Input onChange={e => {
                  const billingParty = {...invoice.billingParty, gstin: e.target.value};
                  setInvoice({...invoice, billingParty})
                }}/>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>State</InputGroupText>
                </InputGroupAddon>
                <Input onChange={e => {
                  const billingParty = {...invoice.billingParty, state: e.target.value};
                  setInvoice({...invoice, billingParty})
                }}/>
              </InputGroup>
            </div>
            <div className="verticle-divider"/>
            <div className="invoice-section-right">
              <Alert color="dark">
                Ship To Party
              </Alert>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Name</InputGroupText>
                </InputGroupAddon>
                <Input onChange={e => {
                  const shippingParty = {...invoice.billingParty, name: e.target.value};
                  setInvoice({...invoice, shippingParty})
                }}/>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Address</InputGroupText>
                </InputGroupAddon>
                <Input onChange={e => {
                  const shippingParty = {...invoice.billingParty, address: e.target.value};
                  setInvoice({...invoice, shippingParty})
                }}/>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>GSTIN</InputGroupText>
                </InputGroupAddon>
                <Input onChange={e => {
                  const shippingParty = {...invoice.billingParty, gstin: e.target.value};
                  setInvoice({...invoice, shippingParty})
                }}/>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>State</InputGroupText>
                </InputGroupAddon>
                <Input onChange={e => {
                  const shippingParty = {...invoice.billingParty, state: e.target.value};
                  setInvoice({...invoice, shippingParty})
                }}/>
              </InputGroup>
            </div>
          </div>
          <div className="invoice-form-row horizontal-divider" />
          <div className="invoice-form-row">
            <Table className="invoice-items">
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
                  <th className="row-action">
                    <div className="row-action-item" onClick={() => {
                      const invoiceItemes = invoice.invoiceItems;
                      invoiceItemes.push({});
                      setInvoice({...invoice, invoiceItemes})
                    }}>
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  invoice.invoiceItems.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td><Input /></td>
                        <td><Input /></td>
                        <td><Input /></td>
                        <td><Input /></td>
                        <td><Input /></td>
                        <td><Input /></td>
                        <td><Input /></td>
                        <td><Input /></td>
                        <td><Input /></td>
                        <td className="row-actions">
                          <div className="row-action-item" onClick={() => {
                            const invoiceItemes = invoice.invoiceItems;
                            invoiceItemes.splice(index, 1);
                            setInvoice({...invoice, invoiceItemes})
                          }}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </div>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </Table>
          </div>
        </div>
        <div className="actions">
          <Link to="/preview" target="_blank">
            <Button color="success">Preview</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Invoice;