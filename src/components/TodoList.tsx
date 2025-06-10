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
import { useState, useContext, useEffect } from 'react';
import { TodosContext } from '../contexts/todosContext';

// Components
import Todo from "./Todo"

// Others
import {v4 as uuidv4} from 'uuid'


export default function TodoList() {
  const {todos, setTodos}: any = useContext(TodosContext)
  const [displayTodo, setDisplayTodo] = useState('all')  
  const [titleInput, setTitleInput] = useState("");

  const completeTodo = todos.filter((t:{isCompleted: boolean})=>{
    return  t.isCompleted
  })

  const notCompleteTodo = todos.filter((t: {isCompleted: boolean})=>{
    return  !t.isCompleted
  })

  let todosBeRender = todos
  if (displayTodo == 'complete'){
    todosBeRender = completeTodo
  } else if (displayTodo == 'non-complete'){
    todosBeRender = notCompleteTodo
  }
  const uitodo = todosBeRender.map((t: { id: string; })=>{
    return <Todo key={t.id} todo = {t} />
  })
  

  useEffect(()=>{
    const storageTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(storageTodos)
  }, []);

  function changeDisplay(e: any){
    setDisplayTodo(e.target.value)
  }

  function handleAddClick(){
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false
    }
    const updateTodos = [...todos, newTodo] 
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
    setTitleInput("");
  }
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
          value={displayTodo}
          exclusive
          onChange={changeDisplay}
          aria-label="Platform"
         >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="complete">Done</ToggleButton>
        <ToggleButton value="non-complete">NDone</ToggleButton>
      </ToggleButtonGroup>
      {/* All todo */}
      {uitodo}
      <Grid container spacing={2} style={{marginTop: "20px"}}>
           <Grid size={4}><Button style={{width: "100%", height: "100%", backgroundColor: "#123456"}} variant="contained" onClick={() => {handleAddClick()}}>Add</Button></Grid>
           <Grid size={8}><TextField style={{width: "100%"}} id="outlined-basic" label="Name Task" variant="outlined" value={titleInput} onChange={(e) => {setTitleInput(e.target.value)}}/></Grid>
      </Grid>
      </CardContent>
    </Card>
    </Container>
  );
}