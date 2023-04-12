
import React, { useContext, useState} from "react";
import { ThemeContext } from "../../../themes/themeContext";
import * as Themes from "../../../themes/index";
import { Button } from "../../molecules/Button";
import Modal from "../Modal";
import Form from "../Form";
import { template } from "../../../form-schemas/ads";
import {IoMdClose} from 'react-icons/io';
const TableHeader = () => {
  const { setTheme } = useContext(ThemeContext);
  //add state and a toggle handler
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);
  const onSubmitForm = (data:any) =>{console.log(data)}
  return (
    <>
    <div className="navbar bg-base-200">
      <div className="navbar-start"></div>
      <div className="navbar-end">
      <Button btnType='base' size="sm" onClick={handleToggle}>
          New Ads
      </Button>
      <Button btnType='base' size="sm" onClick={handleToggle}>
          New Ads
      </Button>
      <Button btnType='base' size="sm" onClick={handleToggle}>
          New Ads
      </Button>
      </div>
    </div>
    
      <Modal open={open}>
      <div className="navbar bg-base-200">
      <div className="navbar-start">New Ads</div>
      <div className="navbar-end">
     {/* closes the modal */}
     <Button btnType='base' size="sm" onClick={handleToggle}>
          <IoMdClose />
      </Button>
      </div>
    </div>
      <Form schema={template} onSubmitForm={onSubmitForm}>
        
      </Form>
          
      </Modal>
    </>
  );
};

export default TableHeader;