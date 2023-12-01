import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { Product } from "../types/types";

type SimpleSnackBarProps = {
  message: string;
  handleAddFav: (item: Product) => void;
  handleRemoveFav: (item: Product) => void;
  like: boolean;
  setLike: React.Dispatch<React.SetStateAction<boolean>>;
  item: Product;
};

//Change position of the snackbar
interface State extends SnackbarOrigin {
  open: boolean;
}

export default function SimpleSnackbar({
  message,
  handleAddFav,
  handleRemoveFav,
  like,
  setLike,
  item,
}: SimpleSnackBarProps) {
  //Before changing position
  //const [open, setOpen] = React.useState(false);
  //In order to change the position I have to create a new state
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  //On the handleclick function I added my own functions as well.
  const handleClick = (newState: SnackbarOrigin) => {
    //setOpen(true);
    setState({ ...newState, open: true });
    if (like) {
      handleRemoveFav(item);
      setLike(false);
    } else {
      handleAddFav(item);
      setLike(true);
    }
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    //setOpen(false);
    setState({ ...state, open: false });
  };

  const action = (
    <React.Fragment>
      <Button
        color={like ? "success" : "warning"}
        size="small"
        onClick={handleClose}
      ></Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  //On the button I have to pass where I want the message to be shown.
  return (
    <div>
      <Button
        onClick={() => handleClick({ vertical: "bottom", horizontal: "right" })}
      >
        {like ? "❤️" : "🖤"}
      </Button>
      //Conditional rendering
      {like ? (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={message}
          action={action}
          anchorOrigin={{ vertical, horizontal }}
          ContentProps={{
            sx: {
              background: "green",
            },
          }}
        />
      ) : (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={message}
          action={action}
          anchorOrigin={{ vertical, horizontal }}
          ContentProps={{
            sx: {
              background: "red",
            },
          }}
        />
      )}
    </div>
  );
}
