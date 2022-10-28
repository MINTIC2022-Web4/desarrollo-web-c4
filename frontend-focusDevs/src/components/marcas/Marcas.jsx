import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./marcas.css"

function createData(marca, pais, stock) {
  return { marca, pais, stock };
}

const rows = [
  createData("Samsung", "pais", 1),
  createData("Itachi", "pais", 2),
  createData("LG", "pais", 3),
  createData("Hewlett", "pais", 4),
  createData("ACER", "pais", 5),
  createData("DELL", "pais", 5),
  createData("COMPAQ", "pais", 6),
  createData("ASUS", "pais", 7),
  createData("lenovo", "pais", 8),
];

export default function Marcas() {
  return (
    <div className="container-marcas">
      <div className="row-breadcrumb">{`Home > Marcas`}</div>
      <div className="info-marcas">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Marcas</TableCell>
                <TableCell align="right">pais</TableCell>
                <TableCell align="right">Stock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.marca}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.marca}
                  </TableCell>
                  <TableCell align="right">{row.pais}</TableCell>
                  <TableCell align="right">{row.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
