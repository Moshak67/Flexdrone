import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {MDBCol, MDBRow,MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,
    MDBContainer,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBCardHeader,
} from "mdb-react-ui-kit";
function OrderProducts() {
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState(null);
    const { orderId } = useParams();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const fetchOrder = async () => {
                try {
                    const response = await axios.get(`http://localhost:8080/api/v1/order/myOrder/id/${orderId}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setOrder(response.data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchOrder();

            const fetchProducts = async () => {
                try {
                    const response = await axios.get(`http://localhost:8080/api/v1/order/myOrder/id/${orderId}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setProducts(response.data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchProducts();
        }
    }, [orderId]);

    if (!order) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="12">
                        <MDBCard className="mb-4">
                            <MDBCardHeader>Order Detail</MDBCardHeader>
                            <MDBCardBody className="text-center">
                                <MDBTable align='middle'>
                                    <MDBTableHead>
                <tr>
                    <th scope='col'>Product Order ID</th>
                    <th scope='col'>Order ID</th>
                    <th scope='col'>Product ID</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>SKU</th>
                    <th scope='col'>Sold Price</th>
                </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                {products.map((product) => (
                    <tr key={product.product_order_id}>
                        <td >{product.product_order_id}</td>
                        <td >{product.order_id}</td>
                        <td >{product.product_id}</td>
                        <td >{product.quantity}</td>
                        <td >{product.sku}</td>
                        <td >AU$ {product.sold_price}</td>
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


export default OrderProducts;
