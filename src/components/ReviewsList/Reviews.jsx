import { Item, AuthorName } from './ReviewsList.styled';
export const ReviewsList = ({ reviews }) => {
  return (
    <>
      <ul>
        {reviews.map(({ author, id, content }) => {
          return (
            <Item key={id}>
              <AuthorName>
                <b>Author: </b>
                <b>{author}</b>
              </AuthorName>
              <p>{content}</p>
            </Item>
          );
        })}
      </ul>
    </>
  );
};
