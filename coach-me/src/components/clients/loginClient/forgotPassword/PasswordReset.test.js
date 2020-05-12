import React from 'react';
import { Helper as render } from '../../../utils/helpers';
import { fireEvent, act, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import PasswordReset from './PasswordReset';
afterEach(cleanup);

describe('PasswordReset component and texts', () => {
    it('Renders without crashing', async () => {
        render(<PasswordReset />);
    })
    it('Header text', async () => {
        const { getAllByText } = render(<PasswordReset />)
        expect(getAllByText(/Forgot Password/i)).toBeTruthy();
    })
    it('New Password input text', async () => {
        const { getByText } = render(<PasswordReset />)
        expect(getByText(/New Password/i)).toBeTruthy();
    })
    it('Repeat Password input text', async () => {
        const { getByText } = render(<PasswordReset />)
        expect(getByText(/Repeat Password/i)).toBeTruthy();
    })
    it('Reset Password button text', async () => {
        const { getByText } = render(<PasswordReset />)
        expect(getByText(/Reset Password/i)).toBeTruthy();
    })
    it('Link prompt text', async () => {
        const { getByText } = render(<PasswordReset />)
        expect(getByText(/Don't have an account?/i)).toBeTruthy();
    })
    it('Signup link text', async () => {
        const { getByText } = render(<PasswordReset />)
        expect(getByText(/Signup/i)).toBeTruthy();
    })
});