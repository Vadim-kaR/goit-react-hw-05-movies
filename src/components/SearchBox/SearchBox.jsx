import { Formik } from 'formik';
import { Input, InputForm, Button } from './SearchBox.styled';
import { HiOutlineSearch } from 'react-icons/hi';
export const SearchBox = ({ handleSubmit, onChange, value }) => {
  return (
    <div>
      <Formik initialValues={{ name: '' }} onSubmit={() => handleSubmit()}>
        <InputForm>
          <Input
            onChange={e => onChange(e.target.value)}
            value={value}
            type="text"
            name="name"
            autoComplete="off"
            autoFocus
            placeholder="Search a movie"
          />
          <Button type="submit">
            <HiOutlineSearch />
          </Button>
        </InputForm>
      </Formik>
    </div>
  );
};
