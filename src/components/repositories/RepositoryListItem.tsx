import React, { Component, MouseEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import { ListItem, ListItemText, ListItemAvatar, Avatar, CircularProgress } from '@material-ui/core';



export interface RepositoryListItemProps {
  repository: Repository;
  onSelect: (id: Repository['id'], repositoryUrl: Repository['url']) => void;
  selectedRepository: Repository | undefined;
  isLoadingIssues: boolean;
}

class RepositoryListItem extends Component<RepositoryListItemProps & RouteComponentProps> {
  public render() {
    const { repository, isLoadingIssues } = this.props;

    return (
      <ListItem
        alignItems="flex-start"
        button onClick={this.handleSelect}
        selected={this.isSelected}
      >
        <ListItemAvatar>
          <Avatar alt={repository.owner.login} title={repository.owner.login} src={repository.owner.avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={repository.name}
          secondary={repository.description}
        />
        {(this.isSelected && isLoadingIssues) && <CircularProgress color="secondary" />}
      </ListItem>
    );
  }

  private get isSelected() {
    const { repository, selectedRepository } = this.props;

    return repository.id === (selectedRepository && selectedRepository.id);
  }

  private handleSelect = (e: MouseEvent<HTMLElement>) => {
    const { onSelect, repository, history } = this.props;

    history.replace(`/repos/${repository.id}/issues`);
    onSelect(repository.id, repository.url);
  }
}

export default withRouter(RepositoryListItem);
