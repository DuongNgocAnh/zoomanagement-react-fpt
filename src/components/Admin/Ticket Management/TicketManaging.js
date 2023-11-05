import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import TicketTypeTable from "./TicketType/TicketTypeTable";
import { useNavigate } from "react-router-dom";
function TicketManaging() {
    const [ticketsList, setTicketsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //Dummy state to force re-rendering
    const [reload, setReload] = useState(false);

    const navigate = useNavigate();
    let handleAddTicketType = () => {
        navigate("/admin/ticket/add");
    }

    useEffect(() => {
        document.title = "Ticket Managing";
        fetch(`https://vietnamzoo.azurewebsites.net/api/ticket`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => res.json())
            .then(data => {
                setTicketsList(data);
                setIsLoading(false);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, [reload]);
    return (
        <Container fluid>
            <Row>
                {/* Tickets list */}
                {isLoading ?
                    (
                        <Col lg={6} md={12} sm={12} className="d-flex justify-content-center">
                            <h3>Loading...</h3>
                        </Col>
                    ) :
                    (
                        <Col lg={6} md={12} sm={12}>
                            <Row className="my-2">
                                <Col lg={8} md={10} sm={10}>
                                    <h3>Ticket Type</h3>
                                </Col>
                                <Col className="d-grid">
                                    <Button variant="outline-primary" onClick={handleAddTicketType}>Add more ticket</Button>
                                </Col>
                            </Row>
                            <TicketTypeTable ticketsList={ticketsList} reloadState={{reload, setReload}}/>
                        </Col>
                    )}
                {/* Revenues */}
                <Col>

                </Col>
            </Row>
        </Container>
    )
}

export default TicketManaging;