import {render, screen} from '@testing-library/react';
import DriverLabel from 'components/DriverLabel';

test('driver label render data correctly', () => {
    const label = 'email';
    const value = 'test@gmail.com'

    render(
        <DriverLabel label={label} value={value} />,
    );

    expect(screen.queryByText(label)).toBeTruthy();
    expect(screen.queryByText(value)).toBeTruthy();
});
