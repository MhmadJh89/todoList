import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// Components
import Todo from "./Todo"

export default function TodoList() {
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
      <Todo />
      </CardContent>
    </Card>
    </Container>
  );
}