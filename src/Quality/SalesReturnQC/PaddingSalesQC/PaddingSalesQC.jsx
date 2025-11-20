import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./PaddingSalesQC.css";

const PaddingSalesQC = () => {
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
    <div className="PaddingSalesQCMaster">
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
                <div className="PaddingSalesQC mt-5">
                  <div className="PaddingSalesQC-header mb-4 text-start">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h5 className="header-title">Pendding Sales Return QC List </h5>
                    </div>
                    <div className="col-md-8 text-end">
                      <button type="button" className="btn" to="#/">
                        Export Excel
                      </button>
                     </div>
                  </div>
                  </div>

                  {/* Filter Section */}
                  <div className="PaddingSalesQC-filter mb-4 mt-5">
                    <div className="row text-start">
                      
                    <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>Plant :</label>
                          <select className="form-select" style={{marginTop:"-1px"}}>
                             <option>SHARP</option>
                          </select>
                        </div>  

                       <div className="col-sm-6 col-md-2 col-lg-1" >
                          <label>From:</label>
                          <input type="date" className="form-control" />
                        </div>

                        <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>To Date:</label>
                          <input type="date" className="form-control" />
                        </div>
                       
                      <div className="col-sm-6 col-md-2 col-lg-2">
                       <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Checkbox" />
                            <label htmlFor="Checkbox" className="form-check-label"> Cust Name: </label>
                        </div>
                        <input type="text"  placeholder="Cust Name" className="form-control"/>
                      </div>

                      <div className="col-sm-6 col-md-2 col-lg-2">
                      <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Checkbox" />
                            <label htmlFor="Checkbox" className="form-check-label">Item Code: </label>
                        </div>
                        <input type="text" placeholder="Item Code " className="form-control" />
                      </div>

                      <div className="col-sm-6 col-md-2 col-lg-2">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Checkbox" />
                            <label htmlFor="Checkbox" className="form-check-label"> Sales-Return-No: </label>
                        </div>
                        <input type="text" placeholder="" className="form-control" />
                      </div>


                      <div className="col-6 col-md-1 mt-4">
                    
                          <button type="button" className="btn btn-primary">
                            Search
                          </button>
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
  )
}

export default PaddingSalesQC