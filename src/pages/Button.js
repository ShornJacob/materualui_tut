import React from "react";
import Button from "@material-ui/core/Button";

export default function Types() {
  return (
    <div>
         <Button>default props</Button>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}
