import AdminNav from '../components/admin/AdminNav';
import { Outlet } from 'react-router';

const AdminLayout = () => {
    return (
        <main className='flex'>
            <AdminNav/>
            <Outlet/>
        </main>
    );
};

export default AdminLayout;