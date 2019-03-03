import React from 'react';
import { createRender } from '@material-ui/core/test-utils';

import IssueListItem from '../IssueListItem';

const issue: Issue = {
  id: 345,
  title: 'Awesome issue!',
  body: 'Helpful information',
  created_at: '2019-03-01',
  updated_at: '2019-03-02',
  assignee: {
    login: "dude #2",
    id: 256,
    avatar_url: 'https://picture2.com',
    url: 'https://dude2.com',
  },
  repository: {
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
  }
}

describe('<IssueListItem/>', () => {
  test('it renders correctly', () => {
    const render = createRender();
    expect(render(<IssueListItem issue={issue}/>)).toMatchSnapshot();
  });
});
