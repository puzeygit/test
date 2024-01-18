import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import SModal from './components/SModal';
import Spin from './components/Spin';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/reducers';
import { fetchDetailRequest } from './redux/actions/detailActions';




const ServiceDetails: React.FC = () => {
  const {isError: showModal, isLoading, detail} = useSelector((state: RootState) => state.detail);
  const { id } = useParams()
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchDetailRequest({id}));
  }, [ dispatch, id ]);


  const handleOk = () => {
    //@ts-ignore
    dispatch(fetchDetailRequest({id}));
  } 


  if (isLoading){
    return <Spin />
  }

  return (
    <div>
      <h2><ArrowLeftOutlined onClick={()=> navigate('/')}/> Детали услуги</h2>
      {
        detail ?
        (
          <>
            <p>{detail.name} - {detail.price}</p>
            <p>*{detail.content}</p>
          </>
        )
        : "Деталеи отсутствуют..."
      }
      <SModal
        open={showModal}
        handleOk={handleOk}
      />
    </div>
  );
};

export default ServiceDetails;