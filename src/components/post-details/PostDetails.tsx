import React, {useEffect, useState} from 'react';

import {postsService} from 'services';
import {Details} from 'types/details';
import {Modal} from 'components/modal';

import './style.scss';

type DetailsProps = {
  id: string;
};

export const PostDetails: React.FC<DetailsProps> = ({id}) => {
  const [details, setDetails] = useState<Details>();
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const details = await postsService.getPostDetails(id);
        setDetails(details);
      } catch (e) {
        setError(e.message);
      }
    })();
  }, [id]);

  const randomUserName = Math.random().toString(36).substring(7);

  const clearError = () => {
    window.location.reload();
  };

  return (
    <>
      {details ? (
        <div className="post-details">
          <h1>Details</h1>
          <p>User name: {randomUserName}</p>
          <p>Id: {details.id}</p>
          <p>Title: {details.title}</p>
          <p>Body: {details.body}</p>
        </div>
      ) : (
        <>Loading post details</>
      )}
      {error && <Modal message={error} close={clearError} btnText="Reload" />}
    </>
  );
};
