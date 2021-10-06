import React from "react";
import { Button, Form, Label } from "semantic-ui-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserForm } from "../../types/userForm";

const FormComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>();

  const submitForm: SubmitHandler<UserForm> = (data) => {
    if (!!errors) console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Form.Field error={!!errors.name}>
        <label htmlFor="name">Nome do sujeito</label>
        <input
          {...register("name", {
            required: { value: true, message: "Campo obrigatório" },
            minLength: { value: 2, message: "Minimo 2 caracteres" },
          })}
        />
        {errors.name && (
          <Label basic color="red" pointing="above">
            {errors.name.message}
          </Label>
        )}
      </Form.Field>

      <Form.Field error={!!errors.address}>
        <label htmlFor="address">Localização</label>
        <input
          {...register("address", {
            required: false,
            minLength: { value: 10, message: "Minimo 10 caracteres" },
            maxLength: { value: 50, message: "Maximo 50 caracteres" },
          })}
        />
        {errors.address && (
          <Label basic color="red" pointing="above">
            {errors.address.message}
          </Label>
        )}
      </Form.Field>

      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default FormComponent;
