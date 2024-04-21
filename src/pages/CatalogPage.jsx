import CarDetails from 'components/CarDetails/CarDetails';
import { Catalog } from 'components/Catalog/Catalog';
import { useSelector } from 'react-redux';
import { selectorIsShowModal } from '../redux/selectors';

const CatalogPage = () => {
  // const isShowModal = useSelector(selectorIsShowModal);

  // return <>{isShowModal ? <CarDetails /> : <Catalog />}</>;
  return <Catalog />;
};

export default CatalogPage;
