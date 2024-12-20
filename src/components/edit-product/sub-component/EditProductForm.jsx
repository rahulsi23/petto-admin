import React from "react";
import Select from "react-select";
import { ImageUploaderCodemeg } from "../../image-uploder";
const EditProductForm = () => {
  const options = [
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
    { value: "Both", label: "Both" },
  ];
  const optionsSub = [
    { value: "Puppy", label: "Puppy" },
    { value: "Adult Dog", label: "Adult Dog" },
    { value: "Kitten", label: "Kitten" },
    { value: "Cat", label: "Cat" },
  ];
  const optionsProductCategory = [
    { value: "Food", label: "Food" },
    { value: "Biscuits", label: "Biscuits" },
    { value: "Shampoo", label: "Shampoo" },
    { value: "Bowls", label: "Bowls" },
    { value: "Bone Broth", label: "Bone Broth" },
  ];

  return (
    <>
      <div className="form-main">
        <div className="form-flex">
          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">Pets Category</label>
              <div className="select-box">
                <Select options={options} />
              </div>
            </div>
          </div>
          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">Pets Sub Category</label>
              <div className="select-box">
                <Select options={optionsSub} />
              </div>
            </div>
          </div>
          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">
                Product Category<i>*</i>
              </label>
              <div className="select-box">
                <Select options={optionsProductCategory} />
              </div>
            </div>
          </div>

          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">
                Product Name<i>*</i>
              </label>
              <input
                type="text"
                name="fullname"
                className="form-control"
                placeholder="Enter product name here"
              />
            </div>
          </div>
          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">
                Quantity<i>*</i>
              </label>
              <input
                type="text"
                name="fullname"
                className="form-control"
                placeholder="Enter quantity here"
              />
            </div>
          </div>
          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">
                Weight<i>*</i>
              </label>
              <input
                type="text"
                name="fullname"
                className="form-control"
                placeholder="Enter weight here"
              />
            </div>
          </div>
          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">
                Price<i>*</i>
              </label>
              <input
                type="text"
                name="fullname"
                className="form-control"
                placeholder="Enter Price here"
              />
            </div>
          </div>
          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">
                Discount Price<i>*</i>
              </label>
              <input
                type="text"
                name="fullname"
                className="form-control"
                placeholder="Enter discount price here"
              />
            </div>
          </div>
          <div className="form-inner-flx-100">
            <div className="form-inputs">
              <label className="form-label">
                Description<i>*</i>
              </label>
          <textarea name="" placeholder="Message..." id="" cols="0" rows="4"></textarea>
          </div>
          </div>
          <div className="form-inner-flx-100">
            <div className="form-inputs">
              <label className="form-label">Image</label>
              <ImageUploaderCodemeg />
            </div>
          </div>
        </div>

        <div className="form-btn">
          <button type="button" className="btn secondary-btn">
            Cancel
          </button>
          <button type="button" className="btn primary-btn">
            Save
          </button>
        </div>
      </div>
    </>
  );
};



export default EditProductForm