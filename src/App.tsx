import { Fragment } from 'react';
import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/common/layout';
import Flex from 'components/example/flex';
import Grid from 'components/example/grid';

function App() {
  return (
    <Fragment>
      <Global
        styles={{
          'html, body, body > div': {
            margin: 0,
            width: '100%',
            height: '100%'
          }
        }}
      />

      <Routes>
        <Route path={'/*'} element={<Layout />}>
          <Route path={'flex'} element={<Flex />} />
          <Route path={'grid'} element={<Grid />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
