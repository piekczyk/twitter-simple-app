import React, {useCallback, memo, MouseEvent} from 'react';
import {useHistory} from 'react-router-dom';

import './style.scss';

type TileProps = {
  id: number;
  userId: number;
  title: string;
};

export const Tile: React.FC<TileProps> = memo(({id, userId, title}) => {
  const history = useHistory();

  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>, id: number) => {
      e.preventDefault();
      history.push(`/post/${id}`);
    },
    [history],
  );

  return (
    <div onClick={e => handleClick(e, id)} className="tile">
      <p>UserId: {userId}</p>
      <p>Title: {title}</p>
    </div>
  );
});
