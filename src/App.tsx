// import routes from '@dist/cjs';
// import routes from '@dist/esm';
import routes from '@package';
import { FunctionComponent } from 'react';
import { useRoutes } from 'react-router-dom';

const App: FunctionComponent = () => {
  const content = useRoutes(routes);

  return (
    <div className="container">
      {content}
    </div>
  );
};

export default App;
