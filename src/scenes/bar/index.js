import { Box } from "@mui/material"
import Header from "../../components/Header"
import BarChart from "../../components/BarChart"

function Bar() {
  return (
    <Box m='20px'>
        <Header title='BAR CHART' subtitle='A simple barchart' />
        <Box height='75vh'>
            <BarChart />
        </Box>
    </Box>
  )
}

export default Bar