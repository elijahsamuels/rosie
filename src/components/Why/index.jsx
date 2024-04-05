import React, { useState, useEffect } from "react";
// import { fetchPipelineData, fetchJobData } from "../../utils/getGitlabData";
import { getGitlabPipelineDataGraphQL} from "../../utils/getGitlabPipelineDataGraphQL";
import { paragraphs } from "./constants";
import dogLoading from '../../images/dogLoading.gif'
import "./styles.css";

const Why = () => {
  // const [jobData, setJobData] = useState([]);
  const [pipelineData, setPipelineData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
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

  const Loading = () => {
    return (
      <>
        <div className="loading-container">
          <img src={dogLoading} alt="loading" className="dog-loading" />
        </div>
        <div className="loading-container">Loading . . .</div>
      </>
    );
  };

  const JobDataTable = () => {
    return (
      <div className="job-data-table">
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
      </div>
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
              <a
                href={`https://gitlab.com${node.jobArtifacts[0]?.downloadPath}`}>
                {node.jobArtifacts[0]
                  ? `${node.jobArtifacts[0].name} @ ${parseInt(
                      node.jobArtifacts[0].size / 1000
                    )}kb`
                  : ""}
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

      {(isLoading && <Loading />) || <JobDataTable />}
    </div>
  );
};

export default Why;
