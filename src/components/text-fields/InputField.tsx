import {Stack, TextField, InputAdornment} from "@mui/material"
import { useState } from "react"

export const InputField = () => {

    const [value, setValue] = useState<string>("")

    return(
        <Stack spacing={3}>

            <h1>Input Field Variants</h1>

            <Stack display="block" direction="row" spacing={2}>
                <TextField label="Outlined" variant="outlined"/>
                <TextField label="Filled" variant="filled"/>
                <TextField label="Standard" variant="standard"/>
            </Stack>

            <h1>Text Field Tag parameters</h1>

            <Stack display="block" spacing={2} direction="row">
                <TextField label="Required" required />
                <TextField label="Helper Text" helperText="enter your phone#" />
                <TextField label="type password" type="password" />
                <TextField label="disabled" disabled />
                <TextField 
                    label="error" 
                    value={value}
                    error={!value}
                    onChange={e => setValue(e.target.value)}
                    helperText={!value ? "required" : "Very good"}
                />
                <TextField label="readonly" inputProps={{readOnly: true}} />
            </Stack>

            <h1>Input Adornment</h1>

            <Stack display="block" direction="row" spacing={2}>
                <TextField label="Amount" InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }}/>
                <TextField label="Weight" InputProps={{
                    endAdornment : <InputAdornment position="end" >kg</InputAdornment>
                }}
                />
            </Stack>

        </Stack>
    )
}