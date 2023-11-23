import { Button, ModalBody, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { ReactNode } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    tittle: string;
    description: string | ReactNode;
}
const Modals = ({ isOpen, onClose, tittle, description }: Props) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{tittle}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {description}
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default Modals