import { useToast } from "@chakra-ui/react";

export const toastSuccess = (msg: any) => {
const toast = useToast()
  toast({
    title: 'An error occurred.',
    description: msg,
    status: 'error',
    duration: 9000,
    isClosable: true,
  })
}

export const toastError = (msg: any) => {
  const toast = useToast()
  toast({
    title: 'An error occurred.',
    description: msg,
    status: 'error',
    duration: 9000,
    isClosable: true,
  })
}