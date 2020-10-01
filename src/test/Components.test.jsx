import React from 'react';
import { render } from '@testing-library/react';
import Register from '../Components/Register';
import SignIn from '../Components/SignIn';
import ResetPassword from '../Components/ResetPassword';
import ForgetPassword from '../Components/ForgetPassword'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

// setup file
import { configure, shallow,mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Regiter Page Heading testing", () => {
    test('Findout the app header', () => {
        const { getByText } = render(<Register />);
        const linkElement = getByText("Fundoo");
        expect(linkElement).toBeInTheDocument();
    });
    test('Finds out the subheading element', () => {
        const { getByText } = render(<Register />);
        const linkElement = getByText("Create a fundoo account");
        expect(linkElement).toBeInTheDocument();
    });
});

describe("SignIn Page text testing",()=>{
    test("Find out the heading Fundoo",()=>{
        const {getByText} = render(<SignIn />);
        const capture = getByText("Fundoo");
        expect(capture).toBeInTheDocument();

    });

    test("Find out the subheading Fundoo",()=>{
        const {getByText} = render(<SignIn />);
        const capture = getByText("Sign in");
        expect(capture).toBeInTheDocument();

    });

    test("Find out the Forget password? ",()=>{
        const {getByText} = render(<SignIn />);
        const capture = getByText("Forgot password?");
        expect(capture).toBeInTheDocument();

    });

    test("Find out the Sign Up  ",()=>{
        const {getByText} = render(<SignIn />);
        const capture = getByText("Don't have an account? Sign Up");
        expect(capture).toBeInTheDocument();

    });

});


describe('ResetPassword test suite', ()=>{
    test("Find out the Reset Password  ",()=>{
        const {getByText} = render(<ResetPassword />);
        const capture = getByText("Confirm");
        expect(capture).toBeInTheDocument();

    });
    it('should not mount in a full DOM', function() {
        expect(mount(<ResetPassword />).find('.form').length).toBe(0);
      });
    //   it('should mount in a full DOM', function() {
    //     expect(shallow(<ResetPassword />).matchesElement(<Button 
    //       > Reset Password
    //     </Button>)).to.equal(true)
    //   });  
});

describe('ForgetPassword test suite', ()=>{
    test("Find out the Reset Password  ",()=>{
        const {getByText} = render(<ForgetPassword />);
        const capture = getByText("submit");
        expect(capture).toBeInTheDocument();

    });

    test("Find out the Reset Password  ",()=>{
        const {getByText} = render(<ForgetPassword />);
        const capture = getByText("Back to SignIn");
        expect(capture).toBeInTheDocument();

    });

});