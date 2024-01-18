import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import Spin from './components/Spin';
import SModal from './components/SModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/reducers';
import { fetchPostsRequest } from './redux/actions/servicesActions';


const ServiceList: React.FC = () => {
  const {isError: showModal, isLoading, services} = useSelector((state: RootState) => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchPostsRequest());
  }, [ dispatch ]);
  
  const handleOk = () => {
    //@ts-ignore
    dispatch(fetchPostsRequest());
  } 


  if (isLoading){
    return <Spin />
  }

  return (
    <div>
      <h1>Список услуг</h1>
      <ul>
        {services?.map((service) => (
          <li key={service.id}>
            <Link to={`/${service.id}/details`}>{service.name}</Link>
          </li>
        )) ?? "Список услуг пуст..."
        }
      </ul>
      <SModal
        open={showModal}
        handleOk={handleOk}
      />
    </div>
  );
};

export default ServiceList;