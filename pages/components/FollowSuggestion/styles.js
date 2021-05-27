import styled from "styled-components";

import Button from "../Button";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    /* first div */
    display: flex;
    align-items: center;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const FollowButton = styled(Button)`
  /* extends Button */
  padding: 6px 17px;
`;