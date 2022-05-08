import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

export default function ProfileInfo({ person }) {
  return (
    <TableContainer>
      <Table variant="simple" colorScheme="linkedin">
        <Thead>
          <Tr>
            <Th color="red.500">FullName:</Th>
            <Th color="red.500">Company Name:</Th>
            <Th color="red.500">Company Phrase:</Th>
            <Th color="red.500">Company Motto:</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th>{person.name}</Th>
            <Th>{person.company.name}</Th>
            <Th>{person.company.catchPhrase}</Th>
            <Th>{person.company.bs}</Th>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
