import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useEventStore, { ShedulerEvent } from '../../store/EventStore';
import EventForm from '../../components/EventForm';
import Page from '../../components/Page';
import { Empty } from 'antd';

const EventPage = () => {
  const { id } = useParams();
  const [formValue, setFormValue] = useState<ShedulerEvent| undefined>(undefined);
  const  { list } = useEventStore()


  useEffect(()=>{
    if (id){
      const neededEvent = list.find((el) => el.id === id)
      setFormValue(neededEvent)
    }
  }, [id])

  if (!formValue){
    return <Empty description="Похоже, такого события не существует" />
  }


  return (
    <Page title='Просмотр события' backUrl={'/edit'} pageKey='/edit'>
      {
        formValue && <EventForm initFormValue={formValue} id={id}/>
      }
    </Page>
  )
  
}

export default EventPage;
