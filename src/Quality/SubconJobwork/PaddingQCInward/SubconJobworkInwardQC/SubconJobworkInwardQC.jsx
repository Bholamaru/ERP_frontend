import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../../NavBar/NavBar.js";
import SideNav from "../../../../SideNav/SideNav.js";

import "./SubconJobworkInwardQC.css";

const SubconJobworkInwardQC = () => {
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
    <div className="SubconJobworkInwardQCMaster">
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
                <div className="SubconJobworkInwardQC">
                  <div className="SubconJobworkInwardQC-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">
                          Subcon / Jobwork Inward QC
                        </h5>
                      </div>
                      <div className="col-md-8 text-end">
                        <button type="button" className="btn" to="#/">
                          Pending List
                        </button>
                        <button type="button" className="btn" to="#/">
                          Inward Imp List
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="SubconJobworkInwardQC-Main mb-2">
                    <div className="container-fluid">
                      <div className="row  g-3 text-start mt-2 mb-3 text-start">
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Series</label>
                          <select className="form-select">
                            <option value="">Select</option>
                          </select>
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Select Item</label>
                          <select className="form-select">
                            <option value="">Select</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="AssemblyEntry-bottom mt-1">
                    <div className="AssemblyEntry-tabs">
                      <ul className="nav nav-tabs" role="tablist">
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
                            id="visualinspection-tab"
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
                            id="rework-rej-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#reworkRej"
                            type="button"
                            role="tab"
                          >
                            C. Rework & Reject Qty
                          </button>
                        </li>

                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="qc-info-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#qcInfo"
                            type="button"
                            role="tab"
                          >
                            D. QC Info
                          </button>
                        </li>
                      </ul>

                      <div
                        className="tab-content mt-4"
                        id="productionEntryTabsContent"
                      >
                        {/* A. Dimensional */}
                        <div
                          className="tab-pane fade show active"
                          id="dimensional"
                          role="tabpanel"
                          aria-labelledby="dimensional-tab"
                        >
                          <div className="table table-bordered table-responsive">
                            <table>
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border border-gray-300 p-2">
                                    Test No
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Test Description
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Specification
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Dimensions
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Tel (-)
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Tel (+)
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Method Of Check
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    1
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    2
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    3
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    4
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    5
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Remark
                                  </th>
                                  <th className="border border-gray-300 p-2">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter No.."
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <textarea
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <textarea
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Dia."
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>

                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <button className="vndrbtn"> ADD </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="row">
                            <div className="table table-responsive">
                              <table>
                                <thead>
                                  <tr>
                                    <th> Sr </th>
                                    <th> Test No </th>
                                    <th> Test Description </th>
                                    <th> Specifications </th>
                                    <th> Dimansions </th>
                                    <th> Tol (-) </th>
                                    <th> Tol (+) </th>
                                    <th> S1 </th>
                                    <th> S2 </th>
                                    <th> S3 </th>
                                    <th> S4 </th>
                                    <th> S5 </th>
                                    <th> Remark </th>
                                    <th> Delete </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td> 1 </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> X </td>
                                  </tr>
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
                          aria-labelledby="visualinspection-tab"
                        >
                          {/* Visual Inspection content */}
                        </div>

                        {/* C. Rework */}
                        <div
                          className="tab-pane fade"
                          id="reworkRej"
                          role="tabpanel"
                          aria-labelledby="rework-rej-tab"
                        >
                          {/* Rework content */}
                        </div>

                        {/* D. QC Info */}
                        <div
                          className="tab-pane fade"
                          id="qcInfo"
                          role="tabpanel"
                          aria-labelledby="qc-info-tab"
                        >
                          <div className="row">
                            <div className="col-md-4 text-start">
                              <div className="form-group mb-3">
                                <label htmlFor="">QC (IR) No :</label>
                                <input
                                  type="text"
                                  className="form-control mt-2"
                                />
                              </div>

                              <div className="form-group mb-3">
                                <label htmlFor="">Vendor Heat Code :</label>
                                <input
                                  type="text"
                                  className="form-control mt-2"
                                />
                              </div>

                               <div className="form-group mb-3">
                                <label htmlFor="">Lot Accept / Reject :</label>
                                <select className="form-select">
                                  <option> Accpect </option>
                                  <option> Reject </option>
                                </select>
                              </div>

                               <div className="form-group mb-3">
                                <label htmlFor="">Control Plan No :</label>
                                <input
                                  type="text"
                                  className="form-control mt-2"
                                />
                              </div>

                               <div className="form-group mb-3">
                                <label htmlFor="">Total Col() :</label>
                                <input
                                  type="text"
                                  className="form-control mt-2"
                                />
                              </div>                            
                            </div>

                             <div className="col-md-4 text-start">
                              <div className="form-group mb-3">
                                <label htmlFor="">QC (IR) Date :</label>
                                <input
                                  type="Date"
                                  className="form-control mt-2"
                                />
                              </div>

                              <div className="form-group mb-3">
                                <label htmlFor="">Vendor TC No :</label>
                                <input
                                  type="text"
                                  className="form-control mt-2"
                                />
                              </div>

                               <div className="form-group mb-3">
                                <label htmlFor="">Sample Qty :</label>
                               <input
                                  type="text"
                                  className="form-control mt-2"
                                />
                              </div>

                               <div className="form-group mb-3">
                                <label htmlFor="">Wise Size :</label>
                                <input
                                  type="text"
                                  className="form-control mt-2"
                                />
                              </div>

                               <div className="form-group mb-3">
                                <label htmlFor="">Col From No :</label>
                                <input
                                  type="text"
                                  className="form-control mt-2"
                                />
                              </div>                            
                            </div>

                             <div className="col-md-4 text-start">
                              <div className="form-group mb-3">
                                <label htmlFor="">(ISO) Format No :</label>
                                <input
                                  type="Date"
                                  className="form-control mt-2"
                                />
                              </div>

                              <div className="form-group mb-3">
                                <label htmlFor="">(ISO) Rev No :</label>
                                <input
                                  type="text"
                                  className="form-control mt-2"
                                />
                              </div>

                               <div className="form-group mb-3">
                                <label htmlFor="">(ISO) Rev Date :</label>
                               <input
                                  type="date"
                                  className="form-control mt-2"
                                />
                              </div>                              

                               <div className="form-group mb-3">
                                <label htmlFor="">Col TO No :</label>
                                <input
                                  type="text"
                                  className="form-control mt-2"
                                />
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

export default SubconJobworkInwardQC;
