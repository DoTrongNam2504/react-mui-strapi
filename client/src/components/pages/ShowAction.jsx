import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ShowAction() {

  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button><RemoveRedEyeIcon/></Button>
        <Button><EditIcon/></Button>
        <Button><DeleteIcon /></Button>
      </ButtonGroup>
    </div>
  );
}
