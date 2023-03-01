import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// deprecated components - left in for reference
// import DeckForm from '../components/DeckForm';
// import DeckList from '../components/DeckList';

// User profile specific version of DeckList - includes the link to view/edit the user's decks.
import ProfileDeckList from '../components/ProfileDeckList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be the owner to see this deck.
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 id="greetings" className="col-12 col-md-10 bg-info text-light p-3 mb-5">
          Welcome, {Auth.getProfile().data.username}
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <ProfileDeckList
            decks={user.decks}
            title={`${user.username}'s decks...`}
            // description={user.decks.deckDescription}
            showTitle={false}
            showUsername={false}
          />
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
