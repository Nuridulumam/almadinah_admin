import React, {useState} from 'react';
import SideMenu from "../../components/sidemenu/index.jsx";
import Admin from "./admin/index.jsx";
import {Box} from "@chakra-ui/react";
import Calon_Santri from "./calon_santri/index.jsx";

const Index = () => {

    const [isActiveMenu, setIsActiveMenu] = useState("admin");

    const list = [
        {title: "Admin", desc: "Manajemen akun admin al-madinah", active: 'admin'},
        {title: "Santri", desc: "Manajemen akun santri al-madinah", active: 'santri'}
    ]
    return (
        <Box>
            <SideMenu
                sideMenu_list={list}
                nowActive={isActiveMenu}
                active_menu={(value) => setIsActiveMenu(value)}
                sideContent={
                    isActiveMenu === "admin" && <Admin/> ||
                    isActiveMenu === "santri" && <Calon_Santri/>
                }
            />
        </Box>
    );
};

export default Index;
