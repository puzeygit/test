import React, { useState } from 'react';
import Schedule from './components/Shedule/Shedule';
import dayjs from 'dayjs';
import { ScheduleWrapper } from '../../components/UI/UI.styled';
import useEventStore from '../../store/EventStore';
import EventListWidget from './components/EventListWidget';
import Page from '../../components/Page';

const Home: React.FC = () => {
  const [isMonth, setIsMonth] = useState(false);
  const [selectedValue, setSelectedValue] = useState(() => dayjs());
  const  { list } = useEventStore()

  return (
    <Page pageKey="/" title="Главная">
      <ScheduleWrapper>
        <Schedule
          isMonth={isMonth}
          setIsMonth={setIsMonth}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          list={list}
        />
        <EventListWidget list={list} isMonth={isMonth} selectedValue={selectedValue}/>
      </ScheduleWrapper>
    </Page>

  )
};

export default Home;
