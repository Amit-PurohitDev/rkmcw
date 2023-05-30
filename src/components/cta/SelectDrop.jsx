import React, {useState} from 'react'
import { DropList, Label, ListItem, SelectContainer } from '../../style/Cta/SelectDropSt';

const SelectDrop = (props) => {
    const [dataSelect, setDataSelect ] =  useState(props.list[0]);
    const [showSelect, setshowSelect ] =  useState(false);
    function selectPop(e) {
        setDataSelect(e.target.innerText)
        setshowSelect(!showSelect)
    }
    function showPop(e) {
        setshowSelect(!showSelect)
    }
  return (
    <SelectContainer>
        <Label onClick={showPop}>{dataSelect}</Label>
        <DropList show={showSelect}>
         { props.list.map((item, index) => {
            return(
                <ListItem onClick={selectPop}  key={index}>{item}</ListItem>
            )
          })}
        </DropList>
    </SelectContainer>
  )
}

export default SelectDrop