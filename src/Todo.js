// @flow
import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './Todo.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Button } from '@material-ui/core';
import db from "./firebase";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

function Todo(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [input, setInput] = React.useState('');


    const handleOpen = () => {
      setOpen(true);
    };

    const updateTodo = () => {
        db.collection('todo').doc(props.todo.id).set({
            text: input
        }, {merge: true})
        setOpen(false);
      };

    return (
        <div>
        <Modal open={open} onClose={e => setOpen(false)}>
            <div style={modalStyle} className={classes.paper}>
                <h1>Update Tasks</h1>
                <input value={input} placeholder={props.todo.todo} onChange={event => setInput(event.target.value)}/>
                <Button className="modal-icon" onClick={updateTodo} variant="contained" color="primary">Update</Button>
            </div> 
        </Modal>
        <List className="todo_list">
            <ListItem alignItems="flex-start">
                <ListItemAvatar>

                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Task"/>
            </ListItem>
            <div className="logos">
            <button onClick={e => setOpen(true)}>Edit</button>
            <DeleteForeverIcon onClick={event => db.collection('todo').doc(props.todo.id).delete().then(function() {
                console.log("Document successfully deleted!");
                console.log(props.todo);
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            })}></DeleteForeverIcon>
            </div>
        </List>
        </div>
    )
}

export default Todo;
