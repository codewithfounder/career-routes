function FilterSearch() {
    return (
        <>
            <div className="section-full browse-job-find">
                <div className="container">
                    <div className="find-job-bx">
                        <form className="dezPlaceAni">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="form-group">
                                        <label>Job Title, Keywords, or Phrase</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="" />
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i className="fa fa-search"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="form-group">
                                        <label>City, State or ZIP</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="" />
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="form-group">
                                        <div className="dropdown bootstrap-select"><select className="">
                                            <option>Select Sector</option>
                                            <option>Construction</option>
                                            <option>Corodinator</option>
                                            <option>Employer</option>
                                            <option>Financial Career</option>
                                            <option>Information Technology</option>
                                            <option>Marketing</option>
                                            <option>Quality check</option>
                                            <option>Real Estate</option>
                                            <option>Sales</option>
                                            <option>Supporting</option>
                                            <option>Teaching</option>
                                        </select><button type="button" tabIndex="-1" className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Select Sector"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Select Sector</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabIndex="-1"><ul className="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <button type="submit" className="site-button btn-block">Find Job</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterSearch;