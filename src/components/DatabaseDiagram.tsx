import { Badge } from "@/components/ui/badge";
import { Database, Key, Link2 } from "lucide-react";

const DatabaseDiagram = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">📊 Entity Relationship Diagram (ERD)</h3>
        <p className="text-sm text-muted-foreground">Visualisasi Struktur Database Bengkel Wonoyoso</p>
      </div>

      {/* ERD Visual Diagram */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Table: users */}
        <div className="relative">
          <div className="bg-gradient-to-b from-purple-500/20 to-purple-500/5 border-2 border-purple-500 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-purple-600 text-white px-4 py-3 font-bold flex items-center gap-2">
              <Database className="h-4 w-4" />
              users
            </div>
            <div className="p-3 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Key className="h-3 w-3 text-yellow-500" />
                <span className="font-mono text-xs">id</span>
                <Badge variant="outline" className="text-xs ml-auto">UUID PK</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">email</span>
                <Badge variant="secondary" className="text-xs ml-auto">VARCHAR</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">name</span>
                <Badge variant="secondary" className="text-xs ml-auto">VARCHAR</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">role</span>
                <Badge variant="secondary" className="text-xs ml-auto">VARCHAR</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">created_at</span>
                <Badge variant="secondary" className="text-xs ml-auto">TIMESTAMP</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Table: categories */}
        <div className="relative">
          <div className="bg-gradient-to-b from-blue-500/20 to-blue-500/5 border-2 border-blue-500 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-blue-600 text-white px-4 py-3 font-bold flex items-center gap-2">
              <Database className="h-4 w-4" />
              categories
            </div>
            <div className="p-3 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Key className="h-3 w-3 text-yellow-500" />
                <span className="font-mono text-xs">id</span>
                <Badge variant="outline" className="text-xs ml-auto">UUID PK</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">name</span>
                <Badge variant="secondary" className="text-xs ml-auto">VARCHAR</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">description</span>
                <Badge variant="secondary" className="text-xs ml-auto">TEXT</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">created_at</span>
                <Badge variant="secondary" className="text-xs ml-auto">TIMESTAMP</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Table: inventory_items */}
        <div className="relative">
          <div className="bg-gradient-to-b from-green-500/20 to-green-500/5 border-2 border-green-500 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-green-600 text-white px-4 py-3 font-bold flex items-center gap-2">
              <Database className="h-4 w-4" />
              inventory_items
            </div>
            <div className="p-3 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Key className="h-3 w-3 text-yellow-500" />
                <span className="font-mono text-xs">id</span>
                <Badge variant="outline" className="text-xs ml-auto">UUID PK</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">name</span>
                <Badge variant="secondary" className="text-xs ml-auto">VARCHAR</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Link2 className="h-3 w-3 text-blue-500" />
                <span className="font-mono text-xs">category_id</span>
                <Badge className="text-xs ml-auto bg-blue-600">FK</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">quantity</span>
                <Badge variant="secondary" className="text-xs ml-auto">INT</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">min_stock</span>
                <Badge variant="secondary" className="text-xs ml-auto">INT</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">unit</span>
                <Badge variant="secondary" className="text-xs ml-auto">VARCHAR</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">price</span>
                <Badge variant="secondary" className="text-xs ml-auto">DECIMAL</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">created_at</span>
                <Badge variant="secondary" className="text-xs ml-auto">TIMESTAMP</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">updated_at</span>
                <Badge variant="secondary" className="text-xs ml-auto">TIMESTAMP</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Table: stock_transactions */}
        <div className="relative">
          <div className="bg-gradient-to-b from-amber-500/20 to-amber-500/5 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-amber-600 text-white px-4 py-3 font-bold flex items-center gap-2">
              <Database className="h-4 w-4" />
              stock_transactions
            </div>
            <div className="p-3 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Key className="h-3 w-3 text-yellow-500" />
                <span className="font-mono text-xs">id</span>
                <Badge variant="outline" className="text-xs ml-auto">UUID PK</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Link2 className="h-3 w-3 text-green-500" />
                <span className="font-mono text-xs">item_id</span>
                <Badge className="text-xs ml-auto bg-green-600">FK</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">type</span>
                <Badge variant="secondary" className="text-xs ml-auto">VARCHAR</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">quantity</span>
                <Badge variant="secondary" className="text-xs ml-auto">INT</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">notes</span>
                <Badge variant="secondary" className="text-xs ml-auto">TEXT</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3"></span>
                <span className="font-mono text-xs">transaction_date</span>
                <Badge variant="secondary" className="text-xs ml-auto">TIMESTAMP</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Link2 className="h-3 w-3 text-purple-500" />
                <span className="font-mono text-xs">created_by</span>
                <Badge className="text-xs ml-auto bg-purple-600">FK</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Relationship Lines Visual */}
      <div className="bg-secondary/30 rounded-xl p-6 border border-border mt-8">
        <h4 className="font-semibold mb-4 text-center">🔗 Hubungan Antar Tabel (Relationships)</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="font-semibold text-sm">categories → inventory_items</span>
            </div>
            <p className="text-xs text-muted-foreground">
              <strong>1:N (One-to-Many)</strong><br/>
              Satu kategori dapat memiliki banyak barang inventaris
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="font-semibold text-sm">inventory_items → stock_transactions</span>
            </div>
            <p className="text-xs text-muted-foreground">
              <strong>1:N (One-to-Many)</strong><br/>
              Satu barang dapat memiliki banyak transaksi stok
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <span className="font-semibold text-sm">users → stock_transactions</span>
            </div>
            <p className="text-xs text-muted-foreground">
              <strong>1:N (One-to-Many)</strong><br/>
              Satu user dapat membuat banyak transaksi
            </p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-muted/30 rounded-lg p-4 border border-border">
        <h4 className="font-semibold mb-3 text-sm">📌 Legenda</h4>
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Key className="h-3 w-3 text-yellow-500" />
            <span>Primary Key (PK)</span>
          </div>
          <div className="flex items-center gap-2">
            <Link2 className="h-3 w-3 text-blue-500" />
            <span>Foreign Key (FK)</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">UUID</Badge>
            <span>Universal Unique ID</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">VARCHAR</Badge>
            <span>Text String</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">INT</Badge>
            <span>Integer Number</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">DECIMAL</Badge>
            <span>Decimal Number</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">TIMESTAMP</Badge>
            <span>Date & Time</span>
          </div>
        </div>
      </div>

      {/* Detail Tables Visual */}
      <div className="space-y-6 mt-8">
        <h3 className="text-xl font-bold text-center">📋 Detail Struktur Tabel</h3>
        
        {/* Users Table Detail */}
        <div className="bg-card rounded-xl border-2 border-purple-500/50 overflow-hidden">
          <div className="bg-purple-600 text-white px-6 py-4">
            <h4 className="font-bold text-lg flex items-center gap-2">
              <Database className="h-5 w-5" />
              Tabel: users
            </h4>
            <p className="text-purple-200 text-sm">Menyimpan data pengguna sistem</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-purple-500/10">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Kolom</th>
                  <th className="px-4 py-3 text-left font-semibold">Tipe Data</th>
                  <th className="px-4 py-3 text-left font-semibold">Constraint</th>
                  <th className="px-4 py-3 text-left font-semibold">Keterangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">id</td>
                  <td className="px-4 py-3"><Badge className="bg-purple-600">UUID</Badge></td>
                  <td className="px-4 py-3"><Badge variant="destructive">PRIMARY KEY</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">ID unik pengguna</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">email</td>
                  <td className="px-4 py-3"><Badge variant="outline">VARCHAR(255)</Badge></td>
                  <td className="px-4 py-3"><Badge variant="outline">UNIQUE, NOT NULL</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Email untuk login</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">name</td>
                  <td className="px-4 py-3"><Badge variant="outline">VARCHAR(255)</Badge></td>
                  <td className="px-4 py-3"><Badge variant="outline">NOT NULL</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Nama lengkap pengguna</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">role</td>
                  <td className="px-4 py-3"><Badge variant="outline">VARCHAR(50)</Badge></td>
                  <td className="px-4 py-3"><Badge variant="outline">DEFAULT 'staff'</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Role: 'admin' atau 'staff'</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">created_at</td>
                  <td className="px-4 py-3"><Badge variant="outline">TIMESTAMP</Badge></td>
                  <td className="px-4 py-3"><Badge variant="outline">DEFAULT NOW()</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Waktu akun dibuat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Categories Table Detail */}
        <div className="bg-card rounded-xl border-2 border-blue-500/50 overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-4">
            <h4 className="font-bold text-lg flex items-center gap-2">
              <Database className="h-5 w-5" />
              Tabel: categories
            </h4>
            <p className="text-blue-200 text-sm">Menyimpan kategori barang</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-blue-500/10">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Kolom</th>
                  <th className="px-4 py-3 text-left font-semibold">Tipe Data</th>
                  <th className="px-4 py-3 text-left font-semibold">Constraint</th>
                  <th className="px-4 py-3 text-left font-semibold">Keterangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">id</td>
                  <td className="px-4 py-3"><Badge className="bg-blue-600">UUID</Badge></td>
                  <td className="px-4 py-3"><Badge variant="destructive">PRIMARY KEY</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">ID unik kategori</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">name</td>
                  <td className="px-4 py-3"><Badge variant="outline">VARCHAR(100)</Badge></td>
                  <td className="px-4 py-3"><Badge variant="outline">UNIQUE, NOT NULL</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Nama kategori</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">description</td>
                  <td className="px-4 py-3"><Badge variant="outline">TEXT</Badge></td>
                  <td className="px-4 py-3"><Badge variant="secondary">NULLABLE</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Deskripsi kategori</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">created_at</td>
                  <td className="px-4 py-3"><Badge variant="outline">TIMESTAMP</Badge></td>
                  <td className="px-4 py-3"><Badge variant="outline">DEFAULT NOW()</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Waktu kategori dibuat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Inventory Items Table Detail */}
        <div className="bg-card rounded-xl border-2 border-green-500/50 overflow-hidden">
          <div className="bg-green-600 text-white px-6 py-4">
            <h4 className="font-bold text-lg flex items-center gap-2">
              <Database className="h-5 w-5" />
              Tabel: inventory_items
            </h4>
            <p className="text-green-200 text-sm">Menyimpan data barang inventaris (tabel utama)</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-green-500/10">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Kolom</th>
                  <th className="px-4 py-3 text-left font-semibold">Tipe Data</th>
                  <th className="px-4 py-3 text-left font-semibold">Constraint</th>
                  <th className="px-4 py-3 text-left font-semibold">Keterangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">id</td>
                  <td className="px-4 py-3"><Badge className="bg-green-600">UUID</Badge></td>
                  <td className="px-4 py-3"><Badge variant="destructive">PRIMARY KEY</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">ID unik barang</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">name</td>
                  <td className="px-4 py-3"><Badge variant="outline">VARCHAR(255)</Badge></td>
                  <td className="px-4 py-3"><Badge variant="outline">NOT NULL</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Nama lengkap barang</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">category_id</td>
                  <td className="px-4 py-3"><Badge className="bg-blue-600">UUID</Badge></td>
                  <td className="px-4 py-3"><Badge className="bg-blue-600">FK → categories.id</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Referensi ke kategori</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">quantity</td>
                  <td className="px-4 py-3"><Badge variant="outline">INTEGER</Badge></td>
                  <td className="px-4 py-3"><Badge variant="outline">NOT NULL, CHECK ≥ 0</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Jumlah stok saat ini</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">min_stock</td>
                  <td className="px-4 py-3"><Badge variant="outline">INTEGER</Badge></td>
                  <td className="px-4 py-3"><Badge variant="outline">NOT NULL, DEFAULT 0</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Batas minimum stok</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">unit</td>
                  <td className="px-4 py-3"><Badge variant="outline">VARCHAR(50)</Badge></td>
                  <td className="px-4 py-3"><Badge variant="outline">NOT NULL</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Satuan (pcs, liter, kg)</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">price</td>
                  <td className="px-4 py-3"><Badge variant="outline">DECIMAL(15,2)</Badge></td>
                  <td className="px-4 py-3"><Badge variant="outline">NOT NULL, CHECK ≥ 0</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Harga per unit (Rupiah)</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">created_at</td>
                  <td className="px-4 py-3"><Badge variant="outline">TIMESTAMP</Badge></td>
                  <td className="px-4 py-3"><Badge variant="outline">DEFAULT NOW()</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Waktu barang ditambahkan</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">updated_at</td>
                  <td className="px-4 py-3"><Badge variant="outline">TIMESTAMP</Badge></td>
                  <td className="px-4 py-3"><Badge variant="outline">DEFAULT NOW()</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Waktu update terakhir</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Stock Transactions Table Detail */}
        <div className="bg-card rounded-xl border-2 border-amber-500/50 overflow-hidden">
          <div className="bg-amber-600 text-white px-6 py-4">
            <h4 className="font-bold text-lg flex items-center gap-2">
              <Database className="h-5 w-5" />
              Tabel: stock_transactions
            </h4>
            <p className="text-amber-200 text-sm">Mencatat riwayat transaksi stok (barang masuk/keluar)</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-amber-500/10">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Kolom</th>
                  <th className="px-4 py-3 text-left font-semibold">Tipe Data</th>
                  <th className="px-4 py-3 text-left font-semibold">Constraint</th>
                  <th className="px-4 py-3 text-left font-semibold">Keterangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">id</td>
                  <td className="px-4 py-3"><Badge className="bg-amber-600">UUID</Badge></td>
                  <td className="px-4 py-3"><Badge variant="destructive">PRIMARY KEY</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">ID unik transaksi</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">item_id</td>
                  <td className="px-4 py-3"><Badge className="bg-green-600">UUID</Badge></td>
                  <td className="px-4 py-3"><Badge className="bg-green-600">FK → inventory_items.id</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Referensi ke barang</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">type</td>
                  <td className="px-4 py-3"><Badge variant="outline">VARCHAR(10)</Badge></td>
                  <td className="px-4 py-3"><Badge variant="outline">CHECK IN ('IN','OUT')</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">'IN' = masuk, 'OUT' = keluar</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">quantity</td>
                  <td className="px-4 py-3"><Badge variant="outline">INTEGER</Badge></td>
                  <td className="px-4 py-3"><Badge variant="outline">NOT NULL, CHECK &gt; 0</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Jumlah barang dalam transaksi</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">notes</td>
                  <td className="px-4 py-3"><Badge variant="outline">TEXT</Badge></td>
                  <td className="px-4 py-3"><Badge variant="secondary">NULLABLE</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Catatan transaksi</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">transaction_date</td>
                  <td className="px-4 py-3"><Badge variant="outline">TIMESTAMP</Badge></td>
                  <td className="px-4 py-3"><Badge variant="outline">DEFAULT NOW()</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">Tanggal transaksi</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-mono">created_by</td>
                  <td className="px-4 py-3"><Badge className="bg-purple-600">UUID</Badge></td>
                  <td className="px-4 py-3"><Badge className="bg-purple-600">FK → users.id</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">User yang melakukan transaksi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseDiagram;
