import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./InwardQCList.css";
import {  FaEye, FaEdit} from "react-icons/fa";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { MdMarkEmailRead, MdDeleteForever } from "react-icons/md";

const InwardQCList = () => {
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
    <div className="InwardQCListMaster">
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
              <div className="InwardQCList mt-5">
                <div className="InwardQCList-header mb-4 text-start">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h5 className="header-title">Inward 57F4 QC List </h5>
                    </div>
                    <div className="col-md-8 text-end">
                      <button type="button" className="btn" to="#/">
                        Jobwork QC Query
                      </button>
                      <button type="button" className="btn" to="/PaddingQCInward">
                        Padding QC List
                      </button>
                     </div>
                  </div>
                </div>

               
                <div className="InwardQCList-Main mt-5">
                    <div className="container-fluid">
                      <div className="row g-3 text-start">

                       <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>From:</label>
                          <input type="date" className="form-control" />
                        </div>

                        <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>To Date:</label>
                          <input type="date" className="form-control" />
                        </div>

                        <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>Plant :</label>
                          <select className="form-select" style={{marginTop:"-1px"}}>
                             <option>SHARP</option>
                          </select>
                        </div>                        

                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label>Type :</label>
                        <select className="form-select" style={{marginTop:"-1px"}}>
                          <option>All</option>
                          <option>Our_F4</option>
                          <option>Vendor_F4</option>
                          <option>Non Returnable</option>
                          <option>Vendor_Scrap</option>
                          <option>Cust_Rework_In</option>
                        </select>
                      </div>

                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label>Status :</label>
                        <select className="form-select" style={{marginTop:"-1px"}}>
                          <option>All</option>
                          <option>Accpet</option>
                          <option>Reject</option>
                          <option>Hold</option>
                          <option>AUD</option>
                        </select>
                      </div>

                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label>Item Group :</label>
                        <select className="form-select" style={{marginTop:"-1px"}}>
                          <option>Select</option>
                          <option>FG</option>
                          <option>RM</option>
                          <option>Tools</option>
                          <option>Instrument</option>
                          <option>Machine</option>
                          <option>Consumable</option>
                          <option>Safety Equ</option>
                          <option>Service</option>
                          <option>Asset</option>
                          <option>F4</option>
                          <option>Scrap</option>
                          <option>SF</option>
                          <option>BO</option>
                          <option>DI</option>
                        </select>
                      </div>
                       
                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label  type="checkbox"> Vendor Name:</label>
                        <input type="text"  placeholder="Enter Name" className="form-control"/>
                      </div>

                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label type="checkbox">Item :</label>
                        <input type="text" placeholder="Enter Code" className="form-control" />
                      </div>

                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label type="checkbox">Lot No :</label>
                        <input type="text" placeholder="" className="form-control" />
                      </div>


                      <div className="col-6 col-md-1 mt-5">
                          <button type="button" className="btn btn-primary">
                            Search
                          </button>
                        </div>

                      </div>
<br/>
                <div className="row g-3 text-start">
                            
                   <div className="col-sm-6 col-md-2 col-lg-2">                     
                      <select className="form-select" style={{marginTop:"-1px"}}>
                        <option>57F4 GRN No :</option>
                        <option>IIR (QC) No</option>
                        <option>Vendor Challan NO</option>
                      </select>                     
                    </div>

                    <div className="col-sm-6 col-md-2 col-lg-1">
                        <input type="text" placeholder="No." className="form-control" />
                      </div>
                      
                    <div className="col-md-1">
                    <button type="button" className="btn btn-primary w-100" style={{marginTop:"1px"}}>
                        Search
                    </button> 
                    </div>
                      </div>
                    </div>
                  </div>

             <div className="table-responsive mt-5">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Sr.</th>
                          <th scope="col">Year</th>
                          <th scope="col">Type</th>
                          <th scope="col">Plant</th>
                          <th scope="col">QC No</th>
                          <th scope="col">QC Date</th>
                          <th scope="col">Entry Date</th>
                          <th scope="col">Vendor Name</th>
                          <th scope="col">In/Ch No</th>
                          <th scope="col">In/Ch Date</th>
                          <th scope="col">Item | Part Code</th>
                          <th scope="col">Item Desc</th>
                          <th scope="col">QC Qty</th>
                          <th scope="col">OK Qty</th>
                          <th scope="col">Rew.</th>
                          <th scope="col">Rej.</th>
                          <th scope="col">Lot Status .</th>
                          <th scope="col">User</th>
                          <th scope="col">Edit </th>
                          <th scope="col">Doc </th>
                          <th scope="col">View </th>
                          <th scope="col">Email </th>
                          <th scope="col">Del</th>
                        </tr>
                      </thead>

                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>1</td>
                          <td>24-25</td>
                          <td><span className="ourf4" > Our_F4 </span></td>
                          <td>SHARP</td>
                          <td>242508230</td>
                          <td>02/12/24</td>
                          <td>02/12/24 <br/> 15:04</td>
                          <td>Swami Engineering <br/>| 000094</td>
                          <td> <span className="nummmr">242512350</span> <br/> 1923</td>
                          <td>02/12/24 <br/> 02/12/24</td>
                          <td>FG1022 CNG 1FG 1022 <br/> 550QJOO412</td>
                          <td>FORK-BOLT UG-4.5 </td>
                          <td>4805</td>
                          <td>4805</td>
                          <td>0</td>
                          <td>0</td>
                          <td>Accept</td>
                          <td>mobin</td>
                          <td><FaEdit/></td>
                          <td><HiDocumentArrowDown /></td>
                          <td> <FaEye /></td>
                          <td><MdMarkEmailRead/></td>
                          <td> <MdDeleteForever /> </td>
                        </tr>
                      </tbody>

                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>2</td>
                          <td>24-25</td>
                          <td><span className="ourf4" > Our_F4 </span></td>
                          <td>SHARP</td>
                          <td>242508229</td>
                          <td>02/12/24</td>
                          <td>02/12/24 <br/> 05:04</td>
                          <td>Shri Ganesh Engineering <br/>| 000094</td>
                          <td> <span className="nummmr">242512356</span> <br/> 103</td>
                          <td>02/12/24 <br/> 02/12/24</td>
                          <td>FG1088 CNG 1FG 1088 <br/> 550DZ04702</td>
                          <td>WHEEL CYL 5LOTTED <br/> PISTON-FRONT</td>
                          <td>3030</td>
                          <td>3030</td>
                          <td>0</td>
                          <td>0</td>
                          <td>Accept</td>
                          <td>mobin</td>
                          <td><FaEdit/></td>
                          <td><HiDocumentArrowDown /></td>
                          <td> <FaEye /></td>
                          <td><MdMarkEmailRead/></td>
                          <td> <MdDeleteForever /> </td>
                        </tr>
                      </tbody>

                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>3</td>
                          <td>24-25</td>
                          <td><span className="ourf4" > Our_F4 </span></td>
                          <td>SHARP</td>
                          <td>242508228</td>
                          <td>02/12/24</td>
                          <td>02/12/24 <br/> 14:04</td>
                          <td>Shri Ganesh Engineering <br/>| 000094</td>
                          <td> <span className="nummmr">242512356</span> <br/> 1923</td>
                          <td>02/12/24 <br/> 02/12/24</td>
                          <td>FG1088 CNG 1FG 1088 <br/> 550DZ04702</td>
                          <td>WHEEL CYL 5LOTTED <br/> PISTON-RAER</td>

                          <td>5860</td>
                          <td>5860</td>
                          <td>0</td>
                          <td>0</td>
                          <td>Accept</td>
                          <td>mobin</td>
                          <td><FaEdit/></td>
                          <td><HiDocumentArrowDown /></td>
                          <td> <FaEye /></td>
                          <td><MdMarkEmailRead/></td>
                          <td> <MdDeleteForever /> </td>
                        </tr>
                      </tbody>

                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>4</td>
                          <td>24-25</td>
                          <td><span className="ourf4" > Our_F4 </span></td>
                          <td>SHARP</td>
                          <td>242508227</td>
                          <td>02/12/24</td>
                          <td>02/12/24 <br/> 15:04</td>
                          <td>Venture Enterprises<br/>| 000111</td>
                          <td> <span className="nummmr">242512352</span> <br/> 1399</td>
                          <td>02/12/24 <br/> 02/12/24</td>
                          <td>FG1040 CNG 1FG 1040 <br/> S2DP04728</td>
                          <td>EXTENSION K10 [20*34.5] </td>
                          <td>1000</td>
                          <td>1000</td>
                          <td>0</td>
                          <td>0</td>
                          <td>Accept</td>
                          <td>mobin</td>
                          <td><FaEdit/></td>
                          <td><HiDocumentArrowDown /></td>
                          <td> <FaEye /></td>
                          <td><MdMarkEmailRead/></td>
                          <td> <MdDeleteForever /> </td>
                        </tr>
                      </tbody>

                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>5</td>
                          <td>24-25</td>
                          <td><span className="ourf4" > Our_F4 </span></td>
                          <td>SHARP</td>
                          <td>242508226</td>
                          <td>02/12/24</td>
                          <td>02/12/24 <br/> 15:04</td>           
                          <td>Venture Enterprises<br/>| 000111</td>
                          <td> <span className="nummmr">242512353</span> <br/> 1400</td>
                          <td>02/12/24 <br/> 02/12/24</td>
                          <td>FG1050 TPFG1050 <br/> S3GV00112B</td>
                          <td>FIX NUT CARGO</td>
                          <td>2000</td>
                          <td>2000</td>
                          <td>0</td>
                          <td>0</td>
                          <td>Accept</td>
                          <td>mobin</td>
                          <td><FaEdit/></td>
                          <td><HiDocumentArrowDown /></td>
                          <td> <FaEye /></td>
                          <td><MdMarkEmailRead/></td>
                          <td> <MdDeleteForever /> </td>
                        </tr>
                      </tbody>

                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>6</td>
                          <td>24-25</td>
                          <td><span className="ourf4" > Our_F4 </span></td>
                          <td>SHARP</td>
                          <td>242508225</td>
                          <td>02/12/24</td>
                          <td>02/12/24 <br/> 13:14</td>
                          <td>PRATIKSHA Engineering <br/>| JV0024</td>
                          <td> <span className="nummmr">242512346</span> <br/> 746</td>
                          <td>02/12/24 <br/> 02/12/24</td>
                          <td>FG1117 PLFG1117 <br/> 530MX00312</td>
                          <td>STEEL BUSH[P]</td>
                          <td>4000</td>
                          <td>4000</td>
                          <td>0</td>
                          <td>0</td>
                          <td>Accept</td>
                          <td>mobin</td>
                          <td><FaEdit/></td>
                          <td><HiDocumentArrowDown /></td>
                          <td> <FaEye /></td>
                          <td><MdMarkEmailRead/></td>
                          <td> <MdDeleteForever /> </td>
                        </tr>
                      </tbody>

                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>7</td>
                          <td>24-25</td>
                          <td><span className="ourf4" > Our_F4 </span></td>
                          <td>SHARP</td>
                          <td>242508224</td>
                          <td>02/12/24</td>
                          <td>02/12/24 <br/> 11:36</td>
                          <td>SAMARTHAYA Engineering <br/>| 000072</td>
                          <td> <span className="nummmr">242512340</span> <br/> 106</td>
                          <td>02/12/24 <br/> 02/12/24</td>
                          <td>FG1014 CNG 1FG 1014 <br/> 520HFD0102</td>
                          <td>PRIMARY PISTON FOR TMC</td>
                          <td>3500</td>
                          <td>3500</td>
                          <td>0</td>
                          <td>0</td>
                          <td>Accept</td>
                          <td>mobin</td>
                          <td><FaEdit/></td>
                          <td><HiDocumentArrowDown /></td>
                          <td> <FaEye /></td>
                          <td><MdMarkEmailRead/></td>
                          <td> <MdDeleteForever /> </td>
                        </tr>
                      </tbody>

                    </table>
                  </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InwardQCList