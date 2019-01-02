import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from 'reactstrap';

import './Invoice.css';

import companyInfo from '../config/company-info';

const copyTypes = ['Original', 'Duplicate', 'Triplicate'];

const Invoice = () => {

  const [company, selectCompany] = useState();
  const [isOpen, toggleDropdown] = useState(false);
  const [copyType, selectCopyType] = useState();
  const [isCopyTypeOpen, toggleCopyTypeDropdown] = useState(false);
  
  return (
    <div className="invoice">
      <div className="header">
        New Invoice
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