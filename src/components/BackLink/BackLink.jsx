import { Link } from 'react-router-dom';
export const BackLink = ({ to }) => {
  return (
    <div>
      <Link to={to}>Back</Link>
    </div>
  );
};
