import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export default function DefaultLayout() {
  return (
    <>
      <Flex
        direction="column"
        align="center"
        maxW={{base: "auto", xl: "100%" }}
        m="0 auto"
      >
        <Outlet />
      </Flex>
    </>
  );
}
