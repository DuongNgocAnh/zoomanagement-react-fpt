import React, { useState, useEffect } from "react";
import { Pagination, Col, Row, Container, Form } from "react-bootstrap";
import AnimalStatusTable from "./AnimalStatusTable";
import { Spin } from "antd";

function AnimalStatusManaging() {

    const [animalList, setAnimalList] = useState([]);
    const [searchBy, setSearchBy] = useState("AnimalName");
    const [searchString, setSearchString] = useState("");
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const trainerId = JSON.parse(localStorage.getItem("loginUser")).userId;
    //Dummy state to force re-render
    const [reload, setReload] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    //#region Pagination
    let PaginationLoad = () => {
        let items = [];
        if (totalPages > 1) {
            for (let page = 1; page <= totalPages; page++) {
                items.push(<Pagination.Item key={page} onClick={onPaginationClick}>{page}</Pagination.Item>)
            }
        }
        return items;
    }

    const onPaginationClick = (e) => {
        setCurrentPage(e.target.text);
    }
    //#endregion
//jwqoiryhiowyeoiqhwlwrenqwlreqwre
    useEffect(() => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/AnimalUser/user/${trainerId}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setAnimalList(data);
                setIsLoading(false);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, [reload, currentPage, searchBy, searchString]);

    return (
        <Container fluid>
            <Row className="vh-20 d-flex justify-content-center align-items-center m-3 pb-1 border-bottom">
                {/*Start search*/}
                {/*Search filter */}
                <Col lg={3} md={3} xs={12}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Select
                            value={searchBy}
                            onChange={(e) => {
                                setSearchBy(e.target.value)
                            }}
                        >
                            <option value={"FullName"}>Animal Name</option>
                            <option>Name</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                {/*Search filter */}
                {/*Search bar */}
                <Col lg={8} md={8} xs={11}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={searchString}
                            onChange={(e) => { setSearchString(e.target.value) }}>
                        </Form.Control>
                    </Form.Group>
                </Col>
                {/*Search bar */}
                {/*End search*/}
            </Row>
            <Row>
                {isLoading === true ? (
                    <Col>
                        <Spin />
                    </Col>
                ) : (
                    <Col>
                        <AnimalStatusTable animalList={animalList} reloadState={{ reload, setReload }} />
                        <Pagination>
                            {PaginationLoad()}
                        </Pagination>
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default AnimalStatusManaging;