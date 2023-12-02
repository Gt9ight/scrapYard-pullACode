import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"
import FormInput from '../form-input/FormInput'
import './signupForm.scss'
import Button from "../button/Button"

const defaultFormFields = {
    displayName: '',
    email: '',
    password:'',
    confirmPassword:''  
}

const SignupForm =() =>{
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields;
    const navigate = useNavigate();

    console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user,{displayName});
            resetFormFields()
            navigate(`/fleetform`);   



            


        } catch(error)  {
            if(error.code === 'auth/email-already-in-use' ) {
                alert('Cannot create user, email already in use')
            }   else {
            console.log('user creation encountered error', error)
            }
        }
    }

        const handleChange = (event) => {
            const {name, value} = event.target;
            setFormFields({...formFields, [name]: value})
        }


    return(
        <div className="signupContainer">
            <h2>Dont have an account?</h2>
            <span>Sign Up with Email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput
                InputOptions = {{ 
                    type :'text',
                    required: true, 
                    onChange:handleChange, 
                    name:"displayName", 
                    value:displayName
                }} 
                label='Display Name'/>
                
                <FormInput 
                InputOptions = {{ 
                    type :'email',
                    required: true, 
                    onChange:handleChange, 
                    name:"email", 
                    value:email
                    }} 
                label='Email'/>
                
                <FormInput 
                InputOptions = {{ 
                    type :'password',
                    required: true, 
                    onChange:handleChange, 
                    name:"password", 
                    value:password
                    }} 
                label='Password'/>
                
                <FormInput 
                InputOptions = {{ 
                    type :'password',
                    required: true, 
                    onChange:handleChange, 
                    name:"confirmPassword", 
                    value:confirmPassword
                    }} 
                label='Confirm Password'/>

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}


export default SignupForm