import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
// import NativeSelect from "@material-ui/core/NativeSelect";
// import { Checkbox } from '@material-ui/core';

const VideoEditor = () => {
  // const softwares= [ 'PremierePro', 'AfterEffects', 'Filmora'];
  return (
    <div>
      <InputLabel
        shrink
        htmlFor="age-native-label-placeholder"
        style={{ textAlign: "left" }}
      >
        Select Category
      </InputLabel>
    </div>
  );
};

export default VideoEditor;
