import { Formik } from 'formik';
import { Input, InputForm, Button } from './SearchBox.styled';
import { HiOutlineSearch } from 'react-icons/hi';

export const SearchForm = ({ onSubmit, value }) => {
  const handleSubmit = ({ movieName }) => {
    onSubmit(movieName);
  };

  return (
    <>
      <Formik initialValues={{ movieName: value }} onSubmit={handleSubmit}>
        <InputForm>
          <Input
            type="text"
            name="movieName"
            autoComplete="off"
            autoFocus
            placeholder="Search a movie"
          />
          <Button type="submit">
            <HiOutlineSearch />
          </Button>
        </InputForm>
      </Formik>
    </>
  );
};
