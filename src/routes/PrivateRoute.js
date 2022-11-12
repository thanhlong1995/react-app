import { Navigate } from 'react-router-dom';
import { useAuthValue } from '~/Auth/AuthContext/AuthContext';

export default function PrivateRoute({ children }) {
    const { currentUser } = useAuthValue();

    if (!currentUser?.emailVerified) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
