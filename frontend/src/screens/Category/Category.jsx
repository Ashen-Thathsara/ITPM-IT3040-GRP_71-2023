// import React, { useEffect, useState } from 'react'
// import Card from 'react-bootstrap/Card';
// import Accordion from 'react-bootstrap/Accordion';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Container from 'react-bootstrap/esm/Container';
// import MainScreen from '../../component/MainScreen';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/esm/Button';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteCategoryAction, listCategory } from '../../actions/categoryAction'
// import ErrorMessage from '../../component/ErrorMessage';
// import Table from 'react-bootstrap/Table';

// const Category = ({ history, search }) => {


//   const dispatch = useDispatch();
//   const categoryList = useSelector((state) => state.categoryList);
//   const { loading, category, error } = categoryList;

//   const userLogin = useSelector(state => state.userLogin)
//   const { userInfo } = userLogin;

//   useEffect(() => {
//     dispatch(listCategory());
//     if (!userInfo) {
//       history.push('/');
//     }
//   }, [dispatch]);

//   //delete function
//   const deleteHandler = (id) => {
//     if (window.confirm("Are You Sure want to delete this ?")) {
//       dispatch(deleteCategoryAction(id))
//     }
//   };

//   return (

//     <div className='my-5 '>

//       <MainScreen titles='Welcome' >
//         <Link to='/categorycreate'>
//           <Button style={{ marginLeft: 5, marginBottom: 6 }} size='lg'>Create New Post</Button>
//         </Link>
//         <Table responsive>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Image</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Type</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               category?.reverse().filter(filterCategory => (
//                 filterCategory.category.toLowerCase().includes(search.toLowerCase())
//               )).map((category, index) => (
//                 <tr>
//                   <td>{index + 1}</td>
//                   <td><img
//                     style={{
//                       objectFit: "cover",
//                       height: "50px",
//                     }}
//                     src={category.pic}
//                     // src="https://i.ibb.co/w73cvYc/istockphoto-1019835828-612x612.jpg"
//                     alt=""
//                   /></td>
//                   <td>{category.foodname}</td>
//                   <td>{category.price}</td>
//                   <td>{category.category}</td>
// <td>
//   <Button href={`/categoryUpdate/${category._id}`} className="mx-4">Edit</Button>
//   <Button variant="danger" onClick={() => deleteHandler(category._id)}>
//     Delete
//   </Button>
// </td>
//                 </tr>

//               ))
//             }
//           </tbody>
//         </Table>
//       </MainScreen>
//     </div>
//   )
// }

// export default Category


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

const Category = React.forwardRef((props, ref) => {



  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, category, error } = categoryList;


  useEffect(() => {
    dispatch(listCategory())
  }, [dispatch])
  const [ProductSearch, setSearch] = useState("");

  //delete function
  const deleteHandler = (id) => {

    dispatch(deleteCategoryAction(id))

  };

  return <div className="my-5 ">
    <input type="text" placeholder="Search.." className="text111" name="search2" onChange={e => {
      setSearch(e.target.value);
    }} style={{
      backgroundColor: "white", border: "1px solid black", color: "black", width: "400px", height: "30px",
      marginLeft: "450px", padding: "5px 10px", borderRadius: "5px"
    }} />

    {/* <MainScreen titles="Welcome"> */}
    <Link to="/categorycreate">
      <Button style={{ marginLeft: 5, marginBottom: 6 }} size="sm">
        Create New
      </Button>
    </Link>

    <Button href="/report" style={{ marginLeft: 5, marginBottom: 6 }} size="sm">
      Genarate Report
    </Button>

    <Table ref={ref} style={{ background: "white", fontSize: "15px", marginTop: "30px" }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Names</th>
          <th>Description</th>
          <th>Type</th>
          <th className='px-5'>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* {
        category?.reverse().map((category,index)=>( */}
        {category && category
          .filter(val => {
            if (ProductSearch === "") {
              return val;
            } else if (val.category
              .toLowerCase()
              .includes(
                ProductSearch.toLowerCase()
              ) || val.foodname
                .toLowerCase()
                .includes(ProductSearch.toLowerCase())) {
              return val;
            }
          })
          .map((category, index) => <tr>
            <td>
              {index + 1}
            </td>
            <td>
              <img style={{ objectFit: "cover", height: "50px" }} src={category.pic} // src="https://i.ibb.co/w73cvYc/istockphoto-1019835828-612x612.jpg"
                alt="" />
            </td>
            <td>
              {category.foodname}
            </td>
            <td>
              {category.price}
            </td>
            <td>
              {category.category}
            </td>
            <td>
              <Button href={`/categoryUpdate/${category._id}`} className="mx-4">Edit</Button>
              <Button variant="danger" onClick={() => deleteHandler(category._id)}>
                Delete
              </Button>
            </td>
          </tr>)}
      </tbody>
    </Table>
    {/* </MainScreen> */}
  </div>;
}
)

export default Category