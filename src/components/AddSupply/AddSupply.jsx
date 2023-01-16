import { Formik, Form, Field } from "formik"
import { Button, Search } from "./AddSupply.styled"

const AddSupply = ({ onClick, onSubmit }) => {
  
  return (
    <Search>
      <Formik
        initialValues={{
          number: '',
          date: '',
          organisation: '',
          counterparty: '',
          project: '',
          currency: '',
          storage: '',
        }}
        onSubmit={onSubmit} 
      >
        <Form>
          <div>
            <label htmlFor="number">
            Приемка №
            <Field id='number' name='number' autoComplete="off" /> 
          </label>
          <label htmlFor="date">
            от
            <Field id='date' name='date' autoComplete="off" type="date" /> 
          </label>
          </div>
          <div>
            <label htmlFor="organisation">
            Организация
            <Field id='organisation' name='organisation' autoComplete="off" /> 
            </label>
            <label htmlFor="counterparty">
            Контрагент
            <Field id='counterparty' name='counterparty' autoComplete="off" /> 
            </label>
            <label htmlFor="project">
            Проект
            <Field id='project' name='project' autoComplete="off" /> 
            </label>
            <label htmlFor="currency">
            Валюта документа
            <Field id='currency' name='currency' autoComplete="off" /> 
            </label>
            <label htmlFor="storage">
            Склад
            <Field id='storage' name='storage' autoComplete="off" /> 
            </label>
          </div>
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={onClick}>Close</Button>
        </Form>
      </Formik>
    </Search>
  )
}

export default AddSupply;
