import { Link } from "react-router-dom";
function FilterByMonth() {
    return (
        <>
            <div className="job-bx-title clearfix">
                <h5 className="font-weight-700 float-start text-uppercase">2269 Jobs Found</h5>
                <div className="float-end">
                    <span className="select-title">Sort by freshness</span>
                    <div className="dropdown bootstrap-select dropup"><select className="" tabIndex="null">
                        <option>Last 2 Months</option>
                        <option>Last Months</option>
                        <option>Last Weeks</option>
                        <option>Last 3 Days</option>
                    </select>
                        <button type="button" tabIndex="-1" className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Last 2 Months">
                            <div className="filter-option">
                                <div className="filter-option-inner">
                                    <div className="filter-option-inner-inner">Last 2 Months</div>
                                </div>
                            </div>
                        </button>
                        <div className="dropdown-menu" style={{ maxHeight: "393.667px", overflow: "hidden", minHeight: "124px" }}>
                            <div className="inner show" role="listbox" id="bs-select-2" tabIndex="-1" aria-activedescendant="bs-select-2-0" style={{ maxHeight: "373.667px", overflowY: "auto", minHeight: "104px" }}>
                                <ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: "0px", marginBottom: "0px" }}>
                                    <li className="selected active">
                                        <Link role="option" className="dropdown-item active selected" id="bs-select-2-0" tabIndex="0" aria-setsize="4" aria-posinset="1" aria-selected="true">
                                            <span className="text">Last 2 Months</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link role="option" className="dropdown-item" id="bs-select-2-1" tabIndex="0">
                                            <span className="text">Last Months</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link role="option" className="dropdown-item" id="bs-select-2-2" tabIndex="0">
                                            <span className="text">Last Weeks</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link role="option" className="dropdown-item" id="bs-select-2-3" tabIndex="0">
                                            <span className="text">Last 3 Days</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterByMonth;