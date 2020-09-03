// @flow
import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './Todo.css';

function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem alignItems="flex-start">
                <ListItemAvatar>

                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Deadline"/>
            </ListItem>
        </List>
 
    )
}

export default Todo;
