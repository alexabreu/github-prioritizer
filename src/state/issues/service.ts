import Fetcher from '../utils/fetcher';

const basePath = '/issues';

const Service = {
  fetchIssues: async (repository: Repository): Promise<Issue[]> => {
    return Fetcher.fetch(`${repository.url}${basePath}`, true)
  }
}

export default Service;
