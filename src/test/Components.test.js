import React from 'react';
import { render } from '@testing-library/react';
import Register from '../Components/Register';
import SignIn from '../Components/SignIn';

// setup file
import { configure, shallow } from 'enzyme';
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