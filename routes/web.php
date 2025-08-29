<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
})->name('home');

// Rute untuk halaman unauthorized
Route::get('/unauthorized', function () {
    return Inertia::render('unauthorized');
})->name('unauthorized');

Route::middleware(['auth', 'verified'])->group(function () {
    // Redirect ke dashboard sesuai role
    Route::get('dashboard', function () {
        $user = Auth::user();

        switch ($user->role) {
            case 'pembeli':
                return redirect()->route('dashboard.pembeli');
            case 'penyedia_barang':
                return redirect()->route('dashboard.penyedia_barang');
            case 'penyedia_pembiayaan':
                return redirect()->route('dashboard.penyedia_pembiayaan');
            default:
                return Inertia::render('dashboard');
        }
    })->name('dashboard');

    // Dashboard untuk Pembeli
    Route::get('dashboard/pembeli', function () {
        return Inertia::render('dashboard/pembeli', [
            'user' => Auth::user()
        ]);
    })->middleware('role:pembeli')->name('dashboard.pembeli');

    // Dashboard untuk Penyedia Barang
    Route::get('dashboard/penyedia-barang', function () {
        return Inertia::render('dashboard/penyedia-barang', [
            'user' => Auth::user()
        ]);
    })->middleware('role:penyedia_barang')->name('dashboard.penyedia_barang');

    // Dashboard untuk Penyedia Pembiayaan
    Route::get('dashboard/penyedia-pembiayaan', function () {
        return Inertia::render('dashboard/penyedia-pembiayaan', [
            'user' => Auth::user()
        ]);
    })->middleware('role:penyedia_pembiayaan')->name('dashboard.penyedia_pembiayaan');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
