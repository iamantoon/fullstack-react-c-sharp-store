import { FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";

interface Option {
    value: string;
    label: string;
}

interface SortProps {
    options: Option[];
    onChange: (event: any) => void;
    selectedValue: string;
}

export default function RadioButtonGroup({options, onChange, selectedValue}: SortProps){
    return (
        <FormControl component='fieldset'>
            <RadioGroup onChange={onChange} value={selectedValue}>
                {options.map(({value, label}) => (
                    <FormControlLabel value={value} label={label} control={<Radio />} key={value} />
                ))}
            </RadioGroup>
        </FormControl>
    );
}