import React from "react";
import { Container, Table } from "react-bootstrap";
import AnimalStatusTableContent from "./AnimalStatusTableContent";
const AnimalStatusTable = ({ animalList, reloadState }) => {
    return (
        <Container>
            <div className="text-uppercase" >
                <h3>Animals managing</h3>
            </div>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th className="col-1">Animal ID</th>
                        <th className="col-2">Animal Name</th>
                        <th className="col-2">Date Arrive</th>
                        <th className="col-5">Status</th>
                        <th className="col-2"></th>
                        <th className="col-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {animalList.map((animal, index) => {
                        return <AnimalStatusTableContent key={index} reloadState={reloadState} animal={animal} />;
                    })}
                </tbody>
            </Table>
        </Container>
    )
}
//1y2h43oi12yo14h
export default AnimalStatusTable;