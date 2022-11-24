import {Box, TextField, MenuItem, Stack} from "@mui/material"
import React, { useState } from "react"

export const Select = () => {

    const [country, setCountry] = useState<string>("") 
    const [countries, setCountries] = useState<string[]>([]) 
    
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
        console.log(event.target.value)
    }

    const handleMultipleCountries = (event : React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        console.log(value)
        setCountries(typeof value == "string" ? value.split(",") : value)
    }

    return(
        <Stack spacing={3}>
            <Stack direction="row" spacing={3}>
                <Box width="250px">
                    <TextField 
                        label="Select Country"
                        select
                        fullWidth
                        value={country}
                        onChange={handleChange}
                    >
                        <MenuItem value="PAK">Pakistan</MenuItem>
                        <MenuItem value="IN">India</MenuItem>
                        <MenuItem value="BAN">Bangladesh</MenuItem>
                    </TextField>
                </Box>
                <Box width="250px">
                    <TextField 
                        label="Select multiple Country"
                        select
                        fullWidth
                        value={countries}
                        onChange={handleMultipleCountries}
                        SelectProps={
                            {
                                multiple:true
                            }
                        }
                    >
                        <MenuItem value="PAK">Pakistan</MenuItem>
                        <MenuItem value="IN">India</MenuItem>
                        <MenuItem value="BAN">Bangladesh</MenuItem>
                    </TextField>
                </Box>
            </Stack>
        </Stack>
    )
}