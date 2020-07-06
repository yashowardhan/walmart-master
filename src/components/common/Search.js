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

class Search extends Component {
  state = {
    searchValue: "mount",
    searchProducts: [],
  };

  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    // document.getElementById("productList").innerHTML = " ";
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = (searchInput) => {
    axios
      .get(
        `https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/1/3?search=${searchInput}&inStock=true`
      )
      .then((response) => {
        const results = response.data.products;
        //console.log(results, "search api call data");
        this.setState({ searchProducts: results });
      })
      .catch((error) => {
        return error.message;
      });
  };

  render() {
    //console.log(this.state.searchProducts, "empty not please");
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
              Search Products
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="fname"
                  name="search"
                  variant="outlined"
                  required
                  fullWidth
                  id="searchValue"
                  label="Search Product"
                  onChange={(event) => this.handleOnChange(event)}
                  autoFocus
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.handleSearch}
              >
                Search
              </Button>
            </Grid>
          </div>
        </Container>

        <div className="parent-card">
          {this.state.searchProducts ? (
            <div className="card-box">
              {this.state.searchProducts.map((product) => {
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
            <p>Try searching for other product</p>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
