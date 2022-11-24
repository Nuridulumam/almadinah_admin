import {useEffect, useState} from 'react';
import {Box, Button, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsThreeDots, FiFilter} from "react-icons/all";
import {DataTable} from "../../../components/table";
import {createColumnHelper} from "@tanstack/react-table";
import {connect, useDispatch} from "react-redux";

const Manajemen_Santri = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const colManajemenSantri = createColumnHelper();
    const columns = [
        colManajemenSantri.accessor("no", {
            header: "NO"
        }),
        colManajemenSantri.accessor("programType", {
            header: "Nama Lengkap"
        }),
        colManajemenSantri.accessor("proposalNumber", {
            header: "Alamat"
        }),
        colManajemenSantri.accessor("proposalType", {
            header: "Alamat"
        }),
        colManajemenSantri.accessor("action", {
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
                <Heading>Santri</Heading>
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

export default connect(mapStateToProps, mapDispatchToProps)(Manajemen_Santri);