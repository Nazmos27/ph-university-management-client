import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { TInputProps } from "../../types";

const PHInput = ({ type, name, label } : TInputProps)  => {

  return (
    <div style={{marginBottom : "20px"}}>
      {label ? label : null}
      <Controller
      name={name}
      render={({field}) => <Input {...field} type={type} id={name} ></Input>
    }
      />
    </div>
  );
};

export default PHInput;
