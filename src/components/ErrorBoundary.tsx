import { useState, useEffect, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

export default function ErrorBoundary({ children }: ErrorBoundaryProps) {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
            const errorHandler = (event: ErrorEvent) => {
            setHasError(true);
            console.error('Error caught by ErrorBoundary: ', event.error);
        };

        window.addEventListener('error', errorHandler);

        return () => {
            window.removeEventListener('error', errorHandler);
        };
    }, []);

    if (hasError) {
        return <h2>Something went wrong. Please try again later.</h2>;
    }

    return <>{children}</>;
};

