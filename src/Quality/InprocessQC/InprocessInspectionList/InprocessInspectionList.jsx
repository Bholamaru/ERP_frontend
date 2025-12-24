import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./InprocessInspectionList.css";
import {  FaEye, FaEdit} from "react-icons/fa";
import { MdMarkEmailRead, MdDeleteForever } from "react-icons/md";

const InprocessInspectionList = () => {
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
    <div className="InprocessInspectionListMaster">
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
              <div className="InprocessInspectionList">
                <div className="InprocessInspectionList-header mb-2 text-start">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h5 className="header-title">Inprocess Inspection List </h5>
                    </div>
                    <div className="col-md-8 text-end">
                      <button type="button" className="btn" to="#/">
                        Export Excel
                      </button>
                      <button type="button" className="btn" to="#/">
                        Inprocess QC - Query
                      </button>
                     </div>
                  </div>
                </div>
               
                <div className="InprocessInspectionList-Main ">
                    <div className="container-fluid">
                  <div className="row g-2 text-start">

                      <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>Plant :</label>
                          <select className="form-select" style={{marginTop:"-1px"}}>
                             <option>SHARP</option>
                          </select>
                        </div>  

                       <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>From:</label>
                          <input type="date" className="form-control" />
                        </div>

                        <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>To Date:</label>
                          <input type="date" className="form-control" />
                        </div>
                       
                      <div className="col-sm-6 col-md-3 col-lg-2">
                       <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Checkbox" />
                            <label htmlFor="Checkbox" className="form-check-label"> Item Code: </label>
                        </div>
                        <input type="text"  placeholder="Item Code" className="form-control"/>
                      </div>

                      <div className="col-sm-6 col-md-3 col-lg-2">
                      <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Checkbox" />
                            <label htmlFor="Checkbox" className="form-check-label">Prod No: </label>
                        </div>
                        <input type="text" placeholder="Production " className="form-control" />
                      </div>

                      <div className="col-sm-6 col-md-2 col-lg-2">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Checkbox" />
                            <label htmlFor="Checkbox" className="form-check-label"> Lot/Heat-No: </label>
                        </div>
                        <input type="text" placeholder="" className="form-control" />
                      </div>

                      <div className="col-6 col-md-2">
                      <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="machineUtilizeCheckbox" />
                            <label htmlFor="machineUtilizeCheckbox" className="form-check-label"> LastOption: </label>
                        </div>
                          <button type="button" className="btn btn-primary">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

             <div className="InprocessInspectionList-table table-responsive mt-2">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Sr.</th>
                          <th scope="col">Year</th>
                          <th scope="col">QC No</th>
                          <th scope="col">QC Date</th>
                          <th scope="col">Prod No</th>
                          <th scope="col">ItemNo</th>
                          <th scope="col">Item Desc</th>
                          <th scope="col">Op No</th>
                          <th scope="col">Op.Name</th>
                          <th scope="col">Part Code</th>
                          <th scope="col">Ok</th>
                          <th scope="col">Rej.</th>
                          <th scope="col">Rew.</th>
                          <th scope="col">Total</th>
                          <th scope="col">Hk</th>
                          <th scope="col">User</th>
                          <th scope="col">Edit </th>
                          <th scope="col">Del</th>
                          <th scope="col">View </th>
                          <th scope="col">Doc </th>

                        </tr>
                      </thead>
                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>1</td>
                          <td>24-25</td>
                          <td>PRCOQC142523914</td>
                          <td>02/12/24</td>
                          <td>242536340 <br/> 02/12/24 </td>
                          <td>FG1018 <br/> 520HFD0202</td>
                          <td>SECONDARY PISTON FOR TMC</td>
                          <td>20</td>
                          <td>CNC-1</td>
                          <td>CNC1FG1018</td>
                          <td>1297</td>
                          <td>0</td>
                          <td>3</td>
                          <td>1300</td>
                          <td>F26497</td>
                          <td>Anupam</td>
                          <td><FaEdit/></td>
                          <td> <MdDeleteForever /> </td>
                          <td> <FaEye /></td>
                          <td><MdMarkEmailRead/></td>
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
export default InprocessInspectionList