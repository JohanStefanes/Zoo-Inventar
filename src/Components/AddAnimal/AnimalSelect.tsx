import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

interface AnimalSelectProps {
    value: string;
    onChange: (value: string) => void;
    error: string;
}

const AnimalSelect: React.FC<AnimalSelectProps> = ({ value, onChange, error }) => {
    const animalOptions = ["Lion", "Cat", "Leopard", "Duck", "Tiger", "Elephant", "Giraffe", "Zebra"];
    return (
        <FormControl fullWidth error={!!error} variant="outlined" sx={{ my: 2 }}>
            <InputLabel id="animal-select-label">Animal</InputLabel>
            <Select
                labelId="animal-select-label"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                label="Animal"
            >
                {animalOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default AnimalSelect;
