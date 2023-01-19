import { useRef, useState } from "react"

function AlarmList(props){
    const divRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(props.default)
    return(
        <>
        <div className="select" dafault={props.default}>
            <span onClick={() => setIsOpen(!isOpen)}>{selected}</span>
            <CSSTransition
                nodeRef = {divRef}
                in = {isOpen}
                unmountOnExit
                timeout = {300}
                classNames = "drop"
            >
                <DropdownList ref={divRef}>{props.children}</DropdownList>
            </CSSTransition>
        </div>
        </>
    )
}

const AlarmList
export default AlarmList