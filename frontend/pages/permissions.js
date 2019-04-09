import { PleaseSignIn } from "../components/PleaseSignIn";
import Permissions from "../components/Permissions";
import gql from "graphql-tag";

const ALL_USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const PermissionsPage = props => (
  <div>
    <PleaseSignIn>
      <Permissions />
    </PleaseSignIn>
  </div>
);

export default PermissionsPage;
export { ALL_USERS_QUERY };
