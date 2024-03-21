import axios from "axios";
const {
  REACT_APP_GITLAB_API_TOKEN: ACCESS_TOKEN,
  REACT_APP_GITLAB_PROJECT_ID: PROJECT_ID,
  REACT_APP_GITLAB_BASE_URL: BASE_URL,
} = process.env;

const config = {
  method: "get",
  maxBodyLength: Infinity,
  headers: {
    "PRIVATE-TOKEN": ACCESS_TOKEN,
  },
};

const fetchRepositoryData = async (config) => {
  try {
    const response = await axios.request(config);
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPipelineData = async () => {
  config.url = `${BASE_URL}${PROJECT_ID}/pipelines?per_page=11`;
  const data = await fetchRepositoryData(config);

  return data;
};

export const fetchJobData = async () => {
  config.url = `${BASE_URL}${PROJECT_ID}/jobs?per_page=10`;
  const data = await fetchRepositoryData(config);

  return data;
};
