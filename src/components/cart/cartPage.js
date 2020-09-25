import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import CancelIcon from "@material-ui/icons/Cancel";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  media: {
    height: 10,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 300,
    minHeight: 1,
  },
  link: {
    textDecoration: "none",
  },
});

export default function CartPage(props) {
 
  const [Cart, setCart] = useState([]);

  const themeColor = props.themeColor;
  const [Price, setPrice] = useState(0);

  const CalTotalPrice = () => {
    let cartprice = 0;
    Cart.map((item) => {
      console.log("check total price ", item);
      cartprice += parseInt(item.totalPrice);
    });
    setPrice(cartprice);
  };
 
  
  useEffect(() => {
    
    if (localStorage.getItem("cartArray") !== null) {

      let cartState= JSON.parse(localStorage.getItem("cartArray"))
      setCart(cartState);
    }
  }, []);
  useEffect(()=>{
    console.log("check cart this time ", Cart)
    CalTotalPrice();
  },[Cart])

  const classes = useStyles();

  function compare(a, b) {
    const ordera = a.id;
    const orderb = b.id;
    let comparison = 0;
    if (ordera > orderb) {
      comparison = 1;
    } else if (ordera < orderb) {
      comparison = -1;
    }
    return comparison;
  }

  const handleIncrease = (id) => {
    let mycart = Cart.filter((row) => row.id === id);
    let cart = Cart.filter((row) => row.id !== id);
    if (mycart[0].qty > 10) return;
    mycart[0].qty = (parseInt(mycart[0].qty) + 1).toString();
    mycart[0].totalPrice = (
      parseInt(mycart[0].qty) * parseInt(mycart[0].Price)
    ).toString();
    cart.push(mycart[0]);
    cart.sort(compare);
     setCart(cart);
    CalTotalPrice();
  };

  function handleDecrease(id) {
    let mycart = Cart.filter((row) => row.id === id);
    let cart = Cart.filter((row) => row.id !== id);
    if (mycart[0].qty < 2) return;
    mycart[0].qty = (parseInt(mycart[0].qty) - 1).toString();
    mycart[0].totalPrice = (
      parseInt(mycart[0].qty) * parseInt(mycart[0].Price)
    ).toString();
    cart.push(mycart[0]);
    cart.sort(compare);
    setCart(cart);
    CalTotalPrice();
  }

  function cancel(id) {
    let mycart = Cart.filter((row) => row.id !== id);
    setCart(mycart); // problem creating state
    CalTotalPrice(); //
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          {!props.cart ? (
            <TableRow>
              <StyledTableCell>
                <Typography
                  variant="h5"
                  component="h5"
                  style={{ color: themeColor }}
                >
                  <p
                    style={{
                      fontFamily: "Monospace ,Courier New",
                    }}
                  >
                    Image
                  </p>
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography
                  style={{ color: themeColor }}
                  variant="h5"
                  component="h5"
                >
                  <p
                    style={{
                      fontFamily: "Monospace ,Courier New",
                    }}
                  >
                    Product Name
                  </p>
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography
                  style={{ color: themeColor }}
                  variant="h5"
                  component="h5"
                >
                  <p
                    style={{
                      fontFamily: "Monospace ,Courier New",
                    }}
                  >
                    Price
                  </p>
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography
                  style={{ color: themeColor }}
                  variant="h5"
                  component="h5"
                >
                  <p
                    style={{
                      fontFamily: "Monospace ,Courier New",
                    }}
                  >
                    Quantity
                  </p>
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography
                  style={{ color: themeColor }}
                  variant="h5"
                  component="h5"
                >
                  <p
                    style={{
                      fontFamily: "Monospace ,Courier New",
                    }}
                  >
                    Action
                  </p>
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography
                  style={{ color: themeColor }}
                  variant="h5"
                  component="h5"
                >
                  <p
                    style={{
                      fontFamily: "Monospace ,Courier New",
                    }}
                  >
                    Total
                  </p>
                </Typography>
              </StyledTableCell>
            </TableRow>
          ) : null}
        </TableHead>
        <TableBody>
          {Cart.map((row, i) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <img width="60" height="80" src={row.ProductImg} />
              </StyledTableCell>
              <StyledTableCell align="right">
                <p
                  style={{
                    fontFamily: "Monospace ,Courier New",
                    fontSize: "20px",
                  }}
                >
                  {row.ProductName}
                </p>{" "}
                <br />
                {!props.cart ? (
                  <p
                    style={{
                      fontFamily: "Monospace ,Courier New",
                      fontSize: "20px",
                    }}
                  >
                    {row.qty}*{row.Price}.00 $
                  </p>
                ) : null}
              </StyledTableCell>
              {!props.cart ? (
                <StyledTableCell align="right">
                  <Typography variant="h5" component="h3">
                    <p
                      style={{
                        fontFamily: "Monospace ,Courier New",
                        fontSize: "20px",
                      }}
                    ></p>{" "}
                    <p
                      style={{
                        fontFamily: "Monospace ,Courier New",
                        fontSize: "20px",
                      }}
                    >
                      ${row.Price}.00{" "}
                    </p>
                  </Typography>
                </StyledTableCell>
              ) : null}
              {!props.cart ? (
                <StyledTableCell align="right">
                  <div
                    style={{
                      display: "flex",
                      height: "40px",
                      marginLeft: "10px",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{ color: themeColor }}
                      onClick={() => handleIncrease(row.id)}
                    >
                      <p
                        style={{
                          fontFamily: "Monospace ,Courier New",
                          fontSize: "40px",
                        }}
                      >
                        +
                      </p>
                    </Button>
                    <input
                      style={{
                        width: "40px",
                        height: "17px",
                        marginTop: "1px",
                        textAlign: "center",
                      }}
                      value={row.qty || ""}
                    />
                    <Button
                      variant="contained"
                      style={{ color: themeColor }}
                      onClick={() => handleDecrease(row.id)}
                    >
                      <p
                        style={{
                          fontFamily: "Monospace ,Courier New",
                          fontSize: "40px",
                        }}
                      >
                        {" "}
                        -
                      </p>
                    </Button>
                  </div>
                </StyledTableCell>
              ) : null}
              <StyledTableCell align="right">
                <CancelIcon
                  onClick={() => cancel(row.id)}
                  style={{ color: themeColor }}
                />
              </StyledTableCell>
              {!props.cart ? (
                <StyledTableCell align="right">
                  <Typography
                    style={{ color: themeColor }}
                    variant="h5"
                    component="h3"
                  >
                    {row.totalPrice}.00 $
                  </Typography>
                </StyledTableCell>
              ) : null}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Typography style={{ color: themeColor }} variant="h5" component="h3">
        {Price}.00 $
      </Typography>
      {props.cart ? (
        <Typography color="error" variant="h5" component="h3">
          <Link className={classes.link} to={`/checkout`}>
            <Button variant="contained" style={{ color: themeColor }}>
              Checkout{" "}
            </Button>
          </Link>{" "}
          <Link className={classes.link} to={`/cart`}>
            <Button variant="contained" style={{ color: themeColor }}>
              View Cart{" "}
            </Button>
          </Link>
        </Typography>
      ) : null}
    </TableContainer>
  );
}
