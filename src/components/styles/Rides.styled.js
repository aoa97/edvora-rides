import styled from "styled-components";

const StyledRide = styled.div`
  background-color: ${({ theme }) => theme.colors.rideItem};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 13px;

  .ride-map-details {
    display: flex;
    justify-content: center;
    align-items: center;

    .ride-details {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 44px;

      p {
        font-size: 18px;
        font-weight: 500;
        color: #cfcfcf;

        span {
          color: #fff;
        }
      }
    }
  }

  .ride-tags {
    .ride-tag {
      background-color: ${({ theme }) => theme.colors.rideItemTag};
      border-radius: 16px;
      font-size: 12px;
      font-weight: 500px;
      padding: 4px 10px;
      margin-left: 24px;
    }
  }

  @media (max-width: 750px) {
    padding: 15px;
    align-items: stretch;

    & {
      flex-direction: column;

      .ride-map-details {
        flex-direction: column;

        img {
          margin-bottom: 10px;
          height: 100%;
          width: 100%;
        }

        .ride-details {
          margin-left: 0;

          p {
            margin-bottom: 10px;
            font-size: 14px;
          }
        }
      }

      .ride-tags {
        .ride-tag {
          margin-left: 0;
          margin-right: 5px;
        }
      }
    }
  }
`;

export default StyledRide;
