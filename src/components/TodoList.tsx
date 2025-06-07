import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Components
import Todo from "./Todo"

// Others
import {v4 as uuidv4} from 'uuid'

const todos:{
  id: string,
  title: string,
  details: string,
  isCompleted: boolean
}[] = [
  {
    id: uuidv4(),
    title: "Read a Book",
  details: "One Book",
  isCompleted: false
  },
  {
    id: uuidv4(),
    title: "Read a Book",
    details: "One Book",
    isCompleted: false
  },
  {
      id: uuidv4(),
      title: "Read a Book",
      details: "One Book",
      isCompleted: false
  }
]

export default function TodoList() {
  const uitodo = todos.map((t)=>{
    return <Todo key={t.id} title={t.title} details={t.details}/>
  })
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275}}>
      <CardContent style={{textAlign: "center"}}>
        <Typography gutterBottom variant="h2" sx={{ color: 'text.secondary' }}>
          Tasks
        </Typography>
        <Divider />
        <ToggleButtonGroup
         style={{marginTop: "20px"}}
          color="primary"
          // value={alignment}
          exclusive
          // onChange={handleChange}
          aria-label="Platform"
         >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="done">Done</ToggleButton>
        <ToggleButton value="wait">NDone</ToggleButton>
      </ToggleButtonGroup>
      {/* All todo */}
      {uitodo}
      <Grid container spacing={2} style={{marginTop: "20px"}}>
           <Grid size={4}><Button style={{width: "100%", height: "100%", backgroundColor: "#123456"}}variant="contained">Add</Button></Grid>
           <Grid size={8}><TextField style={{width: "100%"}} id="outlined-basic" label="Name Task" variant="outlined" /></Grid>
      </Grid>
      </CardContent>
    </Card>
    </Container>
  );
}