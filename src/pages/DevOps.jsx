import BlogData from "./BlogData.json";
import { useState } from "react";
const DevOps = () => {
  const [data] = useState(BlogData.map((val) => val.DevOps));
  return (
    <>
      <div className="container">
        <div className="row flex-sm-row">
          {data.map((blog) =>
            blog.map((Dev) => (
              <div
                key={Dev.id}
                className="flex-md-column flex-sm-row g-4 m-2 card"
                style={{ width: "18rem" }}
              >
                <img
                  src={Dev.img}
                  style={{ objectFit: "contain" }}
                  className="card-img-top"
                  alt={Dev.topic}
                />
                <div className="card-body">
                  <h5 className="card-title">{Dev.topic}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <span className="fw-light">By</span> {Dev.created}
                  </li>
                </ul>
                <div className="card-body row">
                  <div className="col fw-light">{Dev.date}</div>
                  <div className="col fw-light">{Dev.Minread}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default DevOps;