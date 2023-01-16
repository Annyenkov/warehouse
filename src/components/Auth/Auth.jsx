import { Formik, Form, Field } from "formik"
import { Button, Search } from "./Auth.styled"

const Auth = ({ onSubmit }) => {
  return (
    <Search>
      <Formik
        initialValues={{ name: '', password: '' }}
        onSubmit={onSubmit} 
      >
        <Form>
          <label htmlFor="name">
            Name
            <Field id='name' name='name' autoComplete="off" /> 
          </label>
          <label htmlFor="password">
            Password
            <Field id='password' name='password' autoComplete="off" /> 
          </label>
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </Search>
  )
}
export default Auth;