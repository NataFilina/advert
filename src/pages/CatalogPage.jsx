import Filter from 'components/Filter/Filter';
import { ContactForm } from '../components/LocationForm/LocationForm';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch,  } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/thunks';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList /> 
    </>
  );
};

export default CatalogPage;
