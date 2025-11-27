import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import { Link } from "react-router-dom";
import "./SubcontractStock.css";
import { FaEye } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";

const OurVendorStock = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [vendorList, setVendorList] = useState([]); // 🔥 vendor suggestions
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("side-nav-open", sideNavOpen);
  }, [sideNavOpen]);

  // 🔥 Vendor Suggestion fetch// 🔥 Vendor Suggestion fetch (FIXED AGAIN with Filter)
  useEffect(() => {
    const handler = setTimeout(() => {
      const fetchVendors = async () => {
        if (!vendorName || vendorName.length < 2) {
          setVendorList([]); 
          return;
        }

        try {
          const res = await fetch(
            `http://127.0.0.1:8000/Store/api/SubcornStock/?q=${vendorName}`
          );
          const data = await res.json();
          console.log("VendorList API Response:", data); 

          // Pehle check karein data kaisa hai (array ya object)
          let rawList = [];
          if (Array.isArray(data)) {
            rawList = data;
          } else if (data.results) {
            rawList = data.results;
          }

          // ✅ NAYA FIX YAHAN HAI:
          // Sirf un vendors ko list me rakho jinka naam hai (khaali nahi hai)
          const filteredList = rawList.filter(v => v && v.supplier);
        
          setVendorList(filteredList);

        } catch (err) {
          console.error("Error fetching vendors:", err);
          setVendorList([]); 
        }
      };

      fetchVendors();
    }, 300); 

    return () => {
      clearTimeout(handler);
    };
  }, [vendorName]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!fromDate || !toDate || !vendorName) {
      alert("Please select From Date, To Date and Vendor Name");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `http://127.0.0.1:8000/Store/vender-stock/?q=${encodeURIComponent(
          vendorName
        )}&start=${fromDate}&end=${toDate}`
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();

      // 🔥 Safe check
      if (Array.isArray(data)) {
        setStockData(data);
      } else if (data.results) {
        setStockData(data.results);
      } else {
        setStockData([]);
      }
    } catch (error) {
      console.error("Error fetching vendor stock:", error);
      setStockData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="RMStock">
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
                <div className="RMStock-header">
                  <div className="row flex-nowrap align-items-center">
                    <div className="col-md-3">
                      <h5 className="header-title text-start">
                        Vendor (Our) Stock Report
                      </h5>
                    </div>
                    <div className="col-md-9 text-end">
                      <Link className="vndrbtn">Item Unit Code Setting</Link>
                      <Link className="vndrbtn">Sub-Con Stock Report</Link>
                      <Link className="vndrbtn me-2">Export To Excel</Link>
                    </div>
                  </div>
                </div>

                <div className="RMStock-main mt-3">
                  <div className="container-fluid">
                    <form
                      className="row g-3 text-start"
                      onSubmit={handleSearch}
                    >
                      {/* From Date */}
                      <div className="col-md-2 col-sm-6">
                        <label className="form-label">From :</label>
                        <input
                          type="date"
                          className="form-control"
                          value={fromDate}
                          onChange={(e) => setFromDate(e.target.value)}
                        />
                      </div>

                      {/* To Date */}
                      <div className="col-md-2 col-sm-6">
                        <label className="form-label">TO :</label>
                        <input
                          type="date"
                          className="form-control"
                          value={toDate}
                          onChange={(e) => setToDate(e.target.value)}
                        />
                      </div>

                      {/* Vendor Name (with suggestions) */}
                      <div className="col-md-3 col-sm-6 position-relative">
                        <label className="form-label">Vendor Name :</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Vendor"
                          value={vendorName}
                          onChange={(e) => setVendorName(e.target.value)}
                        />
                        {vendorList.length > 0 && (
                          <ul
                            className="list-group position-absolute w-100"
                            style={{ zIndex: 1000 }}
                          >
                            {vendorList.map((v, i) => (
                              <li
                                key={i}
                                className="list-group-item list-group-item-action"
                                onClick={() => {
                                  setVendorName(v.supplier); // ✅ supplier
                                  setVendorList([]);
                                }}
                              >
                                {v.supplier}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Item Desc (Optional filter) */}
                      <div className="col-md-2 col-sm-6">
                        <label className="form-label">Item Desc</label>
                        <input
                          type="text"
                          className="form-control"
                          name="itemName"
                        />
                      </div>

                      {/* Search Button */}
                      <div className="col-md-2 col-sm-6 align-self-end mt-1">
                        <button type="submit" className="vndrbtn">
                          Challan Wise
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Table */}
                  <div className="StoreRMStock">
                    <div className="container-fluid mt-4 text-start">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Sr.no</th>
                              <th>Code</th>
                              <th>Vendor Name</th>
                              <th>Item No</th>
                              <th>Part Code</th>
                              <th>Item Description</th>
                              <th>OP Qty</th>
                              <th>Out Qty</th>
                              <th>In Qty</th>
                              <th>Challan_InQty</th>
                              <th>Balance Qty</th>
                              <th>UnitCode</th>
                              <th>View2</th>
                              <th>View</th>
                            </tr>
                          </thead>
                          <tbody>
                            {loading ? (
                              <tr>
                                <td colSpan="14" className="text-center">
                                  Loading...
                                </td>
                              </tr>
                            ) : stockData.length > 0 ? (
                              stockData.flatMap((record, recordIndex) =>
                                record.items.map((item, itemIndex) => (
                                  <tr key={`${recordIndex}-${itemIndex}`}>
                                    <td>{recordIndex + 1}</td> {/* Sr.no */}
                                    <td>{item.ItemCode}</td> {/* Code */}
                                    <td>{record.supplier}</td>{" "}
                                    {/* Vendor Name */}
                                    <td>{record.date}</td> {/* Item No */}
                                    <td>{item.ItemCode}</td> {/* Part Code */}
                                    <td>{item.ItemDescription}</td>{" "}
                                    {/* Item Description */}
                                    <td>{item.op_qty}</td> {/* OP Qty */}
                                    <td>{item.outward_qty}</td> {/* Out Qty */}
                                    <td>{item.inward_qty}</td> {/* In Qty */}
                                    <td>{item.InQtyKg}</td>{" "}
                                    {/* Challan_InQty */}
                                    <td>{item.balance_qty}</td>{" "}
                                    {/* Balance Qty */}
                                    <td>-</td> {/* UnitCode */}
                                    <td>
                                      <FaEye />
                                    </td>{" "}
                                    {/* View2 */}
                                    <td>
                                      <IoDocument />
                                    </td>{" "}
                                    {/* View */}
                                  </tr>
                                ))
                              )
                            ) : (
                              <tr>
                                <td colSpan="14" className="text-center">
                                  No Data Found
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
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

export default OurVendorStock;
