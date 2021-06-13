import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


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
                        <td>Lunes</td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Martes</td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Miercoles</td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                        <td> <Form.Control size="sm" type="text" placeholder="" /> </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
