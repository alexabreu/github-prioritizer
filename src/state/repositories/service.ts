import Fetcher from '../utils/fetcher';

const baseUrl = '/user/repos';

const Service = {
  fetchRepositories: async (): Promise<Repository[]> => {
    return Fetcher.fetch(baseUrl)
  }
}

export default Service;
