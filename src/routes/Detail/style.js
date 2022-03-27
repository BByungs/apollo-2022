import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0 50px 0 50px;
`;

export const Column = styled.div`
  margin-left: 10px;
`;

export const Poster = styled.div`
  width: 100%;
  height: 60%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

export const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;
export const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 28px;
  width: 50%;
`;
