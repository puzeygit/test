
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';

import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import type { CalendarProps } from 'antd';

import { CalendarMode } from 'antd/es/calendar/generateCalendar';
import { Alert, Calendar } from 'antd';
import { InnerShedulerWrapper, StyledTag } from '../../../../components/UI/UI.styled';
import { ShedulerEvent } from '../../../../store/EventStore';
import { localeRU } from '../../../../components/constatnts';



interface Props {
  selectedValue: dayjs.Dayjs;
  setSelectedValue: Dispatch<SetStateAction<dayjs.Dayjs>>;
  setIsMonth: Dispatch<boolean>;
  isMonth: boolean;
  list: ShedulerEvent[];
}

const Schedule: React.FC<Props> = ({ setSelectedValue, setIsMonth, selectedValue, list }) => {
  const [value, setValue] = useState(() => dayjs(new Date));

  const monthCellRender = useCallback((value: Dayjs) => {
    const stringValue = value.format('MM.YYYY');
    const listData = list.filter(({ date }) => dayjs(date).format('MM.YYYY') === stringValue);

    return listData.length ? (
      <span
        className="events"
        style={{
          marginTop: 10,
          margin: '0px',
          backgroundColor: '#2F54EB',
          padding: '2px 8px',
          borderRadius: 6,
        }}
      >
        <StyledTag>
          {listData.length}
        </StyledTag>
      </span>
    ) : null;
  }, [value]);


  const dateCellRender = useCallback((value: Dayjs) => {
    const stringValue = value.format('DD.MM.YYYY');
    const listData = list.filter(({ date }) => dayjs(date).format('DD.MM.YYYY') === stringValue);

    return listData.length ? (
      <span
        className="events"
        style={{
          marginTop: 10,
          margin: '0px',
          backgroundColor: '#2F54EB',
          padding: '2px 8px',
          borderRadius: 6,
        }}
      >
        <StyledTag>
          {listData.length}
        </StyledTag>
      </span>
    ) : null;
  }, [value]);
 

const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    setIsMonth(mode === 'year');
    setValue(value);
    setSelectedValue(value);
  };
    const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };



  return (
      <InnerShedulerWrapper>
        <Alert message={`Просмотр событий за: ${selectedValue?.format('DD.MM.YYYY')}`} />
          <Calendar     
            value={value}
            cellRender={cellRender} 
            onSelect={onSelect}
            onPanelChange={onPanelChange}
            locale={localeRU}
          />
      </InnerShedulerWrapper>
  );
};

export default Schedule;
