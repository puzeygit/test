
import React from 'react';

import Page from '../../components/Page';
import EventForm from '../../components/EventForm';


type Props = {
  id?: string;
}
const Add: React.FC<Props> = ({id}) => {
  return (
    <Page title="Добавить событие" pageKey="/add">
      <EventForm id={id} />
    </Page>
  );
};

export default Add;
