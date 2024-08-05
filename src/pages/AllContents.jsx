import BlogData from "./BlogData.json";
import { useState } from "react";

const AllContents = () => {
  //Retrieved Data from BlogData.JSON to show all contents
  let arr = [];
  BlogData.forEach((val) => {
    const topic = Object.values(val);
    topic.forEach((val) => {
      arr.push(val);
    });
  });
  //Use state for arr[] which has values of all contents 
  const [data] = useState(arr);
  return (
    <>
      <div className="container">
        <div className="row flex-sm-row">
          {/* Using map method fetched data Dynamically */}
          {data.map((head) =>
            head.map((inputs) => (
              <div
                key={inputs.id}
                className="flex-md-column flex-sm-row g-4 m-2 card"
                style={{ width: "18rem" }}
              >
                <img
                  src={inputs.img}
                  style={{ objectFit: "contain" }}
                  className="card-img-top"
                  alt={inputs.topic}
                />
                <div className="card-body">
                  <h5 className="card-title">{inputs.topic}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <span className="fw-light">By </span>
                    {inputs.created}
                  </li>
                </ul>
                <div className="card-body row">
                  <div className="col fw-light">{inputs.date}</div>
                  <div className="col fw-light">{inputs.Minread}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default AllContents;