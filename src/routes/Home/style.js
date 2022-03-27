import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, Violet, Orange);
  margin-bottom: 15px;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: white;
  margin-bottom: 10px;
`;

export const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: white;
`;

export const Loading = styled.div`
  color: gray;
  font-weight: 500;
`;

export const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;
