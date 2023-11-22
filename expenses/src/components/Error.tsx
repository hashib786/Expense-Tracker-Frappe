import { Alert, AlertIcon } from "@chakra-ui/react";

type Props = {
    messege: string | undefined;
}

const Error = ({ messege }: Props) => {
    return (
        <Alert status='error'>
            <AlertIcon />
            <span>{messege ?? "Something is Wrong !!"}</span>
        </Alert>
    )
}

export default Error