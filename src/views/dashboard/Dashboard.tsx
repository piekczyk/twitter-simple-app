import React, {ReactElement, useState} from 'react';
import {RouteComponentProps} from 'react-router-dom';

import {Header} from 'components/header';

import './styles.scss';

type DashboardProps = {
  render?: (props: {filter: string}) => ReactElement;
};

export const Dashboard: React.FC<RouteComponentProps<{id?: string}> & DashboardProps> = ({
  children,
  match: {
    params: {id},
  },
  render,
}) => {
  const [filter, setFilter] = useState('');

  return (
    <div className="dashboard">
      <Header postId={id} handleFilter={setFilter} />
      {render && render({filter})}
      {children}
    </div>
  );
};
