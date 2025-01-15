import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontSize: 14,
}));

export default function AnimalTableRow({ row }) {
    return (
        <StyledTableRow>
            <StyledTableCell>{row.name}</StyledTableCell>
            <StyledTableCell align="right">{row.animal}</StyledTableCell>
            <StyledTableCell align="right">{row.birthday}</StyledTableCell>
            <StyledTableCell align="right">
                {new Intl.NumberFormat("de-CH", {
                    style: "currency",
                    currency: "CHF",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                }).format(row.price)}
            </StyledTableCell>
        </StyledTableRow>
    );
}
