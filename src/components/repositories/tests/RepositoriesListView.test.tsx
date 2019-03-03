import React from 'react';
import { createRender } from '@material-ui/core/test-utils';

import RepositoriesListView from '../RepositoriesListView';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';

const repositories: Repository[] = [
  {
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
  },
  {
    id: 4324,
    full_name: 'other repo',
    name: 'sweet app',
    url: 'https://app.com',
    description: 'money money money',
    private: false,
    owner: {
      login: "dude #7",
      id: 430,
      avatar_url: 'https://picture7.com',
      url: 'https://dude7.com',
    }
  },
];

const fakeStore = {
  subscribe: () => null,
  dispatch: () => null,
  getState: () => {
    return {
      repositories: {
        collection: repositories
      },
      issues: {
        isLoading: false
      }
    }
  }
}

describe('<RepositoriesListView/>', () => {
  test('it renders correctly', () => {
    const render = createRender();
    expect(render(
      <Provider store={fakeStore as any}>
        <MemoryRouter>
          <RepositoriesListView {...{} as any}/>
        </MemoryRouter>
      </Provider>
    )
    ).toMatchSnapshot();
  });
});
