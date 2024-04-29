import Bit from "./Bit";
import Row from 'react-bootstrap/Row';

const defaults = {
    bitNums: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    bitNames: [].fill('', 0, 15),
    unimplemented: [].fill(false, 0, 15),
}

export default function Register(props) {

    let bits = [];
    for (let i = 0; i < 16; i++) {
        if (i%4 === 0 && i !== 0) {
            bits.push(<div style={{width: '50px'}}></div>);
        }
        bits.push(<Bit key={i} defaultNumber={defaults.bitNums[i]}/>)
    }

    return (
        <>
        <div style={{margin: '20px'}}>
            <p className="text-start fs-5 font-monospace lh-sm" contentEditable>Register Title</p>
            <div style={{border: '5px solid black'}}>
                <Row>
                    {bits}
                </Row>
            </div>
        </div>
        </>
    )
}