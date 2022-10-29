import React from 'react';
import {Box, Button, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsThreeDots, FiFilter} from "react-icons/all";
import {DataTable} from "../../components/table";
import {createColumnHelper} from "@tanstack/react-table";

const Santri = () => {
    const columnHelper = createColumnHelper<UnitConversion>();

    type UnitConversion = {
        fromUnit: string;
        toUnit: string;
        address: string;
    };

    const data: UnitConversion[] = [
        {
            fromUnit: "inches",
            toUnit: "millimetres (mm)",
            address: "Jombang"
        },
        {
            fromUnit: "feet",
            toUnit: "centimetres (cm)",
            address: "Jombang"
        },
        {
            fromUnit: "yards",
            toUnit: "metres (m)",
            address: "Jombang"
        }
    ];

    const columns = [
        columnHelper.accessor("fromUnit", {
            cell: (info) => info.getValue(),
            header: "NO"
        }),
        columnHelper.accessor("toUnit", {
            cell: (info) => info.getValue(),
            header: "Nama Lengkap"
        }),
        columnHelper.accessor("address", {
            cell: (info) => info.getValue(),
            header: "Alamat"
        }),
        columnHelper.accessor("address", {
            cell: (info) => info.getValue(),
            header: "Alamat"
        }),
        columnHelper.accessor("address", {
            cell: (info) => {
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
        <Box
            id="table"
            p={'2rem'}
            bg={'whiteAlpha.700'}
            borderBottomRadius={'1rem'}
            boxShadow={'lg'}
        >
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

export default Santri;
