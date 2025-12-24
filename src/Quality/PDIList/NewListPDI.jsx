import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./PDIList.css";
// import Cached from "@mui/icons-material/Cached";
// import { FaXTwitter } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const NewListPDI = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

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
    <div className="PDIListMaster">
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
                <div className="PDIList">
                  <div className="PDIList-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4 mt-3">
                        <h5 className="header-title">
                          {" "}
                          PDI - Pre Dispatch Inspection{" "}
                        </h5>
                      </div>
                      <div className="col-md-1">
                        <label>Series :</label>
                      </div>
                      <div className="col-md-1">
                        <select>
                          <option value="">SELECT</option>
                          <option value="">With Invoice</option>
                          <option value="">Without Invoice</option>
                          <option value="">With Production</option>
                          <option value="">With SO</option>
                          <option value="">With DC </option>
                        </select>
                      </div>

                      <div className="col-md-6 text-end">
                        <button type="button" className="btn">
                          Export To Excel
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Filter Section */}
                  <div className="PDIList-filter mb-2">
                    <div className="row text-start">
                      <div className="col-md-2 mt-2">
                        <label>Select Coustomar :</label>
                      </div>

                      <div className="col-md-2">
                        <input
                          type="text"
                          placeholder="Enter Name ... "
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-1 mt-2">
                        <button className="btn btn-primary">Search</button>
                      </div>
                    </div>
                    <div className="row text-start">
                      <div className="col-md-2 mt-2">
                        <label>Select Item :</label>
                      </div>

                      <div className="col-md-2">
                        <input
                          type="text"
                          placeholder="Enter Code No ... "
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-1 mt-2">
                        <button className="btn btn-primary">Search</button>
                      </div>
                    </div>
                  </div>

                  <div className="AssemblyEntry-bottom mt-2">
                    <div className="AssemblyEntry-tabs">
                      <ul
                        className="nav nav-tabs"
                        id="productionEntryTabs1"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="dimensional-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#dimensional"
                            type="button"
                            role="tab"
                          >
                            A. Dimensional
                          </button>
                        </li>

                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="visual-inspection-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#visualinspection"
                            type="button"
                            role="tab"
                          >
                            B. Visual Inspection
                          </button>
                        </li>

                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="instrument-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#instrument"
                            type="button"
                            role="tab"
                          >
                            C. Instrument
                          </button>
                        </li>

                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="standard-refrence-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#standardrefrence"
                            type="button"
                            role="tab"
                          >
                            D. Standard Refrence
                          </button>
                        </li>

                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="rej-qty-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#rejqty"
                            type="button"
                            role="tab"
                          >
                            E. Rej. Qty
                          </button>
                        </li>

                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pdi-info-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#pdiinfo"
                            type="button"
                            role="tab"
                          >
                            F. PDI Info
                          </button>
                        </li>
                      </ul>

                      <div
                        className="tab-content mt-2"
                        id="productionEntryTabsContent"
                      >
                        {/* A. Dimensional */}
                        <div
                          className="tab-pane fade show active"
                          id="dimensional"
                          role="tabpanel"
                          aria-labelledby="dimensional-tab"
                        >
                          <div className="WorkOrderEntry-table">
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead className="table-light">
                                  <tr>
                                    <th>Test No.</th>
                                    <th>Test Description</th>
                                    <th>Specification</th>
                                    <th>Dimensions</th>
                                    <th>Tot(-)</th>
                                    <th>Tot(+)</th>
                                    <th>UOM</th>
                                    <th>Measurement Technique</th>
                                    <th>Critical</th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                    <th>QC Symbol</th>
                                    <th>Remark</th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {/* Example Row */}
                                  <tr>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter NO."
                                      />
                                    </td>
                                    <td>
                                      <textarea
                                        className="form-control"
                                        rows="1"
                                        placeholder="Enter..."
                                      ></textarea>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter .."
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter..."
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder=" "
                                      />
                                    </td>
                                    <td>
                                      <select>
                                        {" "}
                                        <option>Select</option>{" "}
                                      </select>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                      />
                                    </td>
                                    <td>
                                      <FaEdit className="text-primary" />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          {/* Table Section */}
                          <div className="PDIList-Main">
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Test No.</th>
                                    <th>Test Description</th>
                                    <th>Specification</th>
                                    <th>Dimensions</th>
                                    <th>Tot(-)</th>
                                    <th>Tot(+)</th>
                                    <th>UOM</th>
                                    <th>LC</th>
                                    <th>Measurement Technique</th>
                                    <th>Critical</th>
                                    <th>
                                      {" "}
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="Checkbox"
                                      />{" "}
                                      ALL
                                    </th>
                                    <th>
                                      {" "}
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="Checkbox"
                                      />{" "}
                                      S1
                                    </th>
                                    <th>
                                      {" "}
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="Checkbox"
                                      />{" "}
                                      S2
                                    </th>
                                    <th>
                                      {" "}
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="Checkbox"
                                      />{" "}
                                      S3
                                    </th>
                                    <th>
                                      {" "}
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="Checkbox"
                                      />{" "}
                                      S4
                                    </th>
                                    <th>
                                      {" "}
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="Checkbox"
                                      />{" "}
                                      S5
                                    </th>
                                    <th>
                                      {" "}
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="Checkbox"
                                      />{" "}
                                      S6
                                    </th>
                                    <th>
                                      {" "}
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="Checkbox"
                                      />{" "}
                                      S7
                                    </th>
                                    <th>
                                      {" "}
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="Checkbox"
                                      />{" "}
                                      S8
                                    </th>
                                    <th>
                                      {" "}
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="Checkbox"
                                      />{" "}
                                      S9
                                    </th>
                                    <th>
                                      {" "}
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="Checkbox"
                                      />{" "}
                                      S10
                                    </th>
                                    <th>S11</th>
                                    <th>S12</th>
                                    <th>S13</th>
                                    <th>S14</th>
                                    <th>S15</th>
                                    <th>S16</th>
                                    <th>S17</th>
                                    <th>S18</th>
                                    <th>S19</th>
                                    <th>S20</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {/* Example Row */}
                                  <tr>
                                    <td>1</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                      {" "}
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="Checkbox"
                                      />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                      <button className="btn btn-sm btn-light">
                                        <i className="fas fa-eye"></i>
                                      </button>
                                    </td>
                                  </tr>
                                  {/* Additional rows can be added dynamically here */}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        {/* B. Visual Inspection */}
                        <div
                          className="tab-pane fade"
                          id="visualinspection"
                          role="tabpanel"
                          aria-labelledby="visual-inspection-tab"
                        >
                          <h5>Visual Inspection Content</h5>
                          <p>Your visual inspection section goes here.</p>
                        </div>

                        {/* C. Instrument */}
                        <div
                          className="tab-pane fade"
                          id="instrument"
                          role="tabpanel"
                          aria-labelledby="instrument-tab"
                        >
                          <h5>Instrument Content</h5>
                          <p>Instrument data entry section here.</p>
                        </div>

                        {/* D. Standard Reference */}
                        <div
                          className="tab-pane fade"
                          id="standardrefrence"
                          role="tabpanel"
                          aria-labelledby="standard-refrence-tab"
                        >
                          <h5>Standard Reference Content</h5>
                          <p>Upload standard reference details here.</p>
                        </div>

                        {/* E. Rej Qty */}
                        <div
                          className="tab-pane fade"
                          id="rejqty"
                          role="tabpanel"
                          aria-labelledby="rej-qty-tab"
                        >
                          <h5>Rejection Quantity Content</h5>
                          <p>Rejection quantity input here.</p>
                        </div>

                        {/* F. PDI Info */}
                        <div
                          className="tab-pane fade"
                          id="pdiinfo"
                          role="tabpanel"
                          aria-labelledby="pdi-info-tab"
                        >
                          <h5>PDI Info Content</h5>
                          <p>Add PDI information here.</p>
                        </div>
                      </div>
                    </div>

                    <div className="row text-start mt-5">
                      <div className="col-md-2">
                        <label>
                          <b>OK Qty : </b>
                        </label>{" "}
                        <span className="okqty"> 0</span>
                      </div>
                      <div className="col-md-2">
                        <label>
                          <b>| Rework : </b>
                        </label>
                        <span className="okqtyy"> 0</span>
                      </div>
                      <div className="col-md-2">
                        <label>
                          <b>| Reject : </b>
                        </label>{" "}
                        <span className="okqtyyt"> 0</span>
                      </div>
                      <div className="col-md-2">
                        <label>
                          <b> Total Qty : </b>
                        </label>{" "}
                        <span className="okqtyyy"> Label</span>
                      </div>
                      <div className="col-md-4 d-flex">
                        <div className="text-end s-4 d-flex">
                          <button type="button" className="btn">
                            Cancel
                          </button>
                          <button type="button" className="btn">
                            Save
                          </button>
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

export default NewListPDI;
