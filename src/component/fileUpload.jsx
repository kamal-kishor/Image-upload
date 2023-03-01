import React from "react";

export default function fileUpload() {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 ">
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
            <label for="formFileMultiple" className="form-label">
              Multiple files input example
            </label>
          </div>

          <div className="col-lg-6"> Kamla</div>
        </div>
      </div>
    </div>
  );
}
