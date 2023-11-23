import { Box, Button, Center, HStack, Heading, Spinner, Stack, useDisclosure } from "@chakra-ui/react"
import { useFrappeDocTypeEventListener, useFrappeGetDocList } from "frappe-react-sdk"
import { ExpenseRecord } from "../types/ExpenseTracker/ExpenseRecord"
import ExpenseTable from "./ExpenseTable"
import Error from "./Error"
import Modals from "./Modals"
import AddExpenseForm from "./AddExpenseForm"


const ExpenseListTab = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { data, isLoading, error, mutate } = useFrappeGetDocList<ExpenseRecord>("Expense Record", { fields: ["*"] })
    useFrappeDocTypeEventListener("Expense Record", (event) => {
        console.log(event)
        if (event.doctype === "Expense Record") mutate()
    })
    return (
        <Stack>
            {error && <Error messege={error.message} />}
            <Modals isOpen={isOpen} onClose={onClose} tittle="Tittle" description={<AddExpenseForm onClose={onClose} />} />
            <HStack justify="space-between">
                <Heading as="h3" fontSize="x-large">Expenses</Heading>
                <Box>
                    <Button colorScheme="blue" onClick={onOpen}>Add Expense</Button>
                </Box>
            </HStack>
            {isLoading && <Center height="40vh"><Spinner /></Center>}
            {data && <ExpenseTable data={data} />}
        </Stack>
    )
}

export default ExpenseListTab