import React from 'react';
import { Container, Table } from 'react-bootstrap';
import CageTableContent from './CageTableContent';

function CageTable({cageList}) {
    return (
        <Container>
                <h5 className='text-uppercase'>cages</h5>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th>No.</th>
                        <th className="col-6">Cage Name</th>
                        <th className="col-3">Area Name</th>
                        <th className="col-1"></th>
                        <th className="col-1"></th>
                    </tr>
                </thead>
                <tbody>
                        {cageList.map((cage, index) => {
                            return <CageTableContent key={index} index={index} cage={cage} />;
                        })}
                </tbody>
            </Table>
        </Container>
    );
}

export default CageTable;