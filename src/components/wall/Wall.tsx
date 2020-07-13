import React, {useEffect, useState} from 'react';

import {postsService} from 'services';
import {Details} from 'types/details';
import {isEmptyArr} from 'helpers';
import {Tile} from 'components/tile';
import {Modal} from 'components/modal';

import './style.scss';

type WallProps = {
  filter?: string;
};

export const Wall: React.FC<WallProps> = ({filter}) => {
  const [posts, setPosts] = useState<Details[]>([]);
  const [currentPosts, setCurrentPosts] = useState<Details[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Details[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const postsList = await postsService.getPosts();
        const sortedDesc = postsList.sort((item1, item2) => item2.id - item1.id);
        setPosts(sortedDesc);
      } catch (e) {
        setError(e.message);
      }
    })();
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      !isEmptyArr(posts) && setCurrentPosts(prevCurrentPosts => [...prevCurrentPosts, posts[i]]);
      i++;

      if (posts.length === i) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [posts]);

  useEffect(() => {
    if (filter) {
      const filtered = currentPosts.filter(
        post => post.title.includes(filter) || post.body.includes(filter),
      );
      setFilteredPosts(filtered);
    }
  }, [currentPosts, filter]);

  const clearError = () => {
    window.location.reload();
  };

  return (
    <div className="wall">
      {!isEmptyArr(currentPosts) &&
        !filter &&
        currentPosts.map(({title, userId, id}) => (
          <div className="wall-tile" key={id}>
            <Tile title={title} userId={userId} id={id} />
          </div>
        ))}
      {!isEmptyArr(currentPosts) &&
        filter &&
        filteredPosts.map(({title, userId, id}) => (
          <div className="wall-tile" key={id}>
            <Tile title={title} userId={userId} id={id} />
          </div>
        ))}
      {error && <Modal message={error} close={clearError} btnText="Reload" />}
    </div>
  );
};
