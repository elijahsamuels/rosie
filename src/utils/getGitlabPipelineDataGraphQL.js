import axios from "axios";
import { pipelinesQuery } from './graphQLQueries'
const {
  REACT_APP_GITLAB_API_TOKEN: ACCESS_TOKEN,
} = process.env;

// https://docs.gitlab.com/ee/api/graphql/reference/#pipeline
export const getGitlabPipelineDataGraphQL = async () => {
  let data = JSON.stringify({
		query: pipelinesQuery,
    variables: {},
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://gitlab.com/api/graphql",
    headers: {
      "Content-Type": "application/json",
      "Private-Token": ACCESS_TOKEN,
    },
    data,
  };

  let axiosResponse = axios
    .request(config)
    .then((response) => {
			const { data } = response.data;
      console.log('Pipeline.nodes', response.data.data.project.pipelines.nodes);
      // console.log(JSON.stringify(response.data));
			return data
    })
    .catch((error) => {
      console.log(error);
    });
		return axiosResponse
};

// const fetchRepositoryData = async (config) => {
//   try {
//     const response = await axios.request(config);
//     const { data } = response;
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchPipelineData = async () => {
//   config.url = `${BASE_URL}${PROJECT_ID}/pipelines?per_page=11`;
//   const data = await fetchRepositoryData(config);

//   return data;
// };

// export const fetchJobData = async () => {
//   config.url = `${BASE_URL}${PROJECT_ID}/jobs?per_page=10`;
//   const data = await fetchRepositoryData(config);

//   return data;
// };
