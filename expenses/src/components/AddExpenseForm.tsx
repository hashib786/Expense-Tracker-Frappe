import { Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Stack, Textarea, chakra } from "@chakra-ui/react"
import { useFrappeCreateDoc } from "frappe-react-sdk"
import { useForm } from "react-hook-form"

interface FormFields {
    description: string
    amount: number
    type: string
    remarks: string
}

const AddExpenseForm = ({ onClose }: { onClose: () => void; }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>()
    const { createDoc, loading: isLoading } = useFrappeCreateDoc()

    const onSubmit = async (data: FormFields) => {
        createDoc("Expense Record", data)
        onClose()
    }

    return (
        <chakra.form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <FormControl isRequired isInvalid={!!errors.description}>
                    <FormLabel>Description</FormLabel>
                    <Input type='text' {...register('description', {
                        required: "Description is required",
                        minLength: {
                            value: 3,
                            message: "Description should be at least 3 characters"
                        }
                    })} />
                    <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={!!errors.amount}>
                    <FormLabel>Amount</FormLabel>
                    <Input type='number' {...register('amount', {
                        required: "Amount is required",
                        min: {
                            value: 1,
                            message: "Amount should be at least 1"
                        }
                    })} />
                    <FormErrorMessage>{errors.amount?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={!!errors.type}>
                    <FormLabel>Type</FormLabel>
                    <Select {...register('type', {
                        required: "Type is required"
                    })}>
                        <option value=''>Select Type</option>
                        <option value='Credit'>Credit</option>
                        <option value='Debit'>Debit</option>
                    </Select>
                    <FormErrorMessage>{errors.type?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.remarks}>
                    <FormLabel>Remarks</FormLabel>
                    <Textarea {...register('remarks')} />
                    <FormErrorMessage>{errors.remarks?.message}</FormErrorMessage>
                </FormControl>
                <Button type='submit' colorScheme='blue' disabled={isLoading}>Save</Button>
            </Stack>
        </chakra.form>
    )
}

export default AddExpenseForm