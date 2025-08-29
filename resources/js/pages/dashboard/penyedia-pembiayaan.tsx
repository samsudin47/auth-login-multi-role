import { type User } from '@/types';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '../../layouts/authenticated-layout';
type Props = {
    user: User;
};

export default function PenyediaPembiayaanDashboard({ user }: Props) {
    return (
        <>
            <Head title="Dashboard Penyedia Pembiayaan" />

            <AuthenticatedLayout>
                <div className="rounded-md bg-white p-6 shadow-md dark:bg-gray-800">
                    <h1 className="mb-6 text-2xl font-semibold">Dashboard Penyedia Pembiayaan</h1>

                    <div className="mb-6 rounded-md bg-purple-50 p-4 dark:bg-purple-900/20">
                        <h2 className="mb-2 text-lg font-medium">Selamat datang, {user.name}!</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Sebagai penyedia pembiayaan, Anda dapat mengelola pembiayaan, melihat pengajuan, dan mengatur pencairan dana.
                        </p>
                    </div>

                    <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="rounded-md border bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="mb-2 font-medium">Pembiayaan Aktif</h3>
                            <p className="text-2xl font-bold">36</p>
                            <p className="text-sm text-green-600">+5 minggu ini</p>
                        </div>

                        <div className="rounded-md border bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="mb-2 font-medium">Pengajuan Baru</h3>
                            <p className="text-2xl font-bold">8</p>
                            <p className="text-sm text-amber-600">3 membutuhkan persetujuan segera</p>
                        </div>

                        <div className="rounded-md border bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="mb-2 font-medium">Total Dana Tersalurkan</h3>
                            <p className="text-2xl font-bold">Rp 425,000,000</p>
                            <p className="text-sm text-green-600">+18% dari bulan lalu</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="rounded-md border bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="mb-2 font-medium">Kelola Produk Pembiayaan</h3>
                            <p className="text-gray-600 dark:text-gray-300">Tambah, edit, atau hapus produk pembiayaan Anda.</p>
                            <button className="mt-4 rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">Kelola Produk</button>
                        </div>

                        <div className="rounded-md border bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="mb-2 font-medium">Pengajuan Pembiayaan</h3>
                            <p className="text-gray-600 dark:text-gray-300">Lihat dan proses pengajuan pembiayaan.</p>
                            <button className="mt-4 rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">Lihat Pengajuan</button>
                        </div>

                        <div className="rounded-md border bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="mb-2 font-medium">Angsuran</h3>
                            <p className="text-gray-600 dark:text-gray-300">Pantau status angsuran dari nasabah.</p>
                            <button className="mt-4 rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">Lihat Angsuran</button>
                        </div>

                        <div className="rounded-md border bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="mb-2 font-medium">Laporan Keuangan</h3>
                            <p className="text-gray-600 dark:text-gray-300">Lihat laporan keuangan dan analisis.</p>
                            <button className="mt-4 rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">Lihat Laporan</button>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
