import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Key, Link2, Download } from "lucide-react";
import { toast } from "sonner";

const DatabaseDiagram = () => {

  const downloadAsPNG = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 1200;
    canvas.height = 900;

    // Background
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('📊 Entity Relationship Diagram (ERD)', canvas.width / 2, 50);
    ctx.font = '16px Arial';
    ctx.fillStyle = '#a0a0a0';
    ctx.fillText('Sistem Inventaris Bengkel Wonoyoso', canvas.width / 2, 80);

    // Draw tables
    const drawTable = (x: number, y: number, title: string, color: string, columns: string[]) => {
      const width = 250;
      const headerHeight = 40;
      const rowHeight = 28;
      const height = headerHeight + (columns.length * rowHeight) + 10;

      // Shadow
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      ctx.fillRect(x + 4, y + 4, width, height);

      // Table body
      ctx.fillStyle = '#2d2d44';
      ctx.fillRect(x, y, width, height);

      // Header
      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, headerHeight);

      // Header text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'left';
      ctx.fillText('🗃️ ' + title, x + 15, y + 26);

      // Columns
      ctx.font = '13px Courier New';
      columns.forEach((col, i) => {
        const colY = y + headerHeight + 20 + (i * rowHeight);
        
        if (col.includes('PK')) {
          ctx.fillStyle = '#ffd700';
          ctx.fillText('🔑', x + 10, colY);
          ctx.fillStyle = '#ffffff';
          ctx.fillText(col.replace(' PK', ''), x + 35, colY);
          ctx.fillStyle = '#ffd700';
          ctx.fillText('PK', x + width - 35, colY);
        } else if (col.includes('FK')) {
          ctx.fillStyle = '#4da6ff';
          ctx.fillText('🔗', x + 10, colY);
          ctx.fillStyle = '#ffffff';
          ctx.fillText(col.replace(' FK', ''), x + 35, colY);
          ctx.fillStyle = '#4da6ff';
          ctx.fillText('FK', x + width - 35, colY);
        } else {
          ctx.fillStyle = '#a0a0a0';
          ctx.fillText('   ' + col, x + 10, colY);
        }
      });

      // Border
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);
    };

    // Draw all tables
    drawTable(50, 130, 'users', '#9333ea', [
      'id PK',
      'email',
      'name', 
      'role',
      'created_at'
    ]);

    drawTable(350, 130, 'categories', '#2563eb', [
      'id PK',
      'name',
      'description',
      'created_at'
    ]);

    drawTable(650, 130, 'inventory_items', '#16a34a', [
      'id PK',
      'name',
      'category_id FK',
      'quantity',
      'min_stock',
      'unit',
      'price',
      'created_at',
      'updated_at'
    ]);

    drawTable(950, 130, 'stock_transactions', '#d97706', [
      'id PK',
      'item_id FK',
      'type',
      'quantity',
      'notes',
      'transaction_date',
      'created_by FK'
    ]);

    // Draw relationships
    ctx.strokeStyle = '#4da6ff';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);

    // categories -> inventory_items
    ctx.beginPath();
    ctx.moveTo(475, 280);
    ctx.lineTo(650, 210);
    ctx.stroke();

    // inventory_items -> stock_transactions
    ctx.beginPath();
    ctx.moveTo(900, 200);
    ctx.lineTo(950, 200);
    ctx.stroke();

    // users -> stock_transactions
    ctx.strokeStyle = '#9333ea';
    ctx.beginPath();
    ctx.moveTo(175, 320);
    ctx.lineTo(175, 700);
    ctx.lineTo(1075, 700);
    ctx.lineTo(1075, 380);
    ctx.stroke();

    ctx.setLineDash([]);

    // Legend
    ctx.fillStyle = '#2d2d44';
    ctx.fillRect(50, 750, 400, 120);
    ctx.strokeStyle = '#4a4a6a';
    ctx.strokeRect(50, 750, 400, 120);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('📌 Legenda', 70, 780);

    ctx.font = '14px Arial';
    ctx.fillStyle = '#ffd700';
    ctx.fillText('🔑 Primary Key (PK)', 70, 810);
    ctx.fillStyle = '#4da6ff';
    ctx.fillText('🔗 Foreign Key (FK)', 70, 835);
    ctx.fillStyle = '#a0a0a0';
    ctx.fillText('--- Relasi 1:N (One-to-Many)', 70, 860);

    // Relationships info
    ctx.fillStyle = '#2d2d44';
    ctx.fillRect(500, 750, 650, 120);
    ctx.strokeStyle = '#4a4a6a';
    ctx.strokeRect(500, 750, 650, 120);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('🔗 Hubungan Antar Tabel', 520, 780);

    ctx.font = '13px Arial';
    ctx.fillStyle = '#4da6ff';
    ctx.fillText('• categories (1) → inventory_items (N)', 520, 810);
    ctx.fillStyle = '#16a34a';
    ctx.fillText('• inventory_items (1) → stock_transactions (N)', 520, 835);
    ctx.fillStyle = '#9333ea';
    ctx.fillText('• users (1) → stock_transactions (N)', 520, 860);

    // Download
    const link = document.createElement('a');
    link.download = 'database-erd-bengkel-wonoyoso.png';
    link.href = canvas.toDataURL('image/png');
    link.click();

    toast.success('Diagram database berhasil di-download sebagai PNG!');
  };

  return (
    <div className="space-y-8">
      {/* Export Button */}
      <div className="flex justify-center mb-6">
        <Button 
          onClick={downloadAsPNG}
          className="bg-green-600 hover:bg-green-700 text-lg px-6 py-3"
          size="lg"
        >
          <Download className="h-5 w-5 mr-2" />
          Download Diagram PNG
        </Button>
      </div>

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
    </div>
  );
};

export default DatabaseDiagram;
