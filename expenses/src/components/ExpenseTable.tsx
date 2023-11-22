import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { ExpenseRecord } from "../types/ExpenseTracker/ExpenseRecord"


const ExpenseTable = ({ data }: { data: ExpenseRecord[] }) => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Transaction Data</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Owner</Th>
                        <Th>Creation</Th>
                        <Th>Modified</Th>
                        <Th>Modified By</Th>
                        <Th isNumeric>Docstatus</Th>
                        <Th isNumeric>Idx</Th>
                        <Th isNumeric>Amount</Th>
                        <Th>Type</Th>
                        <Th>Description</Th>
                        <Th>Remarks</Th>
                        <Th isNumeric>Formatted Amount</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((transaction) => (
                        <Tr key={transaction.name}>
                            <Td>{transaction.name}</Td>
                            <Td>{transaction.owner}</Td>
                            <Td>{transaction.creation}</Td>
                            <Td>{transaction.modified}</Td>
                            <Td>{transaction.modified_by}</Td>
                            <Td isNumeric>{transaction.docstatus}</Td>
                            <Td isNumeric>{transaction.idx}</Td>
                            <Td isNumeric>{transaction.amount}</Td>
                            <Td>{transaction.type}</Td>
                            <Td>{transaction.description}</Td>
                            <Td>{transaction.remarks}</Td>
                            <Td isNumeric>{transaction.formatted_amount}</Td>
                        </Tr>
                    ))}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Owner</Th>
                        <Th>Creation</Th>
                        <Th>Modified</Th>
                        <Th>Modified By</Th>
                        <Th isNumeric>Docstatus</Th>
                        <Th isNumeric>Idx</Th>
                        <Th isNumeric>Amount</Th>
                        <Th>Type</Th>
                        <Th>Description</Th>
                        <Th>Remarks</Th>
                        <Th isNumeric>Formatted Amount</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default ExpenseTable