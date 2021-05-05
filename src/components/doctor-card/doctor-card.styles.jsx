import styled from 'styled-components';

export const DoctorCardContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    .background-image {
      opacity: 0.8;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 90%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const DoctorFooterContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  text-align: left;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const DetailsContainer = styled.span`
  text-align: left;
`;
