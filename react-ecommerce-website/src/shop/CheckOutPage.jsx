import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; 
const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  // handle Tab Change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleShow = () => setShow(true);   
  const handleClose = () => setShow(false);

  return (
    <div className="modalCard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>

      <Modal show={show}>

      </Modal>
    </div>
  );
};

export default CheckOutPage;
