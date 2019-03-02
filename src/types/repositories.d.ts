interface Repository {
  id: number;
  name: string;
  full_name: string;
  owner: Owner;
  private: boolean;
  url: string;
  description: string;
}

interface Owner {
  login: string,
  id: number,
  avatar_url: string;
  url: string;
}
