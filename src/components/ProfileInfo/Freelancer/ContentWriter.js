import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";

const ContentWriter = () => {
    const options= [];
     return(
        <div>
            <InputLabel
            shrink
            htmlFor="age-native-label-placeholder"
            style={{ textAlign: "left" }}
          >
            Select Category
          </InputLabel>
          <NativeSelect
            fullWidth
            inputProps={{
              name: "age",
              id: "age-native-label-placeholder",
            }}
          >
            <option value="" disabled default>
              Select one
            </option>
            
            <option value="Writer">Writer</option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="Video Editor">Video Editor</option>
          </NativeSelect>

        </div>
     );
};

export default ContentWriter;