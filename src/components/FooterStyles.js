import styled from 'styled-components';

export const Box = styled.div`
    padding: 60px 9px;
    background: #fbfbfb;
    position: absolute;
    bottom: 0;
    width: 99%;


@media (max-width: 900px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
    margin-top: 20px;
	/* background: red; */
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    //margin-left: 20px;
`;

export const Row = styled.div`
    display: grid;
    //grid-template-columns: repeat(auto-fill,
    //                        minmax(185px, 1fr));
    //grid-template-rows: repeat(3, 200px);
  
    grid-gap: 100px;
    grid-auto-flow: column;
    grid-auto-columns: 500px 200px 200px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    
    &:hover {
        color: #757575;
        transition: 200ms ease-in;
    }
`;

export const Heading = styled.p`
    font-size: 24px;
    color: #757575;
    margin-bottom: 30px;
    font-weight: bold;
`;
