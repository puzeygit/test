import React from 'react'
import { StyledContainerRow } from '../UI/UI.styled';
import EventCard from '../EventCard';
import dayjs from 'dayjs';
import { Badge, Empty } from 'antd';
import { PresetStatusColorType } from 'antd/es/_util/colors';
import { ShedulerEvent } from '../../store/EventStore';

type Props = {
  list: ShedulerEvent[],
  handleClick?: (id?: string) => void
}
const EventList: React.FC<Props> = ({ list, handleClick }) => {

  if (!list.length){
    return <Empty description={'Событий нет'}/>
  }

  return (
  <StyledContainerRow wrap={'wrap'}>
    {
      list
        .sort((a, b) => {
            const dateA = dayjs(a.date);
            const dateB = dayjs(b.date);
            return dateB.isBefore(dateA) ? -1 : 1;
        })
        .map(({date, description, id, type, noticeDate})=> (
        <EventCard 
          key={id} 
          title={dayjs(date).format('DD.MM.YYYY [в] HH:mm')} 
          noticeDate={noticeDate}
          content={description} 
          extra={<Badge status={type as PresetStatusColorType}/>}
          onClick={handleClick ? ()=> handleClick(id as string) : ()=>{return}}
        />
      ))
    }
  </StyledContainerRow>
  )
}

export default EventList;
