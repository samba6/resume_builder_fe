import gql from "graphql-tag";
import { MutationFn, graphql } from "react-apollo";

import { resumeFullFrag } from "./resume_full.fragment";
import { UpdateResume, UpdateResumeVariables } from "./apollo-gql";

export const updateResume = gql`
  mutation UpdateResume($input: UpdateResumeInput!) {
    updateResume(input: $input) {
      resume {
        ...ResumeFullFrag
      }
    }
  }

  ${resumeFullFrag}
`;

export default updateResume;

export interface UpdateResumeProps {
  updateResume?: MutationFn<UpdateResume, UpdateResumeVariables>;
}

export const updateResumeGql = graphql<
  {},
  UpdateResume,
  UpdateResumeVariables,
  UpdateResumeProps | void
>(updateResume, {
  props: ({ mutate }) => {
    if (!mutate) {
      return undefined;
    }

    return {
      updateResume: mutate
    };
  }
});
