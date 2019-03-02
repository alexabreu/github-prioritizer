interface State {
  tokens: {
    selectedToken: Token | undefined;
    collection: Token[];
  },
  repositories: {
    isLoading: boolean;
    selectedRepository: Repository | undefined;
    collection: Repository[];
  },
  issues: {
    isLoading: boolean;
    collection: Record<Repository['id'], Issue[]>;
    priority: Record<Repository['id'], Issue['id'][]>;
  }
}