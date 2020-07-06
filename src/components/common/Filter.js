import React, { Component } from "react";
import axios from "axios";
import ProductCard from "../card/ProductCard";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Filter extends Component {
  state = {
    min: 500,
    max: 1000,
    filterProducts: [],
  };

  handleOnChangeMin = (event) => {
    this.setState({ min: event.target.value });
  };

  handleOnChangeMax = (event) => {
    this.setState({ max: event.target.value });
  };

  handleFilter = () => {
    // document.getElementById("productList").innerHTML = " ";
    this.makeFilterApiCall(this.state.min, this.state.max);
  };

  makeFilterApiCall = (minInput, maxInput) => {
    axios
      .get(
        `https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/1/10?minPrice=${minInput}&maxPrice=${maxInput}&inStock=true&minReviewCount=2`
      )
      .then((response) => {
        const results = response.data.products;
        //console.log(results, "filter data");
        this.setState({ filterProducts: results });
      })
      .catch((error) => {
        return error.message;
      });
  };

  render() {
    return (
      <div id="main">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div>
            <Typography
              component="h1"
              variant="h5"
              style={{ paddingBottom: "1.5rem", paddingTop: "2rem" }}
            >
              Filter Products
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="minPrice"
                  label="Min Price"
                  onChange={(event) => this.handleOnChangeMin(event)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="maxPrice"
                  label="Max Price"
                  name="maxPrice"
                  autoComplete="lname"
                  onChange={(event) => this.handleOnChangeMax(event)}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.handleFilter}
              >
                Filter
              </Button>
            </Grid>
          </div>
        </Container>

        <div className="parent-card">
          {this.state.filterProducts ? (
            <div className="card-box">
              {this.state.filterProducts.map((product) => {
                if (
                  product.shortDescription &&
                  product.shortDescription.length > 100
                ) {
                  product.shortDescription = product.shortDescription.substring(
                    0,
                    100
                  );
                }
                return (
                  <div className="column">
                    <Link
                      to={{
                        pathname: `/productdetail/${product.productId}`,
                        articleProps: {
                          productName: product.productName,
                          productImage: product.productImage,
                          shortDescription: product.shortDescription,
                          longDescription: product.longDescription,
                          price: product.price,
                          reviewRating: product.reviewRating,
                        },
                      }}
                    >
                      <ProductCard
                        productId={product.productId}
                        productName={product.productName}
                        longDescription={product.longDescription}
                        shortDescription={product.shortDescription}
                        productImage={`https://mobile-tha-server-8ba57.firebaseapp.com/${product.productImage}`}
                        reviewRating={product.reviewRating}
                        productPrice={product.price}
                        productInStock={product.inStock}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Try filter for other price range</p>
          )}
        </div>
      </div>
    );
  }
}

export default Filter;
