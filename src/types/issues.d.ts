interface Issue {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
  assignee?: Owner;
  repository: Repository;
}
