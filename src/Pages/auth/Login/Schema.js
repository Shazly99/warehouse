import * as Yup from 'yup';

const validationSchema=()=>{
    const Schema=Yup.object({
        UserName: Yup.string().email('Invalid email address').required('Email is required'),
        Password: Yup.string().min(3,'Password must be at least 6 charaters').required('Password is required').matches()
    })
    return Schema
}
export default validationSchema;