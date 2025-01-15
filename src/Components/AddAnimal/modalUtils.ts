export const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

export const validateField = (field: string, value: any): string => {
    if (field === "name" && (!value.trim() || !/^[a-zA-Z\s]+$/.test(value))) {
        return "Name darf nur Buchstaben enthalten.";
    }
    if (field === "animal" && !value) {
        return "Tierart ist erforderlich.";
    }
    if (field === "birthday" && !value) {
        return "Geburtsdatum ist erforderlich.";
    }
    if (field === "price" && (isNaN(value) || parseFloat(value) <= 0)) {
        return "Preis muss eine positive Zahl sein.";
    }
    return "";
};

export const resetForm = (setFormState: Function) => {
    setFormState({
        name: "",
        animal: "",
        birthday: null,
        price: "",
        errors: { name: "", animal: "", birthday: "", price: "" },
    });
};
