import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';

export default function Dropdown(props){
    const options = props.options;
    const header = props.header;
    const [isOpen, setIsOpen] = React.useState(false) 
    function toggle(){
        setIsOpen(!isOpen)
    }
    function generateMaze(option){
        //call maze
    }
    return(
        <ButtonDropdown
        isOpen={isOpen}
       toggle={toggle}>
       <DropdownToggle color="primary" caret>
           {header}
       </DropdownToggle>
       <DropdownMenu>
       {options.map(option => (
                    <DropdownItem  onClick={generateMaze(option)}>
                    {option}
                    </DropdownItem>
                ))}
       </DropdownMenu>
       </ButtonDropdown>
    );
}