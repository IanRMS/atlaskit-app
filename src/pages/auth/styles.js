import styled from "styled-components";
import background from "../../assets/images/background.jpg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  width: 98%;
  max-width: 400px;
  min-width: 280px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  padding: 24px 16px 16px 16px;
`;

export const CardText = styled.span`
  font-size: ${(props) => `${props.size}px`};
  font-weight: ${(props) => props.weight};
  color: #424242;
  display: flex;
  justify-content: center;
  align-items: center;
`;
