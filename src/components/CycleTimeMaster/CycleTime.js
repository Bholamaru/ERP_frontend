import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import "./CycleTime.css";
import { useNavigate } from "react-router-dom";

const CycleTime = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const [records] = useState([
    {
      id: 1,
      ItemNo: "1001",
      ItemDesc: "Widget A",
      OpNo: "001",
      Partcode: "P001",
      Machinetype: "Type 1",
    },
    {
      id: 2,
      ItemNo: "1002",
      ItemDesc: "Widget B",
      OpNo: "002",
      Partcode: "P002",
      Machinetype: "Type 2",
    },
    {
      id: 3,
      ItemNo: "1003",
      ItemDesc: "Widget C",
      OpNo: "003",
      Partcode: "P003",
      Machinetype: "Type 1",
    },
  ]);

  const handleAddNewCycleTime = () => {
    navigate("/add-cycle-time");
  };

  return (
    <div className="Cycletimecenter">
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
                <div className="Cycletimermaster">
                  <div className="Cycletime">
                    <div className="Cycletime-header mb-4 text-start mt-5">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <h5 className="header-title">Cycle Time Master</h5>
                        </div>
                        <div className="col-md-6 text-md-end text-start mt-2 mt-md-0">
                          <button
                            className="btn me-2"
                            onClick={handleAddNewCycleTime}
                          >
                            Add New Cycle Time
                          </button>
                          <button className="btn me-2">Report</button>
                          <button className="btn">Export Report</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="CycletimeMain mt-5">
                    <div className="container-fluid">
                      <div className="row text-start centerselect">
                        <div className="col-md-1 col-sm-3 mb-3 mb-sm-0">
                          <label
                            htmlFor="selectPlant"
                            className="col-form-label"
                          >
                            Item Search
                          </label>
                        </div>
                        <div className="col-md-3 col-sm-9 mb-3 mb-sm-0">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder=""
                          />
                        </div>
                        <div className="col-md-1 mt-1 text-md-start">
                          <button className="btn">Search</button>
                        </div>
                        <div className="col-md-1 mt-1  text-md-end">
                          <button className="btn">View All</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="CycletimeTable mt-5">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="table-responsive">
                          <table className="table table-striped mt-4">
                            <thead>
                              <tr>
                                <th scope="col">Sr</th>
                                <th scope="col">Item No.</th>
                                <th scope="col">Item Desc</th>
                                <th scope="col">Op No</th>
                                <th scope="col">PartCode</th>
                                <th scope="col">Machine Type</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Edit</th>
                                <th scope="col">View</th>
                              </tr>
                            </thead>
                            <tbody>
                              {records.map((record, index) => (
                                <tr key={record.id}>
                                  <td>{index + 1}</td>
                                  <td>{record.ItemNo}</td>
                                  <td>{record.ItemDesc}</td>
                                  <td>{record.OpNo}</td>
                                  <td>{record.Partcode}</td>
                                  <td>{record.Machinetype}</td>
                                  <td>
                                    <button className="btn">
                                      <i className="fas fa-trash"></i>
                                    </button>
                                  </td>
                                  <td>
                                    <button className="btn">
                                      <i className="fas fa-edit"></i>
                                    </button>
                                  </td>
                                  <td>
                                    <button className="btn">
                                      <i className="fas fa-eye"></i>
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="record-count text-start"
                    style={{ color: "blue", padding: "10px" }}
                  >
                    Total Records: {records.length}
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

export default CycleTime;
