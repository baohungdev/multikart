import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CancelIcon from "@material-ui/icons/Cancel";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const [rows, setRow] = useState([
    { id: "0", totalPrice: "250", price: "250", carbs: "1", qty: "1" },
    { id: "1", totalPrice: "350", price: "350", carbs: "2", qty: "1" },
    { id: "2", totalPrice: "200", price: "200", carbs: "3", qty: "1" },
    { id: "3", totalPrice: "300", price: "300", carbs: "4", qty: "1" },
  ]);
  const [Price, setPrice] = useState(0);
  useEffect(() => {
    CalTotalPrice();
  }, [Price]);

  const classes = useStyles();

  async function cancel(id) {
    let mycart = rows.filter((row) => row.id !== id);
    await setRow(mycart);
    console.log("check my real cart", rows);
    console.log("check my cart", mycart);
    CalTotalPrice();
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
    console.log("why cart price is wrong ", rows);
    rows.map((row) => {
      cartprice += parseInt(row.totalPrice);
    });
    console.log("cal price", cartprice);
    setPrice(cartprice);
  };
  const handleIncrease = (id) => {
    let mycart = rows.filter((row) => row.id === id);
    let cart = rows.filter((row) => row.id !== id);
    mycart[0].qty = (parseInt(mycart[0].qty) + 1).toString();
    mycart[0].totalPrice = (
      parseInt(mycart[0].qty) * parseInt(mycart[0].price)
    ).toString();
    cart.push(mycart[0]);
    setRow(cart);
    CalTotalPrice();
  };

  function handleDecrease(id) {
    let mycart = rows.filter((row) => row.id === id);
    let cart = rows.filter((row) => row.id !== id);
    mycart[0].qty = (parseInt(mycart[0].qty) - 1).toString();
    mycart[0].totalPrice = (
      parseInt(mycart[0].qty) * parseInt(mycart[0].price)
    ).toString();
    cart.push(mycart[0]);
    setRow(cart);
    CalTotalPrice();
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Image </StyledTableCell>
            <StyledTableCell align="right">Product Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <img
                  width="60"
                  height="80"
                  src="https://react.pixelstrap.com/assets/images/fashion/product/13.jpg"
                />
              </StyledTableCell>
              <StyledTableCell align="right">striped dress</StyledTableCell>
              <StyledTableCell align="right">
                <Typography variant="h5" component="h3">
                  {row.price}.00 $
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <button onClick={() => handleIncrease(row.id)}>+</button>
                  <input value={row.qty || ""} />
                  <button onClick={() => handleDecrease(row.id)}>-</button>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <CancelIcon onClick={() => cancel(row.id)} />
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography color="error" variant="h5" component="h3">
                  {row.totalPrice}.00 $
                </Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Typography color="error" variant="h5" component="h3">
        {Price}.00 $
      </Typography>
    </TableContainer>
  );
}
