import { type User } from '@/types';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '../../layouts/authenticated-layout';

type Props = {
    user: User;
};

export default function PembeliDashboard({ user }: Props) {
    return (
        <>
            <Head title="Dashboard Pembeli" />

            <AuthenticatedLayout>
                <div className="rounded-md bg-white p-6 shadow-md dark:bg-gray-800">
                    <h1 className="mb-6 text-2xl font-semibold">Dashboard Pembeli</h1>

                    <div className="mb-6 rounded-md bg-blue-50 p-4 dark:bg-blue-900/20">
                        <h2 className="mb-2 text-lg font-medium">Selamat datang, {user.name}!</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Sebagai pembeli, Anda dapat melihat produk-produk yang tersedia dan melakukan pembelian.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="rounded-md border bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="mb-2 font-medium">Produk Tersedia</h3>
                            <p className="text-gray-600 dark:text-gray-300">Lihat dan beli produk dari berbagai penyedia.</p>
                            <button className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Lihat Produk</button>
                        </div>

                        <div className="rounded-md border bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="mb-2 font-medium">Riwayat Pembelian</h3>
                            <p className="text-gray-600 dark:text-gray-300">Lihat riwayat transaksi pembelian Anda.</p>
                            <button className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Lihat Riwayat</button>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
