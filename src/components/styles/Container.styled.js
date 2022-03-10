import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 750px) {
    & {
      padding: 15px;
    }
  }
`;

export default Container;
