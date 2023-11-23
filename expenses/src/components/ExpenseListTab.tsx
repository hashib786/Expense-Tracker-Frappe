import { Box, Button, Center, HStack, Heading, Spinner, Stack, useDisclosure } from "@chakra-ui/react"
import { useFrappeGetDocList } from "frappe-react-sdk"
import { ExpenseRecord } from "../types/ExpenseTracker/ExpenseRecord"
import ExpenseTable from "./ExpenseTable"
import Error from "./Error"
import Modals from "./Modals"


const ExpenseListTab = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { data, isLoading, error } = useFrappeGetDocList<ExpenseRecord>("Expense Record", { fields: ["*"] })
    console.log({ data, isLoading, error }, JSON.stringify(data))
    return (
        <Stack>
            {error && <Error messege={error.message} />}
            <Modals isOpen={isOpen} onClose={onClose} tittle="Tittle" description="Description" />
            <HStack justify="space-between">
                <Heading as="h3" fontSize="x-large">Expenses</Heading>
                <Box>
                    <Button colorScheme="blue" onClick={onOpen}>Add</Button>
                </Box>
            </HStack>
            {isLoading && <Center height="40vh"><Spinner /></Center>}
            {data && <ExpenseTable data={data} />}
        </Stack>
    )
}

export default ExpenseListTab