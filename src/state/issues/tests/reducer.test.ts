import { normalizeIssues, reorderIssuePriority } from "../reducer";

const issues: Issue[] = [
  {
    id: 123,
    title: 'Awesome issue!',
    body: 'make this thing better.',
    created_at: '2019-04-01',
    updated_at: '2019-04-02',
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
    },
  },
  {
    id: 345,
    title: 'Better issue!',
    body: 'Helpful information',
    created_at: '2019-03-01',
    updated_at: '2019-03-02',
    assignee: {
      login: "dude #3",
      id: 256,
      avatar_url: 'https://picture3.com',
      url: 'https://dude3.com',
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
    },
  },
];

describe('Issues reducer', () => {
  describe('normalizesIssues', () => {
    test('it converts the issues array to a map indexed by issue id', () => {
      expect(normalizeIssues(issues)).toMatchObject({
        123: {
          id: 123,
          title: 'Awesome issue!',
        },
        345: {
          id: 345,
          title: 'Better issue!',
        },
      })
    })
  });

  describe('reorderIssuePriority', () => {
    test('it correctly returns a new priority array', () => {
      expect(reorderIssuePriority([123, 345, 678], 0, 1)).toMatchObject([345, 123, 678]);
      expect(reorderIssuePriority([123, 345, 678], 2, 0)).toMatchObject([678, 123, 345]);
    })
  });
})