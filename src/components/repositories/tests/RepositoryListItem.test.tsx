import React from 'react';
import { createRender } from '@material-ui/core/test-utils';

import RepositoryListItem from '../RepositoryListItem';
import { MemoryRouter } from 'react-router';

const repository: Repository = {
  id: 456,
  full_name: 'Repo repo man',
  name: 'repo man',
  url: 'https://awesome.com',
  description: 'stuff stuf stuff',
  private: false,
  owner: {
    login: "dude #1",
    id: 8910,
    avatar_url: 'https://picture1.com',
    url: 'https://dude1.com',

  }
};

describe('<RepositoryListItem/>', () => {
  test('it renders correctly', () => {
    const render = createRender();
    expect(render(
      <MemoryRouter>
        <RepositoryListItem
          selectedRepository={repository}
          repository={repository}
          isLoadingIssues={false}
          onSelect={() => null}
        />
      </MemoryRouter>
      )
    ).toMatchSnapshot();
  });
});
