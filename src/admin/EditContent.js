import React from 'react';
import IsAuthenticated from '../util/IsAuthenticated';

export default function EditContent() {
  IsAuthenticated();

  return <div>Edit content</div>;
}
