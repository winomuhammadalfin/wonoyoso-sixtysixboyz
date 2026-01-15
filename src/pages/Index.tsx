import { useState } from 'react';
import { Package, AlertTriangle, TrendingUp, Boxes, Plus } from 'lucide-react';
import Header from '@/components/Header';
import StatCard from '@/components/StatCard';
import InventoryTable from '@/components/InventoryTable';
import AddItemDialog from '@/components/AddItemDialog';
import { Button } from '@/components/ui/button';
import { sampleInventory } from '@/data/sampleInventory';
import { InventoryItem } from '@/types/inventory';
import { toast } from 'sonner';

const Index = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>(sampleInventory);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);

  const totalItems = inventory.length;
  const totalStock = inventory.reduce((sum, item) => sum + item.quantity, 0);
  const lowStockItems = inventory.filter((item) => item.quantity <= item.minStock).length;
  const totalValue = inventory.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleAddItem = (itemData: Omit<InventoryItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (editingItem) {
      setInventory((prev) =>
        prev.map((item) =>
          item.id === editingItem.id
            ? { ...item, ...itemData, updatedAt: new Date() }
            : item
        )
      );
      toast.success('Barang berhasil diperbarui!');
    } else {
      const newItem: InventoryItem = {
        ...itemData,
        id: Date.now().toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setInventory((prev) => [...prev, newItem]);
      toast.success('Barang berhasil ditambahkan!');
    }
    setEditingItem(null);
  };

  const handleEdit = (item: InventoryItem) => {
    setEditingItem(item);
    setDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setInventory((prev) => prev.filter((item) => item.id !== id));
    toast.success('Barang berhasil dihapus!');
  };

  const handleOpenDialog = () => {
    setEditingItem(null);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Total Jenis Barang"
            value={totalItems}
            icon={Package}
          />
          <StatCard
            title="Total Stok"
            value={totalStock}
            icon={Boxes}
            variant="success"
          />
          <StatCard
            title="Stok Rendah"
            value={lowStockItems}
            icon={AlertTriangle}
            variant="warning"
          />
          <StatCard
            title="Total Nilai Stok"
            value={formatCurrency(totalValue)}
            icon={TrendingUp}
          />
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Daftar Persediaan</h2>
            <p className="text-muted-foreground">Kelola stok barang bengkel Anda</p>
          </div>
          <Button
            onClick={handleOpenDialog}
            className="gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-all"
          >
            <Plus className="h-4 w-4 mr-2" />
            Tambah Barang
          </Button>
        </div>

        {/* Inventory Table */}
        <InventoryTable
          items={inventory}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Add/Edit Dialog */}
        <AddItemDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          onSave={handleAddItem}
          editItem={editingItem}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2024 Bengkel Wonoyoso. Sistem Manajemen Persediaan.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
