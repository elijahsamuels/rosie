import React, { useState, useEffect } from "react";
// import { fetchPipelineData, fetchJobData } from "../../utils/getGitlabData";
import { getGitlabPipelineDataGraphQL} from "../../utils/getGitlabPipelineDataGraphQL";
import { paragraphs } from "./constants";

const Why = () => {
  // const [jobData, setJobData] = useState([]);
  const [pipelineData, setPipelineData] = useState([]);

  useEffect(() => {
    // const getJobData = async () => {
    //   let data = await fetchJobData();
    //   setJobData(data);
    // };
    // const getPipelineData = async () => {
    //   let data = await fetchPipelineData();
    //   setPipelineData(data);
    // };
    const getPipelineData = async () => {
      let data = await getGitlabPipelineDataGraphQL();
      setPipelineData(data.project.pipelines.nodes);
    };

    getPipelineData();
  }, []);

  const WhyParagraphs = () => {
    return paragraphs.map((paragraph, index) => {
      return (
        <p className="" key={index}>
          {paragraph}
        </p>
      );
    });
  };

  const JobDataTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Status</th>
            <th>Stage</th>
            <th>Failure Reason</th>
            <th>Artifact Link</th>
          </tr>
        </thead>
        <tbody>
          <JobDataRow />
        </tbody>
      </table>
    );
  };

  const JobDataRow = () => {
    return pipelineData.map((node, index) => {
      return (
        <React.Fragment key={index}> 
          <tr>
            <td className="index">{index + 1}</td>
            <td className="status">{node.status}</td>
            <td className="stage">{node.stages.nodes[0]?.name || null}</td>
            <td className="failureReason">{node.failureReason || "N/A"}</td>
            <td className="link">
              <a href={`https://gitlab.com${node.jobArtifacts[0]?.downloadPath}`}>
                {node.jobArtifacts[0] ? `${node.jobArtifacts[0].name} @ ${parseInt(node.jobArtifacts[0].size / 1000)}kb`: ""}
              </a>
            </td>
          </tr>
        </React.Fragment>
      );
    });
  };

  return (
    <div className="container">
      <div className="title">Why Rosie</div>
      <div className="paragraph">
        <WhyParagraphs />
      </div>

      <div className="table">
        <JobDataTable />
      </div>
    </div>
  );
};

export default Why;
