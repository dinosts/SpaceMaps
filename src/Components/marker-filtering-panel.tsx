import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

function MarkerFilteringPanel() {
    return (<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Age</InputLabel>
        <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label="Age"
        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl>);
}

export default MarkerFilteringPanel;
