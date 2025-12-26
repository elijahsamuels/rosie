import axios from "axios";

export const getGitlabPipelineDataGraphQL = async () => {
  try {
    const response = await axios.post("/.netlify/functions/gitlab-proxy");
    return response.data;
  } catch (error) {
    console.error("Error fetching GitLab data:", error);
    throw error;
  }
};
