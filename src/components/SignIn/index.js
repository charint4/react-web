import React from 'react'
import { 
  FormButton, 
  FormContent, 
  FormH1, 
  FormInput, 
  FormLabel, 
  FormWrap, 
  Icon,
  Form,
  Container
} from './SigninElements'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Dolla</Icon>  
          <FormContent>
            <Form action="#">
              <FormH1>Sing in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type="email" required></FormInput>
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type="password" required></FormInput>
              <FormButton type="submit">Continue</FormButton>
              <text>Forgot password</text>
            </Form>
          </FormContent>
        </FormWrap>  
      </Container> 
    </>
  )
}

export default SignIn
