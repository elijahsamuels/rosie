import axios from "axios";

const config = {
  method: "get",
  maxBodyLength: Infinity,
  headers: {
    // "PRIVATE-TOKEN": ACCESS_TOKEN,
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
  // config.url = `${BASE_URL}${PROJECT_ID}/pipelines?per_page=11`;
  const data = await fetchRepositoryData(config);

  return data;
};

export const fetchJobData = async () => {
  // config.url = `${BASE_URL}${PROJECT_ID}/jobs?per_page=10`;
  const data = await fetchRepositoryData(config);

  return data;
};
