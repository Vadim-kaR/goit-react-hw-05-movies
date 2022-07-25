import { Formik, Form, Field } from 'formik';

export const SearchMovies = () => {
  const handleChange = ({ name }) => {
    console.log(name);
  };

  return (
    <div>
      <Formik initialValues={{ name: '' }} onChange={handleChange}>
        <Form>
          <Field
            type="text"
            name="name"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
        </Form>
      </Formik>
    </div>
  );
};
