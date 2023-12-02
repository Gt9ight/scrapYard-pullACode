import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { signInWithGooglePopup, createUserDocumentFromAuth, signinAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils"
import FormInput from '../form-input/FormInput'
import '../fleetcheckersignin/signinForm.scss'
import Button from "../button/Button"

const defaultFormFields = {
    
    email: '',
    password:'',
      
}

const SigninForm =() =>{
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password, } = formFields;
    const navigate = useNavigate();


    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signinWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
        navigate(`/techtasks`);         
        
 
        
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

       


        try {
            const response = await signinAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            resetFormFields()   
            navigate(`/techtasks`);         
        } catch(error) {
            if (error.code === 'auth/invalid-login-credentials'){
                alert('incorrect password or email')
            }
            console.log(error);
        }
    }

        const handleChange = (event) => {
            const {name, value} = event.target;
            setFormFields({...formFields, [name]: value})
        }


    return(
        <div className="signupContainer">
            <h2>Already have an account?</h2>
            <span>Sign in with Email and Password</span>
            <form onSubmit={handleSubmit}>
                
              
                
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
                
               <div className="buttonscontainer">

                <Button  type='submit'>Sign In</Button>
                <Button type='button' buttonType='google' onClick={signinWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}


export default SigninForm