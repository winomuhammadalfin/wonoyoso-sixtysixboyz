import { ArrowLeft, Database, Users, Activity, Layers, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Dashboard
          </Button>
        </Link>

        <div className="space-y-12">
          {/* Title */}
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Dokumentasi Sistem <span className="text-gradient">Bengkel Wonoyoso</span>
            </h1>
            <p className="text-muted-foreground">UML Diagrams & Database Design</p>
          </div>

          {/* Use Case Diagram */}
          <section className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">1. Use Case Diagram</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <p className="text-muted-foreground mb-4">
                Use Case Diagram menggambarkan interaksi antara aktor (Petugas Bengkel) dengan sistem manajemen persediaan.
              </p>
              <div className="bg-secondary/50 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-foreground whitespace-pre font-mono">
{`
┌──────────────────────────────────────────────────────────────────┐
│                    SISTEM PERSEDIAAN BENGKEL                      │
│                                                                   │
│   ┌─────────────────┐                                            │
│   │  Lihat Stok     │◄──────────────┐                            │
│   └─────────────────┘               │                            │
│                                     │                            │
│   ┌─────────────────┐               │                            │
│   │ Tambah Barang   │◄──────────────┤                            │
│   └─────────────────┘               │                            │
│                                     │      ┌─────────┐           │
│   ┌─────────────────┐               │      │         │           │
│   │  Edit Barang    │◄──────────────┼──────│ Petugas │           │
│   └─────────────────┘               │      │ Bengkel │           │
│                                     │      │         │           │
│   ┌─────────────────┐               │      └─────────┘           │
│   │  Hapus Barang   │◄──────────────┤                            │
│   └─────────────────┘               │                            │
│                                     │                            │
│   ┌─────────────────┐               │                            │
│   │ Cari & Filter   │◄──────────────┤                            │
│   └─────────────────┘               │                            │
│                                     │                            │
│   ┌─────────────────┐               │                            │
│   │ Lihat Statistik │◄──────────────┘                            │
│   └─────────────────┘                                            │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
`}
                </pre>
              </div>
              <div className="mt-4 space-y-2">
                <h4 className="font-semibold text-foreground">Deskripsi Use Case:</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li><strong>Lihat Stok:</strong> Melihat daftar seluruh barang dan jumlah stok</li>
                  <li><strong>Tambah Barang:</strong> Menambahkan barang baru ke dalam sistem</li>
                  <li><strong>Edit Barang:</strong> Mengubah informasi barang yang sudah ada</li>
                  <li><strong>Hapus Barang:</strong> Menghapus barang dari sistem</li>
                  <li><strong>Cari & Filter:</strong> Mencari barang dan memfilter berdasarkan kategori</li>
                  <li><strong>Lihat Statistik:</strong> Melihat ringkasan statistik stok</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sequence Diagram */}
          <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-success/10">
                <GitBranch className="h-5 w-5 text-success" />
              </div>
              <h2 className="text-xl font-bold text-foreground">2. Sequence Diagram</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <p className="text-muted-foreground mb-4">
                Sequence Diagram menggambarkan urutan interaksi untuk proses "Tambah Barang Baru".
              </p>
              <div className="bg-secondary/50 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-foreground whitespace-pre font-mono">
{`
  Petugas          UI/Form           State            Database
     │                │                │                  │
     │  Klik Tambah   │                │                  │
     │───────────────►│                │                  │
     │                │                │                  │
     │                │ Buka Dialog    │                  │
     │◄───────────────│                │                  │
     │                │                │                  │
     │  Isi Form Data │                │                  │
     │───────────────►│                │                  │
     │                │                │                  │
     │  Klik Simpan   │                │                  │
     │───────────────►│                │                  │
     │                │                │                  │
     │                │  Validasi      │                  │
     │                │───────────────►│                  │
     │                │                │                  │
     │                │                │  Simpan Data     │
     │                │                │─────────────────►│
     │                │                │                  │
     │                │                │  Konfirmasi      │
     │                │                │◄─────────────────│
     │                │                │                  │
     │                │ Update List    │                  │
     │                │◄───────────────│                  │
     │                │                │                  │
     │  Toast Sukses  │                │                  │
     │◄───────────────│                │                  │
     │                │                │                  │
`}
                </pre>
              </div>
              <div className="mt-4 space-y-2">
                <h4 className="font-semibold text-foreground">Alur Proses:</h4>
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Petugas mengklik tombol "Tambah Barang"</li>
                  <li>Sistem menampilkan form dialog</li>
                  <li>Petugas mengisi data barang (nama, kategori, stok, harga, dll)</li>
                  <li>Petugas mengklik tombol "Simpan"</li>
                  <li>Sistem memvalidasi input data</li>
                  <li>Data disimpan ke state/database</li>
                  <li>Daftar barang diperbarui</li>
                  <li>Notifikasi sukses ditampilkan</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Activity Diagram */}
          <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-warning/10">
                <Activity className="h-5 w-5 text-warning" />
              </div>
              <h2 className="text-xl font-bold text-foreground">3. Activity Diagram</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <p className="text-muted-foreground mb-4">
                Activity Diagram menggambarkan alur aktivitas pengelolaan stok barang.
              </p>
              <div className="bg-secondary/50 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-foreground whitespace-pre font-mono">
{`
                        ┌───────────┐
                        │   Start   │
                        └─────┬─────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │  Buka Aplikasi  │
                    └────────┬────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ Lihat Dashboard │
                    └────────┬────────┘
                              │
                              ▼
                  ┌───────────────────────┐
                  │   Pilih Aksi?         │
                  └───────────┬───────────┘
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
   ┌─────────────┐    ┌─────────────┐     ┌─────────────┐
   │ Tambah Baru │    │ Edit Barang │     │Hapus Barang │
   └──────┬──────┘    └──────┬──────┘     └──────┬──────┘
          │                  │                   │
          ▼                  ▼                   ▼
   ┌─────────────┐    ┌─────────────┐     ┌─────────────┐
   │  Isi Form   │    │ Ubah Data   │     │ Konfirmasi  │
   └──────┬──────┘    └──────┬──────┘     └──────┬──────┘
          │                  │                   │
          ▼                  ▼                   ▼
   ┌─────────────┐    ┌─────────────┐     ┌─────────────┐
   │   Validasi  │    │  Validasi   │     │ Hapus Data  │
   └──────┬──────┘    └──────┬──────┘     └──────┬──────┘
          │                  │                   │
          └───────────────────┼───────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │  Update State   │
                    └────────┬────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ Tampil Notif    │
                    └────────┬────────┘
                              │
                              ▼
                        ┌───────────┐
                        │    End    │
                        └───────────┘
`}
                </pre>
              </div>
            </div>
          </section>

          {/* Class Diagram */}
          <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Layers className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">4. Class Diagram</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <p className="text-muted-foreground mb-4">
                Class Diagram menggambarkan struktur kelas dan hubungan antar komponen dalam sistem.
              </p>
              <div className="bg-secondary/50 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-foreground whitespace-pre font-mono">
{`
┌─────────────────────────────────────┐
│          InventoryItem              │
├─────────────────────────────────────┤
│ - id: string                        │
│ - name: string                      │
│ - category: Category                │
│ - quantity: number                  │
│ - minStock: number                  │
│ - unit: string                      │
│ - price: number                     │
│ - createdAt: Date                   │
│ - updatedAt: Date                   │
├─────────────────────────────────────┤
│ + isLowStock(): boolean             │
│ + getTotalValue(): number           │
└─────────────────────────────────────┘
                    │
                    │ uses
                    ▼
┌─────────────────────────────────────┐
│           Category (Enum)           │
├─────────────────────────────────────┤
│ - Oli & Pelumas                     │
│ - Sparepart Mesin                   │
│ - Ban & Velg                        │
│ - Aki & Kelistrikan                 │
│ - Body & Aksesoris                  │
│ - Perkakas                          │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐         ┌─────────────────────────────┐
│         InventoryTable              │         │        StatCard             │
├─────────────────────────────────────┤         ├─────────────────────────────┤
│ - items: InventoryItem[]            │         │ - title: string             │
│ - searchQuery: string               │         │ - value: string | number    │
│ - selectedCategory: string          │         │ - icon: LucideIcon          │
├─────────────────────────────────────┤         │ - variant: string           │
│ + filterItems(): InventoryItem[]    │         ├─────────────────────────────┤
│ + onEdit(item): void                │         │ + render(): JSX.Element     │
│ + onDelete(id): void                │         └─────────────────────────────┘
└─────────────────────────────────────┘
                    │
                    │ uses
                    ▼
┌─────────────────────────────────────┐
│         AddItemDialog               │
├─────────────────────────────────────┤
│ - open: boolean                     │
│ - editItem: InventoryItem | null    │
│ - formData: FormData                │
├─────────────────────────────────────┤
│ + handleSubmit(): void              │
│ + onSave(item): void                │
│ + onOpenChange(open): void          │
└─────────────────────────────────────┘
`}
                </pre>
              </div>
              <div className="mt-4 space-y-2">
                <h4 className="font-semibold text-foreground">Penjelasan Kelas:</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li><strong>InventoryItem:</strong> Model data utama untuk barang</li>
                  <li><strong>Category:</strong> Enum untuk kategori barang</li>
                  <li><strong>InventoryTable:</strong> Komponen tabel untuk menampilkan daftar barang</li>
                  <li><strong>StatCard:</strong> Komponen kartu statistik</li>
                  <li><strong>AddItemDialog:</strong> Komponen dialog untuk tambah/edit barang</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Database Design */}
          <section className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-success/10">
                <Database className="h-5 w-5 text-success" />
              </div>
              <h2 className="text-xl font-bold text-foreground">5. Desain Database (ERD)</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <p className="text-muted-foreground mb-4">
                Entity Relationship Diagram menggambarkan struktur tabel database untuk sistem persediaan.
              </p>
              <div className="bg-secondary/50 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-foreground whitespace-pre font-mono">
{`
┌─────────────────────────────────────────────────────────────────┐
│                         inventory_items                          │
├─────────────────────────────────────────────────────────────────┤
│ PK │ id          │ UUID         │ NOT NULL, DEFAULT uuid()      │
├────┼─────────────┼──────────────┼────────────────────────────────┤
│    │ name        │ VARCHAR(255) │ NOT NULL                       │
│ FK │ category_id │ UUID         │ NOT NULL, REFERENCES categories│
│    │ quantity    │ INTEGER      │ NOT NULL, DEFAULT 0            │
│    │ min_stock   │ INTEGER      │ NOT NULL, DEFAULT 0            │
│    │ unit        │ VARCHAR(50)  │ NOT NULL                       │
│    │ price       │ DECIMAL(12,2)│ NOT NULL, DEFAULT 0            │
│    │ created_at  │ TIMESTAMP    │ NOT NULL, DEFAULT NOW()        │
│    │ updated_at  │ TIMESTAMP    │ NOT NULL, DEFAULT NOW()        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ N:1
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                          categories                              │
├─────────────────────────────────────────────────────────────────┤
│ PK │ id          │ UUID         │ NOT NULL, DEFAULT uuid()      │
├────┼─────────────┼──────────────┼────────────────────────────────┤
│    │ name        │ VARCHAR(100) │ NOT NULL, UNIQUE               │
│    │ description │ TEXT         │ NULLABLE                       │
│    │ created_at  │ TIMESTAMP    │ NOT NULL, DEFAULT NOW()        │
└─────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│                      stock_transactions                          │
├─────────────────────────────────────────────────────────────────┤
│ PK │ id          │ UUID         │ NOT NULL, DEFAULT uuid()      │
├────┼─────────────┼──────────────┼────────────────────────────────┤
│ FK │ item_id     │ UUID         │ NOT NULL, REFERENCES items     │
│    │ type        │ ENUM         │ 'IN' | 'OUT'                   │
│    │ quantity    │ INTEGER      │ NOT NULL                       │
│    │ notes       │ TEXT         │ NULLABLE                       │
│    │ created_at  │ TIMESTAMP    │ NOT NULL, DEFAULT NOW()        │
└─────────────────────────────────────────────────────────────────┘
`}
                </pre>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Tabel: inventory_items</h4>
                  <div className="rounded-lg border border-border overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-secondary">
                        <tr>
                          <th className="px-3 py-2 text-left text-foreground">Kolom</th>
                          <th className="px-3 py-2 text-left text-foreground">Tipe</th>
                          <th className="px-3 py-2 text-left text-foreground">Keterangan</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-t border-border">
                          <td className="px-3 py-2 font-mono">id</td>
                          <td className="px-3 py-2">UUID</td>
                          <td className="px-3 py-2">Primary Key</td>
                        </tr>
                        <tr className="border-t border-border">
                          <td className="px-3 py-2 font-mono">name</td>
                          <td className="px-3 py-2">VARCHAR</td>
                          <td className="px-3 py-2">Nama barang</td>
                        </tr>
                        <tr className="border-t border-border">
                          <td className="px-3 py-2 font-mono">category_id</td>
                          <td className="px-3 py-2">UUID</td>
                          <td className="px-3 py-2">Foreign Key</td>
                        </tr>
                        <tr className="border-t border-border">
                          <td className="px-3 py-2 font-mono">quantity</td>
                          <td className="px-3 py-2">INTEGER</td>
                          <td className="px-3 py-2">Jumlah stok</td>
                        </tr>
                        <tr className="border-t border-border">
                          <td className="px-3 py-2 font-mono">min_stock</td>
                          <td className="px-3 py-2">INTEGER</td>
                          <td className="px-3 py-2">Stok minimum</td>
                        </tr>
                        <tr className="border-t border-border">
                          <td className="px-3 py-2 font-mono">unit</td>
                          <td className="px-3 py-2">VARCHAR</td>
                          <td className="px-3 py-2">Satuan</td>
                        </tr>
                        <tr className="border-t border-border">
                          <td className="px-3 py-2 font-mono">price</td>
                          <td className="px-3 py-2">DECIMAL</td>
                          <td className="px-3 py-2">Harga satuan</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Tabel: categories</h4>
                  <div className="rounded-lg border border-border overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-secondary">
                        <tr>
                          <th className="px-3 py-2 text-left text-foreground">Kolom</th>
                          <th className="px-3 py-2 text-left text-foreground">Tipe</th>
                          <th className="px-3 py-2 text-left text-foreground">Keterangan</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-t border-border">
                          <td className="px-3 py-2 font-mono">id</td>
                          <td className="px-3 py-2">UUID</td>
                          <td className="px-3 py-2">Primary Key</td>
                        </tr>
                        <tr className="border-t border-border">
                          <td className="px-3 py-2 font-mono">name</td>
                          <td className="px-3 py-2">VARCHAR</td>
                          <td className="px-3 py-2">Nama kategori</td>
                        </tr>
                        <tr className="border-t border-border">
                          <td className="px-3 py-2 font-mono">description</td>
                          <td className="px-3 py-2">TEXT</td>
                          <td className="px-3 py-2">Deskripsi</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="font-semibold text-foreground mt-4">Relasi:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li><strong>inventory_items → categories:</strong> Many-to-One</li>
                    <li><strong>stock_transactions → inventory_items:</strong> Many-to-One</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2024 Bengkel Wonoyoso. Dokumentasi Sistem.</p>
        </div>
      </footer>
    </div>
  );
};

export default Documentation;
