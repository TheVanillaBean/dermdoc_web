import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 80px;
  justify-content: space-around;
`;

export const HomePageTitle = styled.h2`
  margin: 24px 0;
  color: #90024c;
`;

export const FormInputTitle = styled.h3`
  margin: 12px 0;
`;

export const DoctorCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 152px;
`;

//Make the title and inout bar vertically layout out
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 608px;
`;

//Location, visit reason, and insurance type
export const FormInputsBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FormInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

//Location, visit reason, and insurance type
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
