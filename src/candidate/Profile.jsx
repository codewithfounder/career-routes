import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../config/api";

import Sidebar from "./sidebar/Sidebar";

function Profile() {
    const { id } = useParams();

    const [user, setUser] = useState(null);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [loading, setLoading] = useState(false);

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");

    useEffect(() => {
        fetch(`${BASE_URL}/auth/profile/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.status) {
                    setUser(data.user);
                    setSelectedCountry(data.user.Country || "");
                    setSelectedState(data.user.State || "");
                }
            })
            .catch((error) => {
                console.log("Profile error ", error);
            });
    }, [id]);

    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries/positions")
            .then((res) => res.json())
            .then((data) => {
                if (!data.error) {
                    setCountries(data.data);
                }
            })
            .catch((error) => {
                console.log("Country error:", error);
            });
    }, []);

    useEffect(() => {
        if (!selectedCountry) return;

        fetch("https://countriesnow.space/api/v0.1/countries/states", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ country: selectedCountry }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.error) {
                    setStates(data.data.states || []);
                }
            })
            .catch((error) => {
                console.log("State error:", error);
            });
    }, [selectedCountry]);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await fetch(`${BASE_URL}/auth/update_profile/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const data = await response.json();

            if (data.status) {
                alert(data.message || "Profile updated successfully");
            } else {
                alert(data.message || "Profile update failed");
            }
        } catch (error) {
            console.log("Update profile error:", error);
            alert("Server error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetch(`${BASE_URL}/auth/industries`)
            .then((res) => res.json())
            .then((data) => {
                if (data.status) {
                    setIndustries(data.data);
                }
            })
            .catch((error) => {
                console.log("Industry error:", error);
            });

        fetch(`${BASE_URL}/auth/departments`)
            .then((res) => res.json())
            .then((data) => {
                if (data.status) {
                    setDepartments(data.data);
                }
            })
            .catch((error) => {
                console.log("Department error:", error);
            });
    }, []);
    return (
        <>
            <div className="page-content bg-white">
                <div className="content-block">
                    <div className="section-full bg-white browse-job p-t50 p-b20">
                        <div className="container">
                            <div className="row">
                                <Sidebar />

                                <div className="col-xl-9 col-lg-8 m-b30">
                                    <div className="job-bx job-profile">
                                        <div className="job-bx-title clearfix">
                                            <h5 className="font-weight-700 float-start text-uppercase">
                                                Basic Information
                                            </h5>

                                            <a
                                                href="/"
                                                className="site-button right-arrow button-sm float-end"
                                            >
                                                Back
                                            </a>
                                        </div>

                                        {!user ? (
                                            <p>Loading profile...</p>
                                        ) : (
                                            <form onSubmit={handleUpdateProfile}>
                                                <div className="row m-b30">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Your Name:</label>
                                                            <input
                                                                type="text"
                                                                name="Full_name"
                                                                className="form-control"
                                                                value={user.Full_name || ""}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Designation:</label>
                                                            <input
                                                                type="text"
                                                                name="Designation"
                                                                value={user.Designation || ""}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Designation"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Gender:</label>
                                                            <select name="Gender" value={user.Gender || ""} onChange={handleChange} className="form-control">
                                                                <option value="">Select Gender</option>
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                                <option value="Other">Other</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Date of Birth:</label>
                                                            <input
                                                                type="date"
                                                                name="Dob"
                                                                value={user.Dob || ""}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="job-bx-title clearfix">
                                                    <h5 className="font-weight-700 float-start text-uppercase">
                                                        Contact Information
                                                    </h5>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Phone:</label>
                                                            <input
                                                                type="text"
                                                                name="Phone"
                                                                value={user.Phone || ""}
                                                                className="form-control"
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Email Address:</label>
                                                            <input
                                                                type="text"
                                                                name="Email"
                                                                value={user.Email || ""}
                                                                className="form-control"
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Country:</label>
                                                            <select
                                                                className="form-control"
                                                                name="Country"
                                                                value={selectedCountry}
                                                                onChange={(e) => {
                                                                    setSelectedCountry(e.target.value);
                                                                    setSelectedState("");

                                                                    setUser({
                                                                        ...user,
                                                                        Country: e.target.value,
                                                                        State: "",
                                                                    });
                                                                }}
                                                            >
                                                                <option value="">Select Country</option>
                                                                {countries.map((country, index) => (
                                                                    <option key={index} value={country.name}>
                                                                        {country.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>State:</label>
                                                            <select
                                                                className="form-control"
                                                                name="State"
                                                                value={selectedState}
                                                                onChange={(e) => {
                                                                    setSelectedState(e.target.value);

                                                                    setUser({
                                                                        ...user,
                                                                        State: e.target.value,
                                                                    });
                                                                }}
                                                            >
                                                                <option value="">Select State</option>
                                                                {states.map((state, index) => (
                                                                    <option key={index} value={state.name}>
                                                                        {state.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>City:</label>
                                                            <input
                                                                type="text"
                                                                name="City"
                                                                value={user.City || ""}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter City"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Postcode:</label>
                                                            <input
                                                                type="text"
                                                                name="Postcode"
                                                                value={user.Postcode || ""}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter Postcode"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="form-group">
                                                            <label>Full Address:</label>
                                                            <input
                                                                type="text"
                                                                name="Address"
                                                                value={user.Address || ""}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter Your Current Address"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="job-bx-title clearfix">
                                                    <h5 className="font-weight-700 float-start text-uppercase">
                                                        Professional Information
                                                    </h5>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Designation:</label>
                                                            <input
                                                                type="text"
                                                                name="Designation"
                                                                value={user.Designation || ""}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Designation"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Current Company:</label>
                                                            <input
                                                                type="text"
                                                                name="Current_company"
                                                                value={user.Current_company || ""}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Current Company"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Total Experience:</label>
                                                            <input
                                                                type="text"
                                                                name="Experience"
                                                                value={user.Experience || ""}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter Total Experience"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Industry:</label>
                                                            <select
                                                                name="Industry"
                                                                value={user.Industry || ""}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                required
                                                            >
                                                                <option value="">Select Industry</option>
                                                                {industries.map((item) => (
                                                                    <option key={item.id} value={item.name}>
                                                                        {item.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Department:</label>
                                                            <input
                                                                type="text"
                                                                name="Department"
                                                                value={user.Department || ""}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Skills:</label>
                                                            <input
                                                                type="text"
                                                                name="Skills"
                                                                value={user.Skills || ""}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Current Salary CTC:</label>
                                                            <input
                                                                type="text"
                                                                name="Current_salary"
                                                                value={user.Current_salary || ""}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter Your Current Salary"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Expected Salary CTC:</label>
                                                            <input
                                                                type="text"
                                                                name="Expected_salary"
                                                                value={user.Expected_salary || ""}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter Your Expected Salary"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="job-bx-title clearfix">
                                                    <h5 className="font-weight-700 float-start text-uppercase">
                                                        Academic Information
                                                    </h5>
                                                </div>

                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>Highest Qualification:</label>
                                                        <select name="Highest_qualification" value={user.Highest_qualification || ""} onChange={handleChange} className="form-control" required>
                                                            <option value="">Select Qualification</option>
                                                            <option value="10th">10th</option>
                                                            <option value="12th">12th</option>
                                                            <option value="Graduation">Graduation</option>
                                                            <option value="Masters">Masters</option>
                                                            <option value="Doctoral">Doctoral</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    className="site-button m-b30"
                                                >
                                                    {loading ? "Saving..." : "Save Setting"}
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;