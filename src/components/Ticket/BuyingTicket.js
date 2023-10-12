import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { Button, FormLabel } from "react-bootstrap";
import { FaCalendarDay } from "react-icons/fa6";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import HeaderCart from "./HeaderCart";
import "./BuyingTicket.css"


const BuyingTicket = () => {
    const [ticket1, setTicket1] = useState({
        count: 0
    })
    const decrease1 = (e) => {
        if (ticket1.count <= 0) {
            return
        }
        setTicket1({ count: ticket1.count - 1 })
    }
    const [ticket2, setTicket2] = useState({
        count: 0
    })
    const decrease2 = (e) => {
        if (ticket2.count <= 0) {
            return
        }
        setTicket2({ count: ticket2.count - 1 })
    }
    const [ticket3, setTicket3] = useState({
        count: 0
    })
    const decrease3 = (e) => {
        if (ticket3.count <= 0) {
            return
        }
        setTicket3({ count: ticket3.count - 1 })
    }
    const [amount, setAmount] = React.useState({ count: 0 })
    const [price, setPrice] = React.useState({ count: 0 })
    const NavigationButtons = ({ onOkClick, onAddClick }) => {
        return (
            <div className="button-direct">
                <Button className="button-left" onClick={onOkClick} disabled={ticket1.count ===0 && ticket2.count ===0 && ticket3.count ===0}>
                    Xac nhan
                </Button>
                <Link to='/viewcart'>
                    <Button className="button-right" onClick={onAddClick} disabled={ticket1.count ===0 && ticket2.count ===0 && ticket3.count ===0}>
                        Add to cart {' '}
                    </Button>
                </Link>
            </div>
        );
    };
    const handleOkClick = () => {
        // Implement your logic for going back
        setPrice({ count: ticket1.count * 2 + ticket2.count * 1.4 })
        setAmount({ count: ticket1.count + ticket2.count + ticket3.count })
        console.log('Ok button clicked');
    };

    const handleAddClick = () => {
        // Implement your logic for going next
        console.log('Add button clicked');
    };
    
    return (
        <>
            <div className="min-vh-100">
                <HeaderCart />
                <div className="zoo-information">
                    <h4 className="ms-5">Zoo Day Ticket</h4>
                    <div className="box-alert">
                        <Alert className="mx-auto" style={{ width: '90rem' }} variant="success">
                            <Alert.Heading><h3>TIP-CHEAPEST AND QUICKEST TICKET ONLY ONLINE!</h3></Alert.Heading>
                            <p>Online tickets cheaper than at ticket booths on site</p>
                            <p>Skip the queue with online tickets and go straight to ticket checkers</p>
                            <p>Easy online booking without user account</p>
                        </Alert>
                    </div>
                    <div className="ticket-table mx-auto">

                        <Table className="table" bordered variant="none">
                            <thead>
                                <th className="ticket-table-information" colSpan={4}>PLEASE SELECT YOUR ITEM</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="text-align">Please select a day</th>
                                    <th colSpan={2}><FaCalendarDay /></th>
                                    <th>Cost</th>
                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <th className="text-align">Day Ticket Zoo - Adult</th>
                                    <th class="align-self-center" colSpan={2}>

                                        <Button variant="outline-dark" onClick={decrease1}>-</Button> {' '}
                                        <FormLabel type='text'>{' '}{ticket1.count}{' '}</FormLabel>{' '}
                                        <Button variant="outline-dark" onClick={() => setTicket1({ count: ticket1.count + 1 })}>+</Button>

                                    </th>
                                    <th>2$</th>
                                </tr>
                                <tr>
                                    <th className="text-align">Day Ticket Zoo - Children<p>aged under 18</p></th>
                                    <th class="align-self-center" colSpan={2}>

                                        <Button variant="outline-dark" onClick={decrease2}>-</Button> {' '}
                                        <FormLabel type='text'>{' '}{ticket2.count}{' '}</FormLabel>{' '}
                                        <Button variant="outline-dark" onClick={() => setTicket2({ count: ticket2.count + 1 })}>+</Button>

                                    </th>
                                    <th>1.4$</th>
                                </tr>
                                <tr>
                                    <th className="text-align">Day Ticket Zoo - Children<p>lower than 1m3</p></th>
                                    <th class="align-self-center" colSpan={2}>

                                        <Button variant="outline-dark" onClick={decrease3}>-</Button> {' '}
                                        <FormLabel type='text'>{' '}{ticket3.count}{' '}</FormLabel>{' '}
                                        <Button variant="outline-dark" onClick={() => setTicket3({ count: ticket3.count + 1 })}>+</Button>

                                    </th>
                                    <th>Free</th>
                                </tr>
                                <tr>
                                    <th className="text-align">Total</th>
                                    <th colSpan={2}>
                                        <FormLabel type='text'>{amount.count}</FormLabel>
                                    </th>
                                    <th>
                                        <FormLabel type='text'>{price.count}</FormLabel>
                                    </th>
                                </tr>
                            </tbody>

                        </Table>
                        <NavigationButtons onOkClick={handleOkClick} onAddClick={handleAddClick} />
                        <div className="note fs-3">
                            <p style={{ fontFamily: 'Just Another Hand' }}>Please note!</p>

                            <p>After purchase you will receive your tickets by e-mail (can be presented digitally). The tickets are only valid on the selected date. Booked tickets are excluded from cancellation and/or exchange.</p>

                            <p>Please find further information on the conservation contribution here. The contribution is optional and can be deselected in the cart.</p>

                            <p>Children under 12 years of age and any visitors who lack the necessary maturity or require permanent supervision due to a mental and/or physical condition must be accompanied and supervised on the premises at all times by an adult chaperone</p>

                            <p>* Only valid in combination with a corresponding proof. The proof must be personalized, given a (valid) validity and issued by an official authority/institution (not digital). The proof will be checked at the admission checkers - please have it ready along with a photo ID.</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default BuyingTicket;