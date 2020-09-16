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

export default function CustomizedTables(props) {
  // console.log("check props ", props.changeCartItems);
  const [rows, setRow] = useState([]);

  const [Price, setPrice] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("cartArray") !== null) {
      setRow(JSON.parse(localStorage.getItem("cartArray")));
      console.log(
        "check this ",
        JSON.parse(localStorage.getItem("cartArray"))[0].qty
      );
    }

    CalTotalPrice();
  }, []);

  const classes = useStyles();

  function cancel(id) {
    // if (props.changeCartItems) {
    //   console.log("inside")
    //   props.changeCartItems();
    // }
    let mycart = rows.filter((row) => row.id !== id);

    setRow(mycart); // problem creating state
    console.log("check state update ", rows, "mycart", mycart);

    CalTotalPrice(); //
  }

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

  const CalTotalPrice = () => {
    let cartprice = 0;
    // useeffect not getting cart array in caltotal price that's why price is 0 as at that time cart array in state was []
    console.log("inside function check this", rows);
    rows.map((row) => {
      console.log("check total price ", row);
      cartprice += parseInt(row.totalPrice);
    });
    setPrice(cartprice);
  };

  const handleIncrease = (id) => {
    let mycart = rows.filter((row) => row.id === id);
    let cart = rows.filter((row) => row.id !== id);
    if (mycart[0].qty > 10) return;
    mycart[0].qty = (parseInt(mycart[0].qty) + 1).toString();
    mycart[0].totalPrice = (
      parseInt(mycart[0].qty) * parseInt(mycart[0].Price)
    ).toString();
    cart.push(mycart[0]);
    cart.sort(compare);
    setRow(cart);
    CalTotalPrice();
  };

  function handleDecrease(id) {
    let mycart = rows.filter((row) => row.id === id);
    let cart = rows.filter((row) => row.id !== id);
    if (mycart[0].qty < 2) return;
    mycart[0].qty = (parseInt(mycart[0].qty) - 1).toString();
    mycart[0].totalPrice = (
      parseInt(mycart[0].qty) * parseInt(mycart[0].Price)
    ).toString();
    cart.push(mycart[0]);
    cart.sort(compare);
    setRow(cart);
    CalTotalPrice();
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          {!props.cart ? (
            <TableRow>
              <StyledTableCell>
                <Typography color="primary" variant="h5" component="h5">
                  Image
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography color="primary" variant="h5" component="h5">
                  Product Name
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography color="primary" variant="h5" component="h5">
                  Price
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography color="primary" variant="h5" component="h5">
                  Quantity
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography color="primary" variant="h5" component="h5">
                  Action
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography color="primary" variant="h5" component="h5">
                  Total
                </Typography>
              </StyledTableCell>
            </TableRow>
          ) : null}
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <img width="60" height="80" src={row.ProductImg} />
              </StyledTableCell>
              <StyledTableCell align="right">
                striped dress <br />
                {props.cart ? (
                  <p>
                    {row.qty}*{row.Price}.00 $
                  </p>
                ) : null}
              </StyledTableCell>
              {!props.cart ? (
                <StyledTableCell align="right">
                  <Typography variant="h5" component="h3">
                    {row.Price}.00 $
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
                      color="primary"
                      onClick={() => handleIncrease(row.id)}
                    >
                      +
                    </Button>
                    <input
                      style={{
                        width: "40px",
                        height: "17px",
                        marginTop: "1px",
                      }}
                      value={row.qty || ""}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleDecrease(row.id)}
                    >
                      -
                    </Button>
                  </div>
                </StyledTableCell>
              ) : null}
              <StyledTableCell align="right">
                <CancelIcon onClick={() => cancel(row.id)} />
              </StyledTableCell>
              {!props.cart ? (
                <StyledTableCell align="right">
                  <Typography color="primary" variant="h5" component="h3">
                    {row.totalPrice}.00 $
                  </Typography>
                </StyledTableCell>
              ) : null}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Typography color="primary" variant="h5" component="h3">
        {Price}.00 $
      </Typography>
      {props.cart ? (
        <Typography color="error" variant="h5" component="h3">
          <Link className={classes.link} to={`/checkout`}>
            <Button variant="contained" color="primary">
              Checkout{" "}
            </Button>
          </Link>{" "}
          <Link className={classes.link} to={`/cart`}>
            <Button variant="contained" color="primary">
              View Cart{" "}
            </Button>
          </Link>
        </Typography>
      ) : null}
    </TableContainer>
  );
}
