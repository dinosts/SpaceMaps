import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

function MarkerFilteringPanel() {
    return (
        <div style={{
            position: 'fixed',
            height: '40px',
            padding:'10px',
            top:'80px',
            background:'white',
            borderRadius:'5%',
            borderColor:'black',
            width:'90px',
        }}>
            <FormControl size='small' fullWidth>
                <InputLabel >Type</InputLabel>
                <Select
                    label="Type"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default MarkerFilteringPanel;
