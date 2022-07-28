import React, { useState } from "react";
import XAppBar from "./XAppBar";
import XDrawer from "./XDrawer";

export default function Header() {
  const [drawerIsOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <XAppBar openDrawer={setDrawerOpen} />
      <XDrawer isOpen={drawerIsOpen} setDrawerOpen={setDrawerOpen} />
    </>
  );
}
