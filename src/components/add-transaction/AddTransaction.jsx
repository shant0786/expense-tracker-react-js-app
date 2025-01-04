import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../context/context";

function TransactionForm({ onClose, isOpen }) {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);

  function handleFormChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value }); // initial value then [attribute]:value i did understand
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleFormSubmit(formData);
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel> Enter Description</FormLabel>
              <Input
                placeholder="Enter Transaction Description"
                name="description"
                type="text"
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel> Enter Ammount</FormLabel>
              <Input
                placeholder="Enter Transaction Ammount"
                name="ammount"
                type="number"
                onChange={handleFormChange}
              />
            </FormControl>
            <RadioGroup mt="5" value={value} onChange={setValue}>
              <Flex justifyContent={"space-evenly"} alignItems={"center"}>
                <Radio
                  checked={formData.type === "income"}
                  value="income"
                  colorScheme="blue"
                  name="type"
                  onChange={handleFormChange}>
                  Income
                </Radio>
                <Radio
                  checked={formData.type === "expense"}
                  value="expense"
                  colorScheme="red"
                  name="type"
                  onChange={handleFormChange}>
                  Expense
                </Radio>
              </Flex>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Flex mx={"5"} gap={"3"}>
              <Button onClick={onClose} bg={"blue.300"} type="submit">
                Add
              </Button>
              <Button bg={"red.300"} onClick={onClose}>
                Cancel
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}

export default TransactionForm;
