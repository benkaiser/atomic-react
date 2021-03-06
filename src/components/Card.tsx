import styled from 'styled-components';

/** A Card with a border. */
export const Card = styled.div`
  /** Don't put margins in this component - use a wrapping component */
  border: solid 1px ${props => props.theme.colors.bg2};
  box-shadow: ${props => props.theme.boxShadow};
  padding: ${props => props.theme.margin}rem;
  padding-bottom: 0;
  border-radius: ${props => props.theme.radius};
`;

/** A Row in a Card. Should probably be used inside a CardInsideFull */
export const CardRow = styled.div`
  display: block;
  border-top: solid 1px ${props => props.theme.colors.bg2};
  padding: ${props => props.theme.margin / 3}rem ${props => props.theme.margin}rem;
`;

/** A block inside a Card which has full width */
export const CardInsideFull = styled.div`
  margin-left: -${props => props.theme.margin}rem;
  margin-right: -${props => props.theme.margin}rem;
`;
