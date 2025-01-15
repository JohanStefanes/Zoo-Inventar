import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Dayjs } from "dayjs";
import AnimalSelect from "./AnimalSelect";
import FormField from "./FormField";
import DateField from "./DateField";
import { modalStyle, validateField, resetForm } from "./modalUtils";

interface AddAnimalModalProps {
    open: boolean;
    onClose: () => void;
    onAdd: (name: string, animal: string, birthday: string, price: number) => void;
}

const AddAnimalModal: React.FC<AddAnimalModalProps> = ({ open, onClose, onAdd }) => {
    const [formState, setFormState] = useState({
        name: "",
        animal: "",
        birthday: null as Dayjs | null,
        price: "",
        errors: { name: "", animal: "", birthday: "", price: "" },
    });

    const updateField = (field: string, value: any) => {
        setFormState((prev) => ({
            ...prev,
            [field]: value,
            errors: { ...prev.errors, [field]: validateField(field, value) },
        }));
    };

    const handleClose = () => {
        resetForm(setFormState);
        onClose();
    };

    const handleAdd = () => {
        const { name, animal, birthday, price, errors } = formState;
        const isValid = Object.keys(errors).every((key) => !errors[key]);

        if (isValid && birthday) {
            onAdd(name, animal, birthday.format("DD.MM.YYYY"), parseFloat(price));
            handleClose();
        }
    };

    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
            <Box sx={modalStyle}>
                <Typography id="modal-title" variant="h4" color="black" sx={{ mb: 2 }}>
                    Neues Tier hinzufügen
                </Typography>
                <FormField
                    label="Name"
                    value={formState.name}
                    onChange={(val) => updateField("name", val)}
                    error={formState.errors.name}
                />
                <AnimalSelect
                    value={formState.animal}
                    onChange={(val) => updateField("animal", val)}
                    error={formState.errors.animal}
                />
                <DateField
                    value={formState.birthday}
                    onChange={(val) => updateField("birthday", val)}
                    error={formState.errors.birthday}
                />
                <FormField
                    label="Preis"
                    value={formState.price}
                    onChange={(val) => updateField("price", val)}
                    error={formState.errors.price}
                    type="number"
                />
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2, width: "100%" }}>
                    <Button variant="outlined" onClick={handleClose}>
                        Abbrechen
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleAdd}
                        disabled={
                            Object.values(formState.errors).some((err) => err) ||
                            !formState.name ||
                            !formState.animal ||
                            !formState.birthday ||
                            !formState.price
                        }
                    >
                        Hinzufügen
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default AddAnimalModal;
