import React, { useState } from 'react';
import { CustomAvatarAndSlotReact } from './CustomAvatarAndSlotReact';
import { UserItemReact } from './UserItem';

export function WholeCollectionAsEvent() {
  const [users, setUsers] = useState<string[]>([]);
  return (
    <CustomAvatarAndSlotReact users={['banana']} onUsersChanged={(e) => {setUsers(e.detail.users)}} >

    </CustomAvatarAndSlotReact>
  );
}
