import './Component6.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { data } from '../../data/data';
import GradeIcon from '@mui/icons-material/Grade';


export default function Component6() {
    const [Products , setProducts] = useState([]);
    const [Sales, setSales] = useState('');

    useEffect(()=>{
        data('products').then(data=>{
            setProducts(data);
        })
    },[])

    const handleChange = (event) => {
        setSales(event.target.value);
    };

  return (
    <>
        <div className={"component6"}>
            <div className={"top3"}>
                <div className={"title3"}>
                    Top Products
                </div>
                <div className={"dropdown"}>
                    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                        <InputLabel id="demo-select-small-label">Product</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={Sales}
                            label="Chart"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Full results</MenuItem>
                            <MenuItem value={20}>1 Year</MenuItem>
                            <MenuItem value={30}>2 Year</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="bottom3">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Sold amount</TableCell>
                        <TableCell align="right">Unit price</TableCell>
                        <TableCell align="right">Revenue</TableCell>
                        <TableCell align="right">Rating</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {Products.map((row) => (
                        <TableRow
                        key={row.Product}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.Product}
                        </TableCell>
                        <TableCell align="right">{row.sold_amount}</TableCell>
                        <TableCell align="right">${row.unit_price}</TableCell>
                        <TableCell align="right">${row.revenue}</TableCell>
                        <TableCell align="right">
                            <div className="rating">
                                <GradeIcon sx={{ fontSize: 'small' }}/>
                                {row.rating}
                            </div>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>          
    </>
  );
}