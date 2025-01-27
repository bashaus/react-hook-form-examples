import { ErrorMessage } from "@hookform/error-message";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller, useFormContext } from "react-hook-form";

import { seasons } from "@/helpers/options";

import { SelectMultipleFieldSchema } from "./form";

export default function SelectMultipleField() {
  const { control } = useFormContext<SelectMultipleFieldSchema>();

  return (
    <Controller
      name="selectMultipleField"
      control={control}
      render={({ field: { value = [], ...field }, fieldState }) => (
        <FormControl error={!!fieldState.error} fullWidth>
          <InputLabel>Seasons</InputLabel>
          <Select {...field} value={value} multiple label="Seasons">
            {seasons.map((season) => (
              <MenuItem key={season} value={season}>
                {season}
              </MenuItem>
            ))}
          </Select>

          <ErrorMessage name={field.name} as={FormHelperText} />
        </FormControl>
      )}
    />
  );
}
