import styled from "@emotion/styled";



export const LogoText = styled.h3`
  margin: 0;

`

export const Container =  styled.div`
  max-width: 960px;
  padding: 15px;
  margin: 0 auto;
`

export const Header = styled.header`
  border-bottom: 1px solid gray;
`

//이미 만들어놓은 Container의 스타일도 같이 들어가게 해줌
export const HeaderContainer = styled(Container)`
  display: flex;
  align-items:center;
  @media (max-width: 778px){
    flex-direction: column;
    align-items: flex-start;
  }
`;