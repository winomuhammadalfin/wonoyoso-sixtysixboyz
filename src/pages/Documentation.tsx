import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Users, Database, Activity, Layers, FileText, CheckCircle2, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import DatabaseDiagram from "@/components/DatabaseDiagram";

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

        {/* Title */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            📚 Dokumentasi Sistem Inventaris <span className="text-gradient">Bengkel Wonoyoso</span>
          </h1>
          <p className="text-muted-foreground">Penjelasan Detail UML Diagrams & Database Design</p>
        </div>

        <Tabs defaultValue="usecase" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 h-auto">
            <TabsTrigger value="usecase" className="flex items-center gap-2 py-3">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Use Case</span>
            </TabsTrigger>
            <TabsTrigger value="sequence" className="flex items-center gap-2 py-3">
              <Activity className="h-4 w-4" />
              <span className="hidden sm:inline">Sequence</span>
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-2 py-3">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Activity</span>
            </TabsTrigger>
            <TabsTrigger value="class" className="flex items-center gap-2 py-3">
              <Layers className="h-4 w-4" />
              <span className="hidden sm:inline">Class</span>
            </TabsTrigger>
            <TabsTrigger value="database" className="flex items-center gap-2 py-3">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">Database</span>
            </TabsTrigger>
          </TabsList>

          {/* ==================== USE CASE DIAGRAM ==================== */}
          <TabsContent value="usecase" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Use Case Diagram
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Pengertian */}
                <div className="space-y-3 p-4 bg-muted/30 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    📖 Pengertian Use Case Diagram
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Use Case Diagram</strong> adalah salah satu jenis diagram dalam UML (Unified Modeling Language) 
                    yang digunakan untuk menggambarkan <strong>interaksi antara pengguna (aktor)</strong> dengan sistem. 
                    Diagram ini menunjukkan <strong>fungsionalitas</strong> yang disediakan oleh sistem dan siapa saja yang 
                    dapat menggunakan fungsi tersebut.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Komponen Use Case Diagram:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li><strong>Aktor:</strong> Entitas eksternal yang berinteraksi dengan sistem</li>
                        <li><strong>Use Case:</strong> Fungsi/layanan yang disediakan sistem</li>
                        <li><strong>System Boundary:</strong> Batasan ruang lingkup sistem</li>
                        <li><strong>Relationship:</strong> Hubungan antara aktor dan use case</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Tujuan Use Case Diagram:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Mengidentifikasi kebutuhan fungsional sistem</li>
                        <li>Menggambarkan interaksi pengguna dengan sistem</li>
                        <li>Membantu komunikasi antara developer dan stakeholder</li>
                        <li>Dasar pembuatan test case</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Diagram Visual */}
                <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                  <h4 className="font-semibold mb-4 text-center text-lg">🎨 Use Case Diagram Sistem Inventaris Bengkel Wonoyoso</h4>
                  <div className="bg-card rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-foreground whitespace-pre font-mono">
{`
┌────────────────────────────────────────────────────────────────────────────────┐
│                    SISTEM PERSEDIAAN BENGKEL WONOYOSO                          │
│                                                                                │
│                                                                                │
│      ┌─────────────────────────────────────────────────────────────┐          │
│      │                                                             │          │
│      │   ┌──────────────────┐                                      │          │
│      │   │  UC01: Melihat   │◄─────────────────────────────┐       │          │
│      │   │  Dashboard Stok  │                              │       │          │
│      │   └──────────────────┘                              │       │          │
│      │                                                     │       │          │
│      │   ┌──────────────────┐                              │       │          │
│      │   │  UC02: Mencari   │◄─────────────────────────────┤       │          │
│      │   │  Barang          │                              │       │          │
│      │   └──────────────────┘                              │       │          │
│      │                                                     │       │          │
│      │   ┌──────────────────┐                              │       │          │
│      │   │  UC03: Filter    │◄─────────────────────────────┤       │          │
│      │   │  Kategori        │                              │       │          │
│      │   └──────────────────┘                              │       │ ┌──────────────┐
│      │                                                     │       │ │              │
│      │   ┌──────────────────┐                              ├───────┼─│    ADMIN/    │
│      │   │  UC04: Menambah  │◄─────────────────────────────┤       │ │   PETUGAS    │
│      │   │  Barang Baru     │                              │       │ │   BENGKEL    │
│      │   └──────────────────┘                              │       │ │              │
│      │                                                     │       │ └──────────────┘
│      │   ┌──────────────────┐                              │       │
│      │   │  UC05: Mengedit  │◄─────────────────────────────┤       │          │
│      │   │  Data Barang     │                              │       │          │
│      │   └──────────────────┘                              │       │          │
│      │                                                     │       │          │
│      │   ┌──────────────────┐                              │       │          │
│      │   │  UC06: Menghapus │◄─────────────────────────────┤       │          │
│      │   │  Barang          │                              │       │          │
│      │   └──────────────────┘                              │       │          │
│      │                                                     │       │          │
│      │   ┌──────────────────┐                              │       │          │
│      │   │  UC07: Melihat   │◄─────────────────────────────┤       │          │
│      │   │  Stok Rendah     │                              │       │          │
│      │   └──────────────────┘                              │       │          │
│      │                                                     │       │          │
│      │   ┌──────────────────┐                              │       │          │
│      │   │  UC08: Melihat   │◄─────────────────────────────┘       │          │
│      │   │  Total Nilai     │                                      │          │
│      │   └──────────────────┘                                      │          │
│      │                                                             │          │
│      └─────────────────────────────────────────────────────────────┘          │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
`}
                    </pre>
                  </div>
                </div>

                {/* Aktor */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    👤 Identifikasi Aktor
                  </h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[150px]">Aktor</TableHead>
                        <TableHead>Deskripsi</TableHead>
                        <TableHead>Tanggung Jawab</TableHead>
                        <TableHead>Hak Akses</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            Admin/Petugas Bengkel
                          </div>
                        </TableCell>
                        <TableCell>Pengguna utama sistem yang bertanggung jawab mengelola seluruh inventaris barang di Bengkel Wonoyoso</TableCell>
                        <TableCell>
                          <ul className="text-sm list-disc list-inside">
                            <li>Menambah barang baru</li>
                            <li>Mengedit data barang</li>
                            <li>Menghapus barang</li>
                            <li>Memantau stok</li>
                          </ul>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-primary">Full Access</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                {/* Daftar Use Case Detail */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    📋 Daftar Use Case Lengkap
                  </h3>
                  <div className="grid gap-4">
                    {[
                      { 
                        id: "UC01", 
                        name: "Melihat Dashboard Stok", 
                        desc: "Admin dapat melihat ringkasan statistik inventaris yang meliputi total jenis barang, total stok keseluruhan, jumlah barang dengan stok rendah, dan total nilai stok dalam rupiah",
                        priority: "Tinggi",
                        precondition: "Admin sudah membuka aplikasi",
                        postcondition: "Dashboard menampilkan data statistik terkini",
                        mainFlow: ["Sistem menghitung total jenis barang", "Sistem menghitung total stok", "Sistem identifikasi stok rendah", "Sistem hitung total nilai", "Tampilkan di 4 kartu statistik"]
                      },
                      { 
                        id: "UC02", 
                        name: "Mencari Barang", 
                        desc: "Admin dapat mencari barang berdasarkan nama menggunakan fitur pencarian real-time yang akan memfilter tabel secara otomatis",
                        priority: "Tinggi",
                        precondition: "Terdapat data barang dalam sistem",
                        postcondition: "Tabel menampilkan hasil pencarian",
                        mainFlow: ["Admin ketik kata kunci di search box", "Sistem filter data berdasarkan nama", "Tabel update secara real-time", "Tampilkan hasil yang cocok"]
                      },
                      { 
                        id: "UC03", 
                        name: "Filter Berdasarkan Kategori", 
                        desc: "Admin dapat memfilter daftar barang berdasarkan kategori seperti Oli & Pelumas, Sparepart Mesin, Ban & Velg, Aki & Kelistrikan, Body & Aksesoris, dan Perkakas",
                        priority: "Sedang",
                        precondition: "Terdapat data barang dalam sistem",
                        postcondition: "Tabel hanya menampilkan barang dari kategori terpilih",
                        mainFlow: ["Admin pilih kategori dari dropdown", "Sistem filter data berdasarkan kategori", "Tabel update otomatis", "Tampilkan barang sesuai kategori"]
                      },
                      { 
                        id: "UC04", 
                        name: "Menambah Barang Baru", 
                        desc: "Admin dapat menambahkan barang baru ke dalam sistem dengan mengisi form yang meliputi nama barang, kategori, jumlah stok, minimum stok, satuan, dan harga",
                        priority: "Tinggi",
                        precondition: "Admin memiliki data barang yang akan ditambahkan",
                        postcondition: "Barang baru tersimpan dan muncul di tabel",
                        mainFlow: ["Admin klik tombol Tambah Barang", "Dialog form muncul", "Admin isi semua field", "Admin klik Simpan", "Sistem validasi data", "Data tersimpan", "Notifikasi sukses muncul"]
                      },
                      { 
                        id: "UC05", 
                        name: "Mengedit Data Barang", 
                        desc: "Admin dapat mengubah informasi barang yang sudah ada termasuk nama, kategori, jumlah stok, minimum stok, satuan, dan harga",
                        priority: "Tinggi",
                        precondition: "Barang sudah ada dalam sistem",
                        postcondition: "Data barang terupdate dengan nilai baru",
                        mainFlow: ["Admin klik tombol Edit pada baris barang", "Dialog form muncul dengan data existing", "Admin ubah data yang diperlukan", "Admin klik Simpan", "Sistem validasi", "Data terupdate", "Notifikasi sukses"]
                      },
                      { 
                        id: "UC06", 
                        name: "Menghapus Barang", 
                        desc: "Admin dapat menghapus barang yang sudah tidak diperlukan dari sistem inventaris",
                        priority: "Sedang",
                        precondition: "Barang ada dalam sistem",
                        postcondition: "Barang dihapus dari sistem",
                        mainFlow: ["Admin klik tombol Hapus", "Konfirmasi muncul", "Admin konfirmasi penghapusan", "Barang dihapus dari state", "Notifikasi sukses"]
                      },
                      { 
                        id: "UC07", 
                        name: "Melihat Stok Rendah", 
                        desc: "Admin dapat melihat indikator visual (badge merah) pada barang-barang yang stoknya di bawah batas minimum yang telah ditentukan",
                        priority: "Tinggi",
                        precondition: "Terdapat barang dengan stok di bawah minimum",
                        postcondition: "Badge 'Stok Rendah' ditampilkan pada barang terkait",
                        mainFlow: ["Sistem bandingkan quantity dengan minStock", "Jika quantity < minStock", "Tampilkan badge merah", "Baris tabel di-highlight"]
                      },
                      { 
                        id: "UC08", 
                        name: "Melihat Total Nilai Stok", 
                        desc: "Admin dapat melihat total nilai rupiah dari seluruh stok barang yang dihitung dari jumlah × harga setiap barang",
                        priority: "Sedang",
                        precondition: "Terdapat data barang dengan harga",
                        postcondition: "Total nilai ditampilkan di dashboard",
                        mainFlow: ["Sistem ambil semua data barang", "Hitung: Σ(quantity × price)", "Format ke rupiah", "Tampilkan di StatCard"]
                      },
                    ].map((uc) => (
                      <Card key={uc.id} className="bg-muted/20 border-l-4 border-l-primary">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="font-mono">{uc.id}</Badge>
                              <span className="font-semibold text-foreground">{uc.name}</span>
                            </div>
                            <Badge className={uc.priority === "Tinggi" ? "bg-destructive" : "bg-primary"}>
                              Prioritas: {uc.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">{uc.desc}</p>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="font-semibold text-foreground mb-1">Pre-condition:</p>
                              <p className="text-muted-foreground">{uc.precondition}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-foreground mb-1">Post-condition:</p>
                              <p className="text-muted-foreground">{uc.postcondition}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-foreground mb-1">Main Flow:</p>
                              <ol className="text-muted-foreground list-decimal list-inside text-xs">
                                {uc.mainFlow.map((flow, idx) => (
                                  <li key={idx}>{flow}</li>
                                ))}
                              </ol>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ==================== SEQUENCE DIAGRAM ==================== */}
          <TabsContent value="sequence" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-6 w-6 text-primary" />
                  Sequence Diagram
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Pengertian */}
                <div className="space-y-3 p-4 bg-muted/30 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    📖 Pengertian Sequence Diagram
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Sequence Diagram</strong> adalah diagram UML yang menggambarkan <strong>urutan interaksi</strong> 
                    antar objek dalam sistem berdasarkan <strong>waktu (kronologis)</strong>. Diagram ini menunjukkan bagaimana 
                    objek-objek saling berkomunikasi melalui <strong>pertukaran pesan (message)</strong> untuk menyelesaikan 
                    suatu skenario atau use case.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Komponen Sequence Diagram:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li><strong>Lifeline:</strong> Garis vertikal yang merepresentasikan objek</li>
                        <li><strong>Activation Bar:</strong> Kotak pada lifeline saat objek aktif</li>
                        <li><strong>Message:</strong> Panah horizontal antar lifeline</li>
                        <li><strong>Return Message:</strong> Panah putus-putus untuk response</li>
                        <li><strong>Alt/Loop/Opt:</strong> Fragment untuk kondisi</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Tujuan Sequence Diagram:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Menggambarkan alur proses secara detail</li>
                        <li>Mengidentifikasi objek yang terlibat</li>
                        <li>Menentukan method yang diperlukan</li>
                        <li>Membantu debugging dan testing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Sequence 1: Menambah Barang */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    ➕ Sequence Diagram 1: Proses Menambah Barang Baru
                  </h3>
                  <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                    <div className="bg-card rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-foreground whitespace-pre font-mono">
{`
    Admin              UI/Dashboard         Form Dialog          Validator            State/Storage
      │                     │                    │                    │                    │
      │  1. Klik "Tambah"   │                    │                    │                    │
      │────────────────────►│                    │                    │                    │
      │                     │                    │                    │                    │
      │                     │  2. Open Dialog    │                    │                    │
      │                     │───────────────────►│                    │                    │
      │                     │                    │                    │                    │
      │                     │                    │  3. Dialog Muncul  │                    │
      │◄────────────────────────────────────────│                    │                    │
      │                     │                    │                    │                    │
      │  4. Isi Form Data (nama, kategori, jumlah, harga, dll)       │                    │
      │─────────────────────────────────────────►│                    │                    │
      │                     │                    │                    │                    │
      │  5. Klik "Simpan"   │                    │                    │                    │
      │─────────────────────────────────────────►│                    │                    │
      │                     │                    │                    │                    │
      │                     │                    │  6. Validate Data  │                    │
      │                     │                    │───────────────────►│                    │
      │                     │                    │                    │                    │
      │                     │                    │     ┌──────────────┴──────────────┐     │
      │                     │                    │     │  ALT: Hasil Validasi        │     │
      │                     │                    │     ├──────────────────────────────┤     │
      │                     │                    │     │  [Valid]                     │     │
      │                     │                    │  7a │  Return: Valid               │     │
      │                     │                    │◄────┴──────────────────────────────      │
      │                     │                    │                                          │
      │                     │                    │  8. Save to State                        │
      │                     │                    │─────────────────────────────────────────►│
      │                     │                    │                                          │
      │                     │                    │                    9. Return: Success    │
      │                     │                    │◄─────────────────────────────────────────│
      │                     │                    │                                          │
      │                     │  10. Close Dialog  │                                          │
      │                     │◄───────────────────│                                          │
      │                     │                                                               │
      │                     │  11. Refresh Table │                                          │
      │                     │────────────────────────────────────────────────────────────►  │
      │                     │                                                               │
      │  12. Toast Sukses   │                                                               │
      │◄────────────────────│                                                               │
      │                     │                    │     ├──────────────────────────────┤     │
      │                     │                    │     │  [Tidak Valid]               │     │
      │                     │                    │ 7b  │  Return: Error Message       │     │
      │◄────────────────────────────────────────│◄────┴──────────────────────────────      │
      │   (Show Error)      │                    │     └──────────────────────────────┘     │
      │                     │                    │                    │                    │
`}
                      </pre>
                    </div>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16">No</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Pengirim</TableHead>
                        <TableHead>Penerima</TableHead>
                        <TableHead>Tipe</TableHead>
                        <TableHead>Deskripsi</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell className="font-mono text-xs">onClick("Tambah")</TableCell>
                        <TableCell>Admin</TableCell>
                        <TableCell>UI</TableCell>
                        <TableCell><Badge variant="outline">Sync</Badge></TableCell>
                        <TableCell>Admin mengklik tombol tambah barang</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell className="font-mono text-xs">setIsOpen(true)</TableCell>
                        <TableCell>UI</TableCell>
                        <TableCell>Form Dialog</TableCell>
                        <TableCell><Badge variant="outline">Sync</Badge></TableCell>
                        <TableCell>UI membuka dialog form</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell className="font-mono text-xs">render()</TableCell>
                        <TableCell>Form Dialog</TableCell>
                        <TableCell>Admin</TableCell>
                        <TableCell><Badge variant="secondary">Return</Badge></TableCell>
                        <TableCell>Form kosong ditampilkan</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell className="font-mono text-xs">onChange(formData)</TableCell>
                        <TableCell>Admin</TableCell>
                        <TableCell>Form Dialog</TableCell>
                        <TableCell><Badge variant="outline">Sync</Badge></TableCell>
                        <TableCell>Admin mengisi data barang</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell className="font-mono text-xs">onSubmit()</TableCell>
                        <TableCell>Admin</TableCell>
                        <TableCell>Form Dialog</TableCell>
                        <TableCell><Badge variant="outline">Sync</Badge></TableCell>
                        <TableCell>Admin submit form</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>6</TableCell>
                        <TableCell className="font-mono text-xs">validate(data)</TableCell>
                        <TableCell>Form Dialog</TableCell>
                        <TableCell>Validator</TableCell>
                        <TableCell><Badge variant="outline">Sync</Badge></TableCell>
                        <TableCell>Validasi input data</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>7</TableCell>
                        <TableCell className="font-mono text-xs">isValid: boolean</TableCell>
                        <TableCell>Validator</TableCell>
                        <TableCell>Form Dialog</TableCell>
                        <TableCell><Badge variant="secondary">Return</Badge></TableCell>
                        <TableCell>Hasil validasi</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>8</TableCell>
                        <TableCell className="font-mono text-xs">setItems([...items, newItem])</TableCell>
                        <TableCell>Form Dialog</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell><Badge variant="outline">Sync</Badge></TableCell>
                        <TableCell>Simpan data baru</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>9-12</TableCell>
                        <TableCell className="font-mono text-xs">success callback chain</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell><Badge variant="secondary">Return</Badge></TableCell>
                        <TableCell>Tutup dialog, refresh, notifikasi</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                {/* Sequence 2: Mencari Barang */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    🔍 Sequence Diagram 2: Proses Pencarian Barang
                  </h3>
                  <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                    <div className="bg-card rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-foreground whitespace-pre font-mono">
{`
    Admin              Search Input           Filter Logic           Data Store              Table
      │                     │                      │                      │                    │
      │  1. Ketik keyword   │                      │                      │                    │
      │────────────────────►│                      │                      │                    │
      │                     │                      │                      │                    │
      │                     │  2. setSearchQuery   │                      │                    │
      │                     │─────────────────────►│                      │                    │
      │                     │                      │                      │                    │
      │                     │                      │  3. filter(items,    │                    │
      │                     │                      │     query)           │                    │
      │                     │                      │─────────────────────►│                    │
      │                     │                      │                      │                    │
      │                     │                      │     4. filteredItems │                    │
      │                     │                      │◄─────────────────────│                    │
      │                     │                      │                      │                    │
      │                     │                      │  5. updateTableData  │                    │
      │                     │                      │─────────────────────────────────────────►│
      │                     │                      │                      │                    │
      │  6. Hasil pencarian ditampilkan            │                      │                    │
      │◄───────────────────────────────────────────────────────────────────────────────────────│
      │                     │                      │                      │                    │
`}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Sequence 3: Edit Barang */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    ✏️ Sequence Diagram 3: Proses Edit Barang
                  </h3>
                  <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                    <div className="bg-card rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-foreground whitespace-pre font-mono">
{`
    Admin              Table Row            Form Dialog           State/Storage
      │                    │                     │                     │
      │  1. Klik Edit      │                     │                     │
      │───────────────────►│                     │                     │
      │                    │                     │                     │
      │                    │  2. setEditItem     │                     │
      │                    │────────────────────►│                     │
      │                    │                     │                     │
      │                    │  3. getItemById     │                     │
      │                    │────────────────────────────────────────►  │
      │                    │                     │                     │
      │                    │  4. Return item data│                     │
      │                    │◄────────────────────────────────────────  │
      │                    │                     │                     │
      │  5. Form dengan data existing            │                     │
      │◄─────────────────────────────────────────│                     │
      │                    │                     │                     │
      │  6. Ubah data      │                     │                     │
      │─────────────────────────────────────────►│                     │
      │                    │                     │                     │
      │  7. Klik Simpan    │                     │                     │
      │─────────────────────────────────────────►│                     │
      │                    │                     │                     │
      │                    │                     │  8. updateItem      │
      │                    │                     │────────────────────►│
      │                    │                     │                     │
      │                    │                     │  9. Success         │
      │                    │                     │◄────────────────────│
      │                    │                     │                     │
      │  10. Toast sukses + refresh table        │                     │
      │◄─────────────────────────────────────────│                     │
      │                    │                     │                     │
`}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Sequence 4: Hapus Barang */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    🗑️ Sequence Diagram 4: Proses Hapus Barang
                  </h3>
                  <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                    <div className="bg-card rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-foreground whitespace-pre font-mono">
{`
    Admin              Table Row            Confirm Dialog           State/Storage
      │                    │                      │                      │
      │  1. Klik Hapus     │                      │                      │
      │───────────────────►│                      │                      │
      │                    │                      │                      │
      │                    │  2. Show Confirm     │                      │
      │                    │─────────────────────►│                      │
      │                    │                      │                      │
      │  3. Dialog konfirmasi muncul              │                      │
      │◄──────────────────────────────────────────│                      │
      │                    │                      │                      │
      │                    │                      │  ┌────────────────────────────┐
      │                    │                      │  │  ALT: Pilihan User         │
      │                    │                      │  ├────────────────────────────┤
      │  4a. Klik "Ya, Hapus"                     │  │  [Konfirmasi]              │
      │───────────────────────────────────────────►│  │                            │
      │                    │                      │  │                            │
      │                    │                      │  │  5. deleteItem(id)         │
      │                    │                      │  │─────────────────────────────►
      │                    │                      │  │                            │
      │                    │                      │  │  6. Success                │
      │                    │                      │◄─┴────────────────────────────│
      │                    │                      │                               │
      │  7. Toast sukses + item hilang dari tabel │                               │
      │◄──────────────────────────────────────────│                               │
      │                    │                      │  ├────────────────────────────┤
      │  4b. Klik "Batal"  │                      │  │  [Batal]                   │
      │───────────────────────────────────────────►│  │                            │
      │                    │                      │  │  Close Dialog              │
      │◄──────────────────────────────────────────│◄─┴────────────────────────────┘
      │   (Tidak ada perubahan)                   │
      │                    │                      │                      │
`}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ==================== ACTIVITY DIAGRAM ==================== */}
          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Activity Diagram
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Pengertian */}
                <div className="space-y-3 p-4 bg-muted/30 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    📖 Pengertian Activity Diagram
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Activity Diagram</strong> adalah diagram UML yang menggambarkan <strong>alur kerja (workflow)</strong> 
                    atau aktivitas dari sebuah sistem atau proses bisnis. Diagram ini menunjukkan <strong>urutan aktivitas</strong> 
                    dari awal hingga akhir, termasuk <strong>percabangan keputusan (decision)</strong>, 
                    <strong>penggabungan (merge)</strong>, dan <strong>proses paralel</strong>.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Komponen Activity Diagram:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li><strong>Initial Node (●):</strong> Titik awal aktivitas</li>
                        <li><strong>Final Node (⊙):</strong> Titik akhir aktivitas</li>
                        <li><strong>Action/Activity:</strong> Aktivitas yang dilakukan</li>
                        <li><strong>Decision Node (◇):</strong> Percabangan keputusan</li>
                        <li><strong>Merge Node:</strong> Penggabungan alur</li>
                        <li><strong>Fork/Join Bar:</strong> Proses paralel</li>
                        <li><strong>Swimlane:</strong> Pembagian aktivitas per aktor</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Tujuan Activity Diagram:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Menggambarkan proses bisnis secara visual</li>
                        <li>Mengidentifikasi langkah-langkah dalam proses</li>
                        <li>Menunjukkan keputusan dan kondisi</li>
                        <li>Membantu optimasi proses</li>
                        <li>Dokumentasi alur kerja</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tabel Simbol */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    📌 Simbol-Simbol Activity Diagram
                  </h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[120px]">Simbol</TableHead>
                        <TableHead className="w-[150px]">Nama</TableHead>
                        <TableHead>Keterangan</TableHead>
                        <TableHead>Contoh Penggunaan</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-2xl text-center">●</TableCell>
                        <TableCell className="font-medium">Initial Node</TableCell>
                        <TableCell>Titik awal dari seluruh aktivitas</TableCell>
                        <TableCell>Mulai aplikasi</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-2xl text-center">◉</TableCell>
                        <TableCell className="font-medium">Final Node</TableCell>
                        <TableCell>Titik akhir dari seluruh aktivitas</TableCell>
                        <TableCell>Selesai/Keluar</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-center">
                          <div className="inline-block border-2 border-foreground rounded-lg px-3 py-1 text-xs">Action</div>
                        </TableCell>
                        <TableCell className="font-medium">Action/Activity</TableCell>
                        <TableCell>Aktivitas atau aksi yang dilakukan dalam proses</TableCell>
                        <TableCell>"Isi Form", "Simpan Data"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-2xl text-center">◇</TableCell>
                        <TableCell className="font-medium">Decision Node</TableCell>
                        <TableCell>Titik percabangan berdasarkan kondisi (Ya/Tidak)</TableCell>
                        <TableCell>"Data Valid?", "Konfirmasi Hapus?"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-2xl text-center">→</TableCell>
                        <TableCell className="font-medium">Control Flow</TableCell>
                        <TableCell>Arah aliran aktivitas dari satu node ke node lain</TableCell>
                        <TableCell>Transisi antar aktivitas</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-center">
                          <div className="inline-block bg-foreground w-12 h-1"></div>
                        </TableCell>
                        <TableCell className="font-medium">Fork/Join Bar</TableCell>
                        <TableCell>Memecah atau menggabungkan alur paralel</TableCell>
                        <TableCell>Proses bersamaan</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                {/* Activity 1: Manajemen Stok Lengkap */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    📦 Activity Diagram 1: Alur Utama Manajemen Stok Barang
                  </h3>
                  <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                    <div className="bg-card rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-foreground whitespace-pre font-mono">
{`
                                        ●
                                        │
                                        ▼
                              ┌─────────────────┐
                              │  Buka Aplikasi  │
                              └────────┬────────┘
                                       │
                                       ▼
                              ┌─────────────────┐
                              │ Tampil Dashboard│
                              │   & Statistik   │
                              └────────┬────────┘
                                       │
                                       ▼
                              ┌─────────────────┐
                              │  Lihat Daftar   │
                              │     Barang      │
                              └────────┬────────┘
                                       │
                                       ▼
                                ◇ Pilih Aksi? ◇
                                       │
            ┌──────────────────────────┼──────────────────────────┐
            │                          │                          │
            ▼                          ▼                          ▼
    ┌───────────────┐          ┌───────────────┐          ┌───────────────┐
    │ Tambah Barang │          │  Edit Barang  │          │ Hapus Barang  │
    └───────┬───────┘          └───────┬───────┘          └───────┬───────┘
            │                          │                          │
            ▼                          ▼                          ▼
    ┌───────────────┐          ┌───────────────┐          ┌───────────────┐
    │ Klik Tombol   │          │ Klik Icon     │          │ Klik Icon     │
    │ "Tambah"      │          │ Edit di Baris │          │ Hapus di Baris│
    └───────┬───────┘          └───────┬───────┘          └───────┬───────┘
            │                          │                          │
            ▼                          ▼                          ▼
    ┌───────────────┐          ┌───────────────┐            ◇ Konfirmasi? ◇
    │ Tampil Form   │          │ Tampil Form   │                  │
    │ Input Kosong  │          │ Dengan Data   │         ┌───────┴───────┐
    └───────┬───────┘          └───────┬───────┘         │               │
            │                          │              [Ya]             [Tidak]
            ▼                          ▼                 │               │
    ┌───────────────┐          ┌───────────────┐         ▼               │
    │  Isi Data:    │          │  Ubah Data    │  ┌───────────────┐      │
    │ - Nama        │          │  yang Perlu   │  │ Hapus dari    │      │
    │ - Kategori    │          │               │  │ State/DB      │      │
    │ - Jumlah      │          └───────┬───────┘  └───────┬───────┘      │
    │ - Min. Stok   │                  │                  │              │
    │ - Satuan      │                  ▼                  ▼              │
    │ - Harga       │          ┌───────────────┐  ┌───────────────┐      │
    └───────┬───────┘          │ Klik Simpan   │  │ Tampil Toast  │      │
            │                  └───────┬───────┘  │ "Berhasil"    │      │
            ▼                          │          └───────┬───────┘      │
    ┌───────────────┐                  │                  │              │
    │ Klik Simpan   │                  │                  │              │
    └───────┬───────┘                  │                  │              │
            │                          │                  │              │
            ▼                          ▼                  │              │
         ◇ Data Valid? ◇           ◇ Data Valid? ◇        │              │
            │                          │                  │              │
      ┌─────┴─────┐              ┌─────┴─────┐           │              │
      │           │              │           │           │              │
   [Ya]        [Tidak]        [Ya]        [Tidak]        │              │
      │           │              │           │           │              │
      ▼           ▼              ▼           ▼           │              │
┌─────────┐ ┌─────────┐   ┌─────────┐ ┌─────────┐        │              │
│ Simpan  │ │ Tampil  │   │ Update  │ │ Tampil  │        │              │
│ ke DB   │ │ Error   │   │ ke DB   │ │ Error   │        │              │
└────┬────┘ └────┬────┘   └────┬────┘ └────┬────┘        │              │
     │           │             │           │             │              │
     │           ▼             │           ▼             │              │
     │    ┌─────────┐          │    ┌─────────┐          │              │
     │    │ Kembali │          │    │ Kembali │          │              │
     │    │ ke Form │          │    │ ke Form │          │              │
     │    └────┬────┘          │    └────┬────┘          │              │
     │         │               │         │               │              │
     ▼         │               ▼         │               │              │
┌─────────┐    │         ┌─────────┐     │               │              │
│ Toast   │    │         │ Toast   │     │               │              │
│ Sukses  │    │         │ Sukses  │     │               │              │
└────┬────┘    │         └────┬────┘     │               │              │
     │         │              │          │               │              │
     └─────────┴──────────────┴──────────┴───────────────┴──────────────┘
                                       │
                                       ▼
                              ┌─────────────────┐
                              │ Refresh Daftar  │
                              │ Barang & Stats  │
                              └────────┬────────┘
                                       │
                                       ▼
                                 ◇ Lanjut? ◇
                                       │
                              ┌────────┴────────┐
                              │                 │
                           [Ya]              [Tidak]
                              │                 │
                              ▼                 ▼
                    (Kembali ke              ◉ End
                     "Pilih Aksi")
`}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Activity 2: Monitoring Stok */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    📊 Activity Diagram 2: Alur Monitoring dan Identifikasi Stok Rendah
                  </h3>
                  <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                    <div className="bg-card rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-foreground whitespace-pre font-mono">
{`
                              ●
                              │
                              ▼
                    ┌─────────────────┐
                    │  Buka Dashboard │
                    └────────┬────────┘
                              │
              ════════════════╪════════════════  (Fork - Proses Paralel)
              │               │               │
              ▼               ▼               ▼
    ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
    │ Hitung Total    │ │ Hitung Total    │ │ Hitung Total    │
    │ Jenis Barang    │ │ Stok            │ │ Nilai (Rupiah)  │
    └────────┬────────┘ └────────┬────────┘ └────────┬────────┘
              │               │               │
              ▼               ▼               ▼
    ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
    │ Tampilkan di    │ │ Tampilkan di    │ │ Tampilkan di    │
    │ StatCard 1      │ │ StatCard 2      │ │ StatCard 4      │
    └────────┬────────┘ └────────┬────────┘ └────────┬────────┘
              │               │               │
              ════════════════╪════════════════  (Join)
                              │
                              ▼
                    ┌─────────────────┐
                    │ Loop: Untuk     │
                    │ Setiap Barang   │
                    └────────┬────────┘
                              │
                              ▼
                    ◇ quantity < minStock? ◇
                              │
                    ┌─────────┴─────────┐
                    │                   │
                 [Ya]                [Tidak]
                    │                   │
                    ▼                   ▼
          ┌─────────────────┐  ┌─────────────────┐
          │ Tambahkan ke    │  │ Status Normal   │
          │ Counter Stok    │  │ (Skip)          │
          │ Rendah          │  └────────┬────────┘
          └────────┬────────┘           │
                   │                    │
                   ▼                    │
          ┌─────────────────┐           │
          │ Tampilkan Badge │           │
          │ "Stok Rendah"   │           │
          │ di Baris Tabel  │           │
          └────────┬────────┘           │
                   │                    │
                   └──────────┬─────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ Tampilkan Total │
                    │ Stok Rendah di  │
                    │ StatCard 3      │
                    └────────┬────────┘
                              │
                              ▼
                    ◇ Ada Stok Rendah > 0? ◇
                              │
                    ┌─────────┴─────────┐
                    │                   │
                 [Ya]                [Tidak]
                    │                   │
                    ▼                   ▼
          ┌─────────────────┐  ┌─────────────────┐
          │ Tampilkan Card  │  │ Tampilkan Card  │
          │ Warna Merah     │  │ Warna Normal    │
          │ (Warning)       │  │ (Aman)          │
          └────────┬────────┘  └────────┬────────┘
                   │                    │
                   └──────────┬─────────┘
                              │
                              ▼
                              ◉
`}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Activity 3: Pencarian */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    🔍 Activity Diagram 3: Alur Pencarian dan Filter Barang
                  </h3>
                  <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                    <div className="bg-card rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-foreground whitespace-pre font-mono">
{`
                              ●
                              │
                              ▼
                    ┌─────────────────┐
                    │ Halaman Daftar  │
                    │ Barang Aktif    │
                    └────────┬────────┘
                              │
                              ▼
                    ◇ Pilih Metode Pencarian ◇
                              │
              ┌───────────────┴───────────────┐
              │                               │
       [Cari by Nama]                  [Filter by Kategori]
              │                               │
              ▼                               ▼
    ┌─────────────────┐             ┌─────────────────┐
    │ Ketik Keyword   │             │ Pilih Kategori  │
    │ di Search Box   │             │ dari Dropdown   │
    └────────┬────────┘             └────────┬────────┘
              │                               │
              ▼                               ▼
    ┌─────────────────┐             ┌─────────────────┐
    │ Trigger onChange│             │ Trigger onChange│
    │ Event           │             │ Event           │
    └────────┬────────┘             └────────┬────────┘
              │                               │
              └───────────────┬───────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ Filter Array    │
                    │ items dengan    │
                    │ kondisi         │
                    └────────┬────────┘
                              │
                              ▼
                    ◇ Hasil Ditemukan? ◇
                              │
                    ┌─────────┴─────────┐
                    │                   │
                 [Ya]                [Tidak]
                    │                   │
                    ▼                   ▼
          ┌─────────────────┐  ┌─────────────────┐
          │ Render Tabel    │  │ Tampilkan Pesan │
          │ dengan Hasil    │  │ "Tidak ada data │
          │ Filter          │  │ yang ditemukan" │
          └────────┬────────┘  └────────┬────────┘
                   │                    │
                   └──────────┬─────────┘
                              │
                              ▼
                    ◇ Lanjut Cari? ◇
                              │
                    ┌─────────┴─────────┐
                    │                   │
                 [Ya]              [Reset]
                    │                   │
                    ▼                   ▼
          (Kembali ke           ┌─────────────────┐
           "Pilih Metode")      │ Clear Search &  │
                                │ Reset Filter    │
                                └────────┬────────┘
                                         │
                                         ▼
                               ┌─────────────────┐
                               │ Tampilkan Semua │
                               │ Data Barang     │
                               └────────┬────────┘
                                         │
                                         ▼
                                         ◉
`}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ==================== CLASS DIAGRAM ==================== */}
          <TabsContent value="class" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-6 w-6 text-primary" />
                  Class Diagram
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Pengertian */}
                <div className="space-y-3 p-4 bg-muted/30 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    📖 Pengertian Class Diagram
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Class Diagram</strong> adalah diagram UML yang menggambarkan <strong>struktur statis</strong> 
                    dari sistem dengan menunjukkan <strong>kelas-kelas</strong>, <strong>atribut (properti)</strong>, 
                    <strong>method (operasi)</strong>, dan <strong>hubungan antar kelas</strong>. Diagram ini menjadi 
                    blueprint untuk implementasi kode program.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Komponen Class Diagram:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li><strong>Class:</strong> Blueprint/template objek</li>
                        <li><strong>Attribute:</strong> Data/properti yang dimiliki class</li>
                        <li><strong>Method:</strong> Fungsi/operasi yang bisa dilakukan</li>
                        <li><strong>Visibility:</strong> + public, - private, # protected</li>
                        <li><strong>Relationship:</strong> Association, Aggregation, Composition, Inheritance</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Notasi Visibility:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li><strong>+ (Public):</strong> Dapat diakses dari mana saja</li>
                        <li><strong>- (Private):</strong> Hanya dapat diakses dari dalam class</li>
                        <li><strong># (Protected):</strong> Dapat diakses dari class dan turunannya</li>
                        <li><strong>~ (Package):</strong> Dapat diakses dalam package yang sama</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Diagram */}
                <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                  <h4 className="font-semibold mb-4 text-center text-lg">🎨 Class Diagram Sistem Inventaris Bengkel Wonoyoso</h4>
                  <div className="bg-card rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-foreground whitespace-pre font-mono">
{`
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                                     │
│  ┌─────────────────────────────────────────┐         ┌─────────────────────────────────────────┐   │
│  │           <<interface>>                  │         │              Category                   │   │
│  │          InventoryItem                   │         │              <<enum>>                   │   │
│  ├─────────────────────────────────────────┤         ├─────────────────────────────────────────┤   │
│  │ + id: string                            │         │ + OLI_PELUMAS: "Oli & Pelumas"          │   │
│  │ + name: string                          │         │ + SPAREPART: "Sparepart Mesin"          │   │
│  │ + category: Category                    │◄────────│ + BAN_VELG: "Ban & Velg"                │   │
│  │ + quantity: number                      │  uses   │ + AKI_LISTRIK: "Aki & Kelistrikan"      │   │
│  │ + minStock: number                      │         │ + BODY_AKSESORIS: "Body & Aksesoris"    │   │
│  │ + unit: string                          │         │ + PERKAKAS: "Perkakas"                  │   │
│  │ + price: number                         │         └─────────────────────────────────────────┘   │
│  │ + createdAt: Date                       │                                                        │
│  │ + updatedAt: Date                       │                                                        │
│  ├─────────────────────────────────────────┤                                                        │
│  │ + isLowStock(): boolean                 │                                                        │
│  │ + getTotalValue(): number               │                                                        │
│  │ + updateQuantity(qty: number): void     │                                                        │
│  └─────────────────────────────────────────┘                                                        │
│                       ▲                                                                             │
│                       │ implements                                                                  │
│                       │                                                                             │
│  ┌─────────────────────────────────────────┐                                                        │
│  │         InventoryItemImpl               │                                                        │
│  ├─────────────────────────────────────────┤                                                        │
│  │ - _id: string                           │                                                        │
│  │ - _name: string                         │                                                        │
│  │ - _category: Category                   │                                                        │
│  │ - _quantity: number                     │                                                        │
│  │ - _minStock: number                     │                                                        │
│  │ - _unit: string                         │                                                        │
│  │ - _price: number                        │                                                        │
│  │ - _createdAt: Date                      │                                                        │
│  │ - _updatedAt: Date                      │                                                        │
│  ├─────────────────────────────────────────┤                                                        │
│  │ + constructor(data: Partial<Item>)      │                                                        │
│  │ + isLowStock(): boolean                 │                                                        │
│  │ + getTotalValue(): number               │                                                        │
│  │ + updateQuantity(qty: number): void     │                                                        │
│  │ + toJSON(): object                      │                                                        │
│  └─────────────────────────────────────────┘                                                        │
│                       │                                                                             │
│                       │ 1..*                                                                        │
│                       │ manages                                                                     │
│                       ▼                                                                             │
│  ┌─────────────────────────────────────────┐                                                        │
│  │         InventoryManager                 │                                                        │
│  │           <<service>>                    │                                                        │
│  ├─────────────────────────────────────────┤                                                        │
│  │ - items: InventoryItem[]                │                                                        │
│  │ - searchQuery: string                   │                                                        │
│  │ - selectedCategory: Category | null     │                                                        │
│  ├─────────────────────────────────────────┤                                                        │
│  │ + addItem(item: InventoryItem): void    │                                                        │
│  │ + editItem(id: string, data): void      │                                                        │
│  │ + deleteItem(id: string): void          │                                                        │
│  │ + getItemById(id: string): Item | null  │                                                        │
│  │ + searchItems(query: string): Item[]    │                                                        │
│  │ + filterByCategory(cat): Item[]         │                                                        │
│  │ + getLowStockItems(): Item[]            │                                                        │
│  │ + getTotalStockValue(): number          │                                                        │
│  │ + getStatistics(): Statistics           │                                                        │
│  │ + exportToCSV(): string                 │                                                        │
│  └─────────────────────────────────────────┘                                                        │
│                       │                                                                             │
│         ┌─────────────┴─────────────┐                                                               │
│         │                           │                                                               │
│         ▼ uses                      ▼ uses                                                          │
│  ┌─────────────────────────┐ ┌─────────────────────────┐                                           │
│  │      Dashboard          │ │     SearchFilter        │                                           │
│  │     <<component>>       │ │     <<component>>       │                                           │
│  ├─────────────────────────┤ ├─────────────────────────┤                                           │
│  │ + totalItems: number    │ │ - keyword: string       │                                           │
│  │ + totalStock: number    │ │ - category: Category    │                                           │
│  │ + lowStockCount: number │ ├─────────────────────────┤                                           │
│  │ + totalValue: number    │ │ + setKeyword(k): void   │                                           │
│  ├─────────────────────────┤ │ + setCategory(c): void  │                                           │
│  │ + refresh(): void       │ │ + apply(items): Item[]  │                                           │
│  │ + renderStats(): JSX    │ │ + reset(): void         │                                           │
│  └─────────────────────────┘ └─────────────────────────┘                                           │
│                                                                                                     │
│  ┌─────────────────────────────────────────┐         ┌─────────────────────────────────────────┐   │
│  │         StockTransaction                │         │            Statistics                   │   │
│  │          <<interface>>                  │         │           <<interface>>                 │   │
│  ├─────────────────────────────────────────┤         ├─────────────────────────────────────────┤   │
│  │ + id: string                            │         │ + totalItemTypes: number                │   │
│  │ + itemId: string                        │         │ + totalStock: number                    │   │
│  │ + type: "IN" | "OUT"                    │         │ + lowStockCount: number                 │   │
│  │ + quantity: number                      │         │ + totalValue: number                    │   │
│  │ + notes: string                         │         │ + lastUpdated: Date                     │   │
│  │ + transactionDate: Date                 │         └─────────────────────────────────────────┘   │
│  │ + createdBy: string                     │                                                        │
│  ├─────────────────────────────────────────┤                                                        │
│  │ + record(): void                        │                                                        │
│  │ + getDetails(): object                  │                                                        │
│  └─────────────────────────────────────────┘                                                        │
│                       │                                                                             │
│                       │ references                                                                  │
│                       ▼                                                                             │
│               InventoryItem                                                                         │
│                                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘

RELASI ANTAR CLASS:
═══════════════════
InventoryItem ◄──── Category         : InventoryItem uses Category (enum)
InventoryItemImpl ──► InventoryItem  : InventoryItemImpl implements InventoryItem
InventoryManager ──► InventoryItem   : InventoryManager manages 1..* InventoryItem
Dashboard ──► InventoryManager       : Dashboard uses InventoryManager
SearchFilter ──► InventoryManager    : SearchFilter uses InventoryManager
StockTransaction ──► InventoryItem   : StockTransaction references InventoryItem
InventoryManager ──► Statistics      : InventoryManager returns Statistics
`}
                    </pre>
                  </div>
                </div>

                {/* Detail Kelas */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    📚 Penjelasan Detail Setiap Class
                  </h3>
                  
                  {[
                    {
                      name: "InventoryItem",
                      stereotype: "interface",
                      desc: "Interface yang mendefinisikan struktur data untuk satu barang inventaris. Menjadi kontrak yang harus diimplementasikan oleh class konkret.",
                      attributes: [
                        { vis: "+", name: "id", type: "string", desc: "Identifier unik barang (UUID format)" },
                        { vis: "+", name: "name", type: "string", desc: "Nama barang (contoh: 'Oli Mesin 1L')" },
                        { vis: "+", name: "category", type: "Category", desc: "Kategori barang dari enum Category" },
                        { vis: "+", name: "quantity", type: "number", desc: "Jumlah stok saat ini (integer >= 0)" },
                        { vis: "+", name: "minStock", type: "number", desc: "Batas minimum stok untuk warning" },
                        { vis: "+", name: "unit", type: "string", desc: "Satuan barang (pcs, liter, kg, box, dll)" },
                        { vis: "+", name: "price", type: "number", desc: "Harga per unit dalam Rupiah" },
                        { vis: "+", name: "createdAt", type: "Date", desc: "Timestamp saat barang ditambahkan" },
                        { vis: "+", name: "updatedAt", type: "Date", desc: "Timestamp terakhir diupdate" },
                      ],
                      methods: [
                        { vis: "+", name: "isLowStock()", return: "boolean", desc: "Return true jika quantity < minStock" },
                        { vis: "+", name: "getTotalValue()", return: "number", desc: "Menghitung quantity × price" },
                        { vis: "+", name: "updateQuantity(qty)", return: "void", desc: "Mengubah jumlah stok dan update timestamp" },
                      ]
                    },
                    {
                      name: "InventoryManager",
                      stereotype: "service",
                      desc: "Class utama yang bertanggung jawab mengelola seluruh operasi CRUD dan query pada inventaris. Berfungsi sebagai controller/service layer.",
                      attributes: [
                        { vis: "-", name: "items", type: "InventoryItem[]", desc: "Array berisi seluruh data barang" },
                        { vis: "-", name: "searchQuery", type: "string", desc: "Query pencarian aktif" },
                        { vis: "-", name: "selectedCategory", type: "Category | null", desc: "Kategori filter aktif" },
                      ],
                      methods: [
                        { vis: "+", name: "addItem(item)", return: "void", desc: "Menambahkan barang baru ke array" },
                        { vis: "+", name: "editItem(id, data)", return: "void", desc: "Mengupdate data barang berdasarkan ID" },
                        { vis: "+", name: "deleteItem(id)", return: "void", desc: "Menghapus barang berdasarkan ID" },
                        { vis: "+", name: "getItemById(id)", return: "Item | null", desc: "Mencari barang berdasarkan ID" },
                        { vis: "+", name: "searchItems(query)", return: "Item[]", desc: "Filter barang berdasarkan nama" },
                        { vis: "+", name: "filterByCategory(cat)", return: "Item[]", desc: "Filter berdasarkan kategori" },
                        { vis: "+", name: "getLowStockItems()", return: "Item[]", desc: "Ambil semua barang stok rendah" },
                        { vis: "+", name: "getTotalStockValue()", return: "number", desc: "Jumlahkan nilai semua stok" },
                        { vis: "+", name: "getStatistics()", return: "Statistics", desc: "Generate objek statistik" },
                      ]
                    },
                    {
                      name: "StockTransaction",
                      stereotype: "interface",
                      desc: "Interface untuk mencatat riwayat transaksi stok (barang masuk/keluar). Berguna untuk audit trail dan laporan.",
                      attributes: [
                        { vis: "+", name: "id", type: "string", desc: "ID unik transaksi" },
                        { vis: "+", name: "itemId", type: "string", desc: "Referensi ke InventoryItem.id" },
                        { vis: "+", name: "type", type: '"IN" | "OUT"', desc: "Jenis transaksi: masuk atau keluar" },
                        { vis: "+", name: "quantity", type: "number", desc: "Jumlah barang dalam transaksi" },
                        { vis: "+", name: "notes", type: "string", desc: "Catatan/keterangan transaksi" },
                        { vis: "+", name: "transactionDate", type: "Date", desc: "Tanggal transaksi" },
                        { vis: "+", name: "createdBy", type: "string", desc: "ID user yang melakukan transaksi" },
                      ],
                      methods: [
                        { vis: "+", name: "record()", return: "void", desc: "Menyimpan transaksi ke database" },
                        { vis: "+", name: "getDetails()", return: "object", desc: "Mendapatkan detail lengkap transaksi" },
                      ]
                    },
                    {
                      name: "Category",
                      stereotype: "enum",
                      desc: "Enum yang mendefinisikan kategori-kategori barang yang tersedia di bengkel. Membatasi nilai yang valid untuk field category.",
                      attributes: [
                        { vis: "+", name: "OLI_PELUMAS", type: "string", desc: "Kategori oli dan pelumas kendaraan" },
                        { vis: "+", name: "SPAREPART", type: "string", desc: "Kategori sparepart mesin" },
                        { vis: "+", name: "BAN_VELG", type: "string", desc: "Kategori ban dan velg" },
                        { vis: "+", name: "AKI_LISTRIK", type: "string", desc: "Kategori aki dan kelistrikan" },
                        { vis: "+", name: "BODY_AKSESORIS", type: "string", desc: "Kategori body dan aksesoris" },
                        { vis: "+", name: "PERKAKAS", type: "string", desc: "Kategori perkakas/tools" },
                      ],
                      methods: []
                    },
                  ].map((cls) => (
                    <Card key={cls.name} className="bg-muted/20 border-l-4 border-l-primary">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center gap-2">
                          <Badge variant="outline" className="font-mono text-primary">{cls.name}</Badge>
                          <Badge variant="secondary" className="text-xs">{"<<" + cls.stereotype + ">>"}</Badge>
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{cls.desc}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h5 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Attributes ({cls.attributes.length})
                          </h5>
                          <div className="overflow-x-auto">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="w-12">Vis</TableHead>
                                  <TableHead>Nama</TableHead>
                                  <TableHead>Tipe</TableHead>
                                  <TableHead>Deskripsi</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {cls.attributes.map((attr) => (
                                  <TableRow key={attr.name}>
                                    <TableCell className="font-mono text-center">{attr.vis}</TableCell>
                                    <TableCell className="font-mono text-xs">{attr.name}</TableCell>
                                    <TableCell><Badge variant="outline" className="text-xs">{attr.type}</Badge></TableCell>
                                    <TableCell className="text-xs text-muted-foreground">{attr.desc}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </div>
                        {cls.methods.length > 0 && (
                          <div>
                            <h5 className="text-sm font-semibold mb-2 flex items-center gap-2">
                              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                              Methods ({cls.methods.length})
                            </h5>
                            <div className="overflow-x-auto">
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead className="w-12">Vis</TableHead>
                                    <TableHead>Signature</TableHead>
                                    <TableHead>Return</TableHead>
                                    <TableHead>Deskripsi</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {cls.methods.map((method) => (
                                    <TableRow key={method.name}>
                                      <TableCell className="font-mono text-center">{method.vis}</TableCell>
                                      <TableCell className="font-mono text-xs">{method.name}</TableCell>
                                      <TableCell><Badge variant="secondary" className="text-xs">{method.return}</Badge></TableCell>
                                      <TableCell className="text-xs text-muted-foreground">{method.desc}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Hubungan Antar Kelas */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    🔗 Hubungan (Relationship) Antar Class
                  </h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Class Sumber</TableHead>
                        <TableHead>Tipe Relasi</TableHead>
                        <TableHead>Class Target</TableHead>
                        <TableHead>Multiplicity</TableHead>
                        <TableHead>Keterangan</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-mono">InventoryManager</TableCell>
                        <TableCell><Badge>Composition</Badge></TableCell>
                        <TableCell className="font-mono">InventoryItem</TableCell>
                        <TableCell>1 → 0..*</TableCell>
                        <TableCell>Manager memiliki dan mengelola banyak item. Item tidak bisa exist tanpa Manager.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">InventoryItem</TableCell>
                        <TableCell><Badge variant="outline">Association</Badge></TableCell>
                        <TableCell className="font-mono">Category</TableCell>
                        <TableCell>* → 1</TableCell>
                        <TableCell>Setiap item memiliki tepat satu kategori</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">StockTransaction</TableCell>
                        <TableCell><Badge variant="secondary">Aggregation</Badge></TableCell>
                        <TableCell className="font-mono">InventoryItem</TableCell>
                        <TableCell>* → 1</TableCell>
                        <TableCell>Transaksi mereferensikan item, tapi item bisa exist tanpa transaksi</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">Dashboard</TableCell>
                        <TableCell><Badge variant="outline">Dependency</Badge></TableCell>
                        <TableCell className="font-mono">InventoryManager</TableCell>
                        <TableCell>1 → 1</TableCell>
                        <TableCell>Dashboard bergantung pada Manager untuk mendapatkan data</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">SearchFilter</TableCell>
                        <TableCell><Badge variant="outline">Dependency</Badge></TableCell>
                        <TableCell className="font-mono">InventoryManager</TableCell>
                        <TableCell>1 → 1</TableCell>
                        <TableCell>SearchFilter memfilter data dari Manager</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ==================== DATABASE DESIGN ==================== */}
          <TabsContent value="database" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-6 w-6 text-primary" />
                  Desain Database (ERD)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Pengertian */}
                <div className="space-y-3 p-4 bg-muted/30 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    📖 Pengertian Entity Relationship Diagram (ERD)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Entity Relationship Diagram (ERD)</strong> adalah diagram yang menggambarkan 
                    <strong> model data</strong> dalam bentuk entitas (tabel) beserta atributnya, dan 
                    <strong> hubungan (relationship)</strong> antar entitas. ERD menjadi dasar untuk 
                    merancang struktur database relasional.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Komponen ERD:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li><strong>Entity:</strong> Objek/tabel yang menyimpan data</li>
                        <li><strong>Attribute:</strong> Kolom/field dalam tabel</li>
                        <li><strong>Primary Key (PK):</strong> Identifier unik setiap record</li>
                        <li><strong>Foreign Key (FK):</strong> Referensi ke tabel lain</li>
                        <li><strong>Relationship:</strong> Hubungan antar entitas</li>
                        <li><strong>Cardinality:</strong> Jumlah relasi (1:1, 1:N, M:N)</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Tipe Data yang Digunakan:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li><strong>UUID:</strong> Universally Unique Identifier</li>
                        <li><strong>VARCHAR(n):</strong> String dengan panjang maksimal n</li>
                        <li><strong>TEXT:</strong> String panjang tanpa batas</li>
                        <li><strong>INTEGER:</strong> Bilangan bulat</li>
                        <li><strong>DECIMAL(p,s):</strong> Angka desimal dengan presisi</li>
                        <li><strong>TIMESTAMP:</strong> Tanggal dan waktu</li>
                        <li><strong>BOOLEAN:</strong> True/False</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Visual Database Diagram */}
                <DatabaseDiagram />

                {/* ERD Diagram ASCII */}
                <div className="bg-secondary/30 rounded-lg p-6 border border-border mt-8">
                  <h4 className="font-semibold mb-4 text-center text-lg">📝 ERD Format ASCII (Alternatif)</h4>
                  <div className="bg-card rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-foreground whitespace-pre font-mono">
{`
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                                         │
│   ┌───────────────────────────────┐                    ┌───────────────────────────────┐               │
│   │          USERS                │                    │         CATEGORIES            │               │
│   ├───────────────────────────────┤                    ├───────────────────────────────┤               │
│   │ PK  id          UUID          │                    │ PK  id          UUID          │               │
│   │     email       VARCHAR(255)  │ ─┐                 │ UK  name        VARCHAR(100)  │               │
│   │ UK                            │  │                 │     description TEXT          │               │
│   │     name        VARCHAR(255)  │  │                 │     created_at  TIMESTAMP     │               │
│   │     role        VARCHAR(50)   │  │                 └──────────────┬────────────────┘               │
│   │     created_at  TIMESTAMP     │  │                                │                                │
│   │     last_login  TIMESTAMP     │  │                                │ 1                              │
│   └───────────────────────────────┘  │                                │                                │
│                                      │                                │ has many                       │
│                                      │                                │                                │
│                                      │ 1                              │ *                              │
│                                      │                                │                                │
│                                      │ creates                        ▼                                │
│                                      │                 ┌───────────────────────────────┐               │
│                                      │                 │       INVENTORY_ITEMS         │               │
│                                      │                 ├───────────────────────────────┤               │
│                                      │                 │ PK  id          UUID          │               │
│                                      │                 │     name        VARCHAR(255)  │               │
│                                      │                 │ FK  category_id UUID          │──────────────►│
│                                      │                 │     quantity    INTEGER       │               │
│                                      │                 │     min_stock   INTEGER       │               │
│                                      │                 │     unit        VARCHAR(50)   │               │
│                                      │                 │     price       DECIMAL(15,2) │               │
│                                      │                 │     created_at  TIMESTAMP     │               │
│                                      │                 │     updated_at  TIMESTAMP     │               │
│                                      │                 └──────────────┬────────────────┘               │
│                                      │                                │                                │
│                                      │                                │ 1                              │
│                                      │                                │                                │
│                                      │                                │ has many                       │
│                                      │                                │                                │
│                                      │                                │ *                              │
│                                      │                                │                                │
│                                      │                                ▼                                │
│                                      │                 ┌───────────────────────────────┐               │
│                                      │                 │     STOCK_TRANSACTIONS        │               │
│                                      │                 ├───────────────────────────────┤               │
│                                      │                 │ PK  id              UUID      │               │
│                                      │                 │ FK  item_id         UUID      │◄──────────────│
│                                      │                 │     type            VARCHAR   │               │
│                                      └────────────────►│ FK  created_by      UUID      │               │
│                                        *               │     quantity        INTEGER   │               │
│                                                        │     notes           TEXT      │               │
│                                                        │     transaction_date TIMESTAMP│               │
│                                                        └───────────────────────────────┘               │
│                                                                                                         │
│   RELASI:                                                                                               │
│   ════════                                                                                              │
│   • CATEGORIES ──(1:N)──► INVENTORY_ITEMS    : Satu kategori memiliki banyak barang                    │
│   • INVENTORY_ITEMS ──(1:N)──► STOCK_TRANSACTIONS : Satu barang memiliki banyak transaksi              │
│   • USERS ──(1:N)──► STOCK_TRANSACTIONS : Satu user dapat membuat banyak transaksi                     │
│                                                                                                         │
│   CONSTRAINT:                                                                                           │
│   ════════════                                                                                          │
│   • type CHECK (type IN ('IN', 'OUT'))                                                                  │
│   • quantity CHECK (quantity >= 0)                                                                      │
│   • price CHECK (price >= 0)                                                                            │
│   • ON DELETE CASCADE pada stock_transactions.item_id                                                   │
│                                                                                                         │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────┘
`}
                    </pre>
                  </div>
                </div>

                {/* Detail Tabel */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    📋 Detail Struktur Setiap Tabel
                  </h3>

                  {/* Tabel Categories */}
                  <Card className="bg-muted/20 border-l-4 border-l-blue-500">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        <Badge className="bg-blue-600">Tabel: categories</Badge>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Menyimpan daftar kategori barang. Tabel master untuk pengelompokan barang inventaris.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-32">Kolom</TableHead>
                            <TableHead className="w-36">Tipe Data</TableHead>
                            <TableHead className="w-40">Constraint</TableHead>
                            <TableHead>Keterangan</TableHead>
                            <TableHead className="w-24">Contoh</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-mono text-xs">id</TableCell>
                            <TableCell className="font-mono text-xs">UUID</TableCell>
                            <TableCell><Badge variant="destructive">PRIMARY KEY</Badge></TableCell>
                            <TableCell className="text-xs">Identifier unik kategori, auto-generated menggunakan gen_random_uuid()</TableCell>
                            <TableCell className="text-xs font-mono">a1b2c3d4-...</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">name</TableCell>
                            <TableCell className="font-mono text-xs">VARCHAR(100)</TableCell>
                            <TableCell>
                              <div className="flex gap-1 flex-wrap">
                                <Badge variant="outline">UNIQUE</Badge>
                                <Badge variant="outline">NOT NULL</Badge>
                              </div>
                            </TableCell>
                            <TableCell className="text-xs">Nama kategori, harus unik dalam sistem</TableCell>
                            <TableCell className="text-xs">"Oli & Pelumas"</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">description</TableCell>
                            <TableCell className="font-mono text-xs">TEXT</TableCell>
                            <TableCell><Badge variant="secondary">NULLABLE</Badge></TableCell>
                            <TableCell className="text-xs">Deskripsi lengkap tentang kategori (opsional)</TableCell>
                            <TableCell className="text-xs">"Semua jenis oli..."</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">created_at</TableCell>
                            <TableCell className="font-mono text-xs">TIMESTAMP</TableCell>
                            <TableCell><Badge variant="outline">DEFAULT NOW()</Badge></TableCell>
                            <TableCell className="text-xs">Waktu kategori dibuat, otomatis terisi saat insert</TableCell>
                            <TableCell className="text-xs">2024-01-15 10:30:00</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      <div className="mt-4 p-3 bg-blue-500/10 rounded-lg">
                        <p className="text-sm"><strong>Data Awal (Seed):</strong></p>
                        <ul className="text-xs text-muted-foreground mt-1 grid grid-cols-2 md:grid-cols-3 gap-1">
                          <li>• Oli & Pelumas</li>
                          <li>• Sparepart Mesin</li>
                          <li>• Ban & Velg</li>
                          <li>• Aki & Kelistrikan</li>
                          <li>• Body & Aksesoris</li>
                          <li>• Perkakas</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tabel Inventory Items */}
                  <Card className="bg-muted/20 border-l-4 border-l-green-500">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        <Badge className="bg-green-600">Tabel: inventory_items</Badge>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Tabel utama yang menyimpan semua data barang inventaris bengkel. Setiap record merepresentasikan satu jenis barang.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-32">Kolom</TableHead>
                            <TableHead className="w-36">Tipe Data</TableHead>
                            <TableHead className="w-44">Constraint</TableHead>
                            <TableHead>Keterangan</TableHead>
                            <TableHead className="w-28">Contoh</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-mono text-xs">id</TableCell>
                            <TableCell className="font-mono text-xs">UUID</TableCell>
                            <TableCell><Badge variant="destructive">PRIMARY KEY</Badge></TableCell>
                            <TableCell className="text-xs">Identifier unik barang</TableCell>
                            <TableCell className="text-xs font-mono">x1y2z3...</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">name</TableCell>
                            <TableCell className="font-mono text-xs">VARCHAR(255)</TableCell>
                            <TableCell><Badge variant="outline">NOT NULL</Badge></TableCell>
                            <TableCell className="text-xs">Nama lengkap barang</TableCell>
                            <TableCell className="text-xs">"Oli Mesin Honda 1L"</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">category_id</TableCell>
                            <TableCell className="font-mono text-xs">UUID</TableCell>
                            <TableCell>
                              <Badge className="bg-blue-600 text-xs">FK → categories.id</Badge>
                            </TableCell>
                            <TableCell className="text-xs">Referensi ke tabel categories</TableCell>
                            <TableCell className="text-xs font-mono">a1b2c3...</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">quantity</TableCell>
                            <TableCell className="font-mono text-xs">INTEGER</TableCell>
                            <TableCell>
                              <div className="flex gap-1 flex-wrap">
                                <Badge variant="outline">NOT NULL</Badge>
                                <Badge variant="outline">CHECK ≥ 0</Badge>
                              </div>
                            </TableCell>
                            <TableCell className="text-xs">Jumlah stok saat ini (tidak boleh negatif)</TableCell>
                            <TableCell className="text-xs">25</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">min_stock</TableCell>
                            <TableCell className="font-mono text-xs">INTEGER</TableCell>
                            <TableCell>
                              <div className="flex gap-1 flex-wrap">
                                <Badge variant="outline">NOT NULL</Badge>
                                <Badge variant="outline">DEFAULT 0</Badge>
                              </div>
                            </TableCell>
                            <TableCell className="text-xs">Batas minimum stok untuk trigger warning</TableCell>
                            <TableCell className="text-xs">10</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">unit</TableCell>
                            <TableCell className="font-mono text-xs">VARCHAR(50)</TableCell>
                            <TableCell><Badge variant="outline">NOT NULL</Badge></TableCell>
                            <TableCell className="text-xs">Satuan barang (pcs, liter, kg, box, set, dll)</TableCell>
                            <TableCell className="text-xs">"liter"</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">price</TableCell>
                            <TableCell className="font-mono text-xs">DECIMAL(15,2)</TableCell>
                            <TableCell>
                              <div className="flex gap-1 flex-wrap">
                                <Badge variant="outline">NOT NULL</Badge>
                                <Badge variant="outline">CHECK ≥ 0</Badge>
                              </div>
                            </TableCell>
                            <TableCell className="text-xs">Harga per unit dalam Rupiah (2 desimal)</TableCell>
                            <TableCell className="text-xs">75000.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">created_at</TableCell>
                            <TableCell className="font-mono text-xs">TIMESTAMP</TableCell>
                            <TableCell><Badge variant="outline">DEFAULT NOW()</Badge></TableCell>
                            <TableCell className="text-xs">Waktu barang pertama kali ditambahkan</TableCell>
                            <TableCell className="text-xs">2024-01-15</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">updated_at</TableCell>
                            <TableCell className="font-mono text-xs">TIMESTAMP</TableCell>
                            <TableCell><Badge variant="outline">DEFAULT NOW()</Badge></TableCell>
                            <TableCell className="text-xs">Waktu terakhir data diupdate (trigger on update)</TableCell>
                            <TableCell className="text-xs">2024-01-16</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>

                  {/* Tabel Stock Transactions */}
                  <Card className="bg-muted/20 border-l-4 border-l-amber-500">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        <Badge className="bg-amber-600">Tabel: stock_transactions</Badge>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Mencatat riwayat semua transaksi stok (barang masuk dan keluar). Berfungsi sebagai audit trail dan data untuk laporan.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-36">Kolom</TableHead>
                            <TableHead className="w-36">Tipe Data</TableHead>
                            <TableHead className="w-48">Constraint</TableHead>
                            <TableHead>Keterangan</TableHead>
                            <TableHead className="w-28">Contoh</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-mono text-xs">id</TableCell>
                            <TableCell className="font-mono text-xs">UUID</TableCell>
                            <TableCell><Badge variant="destructive">PRIMARY KEY</Badge></TableCell>
                            <TableCell className="text-xs">Identifier unik transaksi</TableCell>
                            <TableCell className="text-xs font-mono">t1r2a3...</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">item_id</TableCell>
                            <TableCell className="font-mono text-xs">UUID</TableCell>
                            <TableCell>
                              <div className="flex gap-1 flex-wrap">
                                <Badge className="bg-green-600 text-xs">FK → inventory_items.id</Badge>
                                <Badge variant="outline" className="text-xs">ON DELETE CASCADE</Badge>
                              </div>
                            </TableCell>
                            <TableCell className="text-xs">Referensi ke barang yang ditransaksikan</TableCell>
                            <TableCell className="text-xs font-mono">x1y2z3...</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">type</TableCell>
                            <TableCell className="font-mono text-xs">VARCHAR(10)</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs">CHECK IN ('IN','OUT')</Badge>
                            </TableCell>
                            <TableCell className="text-xs">'IN' = barang masuk, 'OUT' = barang keluar</TableCell>
                            <TableCell className="text-xs">"IN"</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">quantity</TableCell>
                            <TableCell className="font-mono text-xs">INTEGER</TableCell>
                            <TableCell>
                              <div className="flex gap-1 flex-wrap">
                                <Badge variant="outline">NOT NULL</Badge>
                                <Badge variant="outline">{"CHECK > 0"}</Badge>
                              </div>
                            </TableCell>
                            <TableCell className="text-xs">Jumlah barang dalam transaksi (harus positif)</TableCell>
                            <TableCell className="text-xs">5</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">notes</TableCell>
                            <TableCell className="font-mono text-xs">TEXT</TableCell>
                            <TableCell><Badge variant="secondary">NULLABLE</Badge></TableCell>
                            <TableCell className="text-xs">Catatan/keterangan transaksi (opsional)</TableCell>
                            <TableCell className="text-xs">"Pembelian dari supplier X"</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">transaction_date</TableCell>
                            <TableCell className="font-mono text-xs">TIMESTAMP</TableCell>
                            <TableCell><Badge variant="outline">DEFAULT NOW()</Badge></TableCell>
                            <TableCell className="text-xs">Tanggal dan waktu transaksi terjadi</TableCell>
                            <TableCell className="text-xs">2024-01-15 14:30</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">created_by</TableCell>
                            <TableCell className="font-mono text-xs">UUID</TableCell>
                            <TableCell>
                              <Badge className="bg-purple-600 text-xs">FK → users.id</Badge>
                            </TableCell>
                            <TableCell className="text-xs">Referensi ke user yang melakukan transaksi</TableCell>
                            <TableCell className="text-xs font-mono">u1s2e3...</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>

                  {/* Tabel Users */}
                  <Card className="bg-muted/20 border-l-4 border-l-purple-500">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        <Badge className="bg-purple-600">Tabel: users</Badge>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Menyimpan data pengguna sistem. Terintegrasi dengan sistem autentikasi untuk login dan manajemen akses.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-32">Kolom</TableHead>
                            <TableHead className="w-36">Tipe Data</TableHead>
                            <TableHead className="w-44">Constraint</TableHead>
                            <TableHead>Keterangan</TableHead>
                            <TableHead className="w-32">Contoh</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-mono text-xs">id</TableCell>
                            <TableCell className="font-mono text-xs">UUID</TableCell>
                            <TableCell><Badge variant="destructive">PRIMARY KEY</Badge></TableCell>
                            <TableCell className="text-xs">ID dari sistem autentikasi</TableCell>
                            <TableCell className="text-xs font-mono">u1s2e3...</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">email</TableCell>
                            <TableCell className="font-mono text-xs">VARCHAR(255)</TableCell>
                            <TableCell>
                              <div className="flex gap-1 flex-wrap">
                                <Badge variant="outline">UNIQUE</Badge>
                                <Badge variant="outline">NOT NULL</Badge>
                              </div>
                            </TableCell>
                            <TableCell className="text-xs">Email untuk login (harus unik)</TableCell>
                            <TableCell className="text-xs">admin@bengkel.com</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">name</TableCell>
                            <TableCell className="font-mono text-xs">VARCHAR(255)</TableCell>
                            <TableCell><Badge variant="outline">NOT NULL</Badge></TableCell>
                            <TableCell className="text-xs">Nama lengkap pengguna</TableCell>
                            <TableCell className="text-xs">"Budi Santoso"</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">role</TableCell>
                            <TableCell className="font-mono text-xs">VARCHAR(50)</TableCell>
                            <TableCell><Badge variant="outline">DEFAULT 'staff'</Badge></TableCell>
                            <TableCell className="text-xs">Role user: 'admin' (full access) atau 'staff' (limited)</TableCell>
                            <TableCell className="text-xs">"admin"</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">created_at</TableCell>
                            <TableCell className="font-mono text-xs">TIMESTAMP</TableCell>
                            <TableCell><Badge variant="outline">DEFAULT NOW()</Badge></TableCell>
                            <TableCell className="text-xs">Waktu user pertama kali registrasi</TableCell>
                            <TableCell className="text-xs">2024-01-01</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">last_login</TableCell>
                            <TableCell className="font-mono text-xs">TIMESTAMP</TableCell>
                            <TableCell><Badge variant="secondary">NULLABLE</Badge></TableCell>
                            <TableCell className="text-xs">Waktu login terakhir (untuk audit)</TableCell>
                            <TableCell className="text-xs">2024-01-15 08:00</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>

                {/* Relasi Antar Tabel */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    🔗 Relasi Antar Tabel
                  </h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tabel Induk (Parent)</TableHead>
                        <TableHead>Tabel Anak (Child)</TableHead>
                        <TableHead>Tipe Relasi</TableHead>
                        <TableHead>Foreign Key</TableHead>
                        <TableHead>Keterangan</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-mono">categories</TableCell>
                        <TableCell className="font-mono">inventory_items</TableCell>
                        <TableCell><Badge>One-to-Many (1:N)</Badge></TableCell>
                        <TableCell className="font-mono text-xs">category_id</TableCell>
                        <TableCell>1 kategori dapat memiliki banyak barang. Setiap barang hanya punya 1 kategori.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">inventory_items</TableCell>
                        <TableCell className="font-mono">stock_transactions</TableCell>
                        <TableCell><Badge>One-to-Many (1:N)</Badge></TableCell>
                        <TableCell className="font-mono text-xs">item_id</TableCell>
                        <TableCell>1 barang dapat memiliki banyak transaksi (masuk/keluar). ON DELETE CASCADE.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">users</TableCell>
                        <TableCell className="font-mono">stock_transactions</TableCell>
                        <TableCell><Badge>One-to-Many (1:N)</Badge></TableCell>
                        <TableCell className="font-mono text-xs">created_by</TableCell>
                        <TableCell>1 user dapat membuat banyak transaksi. Untuk audit trail siapa yang melakukan.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                {/* SQL Schema */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    💻 SQL Schema (DDL - Data Definition Language)
                  </h3>
                  <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-green-400 font-mono">
{`-- =====================================================
-- SCHEMA DATABASE SISTEM INVENTARIS BENGKEL WONOYOSO
-- =====================================================

-- 1. Tabel Categories (Master Kategori)
-- =====================================================
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Seed data kategori
INSERT INTO categories (name, description) VALUES
    ('Oli & Pelumas', 'Semua jenis oli mesin, oli gardan, dan pelumas'),
    ('Sparepart Mesin', 'Komponen mesin seperti busi, filter, gasket'),
    ('Ban & Velg', 'Ban motor/mobil dan velg'),
    ('Aki & Kelistrikan', 'Aki dan komponen kelistrikan'),
    ('Body & Aksesoris', 'Part body dan aksesoris kendaraan'),
    ('Perkakas', 'Tools dan peralatan bengkel');

-- 2. Tabel Inventory Items (Data Barang)
-- =====================================================
CREATE TABLE inventory_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    category_id UUID NOT NULL REFERENCES categories(id),
    quantity INTEGER NOT NULL DEFAULT 0 CHECK (quantity >= 0),
    min_stock INTEGER NOT NULL DEFAULT 0 CHECK (min_stock >= 0),
    unit VARCHAR(50) NOT NULL,
    price DECIMAL(15,2) NOT NULL DEFAULT 0 CHECK (price >= 0),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index untuk performa query
CREATE INDEX idx_items_category ON inventory_items(category_id);
CREATE INDEX idx_items_name ON inventory_items(name);
CREATE INDEX idx_items_low_stock ON inventory_items(quantity, min_stock);

-- Trigger untuk auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_items_updated_at
    BEFORE UPDATE ON inventory_items
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 3. Tabel Users (Data Pengguna)
-- =====================================================
CREATE TABLE users (
    id UUID PRIMARY KEY,  -- dari auth.users
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'staff' CHECK (role IN ('admin', 'staff')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_login TIMESTAMP WITH TIME ZONE
);

-- 4. Tabel Stock Transactions (Riwayat Transaksi)
-- =====================================================
CREATE TABLE stock_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    item_id UUID NOT NULL REFERENCES inventory_items(id) ON DELETE CASCADE,
    type VARCHAR(10) NOT NULL CHECK (type IN ('IN', 'OUT')),
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    notes TEXT,
    transaction_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by UUID REFERENCES users(id)
);

-- Index untuk performa query transaksi
CREATE INDEX idx_transactions_item ON stock_transactions(item_id);
CREATE INDEX idx_transactions_date ON stock_transactions(transaction_date DESC);
CREATE INDEX idx_transactions_type ON stock_transactions(type);

-- =====================================================
-- VIEWS UNTUK LAPORAN
-- =====================================================

-- View: Barang dengan stok rendah
CREATE VIEW v_low_stock_items AS
SELECT 
    i.id,
    i.name,
    c.name as category_name,
    i.quantity,
    i.min_stock,
    i.unit,
    i.price,
    (i.min_stock - i.quantity) as shortage
FROM inventory_items i
JOIN categories c ON i.category_id = c.id
WHERE i.quantity < i.min_stock
ORDER BY shortage DESC;

-- View: Ringkasan per kategori
CREATE VIEW v_category_summary AS
SELECT 
    c.name as category,
    COUNT(i.id) as total_items,
    SUM(i.quantity) as total_stock,
    SUM(i.quantity * i.price) as total_value
FROM categories c
LEFT JOIN inventory_items i ON c.id = i.category_id
GROUP BY c.id, c.name
ORDER BY total_value DESC;

-- View: Statistik Dashboard
CREATE VIEW v_dashboard_stats AS
SELECT 
    COUNT(DISTINCT id) as total_item_types,
    COALESCE(SUM(quantity), 0) as total_stock,
    COUNT(CASE WHEN quantity < min_stock THEN 1 END) as low_stock_count,
    COALESCE(SUM(quantity * price), 0) as total_value
FROM inventory_items;`}
                    </pre>
                  </div>
                </div>

                {/* Normalisasi */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    ✅ Normalisasi Database
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="bg-green-500/10 border-green-500/30">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          <h4 className="font-semibold">1NF (First Normal Form)</h4>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                          <li>Semua kolom memiliki nilai atomic (tidak ada array/list)</li>
                          <li>Setiap tabel memiliki primary key</li>
                          <li>Tidak ada repeating groups</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-green-500/10 border-green-500/30">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          <h4 className="font-semibold">2NF (Second Normal Form)</h4>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                          <li>Memenuhi 1NF</li>
                          <li>Semua non-key attribute bergantung penuh pada primary key</li>
                          <li>Tidak ada partial dependency</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-green-500/10 border-green-500/30">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          <h4 className="font-semibold">3NF (Third Normal Form)</h4>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                          <li>Memenuhi 2NF</li>
                          <li>Tidak ada transitive dependency</li>
                          <li>Kategori dipisah ke tabel tersendiri</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Documentation;
