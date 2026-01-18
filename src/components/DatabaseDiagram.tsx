import { Badge } from "@/components/ui/badge";
import { Database, Key, Link2 } from "lucide-react";

const DatabaseDiagram = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">📊 Entity Relationship Diagram (ERD)</h3>
        <p className="text-sm text-muted-foreground">Visualisasi Struktur Database Bengkel Wonoyoso</p>
        <p className="text-xs text-muted-foreground mt-2">💡 Untuk export: Gunakan Print Screen atau Screenshot tool browser Anda</p>
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
                <span className="font-mono text-xs">price</span>
                <Badge variant="secondary" className="text-xs ml-auto">DECIMAL</Badge>
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
                <Link2 className="h-3 w-3 text-purple-500" />
                <span className="font-mono text-xs">created_by</span>
                <Badge className="text-xs ml-auto bg-purple-600">FK</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Relationships */}
      <div className="bg-secondary/30 rounded-xl p-6 border border-border">
        <h4 className="font-semibold mb-4 text-center">🔗 Hubungan Antar Tabel</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card p-4 rounded-lg border border-border">
            <span className="font-semibold text-sm">categories → inventory_items</span>
            <p className="text-xs text-muted-foreground mt-1">1:N (One-to-Many)</p>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border">
            <span className="font-semibold text-sm">inventory_items → stock_transactions</span>
            <p className="text-xs text-muted-foreground mt-1">1:N (One-to-Many)</p>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border">
            <span className="font-semibold text-sm">users → stock_transactions</span>
            <p className="text-xs text-muted-foreground mt-1">1:N (One-to-Many)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseDiagram;
