import React from "react";
import styled from 'styled-components'



const DropDownContainer = styled("div")`
    width: 10.5em;
    margin: 0 auto;
`;

const DropDownHeader = styled("div")`
    margin-bottom: 0.8em;
    padding: 0.4em 2em 0.4em 1em;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    font-weight: 500;
    font-size: 1.3rem;
    color: #3faffa;
    text-align: center;
`;
const DropDownListContainer = styled("div")`
    position: absolute;
    z-index: 100;
    width: 10.5em;
`;
const DropDownList = styled("ul")`
    padding: 0;
    margin: 0;
    padding-left: 1em;
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    color: #3faffa;
    font-size: 1.3rem;
    font-weight: 500;
    &:first-child {
        padding-top: 0.8em;
  }
`;
const ListItem = styled('li')`
    list-style: none;
    margin-bottom: 0.8em;
    &:hover {
        color: #fd9e46;
  }
`;

export default function DropDown(props){
    const options = props.options;
    const header = props.header;

    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState(null);

    const toggling = () => setIsOpen(!isOpen);
    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
      };
    return(
        <DropDownContainer >
            <DropDownHeader onClick={toggling}>{header}
            </DropDownHeader>
            {isOpen && (
            <DropDownListContainer>
                <DropDownList>
                {options.map(option => (
                    <ListItem key={Math.random()}>
                    {option}
                    </ListItem>
                ))}
                </DropDownList>
            </DropDownListContainer>
            )}
        </DropDownContainer>
    );

}



