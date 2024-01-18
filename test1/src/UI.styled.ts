import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  -ms-box-sizing: border-box;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(6, 200px);
  justify-items: center;
  column-gap: 1rem;
  row-gap: 2rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 220px;
  overflow: hidden;
  align-items: flex-start;
  justify-self: stretch;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;

  -ms-box-sizing: border-box;
  -ms-display: -ms-flexbox;
  -ms-flex-direction: column;
  -ms-align-items: flex-start;
`;

export const CardHeader = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0 0 10px 0;
  flex: 0 0 28px
`;

export const CardList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;

  flex: 0 0 110px;
`;

export const CardListItem = styled.li<{color?: string}>`
  font-size: 18px;
  color: ${({color}) => color ? color : "#555" };
  margin: 5px 0;

  &:before {
    content: '•';
    color: #333;
    margin-right: 10px;
  }
`;

export const CardText = styled.p`
  font-size: 16px;
  color: #777;
  margin: 5px 0 0 0;
`;