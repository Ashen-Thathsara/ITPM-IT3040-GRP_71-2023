import React, { useRef } from "react";
import { Card, Button } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
// import MainScreen from "../../components/MainScreen/MainScreen";
import CategoryList from "../../screens/Category/Category"
import ReportList from "./ReportList";



const Report = () => {
    const componentRef = useRef();


    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className="AdminLeaveReportbg">
            {/* <MainScreen title="Admin Donation"> */}
                <div style={{ minHeight: 700 }}>
                    <Card
                        style={{
                            margin: 50,
                            marginLeft: "0%",
                            marginRight: "5%",
                            paddingBottom: '20px',
                            width: "100%",
                            borderRadius: 20,
                            borderWidth: 0.8,
                            background: "#E3F4F4",
                        }}
                    >
                        <ReportList ref={componentRef} />
                        <br></br>


                        <br></br>
                        <Button
                            style={{ marginLeft: "80%", width: "15%", height: "20%", fontSize: 15 }}
                            onClick={handlePrint}
                            variant="success"
                        >
                            Generate PDF
                        </Button>
                    </Card>
                    <br />
                </div>
            {/* </MainScreen> */}
        </div>
    );

};



export default Report;