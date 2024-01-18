import React, { useCallback } from 'react';
import useEventStore from '../../store/EventStore';
import { useNavigate } from 'react-router-dom';
import Page from '../../components/Page';
import EventList from '../../components/EventList';

const Edit: React.FC = () => {
  const { list } = useEventStore();
  const navigate = useNavigate();

  const handleClick = useCallback((id?: string) => {
      navigate(`/edit/${id}`)
  }, [])

  return (
    <Page pageKey="/edit" title='Редактировать'>
      <EventList list={list} handleClick={handleClick}/>
    </Page>
  );
};

export default Edit;
