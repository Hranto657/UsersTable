import React from "react";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function TableUser({ person }) {
  return (
    <TableContainer>
      <Table variant="simple" colorScheme="telegram">
        <TableCaption
          placement="top"
          fontSize="2xl"
          fontWeight="bold"
          color="green.500"
        >
          Table for Users
        </TableCaption>
        <Thead>
          <Tr>
            <Th fontSize="sm" color="blue.500">
              Full Name:
            </Th>
            <Th fontSize="sm" color="blue.500">
              E-mail:
            </Th>
            <Th fontSize="sm" color="blue.500">
              UserName:
            </Th>
            <Th fontSize="sm" color="blue.500">
              Phone:
            </Th>
            <Th fontSize="sm" color="blue.500">
              Website:
            </Th>
            <Th fontSize="sm" color="blue.500">
              Address:
            </Th>
          </Tr>
        </Thead>
        {person.map((person) => {
          return (
            <Tbody>
              <Tr key={person.id}>
                <Th fontSize="12px" color="teal.400">
                  <Link to={`/${person.id}`}>{person.name}</Link>
                </Th>
                <Th fontSize="10px">{person.email}</Th>
                <Th fontSize="10px">{person.username}</Th>
                <Th fontSize="10px">{person.phone}</Th>
                <Th fontSize="10px">{person.website}</Th>
                <Th fontSize="10px">
                  {person.address.city},{person.address.street}
                  <br />
                  {person.address.suite},ZipCode:{person.address.zipcode}
                </Th>
              </Tr>
            </Tbody>
          );
        })}
      </Table>
    </TableContainer>
  );
}
