import React, { useState } from 'react';
import Switch from "react-switch";
import { Link } from 'react-router-dom';
import { Collapse, CardBody, Card, Alert, Button, DropdownToggle, DropdownMenu, DropdownItem, Input, InputGroup, InputGroupAddon, InputGroupText, Table, InputGroupButtonDropdown } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import './Invoice.css';

import companyInfo from '../config/company-info';

const copyTypes = ['Original', 'Duplicate', 'Triplicate'];

const Invoice = () => {

  const [isCompanyOpen, toggleCompanyDropdown] = useState(false);
  const [isCopyTypeOpen, toggleCopyTypeDropdown] = useState(false);
  const [collapseConfig, toggleCollapse] = useState({
    isOpenCompanyDetails: true,
    isOpenInvoiceDetails: false,
    isOpenBillingAndShipping: false
  });
  const [invoice, setInvoice] = useState({
    reverseCharge: false,
    invoiceItems: [],
    igstRate: 18
  });

  return (
    <div className="invoice">
      <div className="header">
        <h4>Tax Invoice</h4>
      </div>
      <div className="content">
        <div className="invoice-form">
          <div className="collapse-controller" onClick={() => toggleCollapse({...collapseConfig, isOpenCompanyDetails: !collapseConfig.isOpenCompanyDetails})}>
            <div>Company Details</div>
            {
              collapseConfig.isOpenCompanyDetails ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />
            }
          </div>
          <Collapse isOpen={collapseConfig.isOpenCompanyDetails}>
            <Card>
              <CardBody>
                <div className="invoice-form-row">
                  <div className="invoice-section-left">
                    <div className="company">
                      <InputGroup>
                        <InputGroupButtonDropdown addonType="prepend" isOpen={isCompanyOpen} toggle={() => toggleCompanyDropdown(!isCompanyOpen)} direction="right">
                          <Button outline>Company</Button>
                          <DropdownToggle outline split/>                  
                          <DropdownMenu>
                            {
                              Object.keys(companyInfo).map((key) => {
                                return (
                                  <DropdownItem key={key} onClick={() => setInvoice({...invoice, company: companyInfo[key]})}>{companyInfo[key].displayName}</DropdownItem>
                                )
                              })
                            }
                          </DropdownMenu>
                        </InputGroupButtonDropdown>
                        <Input className="company-name" placeholder={invoice.company ? invoice.company.displayName : ''} disabled/>
                      </InputGroup>
                    </div>
                    <div className="copy-type">
                      <InputGroup>
                        <InputGroupButtonDropdown addonType="prepend" isOpen={isCopyTypeOpen} toggle={() => toggleCopyTypeDropdown(!isCopyTypeOpen)} direction="right">
                          <Button outline>Copy</Button>
                          <DropdownToggle outline split/>
                          <DropdownMenu>
                            {
                              copyTypes.map((key) => {
                                return (
                                  <DropdownItem key={key} onClick={() => setInvoice({...invoice, copy: key})}>{key}</DropdownItem>
                                  )
                                })
                              }
                          </DropdownMenu>
                        </InputGroupButtonDropdown>
                        <Input className="selected-copy-type" placeholder={invoice.copy || ''} disabled/>
                      </InputGroup>
                    </div>
                  </div>
                  <div className="verticle-divider"/>
                  <div className="invoice-section-right">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Bank A/C</InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={e => setInvoice({...invoice, bankAccount: e.target.value})}/>
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Bank IFSC</InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={e => setInvoice({...invoice, bankIFSC: e.target.value})}/>
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>IGST Rate</InputGroupText>
                      </InputGroupAddon>
                      <Input defaultValue={invoice.igstRate} onChange={e => setInvoice({...invoice, igstRate: e.target.value})}/>
                    </InputGroup>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Collapse>
          <div className="invoice-form-row horizontal-divider" />
          <div className="collapse-controller" onClick={() => toggleCollapse({...collapseConfig, isOpenInvoiceDetails: !collapseConfig.isOpenInvoiceDetails})}>
            <div>Invoice Details</div>
            {
              collapseConfig.isOpenInvoiceDetails ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />
            }
          </div>
          <Collapse isOpen={collapseConfig.isOpenInvoiceDetails}>
            <Card>
              <CardBody>
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
              </CardBody>
            </Card>
          </Collapse>
          <div className="invoice-form-row horizontal-divider" />
          <div className="collapse-controller" onClick={() => toggleCollapse({...collapseConfig, isOpenBillingAndShipping: !collapseConfig.isOpenBillingAndShipping})}>
            <div>Billing & Shipping Details</div>
            {
              collapseConfig.isOpenBillingAndShipping ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />
            }
          </div>
          <Collapse isOpen={collapseConfig.isOpenBillingAndShipping}>
            <Card>
              <CardBody>
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
              </CardBody>
            </Card>
          </Collapse>
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
                      const invoiceItems = invoice.invoiceItems;
                      invoiceItems.push({
                        srNo: (invoiceItems.length + 1)
                      });
                      setInvoice({...invoice, invoiceItems})
                    }}>
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  invoice.invoiceItems.map((item, index) => {

                    const invoiceItem = invoice.invoiceItems[index];

                    return (
                      <tr key={index}>
                        <td>
                          <Input value={invoiceItem.srNo} disabled/>
                        </td>
                        <td>
                          <Input onChange={(e) => {
                            invoiceItem.productDescription = e.target.value;
                            setInvoice({...invoice})
                          }}/>
                        </td>
                        <td>
                          <Input onChange={(e) => {
                            invoiceItem.hsnCode = e.target.value;
                            setInvoice({...invoice})
                          }}/>
                        </td>
                        <td>
                          <Input onChange={(e) => {
                            invoiceItem.bundles = e.target.value;
                            setInvoice({...invoice})
                          }}/>
                        </td>
                        <td>
                          <Input onChange={(e) => {
                            invoiceItem.quantity = e.target.value;
                            invoiceItem.taxableAmount = invoiceItem.quantity * invoiceItem.rate || '0';
                            invoiceItem.igst = invoice.igstRate ? Math.ceil(invoiceItem.taxableAmount * invoice.igstRate / 100) : '0';
                            invoiceItem.total = parseInt(invoiceItem.taxableAmount) + parseInt(invoiceItem.igst);
                            setInvoice({...invoice})
                          }}/>
                        </td>
                        <td>
                          <Input onChange={(e) => {
                            invoiceItem.rate = e.target.value;
                            invoiceItem.taxableAmount = invoiceItem.quantity * invoiceItem.rate || '0';
                            invoiceItem.igst = invoice.igstRate ? Math.ceil(invoiceItem.taxableAmount * invoice.igstRate / 100) : '0';
                            invoiceItem.total = parseInt(invoiceItem.taxableAmount) + parseInt(invoiceItem.igst);
                            setInvoice({...invoice})
                          }}/>
                        </td>
                        <td>
                          <Input value={invoiceItem.taxableAmount} disabled/>
                        </td>
                        <td>
                          <Input value={invoiceItem.igst} disabled/>
                        </td>
                        <td>
                          <Input value={invoiceItem.total} disabled/>
                        </td>
                        <td className="row-actions">
                          <div className="row-action-item" onClick={() => {
                            const invoiceItems = invoice.invoiceItems;
                            invoiceItems.splice(index, 1);
                            invoiceItems.slice(index).forEach((invoiceItem) => {
                              invoiceItem.srNo = invoiceItem.srNo - 1;
                            })
                            setInvoice({...invoice, invoiceItems})
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
            <Button color="success" onClick={() => sessionStorage.setItem('invoice', JSON.stringify(invoice))}>Preview</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Invoice;