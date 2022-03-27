import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import Movie from '../../components/Movie';
import { Container, Header, Subtitle, Title, Loading, Movies } from './style';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  console.log(loading, data);

  return (
    <Container>
      <Header>
        <Title>Apollo 2022</Title>
        <Subtitle>I Love GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {!loading && data.movies && (
        <Movies>
          {data.movies.map((m) => (
            <Movie
              key={m.id}
              isLiked={m.isLiked}
              id={m.id}
              bg={m.medium_cover_image}
            />
          ))}
        </Movies>
      )}
    </Container>
  );
};

export default Home;
