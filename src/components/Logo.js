import React from 'react'
import Container from 'react-bootstrap/Container'
import SystemLogistic from '../img/SystemLogistic.svg'

function Logo() {
    return (
        <div>
            <Container className="Logo ml-2 " >
                <img
                    src={SystemLogistic}
                    width="150"
                    height="150"
                    className="d-inline-block align-top"
                    alt="SistemLogistics"
                />
            </Container >

        </div>
    )
}

export default Logo;
