import { render, fireEvent, screen } from '@testing-library/svelte';
import AccountForm from './AccountForm.svelte';

describe('Test login form functionality', async () => {
    it('Login button should be present', async () => {
        render(AccountForm, { type: "login"});
        expect(screen.getByDisplayValue('log in')).toBeInTheDocument();
    });

    it('Link should direct to registration', async () => {
        render(AccountForm, { type: "login"});

        const link = screen.getByText("don't have an account?");
        expect(link).toBeInTheDocument();
        expect(link).toBeInstanceOf(HTMLAnchorElement);

        const linkElement = link as HTMLAnchorElement;
        expect(linkElement.href).toContain("register");
    });

    it('User must enter email', async () => {
        render(AccountForm, { type: "login"});
        await fireEvent.submit(screen.getByText('log in'));
        expect(await screen.findByText("Please enter an email")).toBeInTheDocument();
    });

    it('Email must be formatted correctly', async () => {
        render(AccountForm, { type: "login"});

        const email = screen.getByPlaceholderText("email") as HTMLInputElement;
        email.value = "test";
        await fireEvent.submit(screen.getByText('log in'));
        expect(await screen.findByText("Invalid email")).toBeInTheDocument();
    });

    it('User must enter password', async () => {
        render(AccountForm, { type: "login"});
        await fireEvent.submit(screen.getByText('log in'));
        expect(await screen.findByText("Please enter a password")).toBeInTheDocument();
    });

  // TODO: invalid login test
});

describe('Test register form functionality', async () => {
    it('Register button should be present', async () => {
        render(AccountForm, { type: "register"});
        expect(screen.getByDisplayValue('get started')).toBeInTheDocument();
    });

    it('Link should direct to login', async () => {
        render(AccountForm, { type: "register"});

        const link = screen.getByText("already have an account?");
        expect(link).toBeInTheDocument();
        expect(link).toBeInstanceOf(HTMLAnchorElement);

        const linkElement = link as HTMLAnchorElement;
        expect(linkElement.href).toContain("login");
    });

    it('User must enter email', async () => {
        render(AccountForm, { type: "register"});
        await fireEvent.submit(screen.getByText('get started'));
        expect(await screen.findByText("Please enter an email")).toBeInTheDocument();
    });

    it('Email must be formatted correctly', async () => {
        render(AccountForm, { type: "register"});

        const email = screen.getByPlaceholderText("email") as HTMLInputElement;
        email.value = "test";
        await fireEvent.submit(screen.getByText('get started'));
        expect(await screen.findByText("Invalid email")).toBeInTheDocument();
    });

    it('User must enter password', async () => {
        render(AccountForm, { type: "register"});
        await fireEvent.submit(screen.getByText('get started'));
        expect(await screen.findByText("Please enter a password")).toBeInTheDocument();
    });

    it('Passwords must match', async () => {
        render(AccountForm, { type: "register"});

        const password = screen.getByPlaceholderText("password") as HTMLInputElement;
        password.value = "password1";
        const confirm = screen.getByPlaceholderText("confirm password") as HTMLInputElement;
        password.value = "password2";

        await fireEvent.submit(screen.getByText('get started'));
        expect(await screen.findByText("Passwords must match")).toBeInTheDocument();
        });

    // TODO: user already exists test
    // TODO: login error test
  });