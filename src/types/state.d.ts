interface State {
  tokens: {
    selectedToken: Token | undefined;
    collection: Token[];
  },
  repositories: {
    isLoading: boolean;
    selectedRepository: Repository | undefined;
    collection: Repository[];
  }
}