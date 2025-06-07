import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';

export default function Todo(){
    return(
    <React.Fragment>
        <Card className="todoCard" sx={{ minWidth: 275 , background:"#123456", color: "white", marginTop:"15px"}}>
        <CardContent style={{textAlign: "center"}}>
        <Grid container spacing={2}>
           <Grid size={4} display="flex" justifyContent="space-around" alignItems="center"> 
           <IconButton className="iconButton" aria-label="delete" style={{color:"#b23c17", background: "white", border: "solid #b23c17 3px"}}><DeleteIcon /></IconButton>
           <IconButton className="iconButton" aria-label="edit"  style={{color:"#1769aa", background: "white", border: "solid #1769aa 3px"}}><EditIcon /></IconButton>
           <IconButton className="iconButton" aria-label="check"  style={{color:"#8bc34a", background: "white", border: "solid #8bc34a 3px"}}><CheckIcon /></IconButton>
           </Grid>
           <Grid size={8}>
            <Typography variant="h5" sx={{textAlign: "right"}}>Task 1</Typography>
            <Typography variant="h6" sx={{textAlign: "right"}}>Task 1</Typography>
           </Grid>
        </Grid>
      
        </CardContent>
        </Card>
    </React.Fragment>
    )
}