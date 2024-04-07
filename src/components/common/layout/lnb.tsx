/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';

const LayoutLNB = () => {
  return (
    <div
      css={{
        width: '150px',
        borderRight: '1px solid gray',

        ul: {
          margin: 0,
          padding: 0,

          li: {
            listStyle: 'none'
          }
        }
      }}
    >
      <ul>
        <li>
          <Link to={'/flex'}>Flex</Link>
        </li>

        <li>
          <Link to={'/grid'}>Grid</Link>
        </li>
      </ul>
    </div>
  );
};

export default LayoutLNB;
