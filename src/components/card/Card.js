import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Rating from "@material-ui/lab/Rating";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { connect } from "react-redux";
import fetchProducts from "../../store/actions/fetchProducts";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function MediaCard(props) {
  const classes = useStyles();
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    props.fetchProducts();
  }, []);

  const { products, history } = props;
  // const cardClickHandler = (article) => {
  //   history.push("/editproduct/" + article.productId, { products: article });
  // };
  console.log(props.products, "products working cool");
  //console.log(users, "data in props");
  return (
    <div className="parent-card">
      {products.map((product) => (
        <div className="card-box">
          <React.Fragment>
            <Link
              to={{
                pathname: `/productdetail/${product.productId}`,
                productProps: {
                  productName: product.productName,
                  productImage: product.productImage,
                  shortDescription: product.shortDescription,
                  longDescription: product.longDescription,
                  price: product.price,
                  reviewRating: product.reviewRating,
                },
              }}
            >
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      W
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <Link
                        to={{
                          pathname: `/editproduct/${product.productId}`,
                          productProps: {
                            productName: product.productName,
                            shortDescription: product.shortDescription,
                            longDescription: product.longDescription,
                            price: product.price,
                            reviewRating: product.reviewRating,
                          },
                        }}
                      >
                        <MoreVertIcon />
                      </Link>
                    </IconButton>
                  }
                  title={product.productName}
                  //subheader="September 14, 2016"
                  style={{ textAlign: "left" }}
                />
                <CardMedia
                  className={classes.media}
                  image={`https://mobile-tha-server-8ba57.firebaseapp.com${product.productImage}`}
                  title={product.productName}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ textAlign: "left" }}
                  >
                    {product.shortDescription}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Rating
                    name="simple-controlled"
                    value={product.reviewRating}
                  />
                  <Typography
                    display="block"
                    variant="caption"
                    color="textPrimary"
                  >
                    {product.productPrice}
                  </Typography>
                  <Typography
                    display="block"
                    variant="caption"
                    color="textPrimary"
                    style={{ marginLeft: "40rem", fontSize: "18px" }}
                  >
                    {product.productInStock}
                  </Typography>
                </CardActions>
              </Card>
            </Link>
          </React.Fragment>
        </div>
      ))}
    </div>
  );
}

//Make State accessible to movies and users in App.
const MapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

// Setup Dispatch for our button events.
const MapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(MediaCard);
