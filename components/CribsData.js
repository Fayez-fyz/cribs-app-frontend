import React from "react";

function CribsData(props) {
  return (
      <div className="col">
      <div className="card ">
      {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="card-img-top"
          width="200"
          height="200"
          src={props.pic}
          alt="pic"
        />
        <div className="card-body">
          <h5 className="card-title  d-flex justify-content-center">
            {props.name}
          </h5>
          <h5 className="card-text d-flex justify-content-center">
            {props.location}
          </h5>
          <div className="text-center">
            <button
              className="btn btn-outline-primary mx-2 "
              onClick={() =>{
                props.setokup(true)
                props.edit(props.id, props.name, props.pic, props.location)}
                
              }
            >
              Edit
            </button>
            <button
              className="btn btn-outline-danger mx-2 "
              onClick={() => props.delete(props.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      </div>

  );
}

export default CribsData;
