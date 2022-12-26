import { Formik, Form } from "formik"
import PropTypes from "prop-types"
import { Button, Input, Search } from "./SearchBox.styled"

const SearchBox = ({onSubmit}) => {
  return (
    <Search>
      <Formik
      initialValues={{movie: []}}
        onSubmit={onSubmit} 
    >
      <Form>
        <label htmlFor="movie"/>
        <Input id='movie' name='movie' />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
    </Search>
  )
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SearchBox