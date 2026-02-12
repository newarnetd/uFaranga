import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { 
  Search, Download, Calendar, ArrowDownToLine, 
  ArrowUpFromLine, ArrowLeftRight, CreditCard 
} from 'lucide-react';

function Transactions() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState({ label: "Aujourd'hui", value: 'today' });

  const dateOptions = [
    { label: "Aujourd'hui", value: 'today' },
    { label: 'Hier', value: 'yesterday' },
    { label: '7 derniers jours', value: 'week' },
    { label: '30 derniers jours', value: 'month' }
  ];

  const [transactions] = useState([
    { id: 'TXN20260212001', type: 'depot', client: '+257 79 123 456', clientName: 'Marie Kalala', montant: 50000, commission: 500, statut: 'success', time: '14:35:22', ref: 'DEP-2026-001' },
    { id: 'TXN20260212002', type: 'retrait', client: '+257 79 234 567', clientName: 'Jean Mbala', montant: 30000, commission: 450, statut: 'success', time: '14:28:15', ref: 'RET-2026-002' },
    { id: 'TXN20260212003', type: 'transfert', client: '+257 79 345 678', clientName: 'Sophie Tshala', montant: 25000, commission: 250, statut: 'success', time: '14:15:08', ref: 'TRF-2026-003' },
    { id: 'TXN20260212004', type: 'depot', client: '+257 79 456 789', clientName: 'Paul Kabongo', montant: 100000, commission: 1000, statut: 'success', time: '13:52:41', ref: 'DEP-2026-004' },
    { id: 'TXN20260212005', type: 'paiement', client: '+257 79 567 890', clientName: 'Alice Mbuyi', montant: 15000, commission: 200, statut: 'pending', time: '13:45:33', ref: 'PAY-2026-005' },
    { id: 'TXN20260212006', type: 'retrait', client: '+257 79 678 901', clientName: 'David Kasongo', montant: 80000, commission: 800, statut: 'failed', time: '13:30:12', ref: 'RET-2026-006' },
    { id: 'TXN20260212007', type: 'depot', client: '+257 79 789 012', clientName: 'Grace Nkulu', montant: 45000, commission: 450, statut: 'success', time: '13:12:55', ref: 'DEP-2026-007' },
    { id: 'TXN20260212008', type: 'transfert', client: '+257 79 890 123', clientName: 'Eric Mwamba', montant: 60000, commission: 600, statut: 'success', time: '12:58:20', ref: 'TRF-2026-008' },
    { id: 'TXN20260212009', type: 'depot', client: '+257 79 901 234', clientName: 'Beatrice Ilunga', montant: 35000, commission: 350, statut: 'success', time: '12:45:10', ref: 'DEP-2026-009' },
    { id: 'TXN20260212010', type: 'paiement', client: '+257 79 012 345', clientName: 'Patrick Mulamba', montant: 22000, commission: 280, statut: 'success', time: '12:30:05', ref: 'PAY-2026-010' },
    { id: 'TXN20260212011', type: 'retrait', client: '+257 79 123 456', clientName: 'Christine Kabila', montant: 55000, commission: 550, statut: 'success', time: '12:15:33', ref: 'RET-2026-011' },
    { id: 'TXN20260212012', type: 'transfert', client: '+257 79 234 567', clientName: 'Joseph Tshisekedi', montant: 40000, commission: 400, statut: 'pending', time: '11:58:47', ref: 'TRF-2026-012' }
  ]);

  const getTypeInfo = (type) => {
    const types = {
      depot: { icon: ArrowDownToLine, label: 'Dépôt', severity: 'success' },
      retrait: { icon: ArrowUpFromLine, label: 'Retrait', severity: 'info' },
      transfert: { icon: ArrowLeftRight, label: 'Transfert', severity: 'warning' },
      paiement: { icon: CreditCard, label: 'Paiement', severity: 'help' }
    };
    return types[type] || { icon: CreditCard, label: 'Autre', severity: 'secondary' };
  };

  const filteredTransactions = transactions.filter(tx => {
    const matchesType = filter === 'all' || tx.type === filter;
    const matchesSearch = tx.client.includes(searchTerm) || 
                         tx.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tx.ref.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const totalAmount = filteredTransactions.reduce((sum, tx) => sum + tx.montant, 0);
  const totalCommission = filteredTransactions.reduce((sum, tx) => sum + tx.commission, 0);

  // Templates pour les colonnes
  const typeBodyTemplate = (rowData) => {
    const typeInfo = getTypeInfo(rowData.type);
    const IconComponent = typeInfo.icon;
    return (
      <div className="flex items-center gap-2">
        <div className="p-2 bg-primary/10 rounded-lg">
          <IconComponent className="w-4 h-4 text-primary" />
        </div>
        <Tag value={typeInfo.label} severity={typeInfo.severity} />
      </div>
    );
  };

  const clientBodyTemplate = (rowData) => {
    return (
      <div>
        <div className="font-semibold text-text">{rowData.clientName}</div>
        <div className="text-sm text-gray-400">{rowData.client}</div>
      </div>
    );
  };

  const montantBodyTemplate = (rowData) => {
    return (
      <div className="text-right">
        <div className="font-bold text-text">{rowData.montant.toLocaleString()} BIF</div>
      </div>
    );
  };

  const commissionBodyTemplate = (rowData) => {
    return (
      <div className="text-right">
        <div className="font-semibold text-secondary">+{rowData.commission.toLocaleString()} BIF</div>
      </div>
    );
  };

  const statutBodyTemplate = (rowData) => {
    const severityMap = {
      success: 'success',
      pending: 'warning',
      failed: 'danger'
    };
    const labelMap = {
      success: 'Succès',
      pending: 'En cours',
      failed: 'Échec'
    };
    return <Tag value={labelMap[rowData.statut]} severity={severityMap[rowData.statut]} />;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-anton uppercase text-text">Transactions</h1>
          <p className="text-gray-400 mt-1">Historique complet de vos transactions</p>
        </div>
        <Button 
          label="Exporter" 
          icon="pi pi-download" 
          className="bg-text text-background hover:bg-lightGray"
        />
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-darkGray bg-card rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-1">Total Transactions</p>
          <p className="text-2xl font-bold text-text">{filteredTransactions.length}</p>
        </div>
        <div className="border border-darkGray bg-card rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-1">Montant Total</p>
          <p className="text-2xl font-bold text-text">{totalAmount.toLocaleString()} BIF</p>
        </div>
        <div className="border border-darkGray bg-card rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-1">Commissions Totales</p>
          <p className="text-2xl font-bold text-secondary">{totalCommission.toLocaleString()} BIF</p>
        </div>
      </div>

      {/* Filters */}
      <div className="border border-darkGray bg-card rounded-lg p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <span className="p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputText
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher par téléphone, nom ou référence..."
                className="w-full bg-background border-darkGray text-text"
              />
            </span>
          </div>

          {/* Type Filter */}
          <div className="flex gap-2">
            <Button
              label="Tous"
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-text text-background' : 'bg-transparent border-darkGray text-gray-400'}
            />
            <Button
              icon={<ArrowDownToLine className="w-4 h-4" />}
              label="Dépôts"
              onClick={() => setFilter('depot')}
              className={filter === 'depot' ? 'bg-secondary text-white' : 'bg-transparent border-darkGray text-gray-400'}
            />
            <Button
              icon={<ArrowUpFromLine className="w-4 h-4" />}
              label="Retraits"
              onClick={() => setFilter('retrait')}
              className={filter === 'retrait' ? 'bg-primary text-white' : 'bg-transparent border-darkGray text-gray-400'}
            />
            <Button
              icon={<ArrowLeftRight className="w-4 h-4" />}
              label="Transferts"
              onClick={() => setFilter('transfert')}
              className={filter === 'transfert' ? 'bg-text text-background' : 'bg-transparent border-darkGray text-gray-400'}
            />
          </div>

          {/* Date Filter */}
          <Dropdown
            value={selectedDate}
            options={dateOptions}
            onChange={(e) => setSelectedDate(e.value)}
            optionLabel="label"
            className="bg-background border-darkGray text-text"
          />
        </div>
      </div>

      {/* DataTable */}
      <div className="border border-darkGray bg-card rounded-lg overflow-hidden">
        <DataTable
          value={filteredTransactions}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: '50rem' }}
          stripedRows
          rowHover
        >
          <Column field="type" header="Type" body={typeBodyTemplate} style={{ width: '15%' }} />
          <Column field="clientName" header="Client" body={clientBodyTemplate} style={{ width: '20%' }} />
          <Column field="ref" header="Référence" style={{ width: '15%' }} className="text-gray-400 font-mono text-sm" />
          <Column field="time" header="Heure" style={{ width: '10%' }} className="text-text" />
          <Column field="montant" header="Montant" body={montantBodyTemplate} style={{ width: '15%' }} />
          <Column field="commission" header="Commission" body={commissionBodyTemplate} style={{ width: '15%' }} />
          <Column field="statut" header="Statut" body={statutBodyTemplate} style={{ width: '10%' }} />
        </DataTable>
      </div>
    </div>
  );
}

export default Transactions;
