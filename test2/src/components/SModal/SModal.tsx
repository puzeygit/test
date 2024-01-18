import { Button, Modal } from 'antd';
import React from 'react'

type Props = {
  open: boolean;
  handleOk: () => void
}
const SModal: React.FC<Props> = ({open, handleOk}) => {

  const modalFooter = (
    <div>
      <Button key="ok" onClick={handleOk} type='primary'>
        {"Повторить запрос"}
      </Button>
    </div>
  );
  return (
      <Modal
        title="Произошла ошибка!" 
        footer={modalFooter} 
        open={open}
        maskClosable={true}
      />
  )
}

export default SModal;