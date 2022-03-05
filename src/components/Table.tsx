import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    Name: string,
    Description: string,
    Tagline: string,
    First_brewed: string,
    ABV: string,
    IBU: string,
    BearImage: string
) {
    return { Name, Description, BearImage, Tagline, First_brewed, ABV, IBU };
}

export default function BasicTable({data}:any) {
    const rows = data.posts;
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Tagline</TableCell>
                        <TableCell align="right">First_brewed</TableCell>
                        <TableCell align="right">ABV</TableCell>
                        <TableCell align="right">IBU</TableCell>
                        <TableCell align="right">Bear Image</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row:any) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell align="right">{row.tagline}</TableCell>
                            <TableCell align="right">{row.first_brewed}</TableCell>
                            <TableCell align="right">{row.abv}</TableCell>
                            <TableCell align="right">{row.ibu}</TableCell>
                            <TableCell align="right">
                                <img width={100} height={200} src={row.image_url} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}