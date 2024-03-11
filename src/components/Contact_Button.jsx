import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import "../styles/Common.css";
const Contact_Button = ({ buttonText , trainingName}) => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [training, setTraining] = useState(trainingName);

  function onCloseModal() {
    setOpenModal(false);
    setName("");
    setEmail("");
    setPhone("");
    setTraining("");
  }

  return (
    <div className="">
      <Button
        className="text-white brown-bg rounded-3xl"
        onClick={() => setOpenModal(true)}
      >
        {buttonText}
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup  className="" >
        <Modal.Header />
        <Modal.Body className="">
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Please fill in your details to check whether you are eligible or
              not.
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Your phone" />
              </div>
              <TextInput
                id="phone"
                placeholder="Your phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Training" value="Training" />
              </div>
              <TextInput
                id="Training"
                placeholder="Training"
                value={trainingName}
                onChange={(event) => setTraining(event.target.value)}
                required
              />
            </div>

            <div className="flex rounded-3xl brown-bg align-center justify-center">
            <Button className="mx-auto text-center focus:outline-none focus:ring-0 w-full">Submit</Button>


            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Contact_Button;
