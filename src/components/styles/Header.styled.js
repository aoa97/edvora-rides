import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand {
    font-size: 36px;
    font-weight: 700;
  }

  .user {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 20px;
      font-weight: 700;
      margin-right: 25px;
    }

    img {
      width: 44px;
      height: 44px;
      border-radius: 22px;
    }
  }

  @media (max-width: 750px) {
    padding: 15px;

    & {
      .brand {
        font-size: 24px;
      }

      .user {
        span {
          justify-content: flex-start;
          font-size: 15px;
          margin-right: 10px;
          text-align: right;
        }
      }
    }
  }
`;

export default StyledHeader;
