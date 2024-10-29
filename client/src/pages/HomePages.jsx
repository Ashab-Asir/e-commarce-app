import React from "react";
import { LeftPanel } from "../components";
import { Box } from "../api/common/components";

export function HomePages() {
  return (
    <Box display="flex" gap={4} paddingLeft={12} paddingRight={12}>
      <LeftPanel></LeftPanel>
    </Box>
  );
}
