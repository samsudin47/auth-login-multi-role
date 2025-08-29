import { type User } from '@/types';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '../../layouts/authenticated-layout';

type Props = {
    user: User;
};

export default function PenyediaBarangDashboard({ user }: Props) {
    return (
        <>
            <Head title="Dashboard Penyedia Barang" />

            <AuthenticatedLayout>
                <div className="rounded-md bg-white p-6 shadow-md dark:bg-gray-800">
                    <h1 className="mb-6 text-2xl font-semibold">Dashboard Penyedia Barang</h1>

                    <div className="mb-6 rounded-md bg-green-50 p-4 dark:bg-green-900/20">
                        <h2 className="mb-2 text-lg font-medium">Selamat datang, {user.name}!</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Sebagai penyedia barang, Anda dapat mengelola inventaris produk, melihat pesanan masuk, dan mengatur pengiriman.
                        </p>
                    </div>

                    <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="rounded-md border bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="mb-2 font-medium">Total Produk</h3>
                            <p className="text-2xl font-bold">24</p>
                            <p className="text-sm text-green-600">+3 minggu ini</p>
                        </div>

                        <div className="rounded-md border bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="mb-2 font-medium">Pesanan Aktif</h3>
                            <p className="text-2xl font-bold">12</p>
                            <p className="text-sm text-amber-600">4 menunggu pengiriman</p>
                        </div>

                        <div className="rounded-md border bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="mb-2 font-medium">Total Penjualan</h3>
                            <p className="text-2xl font-bold">Rp 15,750,000</p>
                            <p className="text-sm text-green-600">+12% dari bulan lalu</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="rounded-md border bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="mb-2 font-medium">Kelola Produk</h3>
                            <p className="text-gray-600 dark:text-gray-300">Tambah, edit, atau hapus produk dari inventaris Anda.</p>
                            <button className="mt-4 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">Kelola Produk</button>
                        </div>

                        <div className="rounded-md border bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="mb-2 font-medium">Lihat Pesanan</h3>
                            <p className="text-gray-600 dark:text-gray-300">Lihat dan proses pesanan dari pembeli.</p>
                            <button className="mt-4 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">Lihat Pesanan</button>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
