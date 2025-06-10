import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useContext, useState } from "react";
import { TodosContext } from "../contexts/todosContext";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField } from "@mui/material";

// Icons
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";

export default function Todo({ todo }: any) {
  const [showDeleteDialog, setShowDeleteDialog]: any = useState(false);
  const [showUpdateDialog, setShowUpdateDialog]: any = useState(false);
  const [updateTodo, setUpdateTodo]: any = useState({
    title: todo.title,
    details: todo.details,
  });
  const { todos, setTodos }: any = useContext(TodosContext);

  function handleCheckClick() {
    const updateTodos = todos.map((t: { id: string; isCompleted: boolean }) => {
      if (t.id == todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
  }

  function handleDeleteClick() {
    setShowDeleteDialog(true);
  }

  function handleCloseDelete() {
    setShowDeleteDialog(false);
  }

  function handleUpdateClick() {
    setShowUpdateDialog(true);
  }
  function handleCloseUpdate() {
    setShowUpdateDialog(false);
  }
  function handleDeleteConfirm() {
    const updateTodos = todos.filter(
      (t: { id: string; isCompleted: boolean }) => {
        return t.id != todo.id;
      }
    );
    setTodos(updateTodos);
  }
  function handleUpdateConfirm() {
    const updateTodos = todos.map((t: { id: string; isCompleted: boolean }) => {
      if (t.id == todo.id) {
        return { ...t, title: updateTodo.title, details: updateTodo.details };
      } else {
        return t;
      }
    });
    setTodos(updateTodos);
    setShowUpdateDialog(false);
  }
  return (
    <React.Fragment>
      <Dialog
        open={showDeleteDialog}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {"Are you sure about delete this task ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You cannot back after remove
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Cancle</Button>
          <Button onClick={handleDeleteConfirm} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={showUpdateDialog}
        onClose={handleCloseUpdate}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Update task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task Title"
            fullWidth
            variant="standard"
            value={updateTodo.title}
            onChange={(e) => {
              setUpdateTodo({ ...updateTodo, title: e.target.value });
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task Detail"
            fullWidth
            variant="standard"
            value={updateTodo.details}
            onChange={(e) => {
              setUpdateTodo({ ...updateTodo, details: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUpdate}>Cancle</Button>
          <Button onClick={handleUpdateConfirm} autoFocus>
            Done
          </Button>
        </DialogActions>
      </Dialog>
      <Card
        className="todoCard"
        sx={{
          minWidth: 275,
          background: "#123456",
          color: "white",
          marginTop: "15px",
          maxHeight: "90vh",
          overflow: "scroll",
        }}>
        <CardContent style={{ textAlign: "center" }}>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "left",
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}>
                {todo.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "left",
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}>
                {todo.details}
              </Typography>
            </Grid>
            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center">
              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  color: "#b23c17",
                  background: "white",
                  border: "solid #b23c17 3px",
                }}
                onClick={() => {
                  handleDeleteClick();
                }}>
                <DeleteIcon />
              </IconButton>
              <IconButton
                className="iconButton"
                aria-label="edit"
                style={{
                  color: "#1769aa",
                  background: "white",
                  border: "solid #1769aa 3px",
                }}
                onClick={() => {
                  handleUpdateClick();
                }}>
                <EditIcon />
              </IconButton>
              <IconButton
                className="iconButton"
                aria-label="check"
                style={{
                  color: todo.isCompleted ? "white" : "#8bc34a",
                  background: todo.isCompleted ? "#8bc34a" : "white",
                  border: "solid #8bc34a 3px",
                }}
                onClick={() => {
                  handleCheckClick();
                }}>
                <CheckIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
