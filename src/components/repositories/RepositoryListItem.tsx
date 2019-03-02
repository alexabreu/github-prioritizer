import React, { Component, MouseEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';



export interface RepositoryListItemProps {
  repository: Repository;
  onSelect: (id: Repository['id'], repositoryUrl: Repository['url']) => void;
  selectedRepository: Repository | undefined;
}

class RepositoryListItem extends Component<RepositoryListItemProps & RouteComponentProps> {
  public render() {
    const { repository, selectedRepository } = this.props;

    return (
      <ListItem
        alignItems="flex-start"
        button onClick={this.handleSelect}
        selected={repository.id === (selectedRepository && selectedRepository.id)}
      >
        <ListItemAvatar>
          <Avatar alt={repository.owner.login} title={repository.owner.login} src={repository.owner.avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={repository.name}
          secondary={repository.description}
        />
      </ListItem>
    );
  }

  private handleSelect = (e: MouseEvent<HTMLElement>) => {
    const { onSelect, repository, history } = this.props;

    history.replace(`/repos/${repository.id}/issues`);
    onSelect(repository.id, repository.url);
  }
}

export default withRouter(RepositoryListItem);
