interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
  assignee?: Owner;
  repository: Repository;
}
