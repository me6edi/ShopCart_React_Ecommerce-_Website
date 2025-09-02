import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../components/modal.css";

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="modalCard">
      {/* Checkout Button */}
      <Button variant="primary" className="py-2" onClick={() => setShow(true)}>
        Proceed to Checkout
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        animation={false}
        centered
      >
        <h5 className="px-3 mb-3 mt-3">Select Your Payment Method</h5>
        <div className="modal-content">
          <div className="modal-body">
            <div className="tabs mt-3">
              {/* Tabs */}
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    id="visa-tab"
                    role="tab"
                    aria-controls="visa"
                    aria-selected={activeTab === "visa"}
                    onClick={() => handleTabChange("visa")}
                    className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                  >
                    <img
                      src="https://imgur.com/sB4jftM.png"
                      alt="Visa"
                      width="80"
                    />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    id="paypal-tab"
                    role="tab"
                    aria-controls="paypal"
                    aria-selected={activeTab === "paypal"}
                    onClick={() => handleTabChange("paypal")}
                    className={`nav-link ${
                      activeTab === "paypal" ? "active" : ""
                    }`}
                  >
                    <img
                      src="https://imgur.com/yK7EDD1.png"
                      alt="PayPal"
                      width="80"
                    />
                  </button>
                </li>
              </ul>

              {/* Tab Contents */}
              <div className="tab-content mt-4" id="myTabContent">
                {/* Visa Content */}
                <div
                  className={`tab-pane fade ${
                    activeTab === "visa" ? "show active" : ""
                  }`}
                  id="visa"
                  role="tabpanel"
                  aria-labelledby="visa-tab"
                >
                  <div className="mt-4 mx-4">
                    <div className="text-center">
                      <h5>Credit Card</h5>
                    </div>
                    <div className="form mt-3">
                      <div className="inputbox">
                        <input
                          type="text"
                          name="cardName"
                          className="form-control"
                          required
                        />
                        <span>Cardholder Name</span>
                      </div>
                      <div className="inputbox">
                        <input
                          type="text"
                          name="cardNumber"
                          className="form-control"
                          required
                        />
                        <span>Card Number</span>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="expiryDate"
                            className="form-control"
                            required
                          />
                          <span>Expiration Date</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="cvv"
                            className="form-control"
                            required
                          />
                          <span>CVV</span>
                        </div>
                      </div>
                      <div className="px-5 pay">
                        <button className="btn btn-success btn-block">
                          Pay Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PayPal Content */}
                <div
                  className={`tab-pane fade ${
                    activeTab === "paypal" ? "show active" : ""
                  }`}
                  id="paypal"
                  role="tabpanel"
                  aria-labelledby="paypal-tab"
                >
                  <div className="mt-4 mx-4">
                    <div className="text-center">
                      <h5>Pay with PayPal</h5>
                    </div>
                    <div className="form mt-3">
                      <div className="inputbox">
                        <input
                          type="email"
                          name="paypalEmail"
                          className="form-control"
                          required
                        />
                        <span>Enter Your Email</span>
                      </div>
                      <div className="inputbox">
                        <input
                          type="text"
                          name="paypalName"
                          className="form-control"
                          required
                        />
                        <span>Your Name</span>
                      </div>
                      <div className="inputbox">
                        <textarea
                          name="extraInfo"
                          className="form-control"
                          rows="3"
                          required
                        ></textarea>
                        <span>Extra Info</span>
                      </div>
                      <div className="px-5 pay">
                        <button className="btn btn-warning btn-block">
                          Proceed with PayPal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Tab Content */}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
