import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import {
  Column,
  Container,
  Description,
  Subtitle,
  Title,
  Poster,
} from './style';

const GET_MOVIES = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      language
      rating
      title
      medium_cover_image
      description_intro
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIES, {
    variables: { id: +id },
  });

  return (
    <Container>
      <Column>
        <Title>{loading ? 'loading...' : data.movie.title}</Title>
        {!loading && (
          <>
            <Subtitle>
              {data?.movie?.language} * {data?.movie?.rating}
            </Subtitle>
            <Description>{data?.movie?.description_intro}</Description>
          </>
        )}
      </Column>
      <Poster bg={data?.movie?.medium_cover_image}></Poster>
    </Container>
  );
};

export default Detail;
