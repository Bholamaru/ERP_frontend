import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../../NavBar/NavBar.js";
import SideNav from "../../../../SideNav/SideNav.js";
import { useNavigate } from 'react-router-dom';
import "./DabitNoteList.css";


const DabitNoteList = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
   const navigate = useNavigate();  
  
    const handleButtonClick = () => {
      navigate('/'); 
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
    <div className="DabitNoteListMaster">
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
                <div className="DabitNoteList mt-5">
                  <div className="DabitNoteList-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title"> Dabit Note List</h5>
                      </div>
                                  
                        <div className="col-md-8 text-end">
                        <button type="button" className="btn" onClick={handleButtonClick}>
                          Dabit Note - Query
                        </button>
                        </div>
                    </div>
                  </div>


                    <div className="DabitNoteList-main">
                    
                      <div className="row text-start">
                          <div className="col-md-2">
                             <label htmlFor="">From Date</label>
                             <input type="date" className="form-control" placeholder="" />
                          </div>
                          <div className="col-md-2">
                             <label htmlFor="">To Date:</label>
                             <input type="date" className="form-control" placeholder="" />
                          </div>
                          <div className="col-md-2">
                             <label htmlFor="">Plant:</label>
                                <select name="" id="" className="form-control">
                                    <option value="">Produlink</option>
                                </select>         
                         </div>
                          <div className="col-md-2">
                             <label htmlFor="">Type:</label>
                             <select name="" id="" className="form-control">
                                    <option value="">All - Dabit Note </option>
                                    <option value="">Purchase - Dabit Note</option>
                                    <option value="">Sales Rate Diff - Dabit Note</option>
                                    <option value="">Jobwork Rate Diff - Dabit Note</option>
                             </select> 
                          </div>
                          <div className="col-md-2 ">
                          <label htmlFor="serviceDN" className="d-flex align-items-center text-start"> <input type="checkbox" id="serviceDN" className="me-2" />
                            PartyName:</label>
                            <input type="text" className="form-control" placeholder="Party Name" />
                         </div>

                      </div>
                      <div className="row text-start">
                          
                          <div className="col-md-2 ">
                          <label htmlFor="serviceDN" className="d-flex align-items-center text-start"> <input type="checkbox" id="serviceDN" className="me-2" />
                            Item:</label>
                            <input type="text" className="form-control" placeholder=" " />
                         </div>
                         <div className="col-md-2 ">
                          <label htmlFor="serviceDN" className="d-flex align-items-center text-start"> <input type="checkbox" id="serviceDN" className="me-2" />
                             DCNo:</label>
                            <input type="text" className="form-control" placeholder=" " />
                         </div>
                         <div className="col-md-2 mt-4">
                            <button className="btn">Search</button>
                            <button className="btn">Blue Print</button>
                         </div>

                      </div>
                      
                    </div>
          
                     <div className="table-responsive">
                                  <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th>Sr.</th>
                                            <th>Year </th>
                                            <th>Plant</th>
                                            <th>Note No</th>
                                            <th>Note Date </th>
                                            <th>Type</th>
                                            <th>Code No</th>
                                            <th>Cust. Name</th>
                                            <th>Total Amt</th>
                                            <th>User</th>
                                            <th>IRN</th>
                                            <th>Cancel</th>
                                            <th>View</th>
                                            <th>Email</th>
                                            <th>Edit</th>
                                            <th>Del</th>
                                            <th>All</th>
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
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
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
  );
};


export default DabitNoteList