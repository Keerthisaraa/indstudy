import { createGlobalStyle } from 'styled-components';
import { BackgroundColor } from '../constant';

export const GlobalStyle = createGlobalStyle`
html{
	margin: 0;
	height: 100%
}
#root{
	height: 100%
}
body{
    background-color: ${BackgroundColor};
	height: 100%;
	}
}
`;
