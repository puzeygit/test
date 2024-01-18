import { ShedulerEvent, TypeEvent } from '../store/EventStore';
import dayjs from 'dayjs';
dayjs.locale('ru')
import ruRU from 'antd/locale/ru_RU';
import 'dayjs/locale/ru';
import { PickerLocale } from 'antd/es/date-picker/generatePicker';

export const defaultFormValue: ShedulerEvent = {
  type: null,
  description: undefined,
  date: undefined,
  noticeDate: undefined
} 
export const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

export const selectOptions=[
  { value: TypeEvent.success, label: 'Успешное' },
  { value: TypeEvent.warning, label: 'Предупреждение' },
  { value: TypeEvent.error, label: 'Внимание' }]


 export const localeRU = {
    ...ruRU.DatePicker,
    lang: {
    // @ts-ignore
    ...ruRU.DatePicker.lang,
    monthFormat: 'MMMM',
  },
} as PickerLocale;