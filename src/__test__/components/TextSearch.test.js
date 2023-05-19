import {render, screen} from '@testing-library/react';
import TextSearch from 'components/TextSearch';

test('TextSearch render data correctly', () => {
    const placeholder = 'placeholder text';

    render(
        <TextSearch placeholder={placeholder} />,
    );

    expect(screen.getByTestId('textsearch')).toHaveAttribute('placeholder', placeholder);
});
