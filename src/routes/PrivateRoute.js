import { Navigate } from 'react-router-dom';
import { useAuthValue } from '~/Auth/AuthContext/AuthContext';
import config from '~/config';

export default function PrivateRoute({ children }) {
    return children;
}
