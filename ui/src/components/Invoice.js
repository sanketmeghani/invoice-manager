import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, InputGroup, InputGroupAddon, InputGroupText, Table } from 'reactstrap';

import './Invoice.css';

import companyInfo from '../config/company-info';

const copyTypes = ['Original', 'Duplicate', 'Triplicate'];

const Invoice = () => {

  const [company, selectCompany] = useState();
  const [isOpen, toggleDropdown] = useState(false);
  const [copyType, selectCopyType] = useState();
  const [isCopyTypeOpen, toggleCopyTypeDropdown] = useState(false);
  const [invoiceNo, setInvoiceNo] = useState();

  console.log(invoiceNo);
  
  return (
    <div className="invoice">
      <div className="header">
        Tax Invoice
      </div>
      <div className="content">
        <div className="invoice-form">
          <div className="invoice-form-row">
            <div className="company">
              <Dropdown isOpen={isOpen} toggle={() => toggleDropdown(!isOpen)} direction="right">
                <DropdownToggle caret>
                  Company
                </DropdownToggle>
                <DropdownMenu>
                  {
                    Object.keys(companyInfo).map((key) => {
                      return (
                        <DropdownItem key={key} onClick={() => selectCompany(key)}>{companyInfo[key].displayName}</DropdownItem>
                      )
                    })
                  }
                </DropdownMenu>
              </Dropdown>
            </div>
            <Input className="company-name" placeholder={company ? companyInfo[company].displayName : ''} disabled/>
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
                        <DropdownItem key={key} onClick={() => selectCopyType(key)}>{key}</DropdownItem>
                        )
                      })
                    }
                </DropdownMenu>
              </Dropdown>
            </div>
            <Input className="selected-copy-type" placeholder={copyType || ''} disabled/>
          </div>
          <div className="invoice-form-row horizontal-divider" />
          <div className="invoice-form-row">
            <div className="invoice-section-left">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Invoice No</InputGroupText>
                </InputGroupAddon>
                <Input onChange={e => setInvoiceNo(e.target.value)} />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Invoice Date</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Reverse Charge</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>State</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>
            </div>
            <div className="verticle-divider"/>
            <div className="invoice-section-right">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Transport Mode</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Vehicle Number</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Date Of Supply</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Place Of Supply</InputGroupText>
                </InputGroupAddon>
                <Input />
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
                <Input />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Address</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>GSTIN</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>State</InputGroupText>
                </InputGroupAddon>
                <Input />
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
                <Input />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Address</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>GSTIN</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>State</InputGroupText>
                </InputGroupAddon>
                <Input />
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
                  <th className="row-action"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Input /></td>
                  <td><Input /></td>
                  <td><Input /></td>
                  <td><Input /></td>
                  <td><Input /></td>
                  <td><Input /></td>
                  <td><Input /></td>
                  <td><Input /></td>
                  <td><Input /></td>
                  <td><Input /></td>
                </tr>
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
      <div className="footer">
        Footer
      </div>
    </div>
  )
}

export default Invoice;