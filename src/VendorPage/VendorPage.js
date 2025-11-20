import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../NavBar/NavBar";
import SideNav from "../SideNav/SideNav";
import "./VendorPage.css";
import General from "./General";
import Data2 from "./Data2";
import LogoImage from "./logoImage";
import Invoice from "./Invoice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VendorPage = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [formData, setFormData] = useState({
    company_name: "",
    short_name: "",
    email: "",
    password: "",
    password2:"",
    city: "",
    country:"India",
    address: "",
    website: "",
    contact_no: "",
    footer_message: "",
    director_name: "",
    pin_code: "",
    state: "",
    state_no_numeric: "",  
    VAT_TIN: "",
    CST_TIN: "",
    C_Excise_Range: "",
    Commissionerate: "",
    C_Excise_Reg_No: "",
    PLA_No: "",
    Service_Tax_No: "",
    Import_Export_Code: "",
    ARN_No: "",
    Export_House_No: "",
    Udyog_Aadhar_No: "",
    Vat_Tin_Date: "",
    Cst_Tin_Date:"",
    Subject_To: "",
    Division: "",
    GST_No: "",
    ECC_No: "",
    PAN_No: "",
    CIN_NO: "",
    Import_Export_Date: "",
    ARN_Date: "",
    login_logo: null,
    home_logo: null,
    company_logo: null,
    Tuv_logo: null,
  });

  console.log(formData, "formmdata");
  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  const handleFormDataChange = (newData) => {
    setFormData(newData);
  };

  const handleNextButtonClick = () => {
    console.log("Next button clicked");
    console.log("Active tab before update:", activeTab);
    setActiveTab("data2");
    console.log("Active tab after update:", "data2");
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextButtonClick1 = () => {
    setActiveTab("logoImage");
  };

  const handleLogoSubmit = async () => {
    if (!validate()) {
      return; // Stop submission if validation fails
    }

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        formDataToSend.append(key, value);
      }
    });

    // Debugging: log formData contents
    for (let pair of formDataToSend.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      const response = await axios.post(
        "api/vendor/register/",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("API response:", response.data);
      toast.success("Data saved successfully!");
    } catch (error) {
      console.error("API error:", error.response?.data || error.message);
      toast.error("Failed to save data. Please try again.");
    }
  };

  return (
    <>
      <div className="Vendor">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="VendorPage">
                <NavBar toggleSideNav={toggleSideNav} />
                <SideNav
                  sideNavOpen={sideNavOpen}
                  toggleSideNav={toggleSideNav}
                />
                <main
                  className={`main-content ${sideNavOpen ? "shifted" : ""}`}
                >
                  <div className="Vendorpage1">
                    <div className="container-fluid">
                    <div className="Vender-header mb-4 text-start">
                    <div className="row align-items-center">
                     
                      <div className="col-md-8 text-start">
                      <button className="btn" type="button">
                              Company Setup
                            </button>
                            <button className="btn" type="button">
                              Last Updated By Admin
                            </button>
                            <button className="btn" type="button">
                              On D1 12/07/2022 2:57 PM
                            </button>
                      </div>
                     
                      <div className="col-md-4 col-12 text-end">
                            <button className="btn">General Setting</button>
                          </div>
                     
                    </div>
                  </div>
                  
                    </div>
                    <div className="VendorPageMain">
                      <div className="container-fluid text-start" id="shivi">
                        <div className="row">
                          <ul
                            className="nav nav-pills mb-3"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className={`nav-link ${
                                  activeTab === "general" ? "active" : ""
                                }`}
                                id="pills-general-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-general"
                                type="button"
                                role="tab"
                                aria-controls="pills-general"
                                aria-selected={activeTab === "general"}
                                onClick={() => setActiveTab("general")}
                              >
                                General
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className={`nav-link ${
                                  activeTab === "data2" ? "active" : ""
                                }`}
                                id="pills-data2-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-data2"
                                type="button"
                                role="tab"
                                aria-controls="pills-data2"
                                aria-selected={activeTab === "data2"}
                                onClick={() => setActiveTab("data2")}
                              >
                                Data-2
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className={`nav-link ${
                                  activeTab === "logoImage" ? "active" : ""
                                }`}
                                id="pills-logoImage-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-logoImage"
                                type="button"
                                role="tab"
                                aria-controls="pills-logoImage"
                                aria-selected={activeTab === "logoImage"}
                                onClick={() => setActiveTab("logoImage")}
                              >
                                Logo/Images
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className={`nav-link ${
                                  activeTab === "eInvoice" ? "active" : ""
                                }`}
                                id="pills-Invoice-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-Invoice"
                                type="button"
                                role="tab"
                                aria-controls="pills-Invoice"
                                aria-selected={activeTab === "eInvoice"}
                                onClick={() => setActiveTab("eInvoice")}
                              >
                                E-Invoice
                              </button>
                            </li>
                          </ul>
                          <div className="tab-content" id="pills-tabContent">
                            <div
                              className={`tab-pane fade ${
                                activeTab === "general" ? "show active" : ""
                              }`}
                              id="pills-general"
                              role="tabpanel"
                              aria-labelledby="pills-general-tab"
                            >
                              <General
                                formData={formData}
                                onFormDataChange={handleFormDataChange}
                                onNextButtonClick={handleNextButtonClick}
                                errors={errors}
                              />
                            </div>
                            <div
                               className={`tab-pane fade ${activeTab === "data2" ? "show active" : ""}`}
                               id="pills-data2"
                               role="tabpanel"
                               aria-labelledby="pills-data2-tab"
                            >
                              <Data2
                                formData={formData}
                                handleChange={handleChange}
                                handleNextButtonClick1={() =>
                                  handleNextButtonClick1()
                                }
                              />
                            </div>
                            <div
                              className={`tab-pane fade ${
                                activeTab === "logoImage" ? "show active" : ""
                              }`}
                              id="pills-logoImage"
                              role="tabpanel"
                              aria-labelledby="pills-logoImage-tab"
                            >
                              <LogoImage
                                formData={formData}
                                onFormDataChange={handleFormDataChange}
                                onSubmit={handleLogoSubmit}
                              />
                            </div>
                            <div
                              className={`tab-pane fade ${
                                activeTab === "Invoice" ? "show active" : ""
                              }`}
                              id="pills-Invoice"
                              role="tabpanel"
                              aria-labelledby="pills-Invoice-tab"
                            >
                              {/* invoice */}
                              <Invoice />
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
                <ToastContainer /> {/* Add ToastContainer here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorPage;
