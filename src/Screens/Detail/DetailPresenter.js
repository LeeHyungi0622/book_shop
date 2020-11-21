import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const BackDrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
`;

const Cover = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    border-radius: 5px;

`;

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
`;

const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 10px;
    font-weight: 800;
`;

const Status = styled.h3`
    font-size: 25px;
    color: red;
    font-weight: 800;
    margin-bottom: 10px;
`;

const Detail = styled.div`
    margin: 10px 0;
`;

const Year = styled.span`
    font-weight: 600;
`;

const Divider = styled.span`
    font-weight: 600;
    margin: 0 10px;
`;

const Publisher = styled.span`
    font-weight: 600;
`;

const Author = styled.span`
    font-weight: 600;
`;

const Description = styled.p`
    font-weight: 400;
`;


const DetailPresenter = ({ result, loading, error }) => 
    loading ? (
        <Loader />
    ) : (
        <>
            <Container>
                <BackDrop 
                    bgImage={ result.item[0].coverLargeUrl ? result.item[0].coverLargeUrl : result.item[0].coverSmallUrl}
                />
                <Content>
                    <Cover bgImage={ result && result.item[0].coverLargeUrl}/>
                    <Data> 
                        <Title>{ result && result.item[0].title }</Title>
                        <Status>{ result && result.item[0].saleStatus }</Status>
                        <Detail>
                            <Year>{ result && result.item[0].pubDate.substring(0, 4)}</Year>
                            <Divider>・</Divider>
                            <Publisher>출판사 : { result && result.item[0].publisher }</Publisher>
                            <Divider>・</Divider>
                            <Author>{ result && result.item[0].author }</Author>
                        </Detail>
                        <Description>
                            { result && result.item[0].description }
                        </Description>
                    </Data>
                </Content>
            </Container>
        </>
    )

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;