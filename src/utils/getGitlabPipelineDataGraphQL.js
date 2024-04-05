import axios from "axios";
const {
  REACT_APP_GITLAB_API_TOKEN: ACCESS_TOKEN,
} = process.env;


// https://docs.gitlab.com/ee/api/graphql/reference/#pipeline
export const getGitlabPipelineDataGraphQL = async () => {
  let data = JSON.stringify({
    query: `query { project(fullPath: "elijahsamuels/rosie") { pipelines(first: 25) { nodes { id status failureReason createdAt updatedAt stages { nodes { name status jobs {
			nodes {
				name
			}
		}
} } jobArtifacts { downloadPath fileType name size expireAt} } } } }`,
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
      console.log(response.data);
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
