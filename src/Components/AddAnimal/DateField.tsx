import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { Dayjs } from "dayjs";

interface DateFieldProps {
    value: Dayjs | null;
    onChange: (value: Dayjs | null) => void;
    error: string;
}

const DateField: React.FC<DateFieldProps> = ({ value, onChange, error }) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
            label="Birthday"
            value={value}
            onChange={onChange}
            renderInput={(params) => (
                <TextField
                    {...params}
                    fullWidth
                    variant="outlined"
                    error={!!error}
                    helperText={error}
                    sx={{ my: 2 }}
                />
            )}
        />
    </LocalizationProvider>
);

export default DateField;
