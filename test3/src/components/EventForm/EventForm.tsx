import React, { useEffect } from 'react'
import { WrapperContainer } from '../UI/UI.styled';
import { Button, DatePicker, Form, Input, Select, message } from 'antd';
import useEventStore, { ShedulerEvent } from '../../store/EventStore';
import { generateId } from '../helper';
import { defaultFormValue, formItemLayout, localeRU, selectOptions } from '../constatnts';
import dayjs, { Dayjs } from 'dayjs';
import { useNavigate } from 'react-router-dom';
import 'dayjs/locale/ru';
import { DatePickerProps } from 'antd/lib';

type Props = {
  initFormValue?: ShedulerEvent;
  id?: string;
}
const EventForm: React.FC<Props> = ({id, initFormValue}) => {
    const { addEvent, updateEvent} = useEventStore();
    const navigate = useNavigate();

    const [form] = Form.useForm();
    const onFinish = (values: ShedulerEvent) => {
    if (id){
      console.log(values)
      updateEvent({...values, id})
      navigate('/edit')
    }else{
      addEvent({...values, id: generateId()})
      navigate('/')
    }
    form.setFieldsValue(defaultFormValue)
    message.success({
      content: `Событие успешно ${id ? 'изменено' : 'добавлено'}`,
    });
  }

  const disabledDate: DatePickerProps['disabledDate'] = (current: Dayjs) =>
 current && current <= form.getFieldValue('date');

  
    useEffect(() => {
    if (id && initFormValue){
      form.setFieldValue('type', initFormValue.type)
      form.setFieldValue('description', initFormValue.description)
      form.setFieldValue('date', dayjs(initFormValue.date))
      if (initFormValue.noticeDate){
        form.setFieldValue('noticeDate', dayjs(initFormValue.noticeDate))
      }
    }

  }, [initFormValue, id])

  return (
      <WrapperContainer>
        <Form 
          form={form}
          variant="filled" 
          layout='vertical' 
          onFinish={onFinish}
          style={{ width: 600 }}
          name="addEvent" 
          initialValues={defaultFormValue}
          {...formItemLayout} 
          >
        <Form.Item label="Описание события" name="description" rules={[{ required: true, message: 'Пожалуйста, заполните поле!' }]}>
            <Input.TextArea showCount maxLength={100}/>
        </Form.Item>
        <Form.Item label="Тип события" name="type" rules={[{ required: true, message: 'Please input!' }]}>
          <Select options={selectOptions}/>
        </Form.Item>
        <Form.Item
          label="Дата события"
          name="date"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <DatePicker 
            showTime={true} 
            size='large' 
            placeholder='Выберите дату' 
            locale={localeRU}
          />
        </Form.Item>
        <Form.Item
          label="Предварительное уведомление"
          name="noticeDate"
        >
          <DatePicker 
            showTime={true} 
            size='large' 
            placeholder='Выберите дату' 
            locale={localeRU}
            disabledDate={disabledDate}
            />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {id ? 'Редактировать событие' : 'Добавить событие'}
          </Button>
        </Form.Item>
      </Form>
      </WrapperContainer>
  )
}

export default EventForm;
