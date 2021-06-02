import React from 'react'
import Table from 'react-bootstrap/Table'


export default function Tables() {
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Dia</th>
                        <th>Proyecto</th>
                        <th>Horas</th>
                        <th>Ubicacion</th>
                        <th>Actividad</th>
                        <th>Proyecto</th>
                        <th>Horas</th>
                        <th>Actividad</th>
                        <th>Proyecto</th>
                        <th>Horas</th>
                        <th>Actividad</th>
                        <th>Total del Dia</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
