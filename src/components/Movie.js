import { gql, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 7px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
`;
const Button = styled.button`
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LIKE_MOVIE = gql`
  mutation likeMovie($id: Int!) {
    mutation
    likeMovie(id: $id) @client
  }
`;

const Movie = ({ id, bg, isLiked }) => {
  const [likeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id) },
  });

  return (
    <Wrapper>
      <Container>
        <Link to={`${id}`}>
          <Poster bg={bg} />
        </Link>
      </Container>
      <Button onClick={isLiked ? null : likeMovie}>
        {isLiked ? 'UnLike' : 'Like'}
      </Button>
    </Wrapper>
  );
};

export default Movie;
