import React,{useState,useEffect} from 'react'
import MainScreen from '../../component/MainScreen'
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Form } from "react-bootstrap";
import Loarding from '../../component/Loarding';
import { createCategoryAction } from '../../actions/categoryAction';
import ErrorMessage from '../../component/ErrorMessage';

const CreateCategory = ({history}) => {

  const [foodname, setFoodname] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [pic, setPic] = useState("");
  const [picMessage, setPicMessage] = useState(null);
 

  const dispatch = useDispatch();

  const categoryCreate = useSelector((state) => state.categoryCreate);
  const { loading, error, product} = categoryCreate;

  console.log( product);

  const resetHandler = () => {
    setFoodname("");
    setPrice("");
    setCategory("");
    setPic("");
  };


const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please Select an Image");
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/jpg") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "LAYOUTindex");
      data.append("cloud_name", "dknttakfo");
      fetch("https://api.cloudinary.com/v1_1/dknttakfo/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  const submitHandler = (e) => {
   e.preventDefault();
    dispatch(createCategoryAction(foodname, price, category, pic));
    if (!foodname || !price || !category || !pic) return;

    resetHandler();
    history.push("/category");
  };

  

  useEffect(() => {}, []);
  return (
  <div>
    <MainScreen titles="Donation Post">
      <Card>
        <Card.Header >Post New Donation</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
           
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                value={foodname}
                placeholder="Enter title"
                onChange={(e) => setFoodname(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="title">
               <Form.Label>Description</Form.Label>
               <Form.Control
                type="title"
                value={price}
                placeholder="Enter the donation description"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

     <Form.Group controlId="title">
     <Form.Label>Donation Type</Form.Label>
     <div class="form-group col-lg flex-column d-flex" style={{}}>
      <select id="inputState" class="form-control" onChange={(e)=>{setCategory(e.target.value);}} required>
        <option selected placeholder="">Choose Type...</option>
        <option>Type 1</option>
        <option>Type 2</option>
        <option>Type 3</option>
      </select>
    </div>
     </Form.Group>

{/*         
          {picMessage && (
            <ErrorMessage  variant='danger'>{picMessage}</ErrorMessage>
          )}
           <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Uploard Food Image</Form.Label>
            <Form.Control type="file"
                            value={pic}
          // onChange={(e)=> postDetails(e.target.file[0])}
                            onChange={(e)=> setPic(e.target.value)}/>
          </Form.Group> */}
        
           {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )}
          <Form.Group controlId="pic">
            <Form.Label>Picture</Form.Label>
            <Form.Control
              onChange={(e) => postDetails(e.target.files[0])}
              id="custom-file"
              type="file"
              label="Upload Profile Picture"
              custom
            />
          </Form.Group>

        {loading && <Loarding size={50} />}
            <Button type="submit" variant="primary" className="my-4">
            Post Donation
            </Button>
            <Button className="mx-5" onClick={resetHandler} variant="danger">
            Reset Feilds
            </Button>
        </Form>
      </Card.Body>

       <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
       </Card.Footer>

     </Card>
    </MainScreen>
  </div>
  )
}

export default CreateCategory;