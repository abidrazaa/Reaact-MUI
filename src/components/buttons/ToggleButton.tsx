
import {Stack, ToggleButtonGroup, ToggleButton} from "@mui/material"
import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
import FormatUnderlinedRoundedIcon from '@mui/icons-material/FormatUnderlinedRounded';
import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
import { useState } from "react";

export const ButtonToggle = () => {

    const [formats,setFormats] = useState <string []> ([])

    const handleChange = (event: React.MouseEvent<HTMLElement>, value: string[]) => {
        console.log(value)
        setFormats(value)
    }

    return(
        <div>
            <h1>Toggle Button</h1>

            <Stack display="block">
                <ToggleButtonGroup
                    onChange={handleChange}
                    value={formats}
                    size="small"
                    // orientation="vertical"
                    color="success"
                    // exclusive   // you can select one at a time
                >
                    <ToggleButton value="bold"><FormatBoldRoundedIcon /></ToggleButton>
                    <ToggleButton value="italic"><FormatItalicRoundedIcon /></ToggleButton>
                    <ToggleButton value="underlined"><FormatUnderlinedRoundedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </div>
    )
}