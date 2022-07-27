import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Img = styled.img`
  width: 100px;
`;

export const CastItem = styled.li`
  width: 180px;
  height: 270px;
  text-align: center;
  padding: 5px;
  border: ${p => p.theme.borders.normal} #000;
  margin-bottom: 10px;
  border-radius: ${p => p.theme.radii.min};
`;

export const ImgWraper = styled.div`
  width: 100%;
`;

export const Text = styled.div`
  width: 100%;
  height: 100px;
`;
