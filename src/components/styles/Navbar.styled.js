import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  .nav-menu {
    display: flex;
    list-style: none;

    a {
      margin-right: 44px;
      font-size: 18px;
      color: #d0cbcb;
      cursor: pointer;

      &.active {
        color: #fff;
        font-weight: 700;
        border-bottom: 2px solid #fff;
        padding-bottom: 6px;
      }
    }
  }

  .filter-menu {
    cursor: pointer;

    span {
      margin-left: 8px;
      font-size: 16px;
      font-weight: 500px;
      color: #f2f2f2;
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;

    .nav-menu {
      display: flex;
      list-style: none;

      a {
        margin-right: 10px;
        text-align: center;
      }
    }

    .filter-menu {
      margin-top: 20px;
    }
  }
`;
export default StyledNavbar;
