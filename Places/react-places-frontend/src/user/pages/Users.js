import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  // Creating temporary dumby data that will later be relaced with
  const USERS = [
    {
      id: 'u1',
      name: 'Random Joe',
      image:
        'https://pbs.twimg.com/profile_images/1093332495469330433/KfSjIp5h_400x400.jpg',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
