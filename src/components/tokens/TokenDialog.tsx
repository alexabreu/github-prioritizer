import React, { Component, ChangeEvent, MouseEvent, FormEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withRouter, RouteComponentProps } from 'react-router'
import { Button, Divider, withStyles, WithStyles } from '@material-ui/core';
import TokenList from './TokenList';
import styles from './styles/TokenDialog';
import WithTokens, { WithTokensProps } from './containers/WithTokens';

export interface TokenDialogState {
  newToken: string;
}

class TokenDialog extends Component<
  WithTokensProps &
  RouteComponentProps &
  WithStyles, 
  TokenDialogState
> {

  public state: TokenDialogState = {
    newToken: '',
  };

  render() {
    const { tokens, selectedToken, classes } = this.props;
    const { newToken } = this.state;

    return (
      <Dialog open={this.isOpen} onClose={this.handleClose} className={classes.root} maxWidth="sm" fullWidth>
        <DialogTitle>Set GitHub API Token</DialogTitle>
        <form className={classes.form} onSubmit={this.handleAddToken}>
          <TextField className={classes.input} value={newToken} label="GitHub Token" onChange={this.handleChange}/>
          <Button type="primary" variant="outlined">Add</Button>
        </form>
        <Divider className={classes.divider}/>
        <TokenList
          tokens={tokens}
          selectedToken={selectedToken}
          onSelectToken={this.handleSelect}
          onDeleteToken={this.handleDelete}
        />
      </Dialog>
    );
  }

  private get isOpen() {
    const { location: { search } } = this.props;

    return search.includes('change-token');
  }

  private handleClose = () => {
    const { history, location } = this.props;
    const newSearch = location.search.replace('change-token', '');

    history.replace({
      pathname: location.pathname,
      search: newSearch,
    })
  }

  private handleAddToken = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    const { addNewToken } = this.props;

    addNewToken(this.state.newToken);
    this.setState({ newToken: '' });
  }

  private handleSelect = (e: MouseEvent<HTMLElement>, id: Token['id']) => {
    const { selectToken } = this.props;

    selectToken(id);

    this.handleClose();
  }

  private handleDelete = (e: MouseEvent<HTMLElement>, id: Token['id']) => {
    const { deleteToken } = this.props;

    deleteToken(id);
  }

  private handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ newToken: e.target.value })
  }
}

export default withRouter(withStyles(styles)(WithTokens(TokenDialog)));
