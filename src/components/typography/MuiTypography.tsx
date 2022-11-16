import {Typography} from "@mui/material"


const MuiTypography = () => {
    return(
        <div>
            <Typography variant="h1"> h1 heading</Typography>
            <Typography variant="h2"> h2 heading</Typography>
            <Typography variant="h3"> h3 heading</Typography>

            {/* gutterBottom is to give some margin at the bottom */}
            <Typography variant="h4" gutterBottom> h4 heading</Typography>
            <Typography variant="h5"> h5 heading</Typography>
            <Typography variant="h6"> h6 heading</Typography>

            <Typography variant="body1"> body 1 : This is the variant of body 1 tag </Typography>
            <Typography variant="body2"> body 2 : This is the variant of body 2 tag </Typography>

            <Typography variant="subtitle1"> subtitle 1 </Typography>
            <Typography variant="subtitle2"> subtitle 2 </Typography>
        </div>
    )
}

export default MuiTypography;