import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


function FAQ() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
        <Header title={'FAQ'} subtitle={'Frequently Asked Questions'}/>

        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='h5' color={colors.greenAccent[500]} >
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='h5' color={colors.greenAccent[500]} >
                    Another Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='h5' color={colors.greenAccent[500]} >
                    Most Asked Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='h5' color={colors.greenAccent[500]} >
                    Most Voted Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='h5' color={colors.greenAccent[500]} >
                    Least Asked Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default FAQ