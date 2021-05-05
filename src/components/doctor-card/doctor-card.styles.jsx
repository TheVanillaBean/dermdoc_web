import styled, { css } from 'styled-components';

const getLayoutType = (props) => {
  return props.vertical ? verticalLayout : horizontalLayout;
};

const verticalLayout = css`
  width: 22vw;
  flex-direction: column;
`;

const horizontalLayout = css`
  width: 44vw;
  flex-direction: row;
`;

export const DoctorCardContainer = styled.div`
  display: flex;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    .background-image {
      opacity: 0.8;
    }
  }
  ${getLayoutType}
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
