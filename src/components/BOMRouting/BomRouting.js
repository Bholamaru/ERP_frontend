import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import "./BomRouting.css";
import { Link } from "react-router-dom";

const BomRouting = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const [bomData, setBomData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [selectedItemGroup, setSelectedItemGroup] = useState("ALL");
  const [expandedRows, setExpandedRows] = useState(new Set());

  // Mock data based on your structure for demonstration

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleRowExpansion = (partNumber) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(partNumber)) {
      newExpandedRows.delete(partNumber);
    } else {
      newExpandedRows.add(partNumber);
    }
    setExpandedRows(newExpandedRows);
  };

  // Fetch BOM data from API
  const fetchBomData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Using mock data for demonstration - replace with your actual API call
      // setBomData(mockBomData);

      // Uncomment and modify this for your actual API:
      const response = await fetch("http://127.0.0.1:8000/All_Masters/api/bom-items/");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setBomData(data);
    } catch (err) {
      setError(`Failed to fetch BOM data: ${err.message}`);
      console.error("Error fetching BOM data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBomData();
  }, []);

  // Filter data based on search and filters
  const getFilteredData = () => {
    let filteredData = { ...bomData };

    // Apply search filter
    if (searchTerm) {
      filteredData = Object.fromEntries(
        Object.entries(filteredData).filter(([partNumber, data]) =>
          partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
          data.bom_items.some(item =>
            item.PartCode?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.BomPartDesc?.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      );
    }

    // Apply BOM part type filter
    if (selectedFilter !== "ALL") {
      filteredData = Object.fromEntries(
        Object.entries(filteredData).map(([partNumber, data]) => [
          partNumber,
          {
            ...data,
            bom_items: data.bom_items.filter(item =>
              item.BOMPartType === selectedFilter
            )
          }
        ]).filter(([, data]) => data.bom_items.length > 0)
      );
    }

    return filteredData;
  };

  // Calculate total counts
  const getTotalCounts = () => {
    const filteredData = getFilteredData();
    const allItems = Object.values(filteredData).flatMap(data => data.bom_items);
    const partNumbers = Object.keys(filteredData);

    return {
      totalItems: allItems.length,
      totalPartNumbers: partNumbers.length,
    };
  };

  const { totalItems, totalPartNumbers } = getTotalCounts();

  const renderDetailRows = (bomItems, partNumber) => {
    return bomItems.map((item, index) => (
      <tr key={`${partNumber}-${item.id}`} className="detail-row bg-light">
        <td className="ps-4">└─ {index + 1}</td>
        <td>{item.PartCode || "-"}</td>
        <td>{item.item || "-"}</td>
        <td>{item.BomPartCode || "-"}</td>
        <td>{item.BomPartDesc || "-"}</td>
        <td>{item.OPNo || "-"}</td>
        <td>
          <span className={`badge ${item.BOMPartType === 'RM' ? 'bg-primary' :
            item.BOMPartType === 'COM' ? 'bg-success' :
              item.BOMPartType === 'Casting' ? 'bg-warning' : 'bg-secondary'
            }`}>
            {item.BOMPartType || "-"}
          </span>
        </td>
        <td>
          <span className={`badge ${item.QC === 'Yes' || item.QC === 'y' ? 'bg-success' :
            item.QC === 'N' ? 'bg-danger' : 'bg-secondary'
            }`}>
            {item.QC || "-"}
          </span>
        </td>
        <td>
          <small>
            Qty: {item.QtyKg || "-"}<br />
            Rate: {item.WipRate || "-"}
          </small>
        </td>
        <td>
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => window.open(`http://127.0.0.1:8000/All_Masters/api/bom_pdf/${item.item}`, "_blank")}
          >
            <i className="fas fa-eye"></i>
          </button>
        </td>
      </tr>
    ));
  };

  const renderTableRows = () => {
    if (loading) {
      return (
        <tr>
          <td colSpan="10" className="text-center py-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </td>
        </tr>
      );
    }

    if (error) {
      return (
        <tr>
          <td colSpan="10" className="text-center text-danger py-4">
            <i className="fas fa-exclamation-triangle me-2"></i>
            {error}
          </td>
        </tr>
      );
    }

    const filteredData = getFilteredData();

    if (Object.keys(filteredData).length === 0) {
      return (
        <tr>
          <td colSpan="10" className="text-center py-4">
            <i className="fas fa-search me-2"></i>
            No data available
          </td>
        </tr>
      );
    }

    let serialNumber = 1;
    const rows = [];

    Object.entries(filteredData).forEach(([partNumber, data]) => {
      const bomItems = data.bom_items;
      const isExpanded = expandedRows.has(partNumber);

      // Get summary data
      const uniquePartCodes = [...new Set(bomItems.map(item => item.PartCode).filter(Boolean))];
      const uniqueOperations = [...new Set(bomItems.map(item => item.OPNo).filter(Boolean))];
      const uniqueBomTypes = [...new Set(bomItems.map(item => item.BOMPartType).filter(Boolean))];
      const qcStatuses = [...new Set(bomItems.map(item => item.QC).filter(Boolean))];

      // Main row
      rows.push(
        <tr key={partNumber} className="main-row">
          <td>
            <button
              className="btn btn-sm btn-link p-0 me-2"
              onClick={() => toggleRowExpansion(partNumber)}
            >
              <i className={`fas fa-chevron-${isExpanded ? 'down' : 'right'}`}></i>
            </button>
            {serialNumber++}
          </td>
          <td>
            <strong className="text-primary">{partNumber}</strong>
            <br />
            <small className="text-muted">Items: {bomItems.length}</small>
          </td>
          <td>{data.item_id || "-"}</td>
          <td>
            <small>{uniquePartCodes.slice(0, 2).join(", ")}
              {uniquePartCodes.length > 2 && ` +${uniquePartCodes.length - 2} more`}</small>
          </td>
          <td>-</td>
          <td>
            <small>{uniqueOperations.slice(0, 2).join(", ")}
              {uniqueOperations.length > 2 && ` +${uniqueOperations.length - 2} more`}</small>
          </td>
          <td>
            {uniqueBomTypes.map(type => (
              <span key={type} className={`badge me-1 ${type === 'RM' ? 'bg-primary' :
                type === 'COM' ? 'bg-success' :
                  type === 'Casting' ? 'bg-warning' : 'bg-secondary'
                }`}>
                {type}
              </span>
            ))}
          </td>
          <td>
            {qcStatuses.map(qc => (
              <span key={qc} className={`badge me-1 ${qc === 'Yes' || qc === 'y' ? 'bg-success' :
                qc === 'N' ? 'bg-danger' : 'bg-secondary'
                }`}>
                {qc}
              </span>
            ))}
          </td>
          <td>
            <small className="text-muted">
              Total: {bomItems.reduce((sum, item) => sum + (parseFloat(item.QtyKg) || 0), 0).toFixed(2)}
            </small>
          </td>
          <td>
            <button
              onClick={() => window.open(`http://127.0.0.1:8000/All_Masters/api/bom_pdf/${data.item_id}`, "_blank")}
              className="btn btn-sm btn-primary me-1"
            >
              <i className="fas fa-file-pdf"></i>
            </button>
            <button
              onClick={() => toggleRowExpansion(partNumber)}
              className="btn btn-sm btn-outline-secondary"
            >
              <i className="fas fa-list"></i>
            </button>
          </td>
        </tr>
      );

      // Detail rows (expanded)
      if (isExpanded) {
        rows.push(...renderDetailRows(bomItems, partNumber));
      }
    });

    return rows;
  };

  return (
        <div className="CommodityMaster">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav}  />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="CommodityMaster1">
          {/* Header */}
          <div className="BomRouting">
            <div className="container-fluid">
              <div className="BomRoutingheading mb-2 text-start">
                      <div className="row align-items-center">
                      <div className="col-md-2">
                        <h5 className="header-title">
                            BOM And Routing List
                          </h5>
                        </div>
                        <div className="col-md-1 col-form-label">
                          <label htmlFor="TotalBom">Total BOM:</label>
                        </div>

                        <div className="col-sm-9 text-end">
                         <button className="vndrbtn"
                          // onClick={() => setActiveTable('FG')}
                          >
                            FG:548
                          </button>
                          <button className="vndrbtn"
                          //  onClick={() => setActiveTable('SFG')}
                            >
                            SFG:1
                          </button>
                          <button className="vndrbtn"
                          //  onClick={() => setActiveTable('RM')}
                            >
                            RM:44
                          </button>
                          <button className="vndrbtn"
                          //  onClick={() => setActiveTable('NPD')}
                            >
                            NPD:0
                          </button>
                          <button className="vndrbtn"
                          //  onClick={() => setActiveTable('Total')}
                            >
                            Total:593
                          </button>
                          <button className="vndrbtn"
                          //  onClick={() => setActiveTable('UnAuth')}
                            >
                            Un-Auth:2
                          </button>
                          <button className="vndrbtn"
                          //  onClick={() => setActiveTable('Auth')}
                           >
                            Auth:591
                          </button>

                          <div style={{ position: 'relative', display: 'inline-block', marginLeft: '3px' }}>
                            <button
                              style={{ padding: '5px' }}
                              className="BOMRouting vndrbtn"
                              onClick={toggleDropdown}
                            >
                              BOM:Report ▼
                            </button>

                            {dropdownOpen && (
                              <ul
                                className="dropdown-menu show"
                                style={{
                                  position: 'absolute',
                                  top: '100%',
                                  left: 0,
                                  zIndex: 1000,
                                  display: 'block',
                                  minWidth: '10rem',
                                  padding: '0.5rem 0',
                                  margin: '0.125rem 0 0',
                                  fontSize: '12px',
                                  color: '#212529',
                                  textAlign: 'left',
                                  listStyle: 'none',
                                  backgroundColor: '#fff',
                                  backgroundClip: 'padding-box',
                                }}
                              >
                                <li>
                                  <Link className="vndrbtn dropdown-item" to={"/UploadWIPvalue"}>
                                    Upload WIP Value
                                  </Link>
                                </li>
                                <li>
                                  <Link className="vndrbtn dropdown-item" to={"/UploadOperationSpeci"}>
                                    Upload Operation Specification
                                  </Link>
                                </li>
                                <li>
                                  <Link className="vndrbtn dropdown-item" to={"/ManualBOMWorking"}>
                                    Manual BOM Working Sheet
                                  </Link>
                                </li>
                                <li>
                                  <Link className="vndrbtn dropdown-item" to={"/BOMItemTrace"} >
                                    BOM Item Traceability
                                  </Link>
                                </li>
                                <li>
                                  <Link className="vndrbtn dropdown-item"  to={"/"}>
                                    BOM Value Report
                                  </Link>
                                </li>
                                <li>
                                  <Link className="vndrbtn dropdown-item" to={"/"}>
                                    BOM Tree View
                                  </Link>
                                </li>
                              </ul>
                            )}
                          </div>
                          
                          <Link to={"/bill-material"} className="vndrbtn" >  New / Modify BOM </Link>
                         
                          <Link className="vndrbtn"  to={"/BOMQuery"}>BOM:Query</Link>
                        </div>

                      </div>
                    </div>
            </div>
          </div>


          {/* Controls */}
          
          <div className="BomRouting-Main">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  >
                    <option value="ALL">All Types</option>
                    <option value="RM">Raw Material</option>
                    <option value="COM">Component</option>
                    <option value="Casting">Casting</option>
                  </select>
                </div>
                <div className="col-md-3 mt-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search part numbers, codes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={selectedItemGroup}
                    onChange={(e) => setSelectedItemGroup(e.target.value)}
                  >
                    <option value="ALL">All Groups</option>
                    <option value="BEARING">BEARING</option>
                    <option value="BELTS">BELTS</option>
                    <option value="CAMS">CAMS</option>
                  </select>
                </div>
                <div className="col-md-2 mt-1">
                  <button
                    className="vndrbtn btn-primary w-100"
                    onClick={fetchBomData}
                    disabled={loading}
                  >
                    <i className="fas fa-sync-alt me-1"></i>
                    Refresh
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-end">
              <div className="btn-group">
                <button className="vndrbtn btn-outline-secondary btn-sm mt-1">
                  <i className="fas fa-file-excel me-1"></i>
                  Export BOM
                </button>
                <button className="vndrbtn btn-outline-secondary btn-sm mt-1">
                  <i className="fas fa-file-excel me-1"></i>
                  Export Routing
                </button>
              </div>
            </div>
          </div>
          </div>

          {/* Table */}
          <div className="BomRoutingTable mt-2">
          <div className="">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th width="80">Sr</th>
                      <th>Part Number</th>
                      <th width="100">Item ID</th>
                      <th>Part Codes</th>
                      <th>Description</th>
                      <th>Operations</th>
                      <th>BOM Types</th>
                      <th>QC Status</th>
                      <th>Summary</th>
                      <th width="120">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderTableRows()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </div>

          {/* Footer */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="text-muted">
              <i className="fas fa-info-circle me-1"></i>
              Total Records: <strong className="text-primary">{totalItems}</strong>
            </div>
            <div className="text-muted">
              Format: <strong className="text-primary">PDF</strong>
            </div>
          </div>
              </div>
              </main>
            </div>
          </div>
        </div>
      </div>
   
    
      <style jsx>{`
        .detail-row {
          font-size: 0.9em;
        }
        .main-row:hover {
          background-color: #f8f9fa;
        }
        .badge {
          font-size: 0.75em;
        }
        .btn-link {
          color: #6c757d;
          text-decoration: none;
        }
        .btn-link:hover {
          color: #495057;
        }
      `}</style>
       </div>
  );
};

export default BomRouting;