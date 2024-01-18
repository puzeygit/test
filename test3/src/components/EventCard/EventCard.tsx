import { Card } from 'antd';
import React, { CSSProperties, ReactNode } from 'react'
import { Typography } from 'antd';
import dayjs from 'dayjs';

type Props = {
  title: string | null;
  content?: string;
  extra?: ReactNode;
  onClick?: ()=> void;
  style?: CSSProperties;
  noticeDate?: Date
} 
const EventCard: React.FC<Props> = ({title, content, extra, onClick, style, noticeDate}) =>{
  return (
  <Card 
    title={title} 
    bordered={false} 
    style={{width: 300, minHeight: '205px', ...style}} 
    hoverable={true} 
    extra={extra}
    onClick={onClick}
    >{
      noticeDate &&
      <Typography.Paragraph ellipsis={{ rows: 4, expandable: true, symbol: '...' }}>
        Уведомление {dayjs(noticeDate).format('DD.MM.YYYY [в] HH:mm')}
      </Typography.Paragraph>
    }
    <Typography.Paragraph ellipsis={{ rows: 4, expandable: true, symbol: '...' }}>
      {content}
    </Typography.Paragraph>
  </Card>
  )
}

export default EventCard;
