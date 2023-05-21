import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
// import MainScreen from '../../components/MainScreen/MainScreen'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategoryAction, listCategory } from '../../actions/categoryAction'
import Table from 'react-bootstrap/Table';

const ReportList = React.forwardRef((props, ref) => {



    const dispatch = useDispatch();
    const categoryList = useSelector((state) => state.categoryList);
    const { loading, category, error } = categoryList;


    useEffect(() => {
        dispatch(listCategory())
    }, [dispatch])
    const [ProductSearch, setSearch] = useState("");

    //delete function
    const deleteHandler = (id) => {
        if (window.confirm("Are You Sure want to delete this ?")) {
            dispatch(deleteCategoryAction(id))
        }
    };

    return (

        <div className='my-5 '>

            {/* <MainScreen titles='Welcome' > */}

                <Table ref={ref} style={{}}>

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Names</th>
                            <th>Description</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
        category?.reverse().map((category,index)=>( */}
                        {category && category.filter(val => {
                            if (ProductSearch === "") {
                                return val;
                            } else if (
                                val.category.toLowerCase().includes(ProductSearch.toLowerCase()) ||
                                val.foodname.toLowerCase().includes(ProductSearch.toLowerCase())
                            ) {
                                return val
                            }
                        }).map((category, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td><img
                                    style={{
                                        objectFit: "cover",
                                        height: "50px",
                                    }}
                                    src={category.pic}
                                    // src="https://i.ibb.co/w73cvYc/istockphoto-1019835828-612x612.jpg"
                                    alt=""
                                /></td>
                                <td>{category.foodname}</td>
                                <td>{category.price}</td>
                                <td>{category.category}</td>
                            </tr>
                        ))

                        }
                    </tbody>
                    <Card.Footer className="text-muted mt-5">
                        Creating on - {new Date().toLocaleDateString()}
                    </Card.Footer>
                </Table>
            {/* </MainScreen> */}
        </div>
    )
}
)

export default ReportList