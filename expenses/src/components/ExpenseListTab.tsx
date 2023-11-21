import { Box, Button, HStack, Heading, Stack } from "@chakra-ui/react"

const ExpenseListTab = () => {
    return (
        <Stack>
            <HStack justify="space-between">
                <Heading as="h3" fontSize="x-large">Expenses</Heading>
                <Box>
                    <Button colorScheme="blue" >Add</Button>
                </Box>
            </HStack>
        </Stack>
    )
}

export default ExpenseListTab