interface Repository {
  id: number;
  name: string;
  full_name: string;
  owner: Owner;
  private: boolean;
  issues_url: string;
}

interface Owner {
  login: string,
  id: number,
  avatar_url: string;
  url: string;
}
