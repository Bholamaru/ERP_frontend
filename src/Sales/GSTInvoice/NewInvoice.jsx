import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import { FaPlus } from "react-icons/fa6";
import { FaRegCircleQuestion } from "react-icons/fa6";
// import Cached from "@mui/icons-material/Cached.js";
import { useNavigate } from "react-router-dom";
import "./NewInvoice.css";

const NewInvoice = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  // --- NEW: Form State ---
  const [formData, setFormData] = useState({
    invoice_no: "",
    invoice_date: "",
    invoice_time: "",
    payment_date: "",
    note: "",
    date_of_removal: "",
    time: "",
    mode_of_trans: "By Road",
    freight: "",
    vehical_no: "",
    transporter: "",
    bill_to: "",
    ship_to: "",
    addr_code: "",
    l_r_gc_note: "",
    place_of_supply: "",
    eway_bill_date: "",
    eway_bill_no: "",
    destenation_code: "",
    note_remark: "",
    pdi_no: "",
    bank: "",
    d_c_no: "",
    d_c_date: "",
    delivery_terms: "",
  });

  // --- NEW: Handle Input Change ---
  const handleChange = (e) => {
    const { id, value } = e.target;
    // Mapping HTML IDs to state keys
    const fieldMap = {
      "invoice-no": "invoice_no",
      payment: "payment_date",
      modeoftrans: "mode_of_trans",
      billto: "bill_to",
      "eway-bill": "eway_bill_date",
      "note-remark": "note_remark",
      dateremoval: "date_of_removal",
      vehicle: "vehical_no",
      ewaybill: "eway_bill_no",
      delivey: "delivery_terms",
      dcno: "d_c_no",
      invoicetime: "invoice_time",
    };
    const key = fieldMap[id] || id.replace(/-/g, "_");
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // --- NEW: POST API Integration ---
  const handleGenerateInvoice = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/Sales/invoice/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Invoice Generated Successfully!");
        navigate("/InvoiceList"); // Adjust navigation as needed
      } else {
        const errorData = await response.json();
        alert("Failed to generate invoice: " + JSON.stringify(errorData));
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("Server Error. Please check your connection.");
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleButtonClick = () => {
    navigate("/NewinvoiceGST");
  };
  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  return (
    <div className="NewInvoice">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav
                sideNavOpen={sideNavOpen}
                toggleSideNav={toggleSideNav}
              />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="NewInvoice">
                  <div className="NewInvoice-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <h5 className="header-title">New Invoice</h5>
                      </div>

                      <div className="col-md-1">Plant</div>
                      <div className="col-md-1">
                        <select>
                          <option>ProduLink</option>
                        </select>
                      </div>
                      <div className="col-md-1">Series</div>
                      <div className="col-md-1">
                        <select>
                          <option>GST Invoice</option>
                        </select>
                      </div>
                      <div className="col-md-1">
                        <input
                          type="text"
                          placeholder="InvoiceNo:"
                          className="w-100"
                        />
                      </div>
                      <div className="col-md-1">InvoiceType:</div>
                      <div className="col-md-1">
                        <select>
                          <option>GST</option>
                          <option>SCRAP</option>
                          <option>Stock Transfer</option>
                          <option>Direct Export</option>
                          <option>Third Party EXP (In State)</option>
                          <option>Third Party Export (Out State)</option>
                          <option>Asset</option>
                          <option>Tool</option>
                        </select>
                      </div>

                      <div className="col-md-3 text-end">
                        <button
                          type="button"
                          className="btn"
                          onClick={handleButtonClick}
                        >
                          Invoice V2
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="NewInvoice-Main mt2">
                    <div className="NewInvoice-tabs">
                      <ul
                        className="nav nav-tabs"
                        id="AssembleEntryTabs"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="itemdetails-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#itemdetails"
                            type="button"
                            role="tab"
                          >
                            A. Item Details
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="taxes-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#taxes"
                            type="button"
                            role="tab"
                          >
                            B. Taxes
                          </button>
                        </li>
                      </ul>

                      <div
                        className="tab-content mt-2"
                        id="productionEntryTabsContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          id="itemdetails"
                          role="tabpanel"
                        >
                          <div className="row text-start">
                            <div className="col-2">
                              <label htmlFor="prod-no">Select Cust:</label>
                            </div>
                            <div className="col-3">
                              <input
                                type="text"
                                placeholder="Enter Name.."
                                className="form-control"
                              />
                            </div>
                            <div className="col-2">
                              <button className="btn w-50">Search</button>
                            </div>
                          </div>

                          <div className="row mt-2 text-start">
                            <div className="col-2">
                              <label htmlFor="prod-no">Select PO:</label>
                            </div>
                            <div className="col-3">
                              <select name="" id="" className="form-control">
                                <option value="">Select an Option</option>
                              </select>
                            </div>
                            <div className="col-1 mt-2">
                              <button className="btn">Clear</button>
                            </div>
                            <div className="col-2 mt-2">
                              <button className="btn w-50"> View SO</button>
                            </div>
                          </div>

                          <div className="row text-start">
                            <div className="col-2">
                              <label htmlFor="prod-no">Select Item :</label>
                            </div>
                            <div className="col-3">
                              <input
                                type="text"
                                placeholder="Enter Item Code.."
                                className="form-control"
                              />
                            </div>
                            <div className="col-2">
                              <button className="btn w-50">Add</button>
                            </div>
                          </div>

                          <div className="table-responsive mt-2">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Sr.</th>
                                  <th>PO No | Date</th>
                                  <th>Stock</th>
                                  <th>Description</th>
                                  <th>Rate</th>
                                  <th>PO Qty</th>
                                  <th>Bal.Qty</th>
                                  <th>Inv.Qty</th>
                                  <th>Pkg Qty</th>
                                  <th>Type Of Packing</th>
                                  <th>Del</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Pr No:</td>
                                  <td>Line No:</td>
                                  <td>
                                    <textarea name="" id=""></textarea> <br />{" "}
                                    <span>HSN Code :</span>{" "}
                                  </td>
                                  <td className="text-start">
                                    <input type="text" className="" /> <br />
                                    Disc: <br /> Pkg Charges: <br />
                                    Trans Charges: <br />{" "}
                                    <span style={{ color: "blue" }}>
                                      Rate Type:{" "}
                                    </span>
                                    <br /> Amort Rate :
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td>
                                    <input type="text" className="w-50" />{" "}
                                    <br />
                                    Per Pcs Wt: <br />
                                    <input
                                      type="text"
                                      className="w-50"
                                      placeholder="Weight"
                                    />
                                    <br />
                                    <span style={{ color: "blue" }}>
                                      Per Unit:{" "}
                                    </span>
                                  </td>
                                  <td>
                                    <input type="text" className="w-50" />
                                  </td>
                                  <td>
                                    <textarea name="" id=""></textarea>
                                  </td>
                                  <td>
                                    <span style={{ border: "1px solid black" }}>
                                      X
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="taxes"
                          role="tabpanel"
                        >
                          <div className="row text-start">
                            {/* Column 1 */}
                            <div className="col-md-4">
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Invoice No:</label>
                                </div>
                                <div className="col-8 d-flex gap-1">
                                  <input
                                    name="invoice_no"
                                    value={formData.invoice_no}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                  <input
                                    placeholder="232400001"
                                    className="form-control"
                                    readOnly
                                  />
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Payment Date:</label>
                                </div>
                                <div className="col-8">
                                  <input
                                    type="date"
                                    name="payment_date"
                                    value={formData.payment_date}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Mode of Trans:</label>
                                </div>
                                <div className="col-8 d-flex gap-1">
                                  <input
                                    type="text"
                                    name="mode_of_trans"
                                    value={formData.mode_of_trans}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                  <select
                                    name="freight"
                                    value={formData.freight}
                                    onChange={handleChange}
                                    className="form-control"
                                  >
                                    <option value="">Freight</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Bill TO:</label>
                                </div>
                                <div className="col-8 d-flex gap-1">
                                  <input
                                    name="bill_to"
                                    value={formData.bill_to}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                  >
                                    Search
                                  </button>
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Ship TO:</label>
                                </div>
                                <div className="col-8 d-flex gap-1">
                                  <input
                                    name="ship_to"
                                    value={formData.ship_to}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                  >
                                    Search
                                  </button>
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Eway Bill Date:</label>
                                </div>
                                <div className="col-8">
                                  <input
                                    type="date"
                                    name="eway_bill_date"
                                    value={formData.eway_bill_date}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Note/Remark:</label>
                                </div>
                                <div className="col-8">
                                  <textarea
                                    name="note_remark"
                                    value={formData.note_remark}
                                    onChange={handleChange}
                                    className="form-control"
                                  ></textarea>
                                </div>
                              </div>
                            </div>

                            {/* Column 2 */}
                            <div className="col-md-4">
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Invoice Date:</label>
                                </div>
                                <div className="col-8">
                                  <input
                                    type="datetime-local"
                                    name="invoice_date"
                                    value={formData.invoice_date}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Removal Date:</label>
                                </div>
                                <div className="col-8">
                                  <input
                                    type="date"
                                    name="date_of_removal"
                                    value={formData.date_of_removal}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Vehicle No:</label>
                                </div>
                                <div className="col-8 d-flex gap-1">
                                  <input
                                    name="vehical_no"
                                    value={formData.vehical_no}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                  >
                                    <FaPlus />
                                  </button>
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Addr Code:</label>
                                </div>
                                <div className="col-8 d-flex gap-1">
                                  <select
                                    name="addr_code"
                                    value={formData.addr_code}
                                    onChange={handleChange}
                                    className="form-control"
                                  >
                                    <option value=""></option>
                                  </select>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                  >
                                    <FaRegCircleQuestion />
                                  </button>
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Eway Bill No:</label>
                                </div>
                                <div className="col-8">
                                  <input
                                    name="eway_bill_no"
                                    value={formData.eway_bill_no}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Delivery Terms:</label>
                                </div>
                                <div className="col-8">
                                  <textarea
                                    name="delivery_terms"
                                    value={formData.delivery_terms}
                                    onChange={handleChange}
                                    className="form-control"
                                  ></textarea>
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>D.C. Date:</label>
                                </div>
                                <div className="col-8">
                                  <input
                                    type="date"
                                    name="d_c_date"
                                    value={formData.d_c_date}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Column 3 */}
                            <div className="col-md-4">
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Invoice Time:</label>
                                </div>
                                <div className="col-8">
                                  <input
                                    type="time"
                                    name="invoice_time"
                                    value={formData.invoice_time}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Time:</label>
                                </div>
                                <div className="col-8">
                                  <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Transporter:</label>
                                </div>
                                <div className="col-8 d-flex gap-1">
                                  <input
                                    name="transporter"
                                    value={formData.transporter}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                  >
                                    <FaPlus />
                                  </button>
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>L/R GC Note:</label>
                                </div>
                                <div className="col-8">
                                  <input
                                    name="l_r_gc_note"
                                    value={formData.l_r_gc_note}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Place Supply:</label>
                                </div>
                                <div className="col-8">
                                  <input
                                    name="place_of_supply"
                                    value={formData.place_of_supply}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>Dest. Code:</label>
                                </div>
                                <div className="col-8">
                                  <input
                                    name="destenation_code"
                                    value={formData.destenation_code}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-4">
                                  <label>D.C. NO:</label>
                                </div>
                                <div className="col-8">
                                  <input
                                    name="d_c_no"
                                    value={formData.d_c_no}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="table-container border p-2">
                            {/* Row 1 */}
                            <div className="row align-items-center mb-2">
                              <div className="col-md-3 d-flex justify-content-between">
                                <label>Base Value</label>
                                <input
                                  className="form-control form-control-sm w-50"
                                  placeholder="0"
                                />
                              </div>

                              <div className="col-md-3 d-flex justify-content-between">
                                <label>Assessable Value</label>
                                <input
                                  className="form-control form-control-sm w-50"
                                  placeholder="0"
                                />
                              </div>

                              <div className="col-md-3">
                                <div className="d-flex align-items-center gap-1">
                                  <label className="me-auto">Pack & Fwrd</label>
                                  <input
                                    className="form-control form-control-sm w-25"
                                    placeholder="%"
                                  />
                                  <input
                                    className="form-control form-control-sm w-50"
                                    placeholder="0"
                                  />
                                </div>
                              </div>

                              <div className="col-md-3">
                                <strong>Total Amortisation : 0</strong>
                              </div>
                            </div>

                            {/* Row 2 */}
                            <div className="row align-items-center mb-2">
                              <div className="col-md-3 d-flex justify-content-between">
                                <label>Disc Amt</label>
                                <input
                                  className="form-control form-control-sm w-50"
                                  placeholder="0"
                                />
                              </div>

                              <div className="col-md-3 d-flex justify-content-between">
                                <label>CGST 00%</label>
                                <input
                                  className="form-control form-control-sm w-50"
                                  placeholder="0"
                                />
                              </div>

                              <div className="col-md-3">
                                <div className="d-flex align-items-center gap-1">
                                  <label className="me-auto">
                                    Transport Crg
                                  </label>
                                  <input
                                    className="form-control form-control-sm w-25"
                                    placeholder="%"
                                  />
                                  <input
                                    className="form-control form-control-sm w-50"
                                    placeholder="0"
                                  />
                                </div>
                              </div>

                              <div className="col-md-3">
                                <label>CGST : 0</label>
                              </div>
                            </div>

                            {/* Row 3 */}
                            <div className="row align-items-center mb-2">
                              <div className="col-md-3 d-flex justify-content-between">
                                <label>Rev. Base Crg</label>
                                <select className="form-select form-select-sm w-50">
                                  <option>NO</option>
                                  <option>YES</option>
                                </select>
                              </div>

                              <div className="col-md-3 d-flex justify-content-between">
                                <label>SGST 00%</label>
                                <input
                                  className="form-control form-control-sm w-50"
                                  placeholder="0"
                                />
                              </div>

                              <div className="col-md-3">
                                <div className="d-flex align-items-center gap-1">
                                  <label className="me-auto">Freight Crg</label>
                                  <input
                                    className="form-control form-control-sm w-25"
                                    placeholder="%"
                                  />
                                  <input
                                    className="form-control form-control-sm w-50"
                                    placeholder="0"
                                  />
                                </div>
                              </div>

                              <div className="col-md-3">
                                <label>SGST : 0</label>
                              </div>
                            </div>

                            {/* Row 4 */}
                            <div className="row align-items-center mb-2">
                              <div className="col-md-3 d-flex justify-content-between">
                                <label>Rev Crg Amt</label>
                                <input
                                  className="form-control form-control-sm w-50"
                                  placeholder="0"
                                />
                              </div>

                              <div className="col-md-3 d-flex justify-content-between">
                                <label>IGST 00%</label>
                                <input
                                  className="form-control form-control-sm w-50"
                                  placeholder="0"
                                />
                              </div>

                              <div className="col-md-3">
                                <div className="d-flex align-items-center gap-1">
                                  <label className="me-auto">Other Crg</label>
                                  <input
                                    className="form-control form-control-sm w-25"
                                    placeholder="%"
                                  />
                                  <input
                                    className="form-control form-control-sm w-50"
                                    placeholder="0"
                                  />
                                </div>
                              </div>

                              <div className="col-md-3">
                                <label>IGST : 0</label>
                              </div>
                            </div>

                            {/* Row 5 */}
                            <div className="row align-items-center">
                              <div className="col-md-3 d-flex justify-content-between">
                                <label>TCS</label>
                                <input
                                  className="form-control form-control-sm w-50"
                                  placeholder="0"
                                />
                              </div>

                              <div className="col-md-3 d-flex justify-content-between">
                                <label>UTGST 00%</label>
                                <input
                                  className="form-control form-control-sm w-50"
                                  placeholder="0"
                                />
                              </div>

                              <div className="col-md-3 d-flex justify-content-between">
                                <label>Grand Total</label>
                                <input
                                  className="form-control form-control-sm w-50"
                                  placeholder="0"
                                />
                              </div>

                              <div className="col-md-3">
                                <label>For E-Inv: Ser.Inv. / Inv.Type</label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row mt-2">
                          <div className="col-md-2">
                            <button
                              className="btn btn-primary w-100"
                              onClick={handleGenerateInvoice}
                            >
                              Generate Invoice
                            </button>
                          </div>
                          <div className="col-md-3 d-flex align-items-center">
                            <input
                              type="checkbox"
                              id="printRate"
                              checked={isChecked}
                              onChange={handleCheckboxChange}
                            />
                            <label htmlFor="printRate" className="ms-2">
                              PrintRate
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInvoice;
