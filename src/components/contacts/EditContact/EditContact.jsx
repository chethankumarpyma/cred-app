import React from "react";
import { Link } from "react-router-dom";

let EditContact = () => {
  return (
    <>
      <section className="add-contact">
        <div className="container">
          <div className="row">
            <div className="col">
              <p3 className="h3 text-primary fw-bold">Create Contact</p3>
              <p className="fst-italic">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                minima rem quasi libero temporibus officiis voluptatem porro. Ut
                corporis, id, eos nihil earum quasi quo aperiam officiis culpa
                aspernatur cum.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Photo URL"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company Name"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-2">
                  <select className="form-control">
                    <option value=""> Selet a Group</option>
                  </select>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Update"
                  />
                  <Link to={"/contacts/list"} className="btn btn-dark m-2">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img
                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                alt="user-img"
                className="contact-img"
                style={{
                  width: "200px",
                  height: "100px",
                  "border-radius": "50%",
                  // "margin-top": "0px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditContact;
