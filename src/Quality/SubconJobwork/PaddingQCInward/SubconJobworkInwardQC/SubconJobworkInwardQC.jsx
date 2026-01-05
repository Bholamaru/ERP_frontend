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
                      <ul className="nav nav-tabs" id="" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="dimensional"
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
                            className="nav-link active"
                            id="visualinspection"
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
                        
                        <div  className="tab-pane fade show active"  id="dimensional"  role="tabpanel">
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

                        <div className="tab-pane fade" id="visualinspection" role="tabpanel">
                          
                        </div> 

                         <div className="tab-pane fade" id="reworkRej" role="tabpanel">
                          
                        </div> 

                        <div  className="tab-pane fade"  id="qcInfo"  role="tabpanel">
                          
                          <div className="row">
                            <div className="col-md-4 text-start">

                                  <div className="form-group mb-3">
                                    <label htmlFor="">PO No:</label>                                                                                                       
                                    <input
                                      type="text"
                                      className="form-control mt-2"
                                    />
                                  </div> 

                                   <div className="form-group mb-3">
                                    <label htmlFor="">PO No:</label>                                                                                                       
                                    <input
                                      type="text"
                                      className="form-control mt-2"
                                    />
                                  </div>                                                                                         

                              {/* <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label htmlFor="PreparedBy">
                                      Prepared by:
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group mb-3">
                                    <input
                                      type="text"
                                      id="PreparedBy"
                                      name="PreparedBy"
                                      className="form-control"
                                      placeholder="Enter Prepared by"
                                      value={formData.PreparedBy}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div> */}
                            </div>

                            {/* <div className="col-md-4">
                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label
                                      className="form-check-label"
                                      htmlFor="PoDate"
                                    >
                                      PO Date:
                                    </label>
                                    <span className="text-danger">*</span>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group mb-3">
                                    <input
                                      type="Date"
                                      name="PoDate"
                                      className="form-control"
                                      id="PoDate"
                                      value={formData.PoDate}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label
                                      className="form-check-label"
                                      htmlFor="EnquiryDate"
                                    >
                                      Enquiry Date:
                                    </label>
                                    <span className="text-danger">*</span>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group mb-3">
                                    <input
                                      type="date"
                                      id="EnquiryDate"
                                      name="EnquiryDate"
                                      className="form-control"
                                      placeholder="Select Enquiry Date"
                                      value={formData.EnquiryDate}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label
                                      className="form-check-label"
                                      htmlFor="QuotDate"
                                    >
                                      Quot Date:
                                    </label>
                                    <span className="text-danger">*</span>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group mb-3">
                                    <input
                                      type="date"
                                      id="QuotDate"
                                      name="QuotDate"
                                      className="form-control"
                                      placeholder="Select Quot Date"
                                      value={formData.QuotDate}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label
                                      className="form-check-label"
                                      htmlFor="PaymentRemark"
                                    >
                                      Payment Remark:
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group mb-3">
                                    <input
                                      type="text"
                                      id="PaymentRemark"
                                      name="PaymentRemark"
                                      className="form-control"
                                      placeholder="Enter Payment Remark"
                                      value={formData.PaymentRemark}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label
                                      className="form-check-label"
                                      htmlFor="DeliveryType"
                                    >
                                      Delivery Type/Period:
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group mb-3">
                                    <input
                                      type="text"
                                      id="DeliveryType"
                                      name="DeliveryType"
                                      className="form-control"
                                      placeholder="Enter Delivery Type/Period"
                                      value={formData.DeliveryType}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label
                                      className="form-check-label"
                                      htmlFor="DeliveryNote"
                                    >
                                      Delivery/Note:
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group mb-3">
                                    <input
                                      type="text"
                                      id="DeliveryNote"
                                      name="DeliveryNote"
                                      className="form-control"
                                      placeholder="Enter Delivery Note"
                                      value={formData.DeliveryNote}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label
                                      className="form-check-label"
                                      htmlFor="IndentNo"
                                    >
                                      Indent No/Note:
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group mb-3">
                                    <input
                                      type="text"
                                      id="IndentNo"
                                      name="IndentNo"
                                      className="form-control"
                                      placeholder="Enter Indent No/Note"
                                      value={formData.IndentNo}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label
                                      className="form-check-label"
                                      htmlFor="ApprovedBy"
                                    >
                                      Approved by:
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group mb-3">
                                    <input
                                      type="text"
                                      id="ApprovedBy"
                                      name="ApprovedBy"
                                      className="form-control"
                                      placeholder="Enter Approved by"
                                      value={formData.ApprovedBy}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div> */}

                            {/* <div className="col-md-4">
                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label
                                      className="form-check-label"
                                      htmlFor="Time"
                                    >
                                      Time:
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group mb-3">
                                    <input
                                      type="text"
                                      id="Time"
                                      name="Time"
                                      className="form-control"
                                      placeholder="Enter Time"                                     
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label
                                      className="form-check-label"
                                      htmlFor="PoFor"
                                    >
                                      PO For:
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group mb-3">
                                    <input
                                      type="text"
                                      id="PoFor"
                                      name="PoFor"
                                      className="form-control"
                                      placeholder="Enter PO For"
                                      value={formData.PoFor}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label
                                      className="form-check-label"
                                      htmlFor="Freight"
                                    >
                                      Freight:
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group mb-3">
                                    <input
                                      type="text"
                                      id="Freight"
                                      name="Freight"
                                      className="form-control"
                                      placeholder="Enter Freight"
                                      value={formData.Freight}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-1">
                                  <button
                                    type="button"
                                    className="po1btn"
                                    onClick={handleAddClick}
                                  >
                                    <FaPlus />
                                  </button>
                                </div>
                                <div className="col-md-1">
                                  <button
                                    type="button"
                                    className="po1btn"
                                    onClick={handleRefreshClick}
                                  >
                                    <FaSync />
                                  </button>
                                </div>
                              </div>

                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label
                                      className="form-check-label"
                                      htmlFor="PoRateType"
                                    >
                                      PO Rate Type:
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group mb-3">
                                    <input
                                      type="text"
                                      id="PoRateType"
                                      name="PoRateType"
                                      className="form-control"
                                      placeholder="Enter PO Rate Type"
                                      value={formData.PoRateType}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label
                                      className="form-check-label"
                                      htmlFor="ContactPerson"
                                    >
                                      Contact Person:
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group mb-3">
                                    <input
                                      type="text"
                                      id="ContactPerson"
                                      name="ContactPerson"
                                      className="form-control"
                                      placeholder="Enter Contact Person"
                                      value={formData.ContactPerson}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label
                                      className="form-check-label"
                                      htmlFor="PoValidityDate"
                                    >
                                      PO Validity Date:
                                    </label>
                                    <span className="text-danger">*</span>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group mb-3">
                                    <input
                                      type="date"
                                      id="PoValidityDate"
                                      name="PoValidityDate"
                                      className="form-control"
                                      placeholder="Select PO Validity Date"
                                      value={formData.PoValidityDate}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label
                                      className="form-check-label"
                                      htmlFor="PoEffectiveDate"
                                    >
                                      PO Effective Date:
                                    </label>
                                    <span className="text-danger">*</span>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group mb-3">
                                    <input
                                      type="date"
                                      id="PoEffectiveDate"
                                      name="PoEffectiveDate"
                                      className="form-control"
                                      placeholder="Select PO Effective Date"
                                      value={formData.PoEffectiveDate}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row text-start">
                                <div className="col-md-4">
                                  <div className="form-group mb-3">
                                    <label
                                      className="form-check-label"
                                      htmlFor="TransportName"
                                    >
                                      Transport Name:
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group mb-3">
                                    <input
                                      type="text"
                                      id="TransportName"
                                      name="TransportName"
                                      className="form-control"
                                      placeholder="Enter Transport Name"
                                      value={formData.TransportName}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div> */}

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
