import {Stack, Button, IconButton} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

export const MuiButtons = () => {
    return(
        <div>
            <h1>Buttons</h1>
            <Stack spacing={4}>
                <Stack spacing={2} direction="row" display="block">
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>
                <Stack display="block" spacing={2} direction="row">
                    <Button variant="contained" color="primary">Primary</Button>
                    <Button variant="contained" color="secondary">secondary</Button>
                    <Button variant="contained" color="error">error</Button>
                    <Button variant="contained" color="warning">warning</Button>
                    <Button variant="contained" color="info">info</Button>
                    <Button variant="contained" color="success">success</Button>
                </Stack>
                <Stack display="block" spacing={2} direction="row">
                    <Button variant="outlined" color="primary">Primary</Button>
                    <Button variant="outlined" color="secondary">secondary</Button>
                    <Button variant="outlined" color="error">error</Button>
                    <Button variant="outlined" color="warning">warning</Button>
                    <Button variant="outlined" color="info">info</Button>
                    <Button variant="outlined" color="success">success</Button>
                </Stack>
                <Stack display="block" spacing={2} direction="row">
                    <Button variant="text" color="primary">Primary</Button>
                    <Button variant="text" color="secondary">secondary</Button>
                    <Button variant="text" color="error">error</Button>
                    <Button variant="text" color="warning">warning</Button>
                    <Button variant="text" color="info">info</Button>
                    <Button variant="text" color="success">success</Button>
                </Stack>

                {/* SIZE of Buttons */}

                <Stack display="block" spacing={2} direction="row">
                    <Button variant="contained" size="large">Large</Button>
                    <Button variant="contained" size="medium">Medium</Button>
                    <Button variant="contained" size="small">Small</Button>
                </Stack>

                <br />

                {/* ICON Buttons */}

                <Stack display="block" spacing={2} direction="row">
                    <Button variant="contained" size="large" startIcon={<SendIcon />}>Send</Button>
                    <Button variant="contained" size="large" endIcon={<SendIcon />}>Send</Button>
                    <IconButton color="success" size="small">
                        <SendIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </div>
    )
}