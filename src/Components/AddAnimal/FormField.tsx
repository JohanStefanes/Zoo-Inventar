import TextField from "@mui/material/TextField";

interface FormFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    error: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, value, onChange, type = "text", error }) => (
    <TextField
        fullWidth
        label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        variant="outlined"
        sx={{ my: 2 }}
        error={!!error}
        helperText={error}
    />
);

export default FormField;
