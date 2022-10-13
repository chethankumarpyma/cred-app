import React from "react";
import { Link } from "react-router-dom";

let AddContact = () => {
  return (
    <>
      <section className="add-contact">
        <div className="container">
          <div className="row">
            <div className="col">
              <p3 className="h3 text-success fw-bold">Create Contact</p3>
              <p className="fst-italic">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                minima rem quasi libero temporibus officiis voluptatem porro. Ut
                corporis, id, eos nihil earum quasi quo aperiam officiis culpa
                aspernatur cum.
              </p>
            </div>
          </div>
          <div className="row">
              <div className="col-md-4">
                  <form>
                      <div className="mb-2">
                          <input type="text" className="form-control" placeholder="Name"/>
                      </div>
                      <div className="mb-2">
                          <input type="text" className="form-control" placeholder="Photo URL"/>
                      </div>
                      <div className="mb-2">
                          <input type="number" className="form-control" placeholder="Mobile"/>
                      </div>
                      <div className="mb-2">
                          <input type="email" className="form-control" placeholder="Email"/>
                      </div>
                      <div className="mb-2">
                          <input type="text" className="form-control" placeholder="Company Name"/>
                      </div>
                      <div className="mb-2">
                          <input type="text" className="form-control" placeholder="Title"/>
                      </div>
                      <div className="mb-2">
                          <select className="form-control">
                              <option value=""> Selet a Group</option>
                          </select>
                          <input type="submit" className="btn btn-success" value="Create"/>
                          <Link to={'/contacts/list'} className="btn btn-dark m-2" >Cancel</Link>
                      </div>
                  </form>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddContact;
