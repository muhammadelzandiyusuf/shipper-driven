import {render, screen} from '@testing-library/react';
import HeaderTitle from 'components/HeaderTitle';
import Button from 'components/Button';

test('headertitle render data correctly', () => {
    const title = 'title of header';
    const desc = 'description of header';
    const typeButton = 'primary';
    render(
        <HeaderTitle title={title} description={desc}>
            <Button type={typeButton}>Submit</Button>
        </HeaderTitle>,
    );

    expect(screen.queryByText(title)).toBeTruthy();
    expect(screen.queryByText(desc)).toBeTruthy();
    expect(screen.getByTestId('button')).toHaveClass(typeButton);
});
