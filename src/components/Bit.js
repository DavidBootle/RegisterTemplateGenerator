import { useState } from 'react';
import Col from 'react-bootstrap/Col';


export default function Bit({defaultNumber}) {

    function toggleDisabled() {
        setDisabled(!disabled);
    }

    const [disabled, setDisabled] = useState(false);

    return (
        <Col>
            <p className={`text-center fw-bold lh-1 mt-2 ${disabled ? 'text-decoration-line-through' : ''}`} style={{marginBottom: '5px'}} contentEditable>{defaultNumber}</p>
            <p className="text-center font-monospace fs-6 lh-1 mb-4 text-uppercase" contentEditable style={{minWidth: '10px'}}></p>
            <p className="text-center fs-6 lh-1 fw-bold" onClick={toggleDisabled} style={{marginBottom: '5px', minWidth: '10px', height: '20px'}}>{disabled ? '0' : ''}</p>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: '80%', backgroundColor: 'black', height: '2px'}} className="mb-2"></div>
            </div>
        </Col>
    )
}