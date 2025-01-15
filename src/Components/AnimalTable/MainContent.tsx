import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import TablePagination from "@mui/material/TablePagination";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AddAnimalModal from "../AddAnimal/AddAnimalModal.tsx";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

function createData(name, animal, birthday, price) {
    return { name, animal, birthday, price };
}

const initialRows = [
    createData("Leo", "Lion", "05.01.2002", 2000),
    createData("Missy", "Cat", "14.11.2015", 185),
    createData("Cupcake", "Leopard", "21.12.2020", 7500),
    createData("Gingerbread", "Duck", "12.12.2024", 80),
];

export default function CustomizedTables() {
    const [rows, setRows] = React.useState(initialRows);
    const [open, setOpen] = React.useState(false);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedRow, setSelectedRow] = React.useState<number | null>(null);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAddAnimal = (name, animal, birthday, price) => {
        setRows([...rows, createData(name, animal, birthday, price)]);
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleMenuClick = (event, index) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(index);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedRow(null);
    };

    const handleDelete = () => {
        if (selectedRow !== null) {
            const updatedRows = rows.filter((_, index) => index !== selectedRow);
            setRows(updatedRows);
        }
        handleMenuClose();
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingTop: "100px",
                width: "100%",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "1200px",
                }}
            >
                <TableContainer
                    component={Paper}
                    sx={{
                        width: "100%",
                        marginBottom: "20px",
                        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                        borderRadius: "16px",
                        padding: "20px",
                    }}
                >
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell align="right">Species</StyledTableCell>
                                <StyledTableCell align="right">Birthday</StyledTableCell>
                                <StyledTableCell align="right">Price (CHF)</StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedRows.map((row, index) => (
                                <StyledTableRow key={`${row.name}-${index}`}>
                                    <StyledTableCell>{row.name}</StyledTableCell>
                                    <StyledTableCell align="right">{row.animal}</StyledTableCell>
                                    <StyledTableCell align="right">{row.birthday}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        {new Intl.NumberFormat("de-CH", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        }).format(row.price)}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <IconButton
                                            onClick={(event) => handleMenuClick(event, index)}
                                            aria-label="Open options menu"
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleDelete} aria-label="Delete">
                        Delete
                    </MenuItem>
                </Menu>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>

            <Box
                sx={{
                    bottom: "20px",
                    right: "20px",
                    zIndex: 1000,
                }}
            >
                <button
                    className="add-button"
                    onClick={handleOpen}
                    aria-label="Add a new animal"
                    style={{
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        width: "60px",
                        height: "60px",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <ControlPointIcon fontSize="large" />
                </button>
            </Box>

            <AddAnimalModal open={open} onClose={handleClose} onAdd={handleAddAnimal} />

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity="success"
                    sx={{
                        width: "100%",
                        fontSize: "1.2rem",
                        padding: "16px",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    Animal added successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
}
