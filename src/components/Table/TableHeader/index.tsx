import React, { useState } from 'react';
import { Button } from '../../Button';
const TableHeader = () => {
  //add state and a toggle handler
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);
  // const onSubmitForm = (data: any) => {
  //   console.log(data);
  // };
  console.log(open);
  return (
    <>
      <div className="navbar bg-base-200">
        <div className="navbar-start"></div>
        <div className="navbar-end">
          <Button btntype="base" size="sm" onClick={handleToggle}>
            New Ads
          </Button>
          <Button btntype="base" size="sm" onClick={handleToggle}>
            New Ads
          </Button>
          <Button btntype="base" size="sm" onClick={handleToggle}>
            New Ads
          </Button>
        </div>
      </div>

      {/*<Modal open={open}>*/}
      {/*  <div className="navbar bg-base-200">*/}
      {/*    <div className="navbar-start">New Ads</div>*/}
      {/*    <div className="navbar-end">*/}
      {/*      /!* closes the modal *!/*/}
      {/*      <Button btntype="base" size="sm" onClick={handleToggle}>*/}
      {/*        <IoMdClose />*/}
      {/*      </Button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</Modal>*/}
    </>
  );
};

export default TableHeader;
