import React, { Component, MouseEvent } from 'react';
import { 
  ListItem, 
  ListItemAvatar, 
  ListItemText,
  ListItemSecondaryAction, 
  Avatar, 
  IconButton,
} from '@material-ui/core';
import KeyIcon from '@material-ui/icons/VpnKey';
import DeleteIcon from '@material-ui/icons/Delete';

export interface TokenItemProps {
  token: Token;
  isSelected: boolean;
  onDelete: (e: MouseEvent<HTMLElement>, id: Token['id']) => void;
  onSelect: (e: MouseEvent<HTMLElement>, id: Token['id']) => void;
}
 
 
class TokenItem extends Component<TokenItemProps> {
  render() {
    const { token, isSelected } = this.props;

    return (
      <ListItem button selected={isSelected} onClick={this.handleSelect}>
        <ListItemAvatar>
          <Avatar>
            <KeyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={token.token}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete" onClick={this.handleDelete}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }

  private handleSelect = (e: MouseEvent<HTMLElement>) => {
    const { token, onSelect } = this.props;

    onSelect(e, token.id);
  }

  private handleDelete = (e: MouseEvent<HTMLElement>) => {
    const { token, onDelete } = this.props;

    onDelete(e, token.id);
  }
}
 
export default TokenItem;
