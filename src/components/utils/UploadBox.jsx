import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Publish } from "@material-ui/icons";
import { useFormikContext } from "formik";
import React, { useState } from "react";
import FileButton from "../forms/FileButton";

function UploadBox({ onDrop, onChange, name, multiple, children }) {
  const [dragEnter, setDragEnter] = useState(false);
  const { errors, setValues } = useFormikContext();

  const useStyles = makeStyles((theme) => ({
    uploadBox: {
      float: "left",
      width: "100%",
      height: "30rem",
      border: `2px dashed ${dragEnter ? "#222" : "#ccc"}`,
      marginBottom: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: dragEnter ? "#222" : "#aaa",
      flexDirection: "column",
      cursor: "default",
      transition: "all 200ms",
      borderRadius: "1rem",
    },
    errorBox: {
      float: "left",
      width: "100%",
      color: red[500],
      textAlign: "center",
      marginBottom: theme.spacing(1),
    },
    icon: {
      fontSize: "4rem",
      transition: "all 200ms",
      transform: dragEnter ? "translateY(-0.5rem)" : "translateY(0)",
    },
  }));
  const classes = useStyles();

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragEnter(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragEnter(false);
  };

  const handleChange = (e) => {
    const files = multiple ? e.currentTarget.files : e.currentTarget.files[0];
    setValues({ [name]: files });
    onChange(files);
  };

  return (
    <div
      className={classes.uploadBox}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragEnter(false);
        const files = multiple ? e.dataTransfer.files : e.dataTransfer.files[0];

        setValues({ [name]: files });
        onDrop(files);
      }}
    >
      <Publish className={classes.icon} />
      <div>Drop your files here or choose</div>
      <div style={{ marginTop: "7rem" }}>
        <FileButton
          color="primary"
          name={name}
          onChange={(e) => handleChange(e)}
          multiple={multiple}
        />
      </div>
      <div className={classes.errorBox}>{errors[name]}</div>
    </div>
  );
}

export default UploadBox;
