import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Address from "./Address";
import Payment from "./Payment";
import Review from "./Review";
import Layout from "../Layout/Layout";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { toast } from "react-hot-toast";


const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Address />;
    case 1:
      return <Payment />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Checkout() {
  const { accessToken, setorderno,orderno } = useContext(UserContext);
  const postSalesOrder = () => {
    const user = JSON.parse(localStorage.getItem("userdetail"));

    const itemsInCartArray = JSON.parse(localStorage.getItem("cart"));
    const newSalesLines = itemsInCartArray.map((i) => ({
      lineType: "Item",
      lineObjectNumber: i.itemNo,
      quantity: i.quantity,
      unitPrice: i.price,
    }));
    axios
      .post(
        "https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/Sandbox/api/v2.0/companies(2bd1cda4-091c-ec11-bb76-000d3a22055d)/salesOrders?$expand=salesOrderLines",
        {
          customerNumber: user[0].No,
          salesOrderLines: newSalesLines,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        // // console.log(res);
        if(res.status===201){
          toast.success("order posted successfully")
          setorderno(res.data.value.number)
        }
      });
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Layout>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <AppBar
            position="absolute"
            color="default"
            elevation={0}
            sx={{
              position: "relative",
              borderBottom: (t) => `1px solid ${t.palette.divider}`,
            }}
          ></AppBar>
          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <Typography component="h1" variant="h4" align="center">
                Checkout
              </Typography>
              <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                  ` Your order number is ${orderno}. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped .`
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}

                    <Button
                      onClick={() => {
                        handleNext();
                        postSalesOrder();
                      }}
                      variant="contained"
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Paper>
          </Container>
        </ThemeProvider>
      </Layout>
    </>
  );
}
