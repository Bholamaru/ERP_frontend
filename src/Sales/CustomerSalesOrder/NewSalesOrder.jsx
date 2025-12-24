import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./NewSalesOrder.css";
// import Cached from "@mui/icons-material/Cached.js";

const NewSalesOrder = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
const [customers, setCustomers] = useState([]);

  // API  state
  const [formData, setFormData] = useState({
    cust_date: "",
    plant: "ProduLink",
    order_type: "",
    order_status: "",
    customer: "",
    cust_po: "",
    pay_day: "",
    pay_note: "",
    valid_up: "",
    so_date: "",
    po_rec_date: "",
    incoterms: "",
    ship_to: "",
    ship_to_add_code: "",
    ccn_no: "",
    delivery_date: "",
    buyer_name: "",
    packing: "",
    shift: "",
    plan_date: "",
    lc_no: "",
    sales_person: "",
    site_name: "",
    project_name: "",
    delivery_al: " ",
    terms: "",
  });

  const handleSaveOrder = async () => {
    // Date format change function (yyyy-mm-dd to dd/mm/yyyy)
    const fmt = (d) => (d ? d.split("-").reverse().join("/") : "");

    const payload = {
      ...formData,
      cust_date: fmt(formData.cust_date),
      valid_up: fmt(formData.valid_up),
      so_date: fmt(formData.so_date),
      po_rec_date: fmt(formData.po_rec_date),
      delivery_date: fmt(formData.delivery_date),
      plan_date: fmt(formData.plan_date),
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/Sales/newsalesorder/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        alert("Sales Order Created Successfully!");
        navigate("/OrderLiast");
      } else {
        const errData = await response.json();
        alert("Error: " + JSON.stringify(errData));
      }
    } catch (error) {
      alert("Server error! Please check if API is running.");
    }
  };

  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState);
  };
  const togglePackMast = () => {
    setShowModal((prevState) => !prevState); // Toggle modal visibility
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/OrderLiast");
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  // 1. Fetch Customer List on Load
 useEffect(() => {
  const fetchCustomers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/Sales/items/customers-list/");
      const result = await response.json();

      console.log("API Response:", result);

      if (Array.isArray(result)) {
        setCustomers(result);
      } 
      else if (result.data && Array.isArray(result.data)) {
        setCustomers(result.data);
      }
      else {
        console.error("Data is not for array format :", result);
        setCustomers([]); // Fallback to empty array
      }
    } catch (error) {
      console.error("Error fetching customers:", error);
      setCustomers([]); 
    }
  };
  fetchCustomers();
}, []);

  // 2. Handle Change and Auto-fill
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "customer") {
      const selectedCust = customers.find(c => c.name === value || c.cust_code === value);
      if (selectedCust) {
        setFormData((prev) => ({
          ...prev,
          customer: value,
          cust_date: selectedCust.cust_date || "",
          pay_day: selectedCust.pay_day || "",
          valid_up: selectedCust.valid_up || "",
        }));
        return;
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="NewSalesOrderMaster">
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
                <div className="NewSalesOrder">
                  <div className="NewSalesOrder-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h5 className="header-title">New Sales Order</h5>
                      </div>
                      <div className="col-md-6 text-end">
                        <button
                          type="button"
                          className="btn"
                          onClick={togglePackMast}
                        >
                          PackingMaster
                        </button>
                        <button
                          type="button"
                          className="btn"
                          onClick={handleNavigate}
                        >
                          Order List
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Model */}
                  <div
                    className={`modal ${showModal ? "show" : ""}`}
                    style={{ display: showModal ? "block" : "none" }}
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden={!showModal}
                  >
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Add New Packing Type :
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            onClick={togglePackMast}
                          >
                            {" "}
                            <i class="fa fa-times" aria-hidden="true"></i>{" "}
                          </button>
                        </div>

                        <div className="modal-body">
                          <div className="NewSalesOrder-header mb-4 text-start">
                            <div className="row align-items-center">
                              <div className="col-md-4">
                                <h5 className="header-title">
                                  Packing Master :{" "}
                                </h5>
                              </div>
                            </div>
                          </div>
                          <form>
                            <div className="row">
                              {/* Plant */}
                              <div className="col-md-2 mt-2">
                                <label htmlFor="" className="">
                                  Packing Name:{" "}
                                </label>
                              </div>
                              <div className="col-md-2">
                                <input
                                  type="text"
                                  placeholder=" "
                                  className="form-control"
                                />
                              </div>

                              <div className="col-md-2 mt-2">
                                <button
                                  type="button"
                                  className="btn btn-primary w-100"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </form>
                          <hr />
                          <div>No Data Found !!</div>
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="NewSalesOrder-main">
                    <div className="row text-start">
                      <div className="col-md-2">
                        <label>Plant:</label>
                        <select
                          name="plant"
                          value={formData.plant}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="ProduLink">ProduLink</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                        <label>Series:</label>
                        <select
                         select name="series" value={formData.series} onChange={handleChange} className="form-control mt-2"
                        >
                          <option value="">Select</option>
                          <option value="">SOD</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label>Order Type:</label>
                        <div className="d-flex gap-2">
                          <select
                           name="order_type" value={formData.order_type} onChange={handleChange} className="form-control"
                          >
                            <option value="">Select</option>
                            <option value="GST">GST</option>
                            <option value="JobWork">JobWork</option>
                          </select>

                          <select
                           name="order_status" value={formData.order_status} onChange={handleChange} className="form-control"
                          >
                            <option value="">Select</option>
                            <option value="Open">Open</option>
                            <option value="Close">Close</option>
                          </select>
                        </div>
                      </div>
                     {/* Customer Select (Fetched from API) */}
             <div className="col-md-2">
  <label>Customer:</label>
  <input
    list="customer-options"
    name="customer"
    value={formData.customer}
    onChange={handleChange}
    placeholder="Search Customer..."
    className="form-control"
    autoComplete="off"
  />
  <datalist id="customer-options">
    {customers.map((cust, index) => (
      <option 
        key={index} 
        value={cust.name} // Ye input me jayega
      >
        {`${cust.name} | Code: ${cust.item_code || 'N/A'}`} 
      </option>
    ))}
  </datalist>
</div>


                       <div className="col-md-2 mt-4">
                        <button
                          type="button"
                          className="btn"                          
                        >
                          Search
                        </button>
                        <button
                          type="button"
                          className="btn"
                        >
                          Clear
                        </button>
                      </div>
                    </div>

                   {/* Fields that auto-fill from API */}
            <div className="row text-start mt-2">
              <div className="col-md-2">
                <label>Cust Po:</label>
                <input type="text" name="cust_po" value={formData.cust_po} onChange={handleChange} className="form-control" />
              </div>
              <div className="col-md-2">
                <label>Cust Date:</label>
                <input type="date" name="cust_date" value={formData.cust_date} onChange={handleChange} className="form-control" />
              </div>
              <div className="col-md-2">
                <label>Pay Day:</label>
                <input type="text" name="pay_day" value={formData.pay_day} onChange={handleChange} className="form-control" />
              </div>
              <div className="col-md-2">
                <label>Pay Note:</label>
                <input type="text" name="pay_note" value={formData.pay_note} onChange={handleChange} className="form-control" />
              </div>
              <div className="col-md-2">
                <label>Valid Up:</label>
                <input type="date" name="valid_up" value={formData.valid_up} onChange={handleChange} className="form-control" />
              </div>
              <div className="col-md-2 mt-2">
                <input type="file" name="file" className="form-control" />
              </div>
            </div>
          </div>

                  <div className="NewSalesOrder-main mt-5">
                    <div className="NewSalesOrder-second">
                      <ul
                        className="nav nav-tabs"
                        id="NewSalesOrderTabs"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="item-details-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#itemdetails"
                            type="button"
                            role="tab"
                          >
                            Item Details
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="terms-conditions-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#termsconditions"
                            type="button"
                            role="tab"
                          >
                            Terms & Conditions
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
                            Taxes
                          </button>
                        </li>
                      </ul>

                      <div
                        className="tab-content mt-4"
                        id="NewSalesOrderTabsContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          id="itemdetails"
                          role="tabpanel"
                        >
                          <div className="NewSalesOrder-Main">
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Select Item.</th>
                                    <th>Cust Item Code</th>
                                    <th>Item Desc</th>
                                    <th>Rate | Desc</th>
                                    <th> Qty | UOM</th>
                                    <th>RM Type| Item Wt.</th>
                                    <th>Pkg. Trans </th>
                                    <th>Plan | Due Date</th>
                                    <th>Type</th>
                                    <th>Remark</th>
                                    <th> </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Item Code"
                                      />{" "}
                                      <button className="vndrbtn">Search</button> <br />
                                      Rev. No :
                                    </td>
                                    <td>
                                      {" "}
                                      <input
                                        type="text"
                                        className="w-55 form-control"
                                        placeholder="  "
                                      />{" "}
                                      <br />
                                      Line No :{" "}
                                      <input
                                        type="text"
                                        className="w-50 mt-2 form-control"
                                        placeholder=" "
                                      />{" "}
                                      <br /> PR No. :{" "}
                                      <input
                                        type="text"
                                        className="w-50 mt-2 form-control"
                                        placeholder=" "
                                      />
                                    </td>
                                    <td>
                                      <textarea
                                        name="item"
                                        id="itemdesc"
                                      ></textarea>
                                    </td>

                                    <td>
                                      {" "}
                                      <input
                                        type="text"
                                        className="w-60 mt-2 form-control"
                                        placeholder=" "
                                      />{" "}
                                      <br />{" "}
                                      <input
                                        type="text"
                                        className="w-50 mt-2 form-control"
                                        placeholder=" "
                                      />{" "}
                                      %
                                    </td>
                                    <td>
                                      {" "}
                                      <input
                                        type="text"
                                        className="w-60 mt-2 form-control"
                                        placeholder=" "
                                      />{" "}
                                      <br />{" "}
                                      <input
                                        type="text"
                                        className="w-50 mt-2 form-control"
                                        placeholder=" "
                                      />
                                    </td>
                                    <td>
                                      {" "}
                                      <select name="" id="">
                                        <option value="">NOS</option>
                                      </select>{" "}
                                      <br />{" "}
                                      <input
                                        type="text"
                                        className="w-60 mt-2 form-control"
                                        placeholder="Item Wt. "
                                      />{" "}
                                      <br />{" "}
                                      <input
                                        type="text"
                                        className="w-50 mt-2 form-control"
                                        placeholder="Per Unit "
                                      />
                                    </td>
                                    <td>
                                      {" "}
                                      <input
                                        type="text"
                                        className="w-60 mt-2 form-control"
                                        placeholder=" 0 "
                                      />{" "}
                                      <br />{" "}
                                      <input
                                        type="text"
                                        className="w-60 mt-2 form-control"
                                        placeholder=" 0 "
                                      />
                                    </td>
                                    <td>
                                      {" "}
                                      <input
                                        type="date"
                                        className="w-60 mt-2 form-control"
                                        placeholder=" "
                                      />{" "}
                                      <br />{" "}
                                      <input
                                        type="date"
                                        className="w-60 mt-2 form-control"
                                        placeholder=" "
                                      />
                                    </td>
                                    <td>
                                      <select name="" id="">
                                        <option value="">Select</option>
                                      </select>{" "}
                                      <br />
                                      <label htmlFor="">Item Category</label>
                                      <select name="" id="">
                                        <option value="">RUGEL</option>
                                      </select>
                                    </td>
                                    <td>
                                      {" "}
                                      <textarea name="" id=""></textarea>
                                      <br />
                                      <select name="" id="">
                                        <option value="">Select</option>
                                      </select>
                                    </td>
                                    <td>
                                      <button>ADD</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>

                          <div className="NewSalesOrder-Main">
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Sr.</th>
                                    <th>Item No </th>
                                    <th>Item Code</th>
                                    <th>Description</th>
                                    <th>Rate | Desc</th>
                                    <th>Amort Cost </th>
                                    <th>PO Qty | UOM</th>
                                    <th>Rate Type| Item Wt.</th>
                                    <th>Sub Total</th>
                                    <th>Pkg. Trans Changes</th>
                                    <th>Plan | Due Date</th>
                                    <th>Type</th>
                                    <th>GST</th>
                                    <th>Remark</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>
                                      Line No : <br /> PR No.
                                    </td>
                                    <td>
                                      Rev. No : <br /> HSN/SAC :
                                    </td>
                                    <td>
                                      <br />
                                      Tolerance : <br /> Length :
                                    </td>
                                    <td> % </td>
                                    <td> </td>
                                    <td>
                                      <br /> UMO :
                                    </td>
                                    <td>
                                      Rate Type: <br />
                                      Item Wt. : <br />
                                      Per Unit:{" "}
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                      CGST : <br />
                                      SGST : <br />
                                      IGST : <br /> Gross Rate:
                                    </td>
                                    <td></td>
                                    <td>Edit</td>
                                    <td></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="termsconditions"
                          role="tabpanel"
                        >
                          <div className="NewSalesOrder-header mb-4 text-start">
                            <div className="row align-items-center">
                              <div className="col-md-2">
                                <h5 className="header-title">Add New Terms</h5>
                              </div>
                              <div className="col-md-2">
                                <h5 className="header-title">Refresh List</h5>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="taxes"
                          role="tabpanel"
                        >
                          <div className="NewSalesOrder-main">
                            <div className="row text-start">
                              <div className="col-md-4">
                                <label>So Date:</label>
                                <input
                                  type="date"
                                  name="so_date"
                                  value={formData.so_date}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                              <div className="col-md-4">
                                <label>CCN No:</label>
                                <input
                                  type="text"
                                  name="ccn_no"
                                  value={formData.ccn_no}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                              <div className="col-md-2">
                                <label>Shift:</label>
                                <input
                                  type="text"
                                  name="shift"
                                  value={formData.shift}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="row text-start mt-2">
                              <div className="col-md-4">
                                <label>Po Rec Date:</label>
                                <input
                                  type="date"
                                  name="po_rec_date"
                                  value={formData.po_rec_date}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                              <div className="col-md-4">
                                <label>Delivery Date:</label>
                                <input
                                  type="date"
                                  name="delivery_date"
                                  value={formData.delivery_date}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                              <div className="col-md-4">
                                <label>Plan Date:</label>
                                <input
                                  type="date"
                                  name="plan_date"
                                  value={formData.plan_date}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="row text-start mt-2">
                              <div className="col-md-4">
                                <label>Incoterms:</label>
                                <select
                                  name="incoterms"
                                  value={formData.incoterms}
                                  onChange={handleChange}
                                  className="form-control"
                                >
                                  <option value="">Select</option>
                                  <option value="FOB">FOB</option>
                                  <option value="EXW">EXW</option>
                                </select>
                              </div>
                              <div className="col-md-4">
                                <label>L.C.No:</label>
                                <input
                                  type="text"
                                  name="lc_no"
                                  value={formData.lc_no}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                              <div className="col-md-4">
                                <label>Sales Person:</label>
                                <select
                                  name="sales_person"
                                  value={formData.sales_person}
                                  onChange={handleChange}
                                  className="form-control"
                                >
                                  <option value="">Select</option>
                                  <option value="Person A">Person A</option>
                                </select>
                              </div>
                            </div>

                            <div className="row text-start mt-2">
                              <div className="col-md-4">
                                <label>Ship To:</label>
                                <input
                                  type="text"
                                  name="ship_to"
                                  value={formData.ship_to}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                              <div className="col-md-4">
                                <label>Buyer Name:</label>
                                <input
                                  type="text"
                                  name="buyer_name"
                                  value={formData.buyer_name}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                              <div className="col-md-4">
                                <label>Site Name:</label>
                                <input
                                  type="text"
                                  name="site_name"
                                  value={formData.site_name}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="row text-start mt-2">
                              <div className="col-md-4">
                                <label>Ship To Add Code:</label>
                                <input
                                  type="text"
                                  name="ship_to_add_code"
                                  value={formData.ship_to_add_code}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                              <div className="col-md-4">
                                <label>Packing:</label>
                                <input
                                  type="text"
                                  name="packing"
                                  value={formData.packing}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                              <div className="col-md-4">
                                <label>Project Name:</label>
                                <input
                                  type="text"
                                  name="project_name"
                                  value={formData.project_name}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="row text-start mt-3">
                              <div className="col-md-6">
                                <label>Delivery AL :</label>
                                <textarea
                                  name="delivery_al"
                                  value={formData.delivery_al}
                                  onChange={handleChange}
                                  className="form-control"
                                ></textarea>
                              </div>
                              <div className="col-md-6">
                                <label>Terms & Conditions:</label>
                                <textarea
                                  name="terms"
                                  value={formData.terms}
                                  onChange={handleChange}
                                  className="form-control"
                                ></textarea>
                              </div>
                            </div>

                            <div className="table-responsive">
                              <table className="table table-bordered table-striped">
                                <tbody>
                                  <tr>
                                    <td
                                      className=""
                                      style={{
                                        width: "100px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        style={{
                                          width: "50px",
                                          marginLeft: "5px",
                                        }}
                                      />
                                      (TOC)
                                      <input
                                        type="text"
                                        placeholder="Pack & Frwd Charges"
                                        style={{
                                          width: "150px",
                                          marginLeft: "5px",
                                        }}
                                      />
                                      <input
                                        type="text"
                                        placeholder="0"
                                        style={{
                                          width: "50px",
                                          marginLeft: "5px",
                                        }}
                                      />{" "}
                                      %
                                    </td>

                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      <input
                                        type="text"
                                        placeholder="0"
                                        style={{
                                          width: "100px",
                                          marginLeft: "5px",
                                        }}
                                      />
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      {" "}
                                      Assessable Value{" "}
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      {" "}
                                      00 . 00
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    ></td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    ></td>
                                  </tr>
                                </tbody>

                                <tbody>
                                  <tr>
                                    <td
                                      className=""
                                      style={{
                                        width: "100px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        style={{
                                          width: "50px",
                                          marginLeft: "5px",
                                        }}
                                      />
                                      (TOC)
                                      <input
                                        type="text"
                                        placeholder="Pack & Frwd Charges"
                                        style={{
                                          width: "150px",
                                          marginLeft: "5px",
                                        }}
                                      />
                                      <input
                                        type="text"
                                        placeholder="0"
                                        style={{
                                          width: "50px",
                                          marginLeft: "5px",
                                        }}
                                      />{" "}
                                      %
                                    </td>

                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      <input
                                        type="text"
                                        placeholder="0"
                                        style={{
                                          width: "100px",
                                          marginLeft: "5px",
                                        }}
                                      />
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      {" "}
                                      CGST : 00.00 %{" "}
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      {" "}
                                      00 . 00
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    ></td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    ></td>
                                  </tr>
                                </tbody>

                                <tbody>
                                  <tr>
                                    <td
                                      className=""
                                      style={{
                                        width: "100px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        style={{
                                          width: "50px",
                                          marginLeft: "5px",
                                        }}
                                      />
                                      (TOC)
                                      <input
                                        type="text"
                                        placeholder="Pack & Frwd Charges"
                                        style={{
                                          width: "150px",
                                          marginLeft: "5px",
                                        }}
                                      />
                                      <input
                                        type="text"
                                        placeholder="0"
                                        style={{
                                          width: "50px",
                                          marginLeft: "5px",
                                        }}
                                      />{" "}
                                      %
                                    </td>

                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      <input
                                        type="text"
                                        placeholder="0"
                                        style={{
                                          width: "100px",
                                          marginLeft: "5px",
                                        }}
                                      />
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      {" "}
                                      SGST : 00.00 %{" "}
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      {" "}
                                      00 . 00
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      {" "}
                                      Third-Party Inspection (TPI){" "}
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      <select
                                        style={{
                                          width: "100px",
                                          marginLeft: "5px",
                                        }}
                                        name=""
                                        id=""
                                      >
                                        <option value="">No</option>
                                      </select>
                                    </td>
                                  </tr>
                                </tbody>

                                <tbody>
                                  <tr>
                                    <td
                                      className=""
                                      style={{
                                        width: "100px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        style={{
                                          width: "50px",
                                          marginLeft: "5px",
                                        }}
                                      />
                                      (TOC)
                                      <input
                                        type="text"
                                        placeholder="Other Charges"
                                        style={{
                                          width: "150px",
                                          marginLeft: "5px",
                                        }}
                                      />
                                      <input
                                        type="text"
                                        placeholder="0"
                                        style={{
                                          width: "50px",
                                          marginLeft: "5px",
                                        }}
                                      />{" "}
                                      %
                                    </td>

                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      <input
                                        type="text"
                                        placeholder="0"
                                        style={{
                                          width: "100px",
                                          marginLeft: "5px",
                                        }}
                                      />
                                    </td>

                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      {" "}
                                      IGST : 00.00 %{" "}
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      {" "}
                                      00 . 00
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        style={{
                                          width: "50px",
                                          marginLeft: "5px",
                                        }}
                                      />
                                      Ref. Cust :
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      <input
                                        type="text"
                                        placeholder="Enter Name"
                                        style={{
                                          width: "150px",
                                          marginLeft: "5px",
                                        }}
                                      />
                                    </td>
                                  </tr>
                                </tbody>

                                <tbody>
                                  <tr>
                                    <td
                                      className=""
                                      style={{
                                        width: "100px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      CR Name :
                                    </td>

                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      <select
                                        style={{
                                          width: "100px",
                                          marginLeft: "5px",
                                        }}
                                        name=""
                                        id=""
                                      >
                                        <option value="">Select</option>
                                      </select>
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      {" "}
                                      UTGST : 00.00 %{" "}
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      {" "}
                                      00 . 00
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      {" "}
                                      GR. Total :{" "}
                                    </td>
                                    <td
                                      style={{
                                        width: "200px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      {" "}
                                      00.00
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div className="row text-start">
                              <div className="col-md-3">
                                <button
                                  type="button"
                                  onClick={handleSaveOrder}
                                  className="btn btn-primary"
                                >
                                  Save Order
                                </button>
                              </div>
                            </div>
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

export default NewSalesOrder;
