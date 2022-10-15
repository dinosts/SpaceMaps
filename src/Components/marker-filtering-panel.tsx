import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

function MarkerFilteringPanel() {
    return (
        <div style={{
            position: 'absolute',
            height: '45px',
            padding:'10px',
            top:'80px',
            background:'white',
            borderRadius:'10%',
            borderColor:'black',
            width:'100px',
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
