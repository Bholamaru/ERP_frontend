import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./NewSalesOrder.css";
import Cached from "@mui/icons-material/Cached.js";


const NewSalesOrder = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
                <div className="NewSalesOrder mt-5">
                  <div className="NewSalesOrder-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h5 className="header-title">New Sales Order</h5>
                      </div>
                      <div className="col-md-6 text-end">
                        <button type="button" className="btn" onClick={togglePackMast} >
                          PackingMaster
                        </button>
                        <button type="button" className="btn" onClick={handleNavigate}>
                          Order List
                        </button>
                      </div>
                    </div>
                  </div>

   <div  className={`modal ${showModal ? "show" : ""}`}
  style={{ display: showModal ? "block" : "none" }}
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden={!showModal}
>
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
        <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                   Add New Packing Type  : 
                </h5>
                <button type="button" className="btn-close" onClick={togglePackMast} > <i class="fa fa-times" aria-hidden="true"></i> </button>        
        </div>

        <div className="modal-body">
                    <div className="NewSalesOrder-header mb-4 text-start">
                    <div className="row align-items-center">
                            <div className="col-md-4">
                                <h5 className="header-title">Packing Master : </h5>
                            </div>            
                    </div>
                    </div>
        <form>
          <div className="row">
            {/* Plant */}
             <div className="col-md-2 mt-2">
                    <label htmlFor="" className="">Packing Name: </label>
             </div>
             <div className="col-md-2">
                        <input type="text"  placeholder=" " className="form-control"/>
             </div>
            
             <div className="col-md-2 mt-2">
              <button type="button" className="btn btn-primary w-100">
                    Save
              </button>
             </div>
          </div>
          </form>
          <hr />
          <div>
            No Data Found !!
          </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
      </div>
    </div>
  </div>
</div>


                  <div className="NewSalesOrder-main mt-5">
                     <div className="row text-start">
                     <div className="col-md-1">
                            <label htmlFor="">Plant:</label>
                            <select name="" id="" className="form-control">
                               <option value="">Sharp</option>
                           </select>
                      </div> 
                     <div className="col-md-2">
                        <div className="row">
                            <label htmlFor="">Order Type:</label>
                            <div className="col-md-6"> 
                            <select name="" id="" className="form-control">
                               <option value="">Select</option>
                               <option value="">GST</option>
                               <option value="">JobWork</option>
                           </select>
                           </div>
                           <div className="col-md-6">
                           <select name="" id="" className="form-control">
                               <option value="">Select</option>
                               <option value="">Open</option>
                               <option value="">Close</option>
                           </select>
                           </div>
                        </div>
                      </div> 
                  
                    
                      <div className="col-md-3">
                        <div className="row">
                       <label htmlFor="" className="">Customer:</label>
                        <div className="col-md-6">
                           <input type="text" placeholder="Name" className="form-control" />
                        </div>
                        <div className="col-md-3">
                           <button type="button" className="btn btn-primary w-100" >
                              Search
                           </button> 
                        </div>
                        <div className="col-md-2">
                           <button type="button" className="btn btn-primary w-100" >
                              Save
                           </button> 
                        </div>
                        </div>
                     </div>
                     
                      <div className="col-md-1">
                             <label htmlFor="" className="">Cust Po:</label>
                            <input type="text" placeholder=" " className="form-control"/>
                      </div> 
                      <div className="col-md-1">
                            <label htmlFor="">Cust Date :</label>
                            <input type="date" className="form-control"/>
                      </div>
                      <div className="col-md-1">
                            <label htmlFor="" className="">Pay Day:</label>
                            <input type="text" placeholder="" className="form-control"/>
                      </div> 
                      <div className="col-md-1">
                            <label htmlFor="" className="">Pay Note:</label>
                            <input type="text" placeholder="" className="form-control"/>
                      </div> 
                      <div className="col-md-1">
                            <label htmlFor="">Valid Up :</label>
                            <input type="date" className="form-control"/>
                      </div>
                      <div className="col-md-1 mt-4">
                      <input type="file" id="myFile" name="filename"/>
                      </div>
                     </div>
                  </div>

                  <div className="NewSalesOrder-main mt-5">
                    <div className="NewSalesOrder-second">
                      <ul className="nav nav-tabs" id="NewSalesOrderTabs" role="tablist" >
                        <li className="nav-item" role="presentation">
                          <button  className="nav-link active"  id="item-details-tab"  data-bs-toggle="tab"  data-bs-target="#itemdetails"  type="button"  role="tab"  >
                            Item Details
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="terms-conditions-tab" data-bs-toggle="tab" data-bs-target="#termsconditions" type="button" role="tab" >
                            Terms & Conditions
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="taxes-tab" data-bs-toggle="tab" data-bs-target="#taxes" type="button" role="tab" >
                            Taxes
                          </button>
                        </li>
                      </ul>

                  <div className="tab-content mt-4"  id="NewSalesOrderTabsContent">
                        <div  className="tab-pane fade show active" id="itemdetails" role="tabpanel" >
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
                                            <td><input type="text" className="w-50" placeholder="Enter Item Code" /> <button>Search</button> <br />  
                                               Rev. No :
                                            </td>
                                                <td> <input type="text" className="w-55" placeholder="  " /> <br />
                                                Line No : <input type="text" className="w-50 mt-2" placeholder=" " /> <br /> PR No. :  <input type="text" className="w-50 mt-2" placeholder=" " />
                                                </td>
                                                <td><textarea name="item" id="itemdesc"></textarea></td>

                                                <td> <input type="text" className="w-60 mt-2" placeholder=" " /> <br />  <input type="text" className="w-50 mt-2" placeholder=" " /> %</td>
                                                <td> <input type="text" className="w-60 mt-2" placeholder=" " /> <br />  <input type="text" className="w-50 mt-2" placeholder=" " />
                                                </td>
                                                <td> <select name="" id="">
                                                    <option value="">NOS</option>
                                                    </select> <br /> <input type="text" className="w-60 mt-2" placeholder="Item Wt. " /> <br />  <input type="text" className="w-50 mt-2" placeholder="Per Unit " />
                                                </td>
                                                <td> <input type="text" className="w-60 mt-2" placeholder=" 0 " /> <br />  <input type="text" className="w-60 mt-2" placeholder=" 0 " /></td>
                                                <td> <input type="date" className="w-60 mt-2" placeholder=" " /> <br />  <input type="date" className="w-60 mt-2" placeholder=" " /></td>
                                                <td>
                                                <select name="" id="">
                                                    <option value="">Select</option>
                                                    </select> <br /> 
                                                    <label htmlFor="">Item Category</label>
                                                    <select name="" id="">
                                                    <option value="">RUGEL</option>
                                                    </select>
                                                </td>
                                                <td> <textarea name="" id=""></textarea>
                                                    <br /><select name="" id="">
                                                    <option value="">Select</option>
                                                    </select></td>
                                                <td><button>ADD</button></td>
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
                                                <td>Line No : <br /> PR No.</td>
                                                <td>Rev. No : <br /> HSN/SAC :</td>
                                                <td><br />Tolerance : <br /> Length :</td>
                                                <td> % </td>
                                                <td>  </td>
                                                <td><br />  UMO :</td>
                                                <td>Rate Type: <br />Item Wt. : <br />Per Unit: </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>CGST : <br />SGST : <br />IGST : <br /> Gross Rate:</td>
                                                <td></td>
                                                <td>Edit</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                        </table>
                                </div>
                            </div>  
                       </div>

                        <div className="tab-pane fade" id="termsconditions" role="tabpanel" >
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

                        <div className="tab-pane fade" id="taxes" role="tabpanel" >
                        <div className="NewSalesOrder-main">
                           
                            <div className="row text-start">
                            {/* First Column */}
                            <div className="col-md-4">
                                <div className="row mb-2">
                                <div className="col-4 mt-2">
                                    <label htmlFor="prod-no">So Date  :</label>
                                </div>
                                <div className="col-6 d-flex align-items-center">
                                    <input type="date" className="form-control" />
                                </div>
                                </div>
                            </div>

                            {/* Second Column */}
                            <div className="col-md-4">
                                <div className="row mb-2">
                                <div className="col-3 mt-2">
                                    <label htmlFor="">CCN No:</label>
                                </div>
                                <div className="col-6">
                                    <input type="text"  className="form-control"/>
                                </div>
                                </div>
                            </div>

                            {/* Third Column */}
                            <div className="col-md-4">
                                <div className="row mb-2">
                                <div className="col-3 mt-2">
                                    <label htmlFor="shift">Shift :</label>
                                </div>
                                <div className="col-3">
                                <input type="text"  className="form-control"/>
                                </div>
                                <div className="col-3 mt-2">
                                    <label htmlFor="shift">Shift :</label>
                                </div>
                                <div className="col-3">
                                <input type="date" className="form-control" />
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="row text-start">
                      {/* First Column */}
                      <div className="col-md-4">
                        <div className="row mb-2">
                          <div className="col-4 mt-2">
                            <label htmlFor="prod-no">Po Rec Date  :</label>
                          </div>
                          <div className="col-6 d-flex align-items-center">
                             <input type="date" className="form-control" />
                          </div>
                        </div>
                      </div>

                      {/* Second Column */}
                      <div className="col-md-4">
                        <div className="row mb-2">
                          <div className="col-3 mt-2">
                            <label htmlFor="">Delivery Date:</label>
                          </div>
                          <div className="col-6">
                            <input type="date"  className="form-control"/>
                          </div>
                        </div>
                      </div>

                      {/* Third Column */}
                      <div className="col-md-4">
                        <div className="row mb-2">
                          <div className="col-3 mt-2">
                            <label htmlFor="shift">Plan Date :</label>
                          </div>
                          <div className="col-6">
                          <input type="date"  className="form-control"/>
                          </div>
                        </div>
                      </div>
                           </div>

                           <div className="row text-start">
                            {/* First Column */}
                            <div className="col-md-4">
                                <div className="row mb-2">
                                <div className="col-4 mt-2">
                                    <label htmlFor="prod-no">Incoterms  :</label>
                                </div>
                                <div className="col-4 d-flex align-items-center">
                                <select name=""  className="form-control"  id="">
                                    <option value="">Select</option>
                                </select>
                                </div>
                                <div className="col-md-1">
                                  <button type="button" className="btn">
                                    Add
                                  </button>
                                </div>
                                <div className="col-md-1">
                                  <button type="button" className="btn">
                                    <Cached />
                                  </button>
                                </div>
                                </div>
                            </div>

                            {/* Second Column */}
                            <div className="col-md-4">
                                <div className="row mb-2">
                                <div className="col-9">
                                    <input type="text"  className="form-control"/>
                                </div>
                                </div>
                            </div>

                            {/* Third Column */}
                            <div className="col-md-4">
                                <div className="row mb-2">
                                <div className="col-3 mt-2">
                                    <label htmlFor="shift">L.C.No. :</label>
                                </div>
                                <div className="col-3">
                                <input type="text"  className="form-control"/>
                                </div>
                                <div className="col-3 mt-2">
                                    <label htmlFor="shift">Sales Person :</label>
                                </div>
                                <div className="col-3">
                                <select name=""  className="form-control"  id="">
                                    <option value="">Select</option>
                                </select>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="row text-start">
                            {/* First Column */}
                            <div className="col-md-4">
                                <div className="row mb-2">
                                <div className="col-4 mt-2">
                                    <label htmlFor="prod-no">Ship To  :</label>
                                </div>
                                <div className="col-5 d-flex align-items-center">
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-2">
                                  <button type="button" className="btn">
                                    Search
                                  </button>
                                </div>
                                </div>
                            </div>

                            {/* Second Column */}
                            <div className="col-md-4">
                                <div className="row mb-2">
                                <div className="col-3 mt-2">
                                    <label htmlFor="">Buyer Name:</label>
                                </div>
                                <div className="col-6">
                                <select name=""  className="form-control"  id="">
                                    <option value=""> </option>
                                </select>
                                </div>
                                </div>
                            </div>

                            {/* Third Column */}
                            <div className="col-md-4">
                                <div className="row mb-2">
                                <div className="col-4 mt-2">
                                    <label htmlFor="shift">Site Name :</label>
                                </div>
                                <div className="col-6">
                                <input type="text"  className="form-control"/>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="row text-start">
                            {/* First Column */}
                            <div className="col-md-4">
                                <div className="row mb-2">
                                <div className="col-4 mt-2">
                                    <label htmlFor="shift">Side TO Add Code :</label>
                                </div>
                                <div className="col-3">
                                   <select name="" className="form-control" id="">
                                     <option value="">.</option>
                                   </select>
                                </div>
                                <div className="col-3">
                                <select name="" className="form-control" id="">
                                     <option value="">.</option>
                                   </select>
                                </div>
                                </div>
                            </div>

                            {/* Second Column */}
                            <div className="col-md-4">
                                <div className="row mb-2">
                                <div className="col-3 mt-2">
                                    <label htmlFor="">Packing:</label>
                                </div>
                                <div className="col-6">
                                    <input type="text"  className="form-control"/>
                                </div>
                                </div>
                            </div>

                            {/* Third Column */}
                            <div className="col-md-4">
                                <div className="row mb-2">
                                <div className="col-3 mt-2">
                                    <label htmlFor="prod-no">Project Name  :</label>
                                </div>
                                <div className="col-5 d-flex align-items-center">
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-md-2">
                                  <button type="button" className="btn">
                                    New
                                  </button>
                                </div>
                                <div className="col-md-1">
                                  <button type="button" className="btn">
                                    <Cached />
                                  </button>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="row text-start">
                      {/* First Column */}
                      <div className="col-md-4">
                        <div className="row mb-2">
                          <div className="col-4 mt-2">
                            <label htmlFor="prod-no">Delivery AL  :</label>
                          </div>
                          <div className="col-8 d-flex align-items-center">
                          <textarea name="" className="form-control" id=""></textarea>
                          </div>
                        </div>
                      </div>

                      {/* Second Column */}
                      <div className="col-md-4">
    
                      </div>

                      {/* Third Column */}
                      <div className="col-md-4">
                        <div className="row mb-2">
                          <div className="col-3 mt-2">
                            <label htmlFor="shift">Terms :</label>
                          </div>
                          <div className="col-9">
                                <textarea name="" className="form-control" id=""></textarea>
                          </div>
                        </div>
                      </div>
                           </div>

                           <div className="table-responsive">
                              <table className="table table-bordered table-striped">
                                    <tbody>
                                      <tr>
                                      <td className="" style={{ width: "100px", marginLeft: "5px"}}>
                                          <input type="checkbox" id="" name="" style={{ width: "50px", marginLeft: "5px" }}/>
                                             (TOC)
                                          <input type="text"  placeholder="Pack & Frwd Charges"  style={{ width: "150px", marginLeft: "5px" }}/>
                                          <input type="text" placeholder="0" style={{ width: "50px", marginLeft: "5px" }}/> %
                                      </td>

                                        <td style={{ width: "200px", marginLeft: "5px"}}>
                                            <input type="text" placeholder="0" style={{ width: "100px", marginLeft: "5px" }} /> 
                                        </td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}> Assessable Value </td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}> 00 . 00</td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}></td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}></td>
                                      </tr>
                                    </tbody>
                                    
                                    <tbody>
                                      <tr>
                                      <td className="" style={{ width: "100px", marginLeft: "5px"}}>
                                          <input type="checkbox" id="" name=""  style={{ width: "50px", marginLeft: "5px" }}/>
                                             (TOC)
                                          <input type="text"  placeholder="Pack & Frwd Charges"  style={{ width: "150px", marginLeft: "5px" }}/>
                                          <input type="text" placeholder="0" style={{ width: "50px", marginLeft: "5px" }}/> %
                                      </td>

                                        <td style={{ width: "200px", marginLeft: "5px"}}>
                                            <input type="text" placeholder="0" style={{ width: "100px", marginLeft: "5px" }} /> 
                                        </td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}> CGST : 00.00 %  </td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}> 00 . 00</td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}></td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}></td>
                                      </tr>
                                    </tbody>

                                    <tbody>
                                      <tr>
                                      <td className="" style={{ width: "100px", marginLeft: "5px"}}>
                                          <input type="checkbox" id="" name="" style={{ width: "50px", marginLeft: "5px" }}/>
                                             (TOC)
                                          <input type="text"  placeholder="Pack & Frwd Charges"  style={{ width: "150px", marginLeft: "5px" }}/>
                                          <input type="text" placeholder="0" style={{ width: "50px", marginLeft: "5px" }}/> %
                                      </td>

                                        <td style={{ width: "200px", marginLeft: "5px"}}>
                                            <input type="text" placeholder="0" style={{ width: "100px", marginLeft: "5px" }} /> 
                                        </td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}> SGST : 00.00 %  </td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}> 00 . 00</td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}> Third-Party Inspection (TPI) </td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}>
                                            <select style={{ width: "100px", marginLeft: "5px"}} name="" id="">
                                                <option value="">No</option>      
                                            </select>
                                         </td>
                                      </tr>
                                    </tbody>

                                    <tbody>
                                      <tr>
                                      <td className="" style={{ width: "100px", marginLeft: "5px"}}>
                                          <input type="checkbox" id="" name="" style={{ width: "50px", marginLeft: "5px" }}/>
                                             (TOC)
                                          <input type="text"  placeholder="Other Charges"  style={{ width: "150px", marginLeft: "5px" }}/>
                                          <input type="text" placeholder="0" style={{ width: "50px", marginLeft: "5px" }}/> %
                                      </td>

                                        <td style={{ width: "200px", marginLeft: "5px"}}>
                                            <input type="text" placeholder="0" style={{ width: "100px", marginLeft: "5px" }} /> 
                                        </td>

                                        <td style={{ width: "200px", marginLeft: "5px"}}> IGST : 00.00 %  </td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}> 00 . 00</td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}>
                                            <input type="checkbox" id="" name="" style={{ width: "50px", marginLeft: "5px" }}/>
                                            Ref. Cust :
                                        </td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}>
                                          <input type="text"  placeholder="Enter Name"  style={{ width: "150px", marginLeft: "5px" }}/>
                                        </td>
                                      </tr>
                                    </tbody>

                                    <tbody>
                                      <tr>
                                      <td className="" style={{ width: "100px", marginLeft: "5px"}}>
                                             CR Name :  
                                      </td>

                                        <td style={{ width: "200px", marginLeft: "5px"}}>
                                            <select style={{ width: "100px", marginLeft: "5px"}} name="" id="">
                                                <option value="">Select</option>      
                                            </select> 
                                        </td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}> UTGST : 00.00 % </td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}> 00 . 00</td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}> GR. Total : </td>
                                        <td style={{ width: "200px", marginLeft: "5px"}}> 00.00</td>
                                      </tr>
                                    </tbody>
                                   
                                  </table>
                          </div>

                          <div className="row text-start">
                                
                                <div className="col-md-3">
                                  <button type="button" className="btn ">
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

export default NewSalesOrder