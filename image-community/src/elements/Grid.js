import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const {is_flex, width, margin, padding, bg, children} = props;

    const styles = {
        is_flex: is_flex,
        width: width,
        padding: padding,
        margin: margin,
        bg: bg
    }
    return (
        <React.Fragment>
            <GridBox {...styles}>{children}</GridBox>
        </React.Fragment>
    )
}

Grid.defaultProps = {
    children: null,
    is_flex: false,
    width: "100%",
    padding: false,
    margin: false,
    bg: false
}

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: 100%;
    box-sizing: border-box;
    ${(props) => (props.padding? `padding: ${props.padding};`:"")}
    ${(props) => (props.padding? `margin: ${props.margin};`:"")}
    ${(props) => (props.padding? `background-color: ${props.bg};`:"")}
    ${(props) => props.is_flex? `display: flex; align-items: center; justify-content: space-between;`:""}
`;

export default Grid;