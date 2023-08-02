import { useQuery } from '@tanstack/vue-query';

const useIssues = () => {
  const issuesQuery = useQuery(['issues', getIssues]);
  return {};
};

export default useIssues;
