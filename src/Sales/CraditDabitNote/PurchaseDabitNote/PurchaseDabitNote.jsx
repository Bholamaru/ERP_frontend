import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import { useNavigate } from 'react-router-dom';
import "./PurchaseDabitNote.css";


const PurchaseDabitNote = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
   const navigate = useNavigate();  
  
    const handleButtonClick = () => {
      navigate('/DabitNoteList'); 
    };
    const handleBttnClick = () => {
      navigate('/DN574Fout'); 
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
    <div className="PurchaseDabitNoteMaster">
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
                <div className="PurchaseDabitNote mt-5">
                  <div className="PurchaseDabitNote-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <h5 className="header-title">New DabitNote</h5>
                      </div>
                      <div className="col-md-2">
                          <div className="row">
                              <div className="col-md-4">
                                <label htmlFor="">Type</label>
                              </div>
                              <div className="col-md-8">
                                <select>
                                   <option>Select</option>
                                   <option>Direct</option>
                                   <option>GRN</option>
                                </select>
                              </div>
                          </div>
                      </div>
                      
                      <div className="col-md-2">
                      <div className="row">
                              <div className="col-md-4">
                                <label htmlFor="">NoteType</label>
                              </div>
                              <div className="col-md-8">
                                <select>
                                   <option>PurchaseReturn</option>
                                   <option>PurchaseRateDiff</option>
                                   <option>ShortQty</option>
                                   <option>Other</option>
                                </select>
                              </div>
                          </div>
                      </div>
                    
                        <div className="col-md-6 text-end">
                        <button type="button" className="btn" onClick={handleButtonClick}>
                          Dabit Note List
                        </button>
                        <button type="button" className="btn " onClick={handleBttnClick}>
                          DN-57F4out
                        </button>
                        </div>
                    </div>
                  </div>


                    <div className="PurchaseDabitNote-main">
                      <div className="row text-start">
                        <div className="col-3">
                           <div className="row">
                               <div className="col-md-6">
                                  <label htmlFor="">DabitNote NO:</label>
                               </div>
                               <div className="col-md-6">
                                  <input type="text" className="form-control" placeholder="24250001"/>
                               </div>
                           </div>
                        </div>
                        <div className="col-3">
                           <div className="row">
                               <div className="col-md-6">
                                  <label htmlFor="">DabitNote Date:</label>
                               </div>
                               <div className="col-md-6">
                                  <input type="date" className="form-control" placeholder=""/>
                               </div>
                          </div>
                        </div>
                        <div className="col-3">  
                        <div className="row">
                           <div className="col-md-6">
                                  <label htmlFor="">Party Name:</label>
                               </div>
                               <div className="col-md-6">
                                  <input type="text" className="form-control" placeholder="Party Name"/>
                               </div>
                           </div>
                        </div>
                          <div className="col-2"><button className="btn w-50">Search</button>
                         </div>
                       </div>
                    </div>


                  <div className="PurchaseDabitNote-main mt-5">
                    <div className="PurchaseDabitNote-tabs">
                   
                      <div className="tab-content mt-4" id="" >

                          <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th className="">Item Code</th>
                                        <th>Stock </th>
                                        <th>Item Desc</th>
                                        <th>Remark</th>
                                        <th>Reason</th>
                                        <th>HSN Code</th>
                                        <th>Rate</th>
                                        <th>Qty</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" placeholder="Enter Name" className="form-control" /><br />
                                            <button className="btn w-50">Search</button>
                                        </td>
                                        <td></td>
                                        <td><textarea className="form-control"></textarea></td>
                                        <td><textarea className="form-control"></textarea></td>
                                        <td>
                                            <select name="" className="form-control">
                                                <option value="">Select</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input type="text" className="form-control" />
                                        </td>
                                        <td>
                                            <input type="text" className="form-control" />
                                        </td>
                                        <td>
                                            <input type="text" className="form-control" />
                                            <select name="" id="">
                                                <option value="">Select</option>
                                            </select>
                                        </td>
                                        <td><button className="btn">Add</button></td>
                                    </tr>
                                    </tbody>
                                </table>
                          </div>

                            <div className="table-responsive">
                                        <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th>Sr.</th>
                                            <th>GRN No </th>
                                            <th>GRN Date</th>
                                            <th>Item Code</th>
                                            <th>Item Desc</th>
                                            <th>HSN Code</th>
                                            <th>GRN Qty.</th>
                                            <th>Stock.</th>
                                            <th>Reason</th>
                                            <th>Reason</th>
                                            <th>Quantity</th>
                                            <th>Unit</th>
                                            <th>Rate</th>
                                            <th>Amt</th>
                                            <th>Del</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td><textarea name="" className="form-control" id=""></textarea></td>
                                                <td>
                                                    <select name="" id="">
                                                        <option value="">Select</option>
                                                    </select>
                                                </td>
                                                <td> <input type="text" className="form-control" /></td>
                                                <td> <input type="text" className="form-control" /></td>
                                                <td> <input type="text" className="form-control" /></td>
                                                <td> <input type="text" className="form-control" /></td>
                                                <td><span style={{border:"1px solid black"}}>X</span></td>
                                            </tr>
                                        </tbody>
                                        </table>
                            </div>

                      </div>

                    </div>
                  </div>

                    <div className="row mt-5">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <th>Transport Charge</th>
                                            <th>SubTotal</th>
                                            <th colSpan="2">CGST</th>
                                            <th colSpan="2">SGST</th>
                                            <th colSpan="2">IGST</th>
                                            <th colSpan="2">UTGST</th>
                                            <th>TCS</th>
                                            <th className="d-flex align-items-center">
                                                <input type="radio" id="" name="fav_language" value="FG" className="" />
                                                <label for="" className="">TDSOnBasic</label> <br />
                                                    <input type="radio" id="" name="fav_language" value="RM" className="" />
                                                    <label for="" className="">TDSOnGrandTotal</label>
                                            </th>
                                            <th>Grand Total</th>
                                        </thead>

                                        <tbody>
                                        <td> <input type="text" className="form-control" placeholder="0" /> </td>
                                        <td> <input type="text" className="form-control" placeholder="" /> </td>
                                        <td> <input type="text" className="form-control" placeholder="00.00" /> %</td>
                                        <td> <input type="text" className="form-control" placeholder="00.00" /> </td>
                                        <td> <input type="text" className="form-control" placeholder="00.00" /> %</td>
                                        <td> <input type="text" className="form-control" placeholder="00.00" /> </td>
                                        <td> <input type="text" className="form-control" placeholder="00.00" /> %</td>
                                        <td> <input type="text" className="form-control" placeholder="00.00" /> </td>
                                        <td> <input type="text" className="form-control" placeholder="00.00" /> %</td>
                                        <td> <input type="text" className="form-control" placeholder="00.00" /> </td>
                                        <td> <input type="text" className="form-control" placeholder="00.00" /> </td>
                                        <td> <input type="text" className="form-control" placeholder="00.00" /> </td>
                                        <td> <input type="text" className="form-control" placeholder="00.00" /> </td>
                                        
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                      </div>

                      <div className="row text-start">
                          <div className="col-md-2">
                             <label htmlFor="">Modeof Transport</label>
                             <input type="text" className="form-control" placeholder="By Road" />
                          </div>
                          <div className="col-md-2">
                             <label htmlFor="">LR GC Note NO:</label>
                             <input type="text" className="form-control" placeholder="" />
                          </div>
                          <div className="col-md-2">
                             <label htmlFor="">Eway Bill No:</label>
                             <input type="text" className="form-control" placeholder="" />
                          </div>
                          <div className="col-md-2">
                             <label htmlFor="">Eway Bill Date:</label>
                             <input type="date" className="form-control" placeholder="" />
                          </div>
                          <div className="col-md-2">
                             <label htmlFor="">Vehicle No:</label>
                             <input type="text" className="form-control" placeholder="" />
                          </div>
                      </div>
                      <div className="row text-start">
                          <div className="col-md-2">
                             <label htmlFor="">Transpoter:</label>
                             <input type="text" className="form-control" placeholder="" />
                          </div>
                          <div className="col-md-2">
                             <label htmlFor="">PO No:</label>
                             <input type="text" className="form-control" placeholder="" />
                          </div>
                          <div className="col-md-2">
                             <label htmlFor="">PO Date:</label>
                             <input type="date" className="form-control" placeholder="" />
                          </div>
                          <div className="col-md-2">
                             <label htmlFor="">Invice No:</label>
                             <input type="text" className="form-control" placeholder="" />
                          </div>
                          <div className="col-md-2">
                             <label htmlFor="">Invice Date:</label>
                             <input type="date" className="form-control" placeholder="" />
                          </div>
                      </div>
                      <div className="row text-start">
                          <div className="col-md-2">
                             <label htmlFor="">Remark</label>
                             <textarea name=""  className="form-control" id=""></textarea>
                          </div>
                          <div className="col-md-2 mt-4">
                             <select name="" className="form-control" id="">
                                <option value="">Bussiness To Bussiness</option>
                             </select>
                          </div>
                          <div className="col-md-2">
                             <input type="checkbox" className="mt-5 " placeholder="" />
                             <label htmlFor=""> IS Service DN</label>
                          </div>
                          <div className="col-md-2 mt-5">
                            <button className="btn">Save Dabit Note</button>
                            <button className="btn">Clear</button>
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

export default PurchaseDabitNote