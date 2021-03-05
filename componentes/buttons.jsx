import styled from 'styled-components';

export const TemplateButton = styled.a`
  background: transparent;
  border: solid 2px #0bd8a2;
  border-radius: 3em;
  text-decoration: none;
  color: #0bd8a2;
  margin: 0 auto;
  padding: 0.5rem;
  &:hover {
    background: #0bd8a2;
    color: white;
    cursor: pointer;
  }
`;

export const DefaultButton = ({children}) => {
    return(
        <TemplateButton>{children}</TemplateButton>
    )
}