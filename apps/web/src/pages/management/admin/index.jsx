import {useEffect, useState} from 'react';
import {Box, Button, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsThreeDots, FiFilter} from "react-icons/all";
import {DataTable} from "../../../components/table";
import {createColumnHelper} from "@tanstack/react-table";
import {connect, useDispatch} from "react-redux";

const Manajemen_Admin = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const colManajemenAdmin = createColumnHelper();
    const columns = [
        colManajemenAdmin.accessor("no", {
            header: "NO"
        }),
        colManajemenAdmin.accessor("programType", {
            header: "Nama Lengkap"
        }),
        colManajemenAdmin.accessor("proposalNumber", {
            header: "Alamat"
        }),
        colManajemenAdmin.accessor("proposalType", {
            header: "Alamat"
        }),
        colManajemenAdmin.accessor("action", {
            cell: (row) => {
                return (
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            icon={<BsThreeDots />}
                            variant='styled'
                        />
                        <MenuList width={'10px'}>
                            <MenuItem>Lihat</MenuItem>
                            <MenuItem>Edit</MenuItem>
                        </MenuList>
                    </Menu>
                )
            },
            header: ""
        })
    ];

    return (
        <Box id="table" p={'2rem'}>
            <Flex id="Header" pb={'2.5rem'} flexDir={'row'} justifyContent={'space-between'}>
                <Heading>Admin</Heading>
                <Button
                    leftIcon={<FiFilter />}
                    borderRadius={'100'}
                    p={6}
                    fontWeight={700}
                    colorScheme={'teal'}
                >Filter</Button>
            </Flex>
            <DataTable data={data} columns={columns}/>
        </Box>
    );
};

const mapStateToProps = () => {
    return { };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Manajemen_Admin);
