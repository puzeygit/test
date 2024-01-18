import React, { useCallback  } from 'react';
import useEventStore from '../../store/EventStore';
import { message } from 'antd';
import Page from '../../components/Page';
import EventList from '../../components/EventList';

const Delete: React.FC = ()=> {
  const { list, removeEvent } = useEventStore();

  const handleDelete = useCallback((id?: string) => {
    removeEvent(id as string)
      message.success({
        content: `Событие успешно удалено`,
      });
  }, [])

  return (
    <Page pageKey="/delete" title='Удалить событие'>
      <EventList list={list} handleClick={handleDelete}/>
    </Page>
  )
}

export default Delete;
