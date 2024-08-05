import BlogData from "./BlogData.json";
import { useState } from "react";
const AiAndMl = () => {
  const [data] = useState(BlogData.map((val) => val.AIandMl));
  return (
    <>
      <div className="container">
        <div className="row flex-sm-row">
          {data.map((blog) =>
            blog.map((ai) => (
              <div
                key={ai.id}
                className="flex-md-column flex-sm-row g-4 m-2 card"
                style={{ width: "18rem" }}
              >
                <img
                  src={ai.img}
                  style={{ objectFit: "contain" }}
                  className="card-img-top"
                  alt={ai.topic}
                />
                <div className="card-body">
                  <h5 className="card-title">{ai.topic}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <span className="fw-light">By</span> {ai.created}
                  </li>
                </ul>
                <div className="card-body row">
                  <div className="col fw-light">{ai.date}</div>
                  <div className="col fw-light">{ai.Minread}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default AiAndMl;