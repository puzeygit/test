import React, { useEffect, useState } from 'react'

import dayjs, { Dayjs } from 'dayjs';
import EventCard from '../../../../components/EventCard';
import { Badge, Empty } from 'antd';
import { ShedulerEvent } from '../../../../store/EventStore';
import { PresetStatusColorType } from 'antd/es/_util/colors';
import { EventListExternal, EventListScrollable, EventListTitle } from '../../../../components/UI/UI.styled';

interface Props {
  list: ShedulerEvent[];
  selectedValue: Dayjs;
  isMonth: boolean;
}
const EventListWidget: React.FC<Props> = ({list, selectedValue, isMonth}) => {

  const [readyList, setReadyList] = useState(list)

  useEffect(()=> {
    if (isMonth){
      const stringValue = selectedValue.format('MM.YYYY');
      const listData = list.filter(({ date }) => dayjs(date).format('MM.YYYY') === stringValue);
      setReadyList(listData)
    }else{
      const stringValue = selectedValue.format('DD.MM.YYYY');
      const listData = list.filter(({ date }) => dayjs(date).format('DD.MM.YYYY') === stringValue);
      setReadyList(listData)
    }
  }, [list, selectedValue])
  


  if (!readyList.length){
    return (
      <EventListExternal style={{marginTop: '100px'}}>
        <Empty description={'Событий нет'}/>
      </EventListExternal>

    )
  }

  return (
    <EventListExternal>
      <EventListScrollable>
        <EventListTitle>События:</EventListTitle>
        {
          readyList
            .sort((a, b) => {
                const dateA = dayjs(a.date);
                const dateB = dayjs(b.date);
                return dateB.isBefore(dateA) ? -1 : 1;
            })
            .map(({date, description, id, type})=> (
              <EventCard 
                title={dayjs(date).format('DD.MM.YYYY [в] HH:mm')} 
                key={id} 
                content={description} 
                extra={<Badge status={type as PresetStatusColorType}/>}
                style={{width: '250px'}}
              />
          ))
        }
      </EventListScrollable>
    </EventListExternal>
  )
}

export default EventListWidget;
