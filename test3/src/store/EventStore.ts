import { useState } from 'react';
import useLocalStorage from '../components/useLocalStorage';


export enum TypeEvent {
  warning = 'warning',
  success = 'success',
  error = 'error'
}

export type ShedulerEvent = {
  type: TypeEvent | null;
  id?: string;
  description?: string;
  date?: Date;
  noticeDate?: Date;
}

const useEventStore = () => {
  const { getItem, setItem } = useLocalStorage('eventsList');
  const [list, setList] = useState<ShedulerEvent[]>(getItem('events') as ShedulerEvent[] ?? []);
  
  const addEvent = (event: ShedulerEvent) => {
    setList((prev)=> [...prev, event])
    setItem('events', [...getItem('events') as ShedulerEvent[] ?? [], event])
  };
  
  const updateEvent = (updatedEvent: ShedulerEvent) => {
    setList((prev) => prev.map((event) => event.id === updatedEvent.id ? updatedEvent : event))
    setItem('events', [...getItem('events')]?.map(((event) => event.id === updatedEvent.id ? updatedEvent : event)))
  };
  
  const removeEvent = (eventId: string) => {
    setList((prev) => prev.filter((event) => event.id !== eventId))
    setItem('events', [...getItem('events')]?.filter((event) => event.id !== eventId))
  };

  
  return {
    list,
    addEvent,
    updateEvent,
    removeEvent,
  };
};

export default useEventStore;
