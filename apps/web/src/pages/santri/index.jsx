import {useEffect, useState} from 'react';
import {Box, Button, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsThreeDots, FiFilter} from "react-icons/all";
import {DataTable} from "../../components/table";
import {createColumnHelper} from "@tanstack/react-table";
import {connect, useDispatch} from "react-redux";
import monevSustainable from "./actions_santri";

const Santri = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const handleRefresh = () => {
        new Promise((resolve) => {
            const param = {
                Page:  1,
                Length: 10,
                ProgramType: "Sustainable",
            };
        dispatch(monevSustainable.get(param, resolve));
        }).then((res) => {
            setData(res?.data);
        })
    }

    useEffect(() => {
       handleRefresh();
    }, []);

    const columnSantri = createColumnHelper();
    const columns = [
        columnSantri.accessor("no", {
            header: "NO"
        }),
        columnSantri.accessor("programType", {
            header: "Nama Lengkap"
        }),
        columnSantri.accessor("proposalNumber", {
            header: "Alamat"
        }),
        columnSantri.accessor("proposalType", {
            header: "Alamat"
        }),
        columnSantri.accessor("action", {
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

export default connect(mapStateToProps, mapDispatchToProps)(Santri);
