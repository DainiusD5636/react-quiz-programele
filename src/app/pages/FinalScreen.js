import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/actions";
import "./index.css";

const FinalScreen = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state);

  const handleBackToSettings = () => {
    disptach(handleScoreChange(0));
    disptach(handleAmountChange(50));
    navigate("/");
  };

  return (
    <div className="Fonas">
      <Box mt={30}>
        <Typography variant="h4" color="black" fontWeight="bold" mb={3}>
          Final Score:
        </Typography>
        <Typography variant="h3" color="black" fontWeight="bold" mb={3}>
          {score}
        </Typography>
        <Button onClick={handleBackToSettings} variant="outlined">
          Go back
        </Button>
      </Box>
    </div>
  );
};

export default FinalScreen;
