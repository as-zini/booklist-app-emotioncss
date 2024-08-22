/** @jsxImportSource @emotion/react */

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import SearchPage from './pages/SearchPage';
import BookDetailPage from './pages/BookDetailPage';
import { Global, ThemeProvider, css, useTheme } from '@emotion/react';
import Footer from './components/Footer';
import { themeDark, themeLight } from './components/Theme';
import { useState } from 'react';

const Layout = ({isDark, setIsDark}) => {
  const theme = useTheme();

  return(
    <div>
      <Global 
        styles={css`
          body {
            background-color:${theme.background};
            color: ${theme.text};
            transition-duration .2s;
            transition-property: background-color, color;
          }
          a{
            color:${theme.text};
            text-decoration: none;
          }
          ul{
            list-style:none;
            padding:0;
          }

        `}
      />
      <div
        css={css`
          min-height:90vh;
        `

        }
      >
        <Outlet/>
      </div>
      
      <Footer isDark={isDark} setIsDark={setIsDark}/>
    </div>
  )
}


function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <Routes>
        {/* 공통 레이아웃 지정 */}
        <Route path='/' element={<Layout isDark={isDark} setIsDark={setIsDark}/>}>
          {/* 어떤 Route태그 안에 하위 Route태그가 오면 상위 Route태그가 공통 스타일이 된다 */}
          <Route index element={<SearchPage/>}/>
          <Route path='/book/:bookId' element={<BookDetailPage/>}/>

        </Route>
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
