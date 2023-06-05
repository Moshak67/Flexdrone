import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {MDBCol, MDBRow,MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,
    MDBContainer,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBCardHeader,
    } from "mdb-react-ui-kit";

function UserOrders() {
    const [orders, setOrders] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const fetchUser = async () => {
                try {
                    const response = await axios.get('http://localhost:8080/api/v1/auth/profile', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setUser(response.data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchUser();

            const fetchOrders = async () => {
                try {
                    const response = await axios.get('http://localhost:8080/api/v1/order/myOrder', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    console.log(orders)
                    setOrders(response.data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchOrders();
        }
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="12">
                        <MDBCard className="mb-4">
                            <MDBCardHeader>{user.first_name} Order History:</MDBCardHeader>
                            <MDBCardBody className="text-center">
            <MDBTable align='middle'>
                <MDBTableHead>
                <tr>
                    <th scope='col'>Order ID</th>
                    <th scope='col'>Customer ID</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Address</th>
                    <th scope='col'>Order At</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Payment Method</th>
                    <th scope='col'>View</th>
                </tr>
                </MDBTableHead>
                <MDBTableBody>
                {orders.map((order) => (
                    <tr key={order.order_id}>
                        <td>{order.order_id}</td>
                        <td>{order.customer_id}</td>
                        <td>{order.status}</td>
                        <td>{order.address}</td>
                        <td>{order.order_at}</td>
                        <td>{order.email}</td>

                        <td>{order.payment_method}</td>
                        <td>
                            <Link to={`/userOrders/${order.order_id}`}>
                                <MDBBtn>View</MDBBtn>
                            </Link>
                        </td>
                    </tr>
                ))}
                </MDBTableBody>
            </MDBTable>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default UserOrders;
