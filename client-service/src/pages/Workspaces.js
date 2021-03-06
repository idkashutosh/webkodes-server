import React, { useContext, useEffect } from "react";
import { LoadingContext } from "../store/Store";
import { Link } from "react-router-dom";

function Workspaces() {
  const [, setLoading] = useContext(LoadingContext);
  useEffect(() => {
    setLoading(false);
  });

  return (
    <div className="page-content">
      <div className="container-fluid">

      <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body">
              <div className="row">
                  <div className="col-xl-9">
                  <h4 className="card-title">Your Workspaces</h4>
                <p className="card-subtitle mb-4 font-size-13">
                  All your coding workspaces are listed here
                </p>
                  </div>
                  <div className="col-xl-3">
                    <div className="float-right d-none d-md-block">
                      <Link
                        to="/addworkspace"
                        className="btn btn-secondary active waves-effect waves-light"
                        onClick={() => setLoading(true)}
                      >
                        <i className="mdi mdi-hospital mr-2"></i> New Workspace
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-3">
                    <div className="card card-body workspace">
                      <a href="/workspaces/egnite" className="text-body">
                      <div className="row">
                        <div className="col-12">
                          <h3 className=" card-title font-18 mt-0">
                            Project Egnite
                          </h3>
                        </div>

                        
                      </div>
                      <p className="card-text">
                        This workspace is for the developers working on frontend
                        of egnite project.
                      </p>
                      <div>
                        <p>
                          <i className="mdi mdi-key-outline text-secondary mr-2"></i>
                          Password : 12345
                        </p>
                      </div>
                      </a>
                      
                      <div className="row mb-2">
                        <div className="col-xl-12">
                          <button className="btn btn-secondary active btn-block waves-effect waves-light">
                            <span>Open Workspace</span>{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card card-body workspace">
                      <a href="/workspaces/egnite" className="text-body">
                      <div className="row">
                        <div className="col-12">
                          <h3 className=" card-title font-18 mt-0">
                            Project Egnite
                          </h3>
                        </div>

                        
                      </div>
                      <p className="card-text">
                        This workspace is for the developers working on frontend
                        of egnite project.
                      </p>
                      <div>
                        <p>
                          <i className="mdi mdi-key-outline text-secondary mr-2"></i>
                          Password : 12345
                        </p>
                      </div>
                      </a>
                      
                      <div className="row mb-2">
                        <div className="col-xl-12">
                          <button className="btn btn-secondary active btn-block waves-effect waves-light">
                            <span>Open Workspace</span>{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  


                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-xl-9">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-9">
                    <h3 className="card-title font-16 mt-0">
                      CODING WORKSPACES
                    </h3>
                  </div>
                  <div className="col-xl-3">
                    <div className="float-right d-none d-md-block">
                      <Link
                        to="/addworkspace"
                        className="btn btn-secondary active waves-effect waves-light"
                        onClick={() => setLoading(true)}
                      >
                        <i className="mdi mdi-hospital mr-2"></i> New Workspace
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <p>
                    Coding workspace is a real time online in browser code
                    editor that allows you to work on your code with ease and
                    from anywhere you want.
                  </p>
                </div>
              </div>
              <img
                className="card-img-bottom img-fluid"
                src="assets/images/vs.png"
                alt="Card cap"
              ></img>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="row">
              <div className="col-xl-12">
                <div className="card m-b-20">
                  <div className="card-body">
                    <h4 className="card-title">Analytics</h4>

                    <div className="text-center">
                      <div className="clearfix"></div>
                      <ul className="list-inline mt-4 row mb-0">
                        <li className="col-4">
                          <h5>15</h5>
                          <p className="mb-0">Created</p>
                        </li>
                        <li className="col-4">
                          <h5>6</h5>
                          <p className="mb-0">Running</p>
                        </li>
                        <li className="col-4">
                          <h5>2</h5>
                          <p className="mb-0">Stopped</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Storage Used</h4>
                    <p className="card-subtitle mb-5">
                      Storage usage by all your workspaces
                    </p>
                    <div className="text-center">
                      <div className="clearfix"></div>
                      <ul className="list-inline mt-4 row mb-0">
                        <li className="col-6">
                          <h5>15 GB</h5>
                          <p className="mb-0">Running Workspaces</p>
                        </li>
                        <li className="col-6">
                          <h5>6 GB</h5>
                          <p className="mb-0">Stopped Workspaces</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Other Details</h4>
                    <p className="card-subtitle">
                      We use codeserver image for creating VS Code instances on
                      the web.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>

      </div>
    </div>
  );
}

export default Workspaces;
