import gql from "graphql-tag";
import { DataValue } from "react-apollo";

import { resumeFullFrag } from "./resume_full.fragment";
import { GetResume, GetResumeVariables } from "./apollo-gql";

export const getResumeQuery = gql`
  query GetResume($input: GetResumeInput!) {
    getResume(input: $input) {
      ...ResumeFullFrag
    }
  }

  ${resumeFullFrag}
`;

export type GetResumeProps = DataValue<GetResume, GetResumeVariables>;
