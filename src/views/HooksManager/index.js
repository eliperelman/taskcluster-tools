import React from 'react';
import { Redirect } from 'react-router-dom';
import Clients from '../../components/Clients';
import HooksManager from './HooksManager';

const View = ({ credentials, match, history, location }) => {
  const [groupId, id] = location.hash.slice(1).split('/');

  if (groupId && id) {
    return <Redirect to={`/hooks/${groupId}/${id}`} />;
  } else if (groupId) {
    return <Redirect to={`/hooks/${groupId}`} />;
  }

  return (
    <Clients credentials={credentials} Hooks>
      {({ hooks }) => (
        <HooksManager
          history={history}
          hooks={hooks}
          hookGroupId={match.params.hookGroupId}
          hookId={match.params.hookId} />
      )}
    </Clients>
  );
};

export default View;
