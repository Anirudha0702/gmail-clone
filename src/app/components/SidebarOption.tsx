import React from "react";
import { OverridableComponent } from "@mui/types";
import { SvgIconTypeMap } from "@mui/material";
export default function SidebarOption({ Icon, title }: { Icon: OverridableComponent<SvgIconTypeMap>; title?: string }) {
  return (
    <div>
      <Icon fontSize="small"/>
    </div>
  );
}
