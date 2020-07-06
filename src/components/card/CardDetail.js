import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";

function CardDetail(props) {
  return (
    <div
      className="column"
      style={{ paddingBottom: "4rem", textAlign: "center" }}
    >
      <h1 style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
        {props.location.productProps.productName}
      </h1>
      <div className="ui relaxed divided list">
        <div className="item">
          <img
            alt="image"
            width="500"
            height="333"
            src={`https://mobile-tha-server-8ba57.firebaseapp.com${props.location.productProps.productImage}`}
          />
          <div className="content">
            <div className="description" style={{ padding: "1rem 8rem" }}>
              {props.location.productProps.longDescription}

              <h3 style={{ paddingTop: "1rem" }}>
                Price: {props.location.productProps.price}
              </h3>
              <Rating
                name="simple-controlled"
                value={props.location.productProps.reviewRating}
              />
              <h3>Total Reviews: {props.location.productProps.reviewCount}</h3>
            </div>
          </div>
        </div>
      </div>

      <Button variant="contained" color="primary">
        <Link to="/"> Back to home page </Link>
      </Button>

      {/* <Button
        variant="contained"
        color="secondary"
        onClick={() => this.props.history.push("/")}
      >
        Back to home page
      </Button> */}
    </div>
  );
}
export default CardDetail;
