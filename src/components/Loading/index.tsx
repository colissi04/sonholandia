import React from 'react';
import { Container, Spinner} from './styles';

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = () => {
    return (
        <Container>
            <Spinner />
        </Container>
    );
};