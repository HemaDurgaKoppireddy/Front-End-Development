import React, {Component} from "react";

const FormComponent = () => {

    const Information = () => {
        console.log()
    }

    return (
        <form>
            <h1>Application Form</h1><br /><br />
            <Label>First Name:</Label>
            <input type="text" placeholder="Enter first name" required />
            <Label>Last Name:</Label>
            <input type="text" placeholder="Enter last name" /><br/><br />

            <Lable>Date of birth:</Lable>
            <input type="week" />
            <Lable>Age:</Lable>
            <input type="number" /><br /><br/>

            <Label>Gender:</Label>
            <select>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select><br/><br/>
            <Lable>Email Address:</Lable>
            <input type="email" placeholder="Enter email address" required /><br /><br />

            <Label>Position Available:</Label>
            <input type="radio" name="Position" />
            <Lable>Junior Developer</Lable>
            <input type="radio" name="Position" />
            <Label>Mid-level Developer</Label>
            <input type="radio" name="Position" />
            <Label>Senoir Developer</Label><br /><br />

            <Lable>Programming Languages:</Lable>
            <input type="checkbox" />
            <Label>Java</Label>
            <input type="checkbox" />
            <Label>JavaScript</Label>
            <input type="checkbox" />
            <Label>Python</Label><br /><br />

            <Lable>Password:</Lable>
            <input type="password" minlength="4"/>
            <Lable>Confirm Password:</Lable>
            <input type="password" minlength="4"/><br /><br />

            <Label>Resume: </Label>
            <input type="file" /><br /><br />

            <input type="submit" />
            <input type="reset" />

        </form> 
    )
}

export default FormComponent