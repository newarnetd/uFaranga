import { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { InputSwitch } from 'primereact/inputswitch';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import { Avatar } from 'primereact/avatar';
import { Dialog } from 'primereact/dialog';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import {
  Settings, User, Shield, Lock, Bell, MapPin, Activity,
  Smartphone, Mail, Phone, Key, Eye, EyeOff, Edit,
  Save, X, CheckCircle, AlertTriangle, Monitor, Tablet,
  Clock, LogOut, RefreshCw, Camera, Upload, Info
} from 'lucide-react';

function Parametres() {
  const [editingProfile, setEditingProfile] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);
  const [editingPIN, setEditingPIN] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [notificationPrefs, setNotificationPrefs] = useState({
    floatCritique: true,
    transactionEchouee: true,
    commissionValidee: true,
    maintenance: false
  });
  const dt = useRef(null);
  const toast = useRef(null);

  // Confirmation pour modifier le profil
  const confirmSaveProfile = () => {
    confirmDialog({
      message: 'Êtes-vous sûr de vouloir enregistrer ces modifications ? Elles seront enregistrées dans l\'audit log.',
      header: 'Confirmation de modification',
      icon: <AlertTriangle size={24} className="text-secondary" />,
      acceptLabel: 'Oui, enregistrer',
      rejectLabel: 'Annuler',
      accept: () => {
        setEditingProfile(false);
        toast.current.show({
          severity: 'success',
          summary: 'Profil mis à jour',
          detail: 'Vos informations ont été enregistrées avec succès',
          life: 3000
        });
      }
    });
  };

  // Confirmation pour modifier le mot de passe
  const confirmSavePassword = () => {
    confirmDialog({
      message: 'Vous allez modifier votre mot de passe. Vous recevrez un SMS de confirmation.',
      header: 'Modification du mot de passe',
      icon: <Lock size={24} className="text-red-500" />,
      acceptLabel: 'Confirmer',
      rejectLabel: 'Annuler',
      acceptClassName: 'p-button-danger',
      accept: () => {
        setEditingPassword(false);
        toast.current.show({
          severity: 'success',
          summary: 'Mot de passe modifié',
          detail: 'Un SMS de confirmation a été envoyé',
          life: 3000
        });
      }
    });
  };

  // Confirmation pour modifier le PIN
  const confirmSavePIN = () => {
    confirmDialog({
      message: 'Vous allez modifier votre code PIN. Cette action est irréversible.',
      header: 'Modification du PIN',
      icon: <Key size={24} className="text-secondary" />,
      acceptLabel: 'Confirmer',
      rejectLabel: 'Annuler',
      acceptClassName: 'p-button-warning',
      accept: () => {
        setEditingPIN(false);
        toast.current.show({
          severity: 'success',
          summary: 'PIN modifié',
          detail: 'Votre nouveau code PIN est actif',
          life: 3000
        });
      }
    });
  };

  // Confirmation pour déconnecter tous les appareils
  const confirmLogoutAll = () => {
    confirmDialog({
      message: 'Vous allez déconnecter tous les appareils. Vous devrez vous reconnecter sur chaque appareil.',
      header: 'Déconnexion de tous les appareils',
      icon: <LogOut size={24} className="text-red-500" />,
      acceptLabel: 'Oui, déconnecter',
      rejectLabel: 'Annuler',
      acceptClassName: 'p-button-danger',
      accept: () => {
        toast.current.show({
          severity: 'info',
          summary: 'Appareils déconnectés',
          detail: 'Tous les appareils ont été déconnectés',
          life: 3000
        });
      }
    });
  };

  // Confirmation pour activer/désactiver 2FA
  const confirm2FAToggle = (value) => {
    if (value) {
      confirmDialog({
        message: 'Vous allez activer l\'authentification à 2 facteurs. Cela renforcera la sécurité de votre compte.',
        header: 'Activer 2FA',
        icon: <Shield size={24} className="text-green-500" />,
        acceptLabel: 'Activer',
        rejectLabel: 'Annuler',
        acceptClassName: 'p-button-success',
        accept: () => {
          setTwoFactorEnabled(true);
          toast.current.show({
            severity: 'success',
            summary: '2FA activé',
            detail: 'Authentification à 2 facteurs activée avec succès',
            life: 3000
          });
        }
      });
    } else {
      confirmDialog({
        message: 'Attention ! Désactiver le 2FA réduira la sécurité de votre compte. Êtes-vous sûr ?',
        header: 'Désactiver 2FA',
        icon: <AlertTriangle size={24} className="text-red-500" />,
        acceptLabel: 'Oui, désactiver',
        rejectLabel: 'Annuler',
        acceptClassName: 'p-button-danger',
        accept: () => {
          setTwoFactorEnabled(false);
          toast.current.show({
            severity: 'warn',
            summary: '2FA désactivé',
            detail: 'Authentification à 2 facteurs désactivée',
            life: 3000
          });
        }
      });
    }
  };

  // DONNÉES - Profil Agent
  const agentProfile = {
    id: 'AGT-2024-001',
    nom: 'Jean Mukendi',
    telephone: '+257 79 123 456',
    email: 'jean.mukendi@ufaranga.bi',
    avatar: null,
    pointVente: 'Point de Vente Bujumbura Centre',
    adressePointVente: 'Avenue de la Liberté, Bujumbura',
    responsable: 'Marie Superviseur',
    dateInscription: '2023-06-15',
    statut: 'Actif'
  };

  // DONNÉES - Historique connexions
  const connexions = [
    {
      id: 1,
      date: '2024-02-12 14:30:22',
      appareil: 'Chrome - Windows',
      ip: '197.243.12.45',
      localisation: 'Bujumbura, Burundi',
      statut: 'active',
      icon: Monitor
    },
    {
      id: 2,
      date: '2024-02-12 08:15:10',
      appareil: 'Mobile App - Android',
      ip: '197.243.12.46',
      localisation: 'Bujumbura, Burundi',
      statut: 'active',
      icon: Smartphone
    },
    {
      id: 3,
      date: '2024-02-11 16:45:30',
      appareil: 'Safari - iPad',
      ip: '197.243.12.47',
      localisation: 'Bujumbura, Burundi',
      statut: 'expired',
      icon: Tablet
    }
  ];

  // DONNÉES - Alertes sécurité
  const alertesSecurite = [
    {
      id: 1,
      date: '2024-02-12 09:30:15',
      type: 'PIN incorrect',
      description: '3 tentatives PIN incorrectes',
      severite: 'warning'
    },
    {
      id: 2,
      date: '2024-02-10 14:20:00',
      type: 'Mot de passe modifié',
      description: 'Mot de passe changé avec succès',
      severite: 'success'
    },
    {
      id: 3,
      date: '2024-02-08 11:15:45',
      type: '2FA activé',
      description: 'Authentification à 2 facteurs activée',
      severite: 'success'
    }
  ];

  const methodesNotification = [
    { label: 'In-app uniquement', value: 'inapp' },
    { label: 'In-app + SMS', value: 'inapp_sms' },
    { label: 'In-app + Email', value: 'inapp_email' },
    { label: 'Tous les canaux', value: 'all' }
  ];

  const methodes2FA = [
    { label: 'SMS', value: 'sms' },
    { label: 'Email', value: 'email' },
    { label: 'App Authenticator', value: 'app' }
  ];


  // Templates
  const appareilTemplate = (rowData) => {
    const Icon = rowData.icon;
    return (
      <div className="flex items-center gap-2">
        <Icon size={18} className="text-primary" />
        <span className="text-text">{rowData.appareil}</span>
      </div>
    );
  };

  const statutConnexionTemplate = (rowData) => {
    if (rowData.statut === 'active') {
      return (
        <Tag value="Active" severity="success" icon={<CheckCircle size={12} />} />
      );
    }
    return <Tag value="Expirée" severity="secondary" />;
  };

  const actionConnexionTemplate = (rowData) => {
    if (rowData.statut === 'active') {
      return (
        <Button 
          icon={<LogOut size={16} />} 
          label="Déconnecter"
          size="small"
          className="bg-text text-background hover:bg-lightGray transition-colors"
          onClick={() => {
            confirmDialog({
              message: `Voulez-vous déconnecter cet appareil (${rowData.appareil}) ?`,
              header: 'Déconnexion appareil',
              icon: <LogOut size={24} className="text-red-500" />,
              acceptLabel: 'Oui, déconnecter',
              rejectLabel: 'Annuler',
              acceptClassName: 'p-button-danger',
              accept: () => {
                toast.current.show({
                  severity: 'info',
                  summary: 'Appareil déconnecté',
                  detail: `${rowData.appareil} a été déconnecté`,
                  life: 3000
                });
              }
            });
          }}
        />
      );
    }
    return null;
  };

  const severiteTemplate = (rowData) => {
    const config = {
      success: { severity: 'success', icon: CheckCircle },
      warning: { severity: 'warning', icon: AlertTriangle },
      danger: { severity: 'danger', icon: AlertTriangle }
    };
    const { severity, icon: Icon } = config[rowData.severite];
    return (
      <Tag 
        value={
          <span className="flex items-center gap-1">
            <Icon size={12} />
            {rowData.type}
          </span>
        }
        severity={severity}
      />
    );
  };

  return (
    <div className="p-4 md:p-6 space-y-6 w-full max-w-full overflow-x-hidden">
      <Toast ref={toast} />
      <ConfirmDialog />
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-anton uppercase text-text truncate">
            Paramètres du Compte
          </h1>
          <p className="text-gray-400 mt-1 text-sm md:text-base">
            Gérez votre profil, sécurité et préférences
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button className="p-2 hover:bg-card rounded-lg transition-colors" title="Rafraîchir">
            <RefreshCw className="w-5 h-5 text-gray-400 hover:text-text" />
          </button>
        </div>
      </div>

      {/* 🟦 1️⃣ PROFIL PERSONNEL */}
      <div className="border border-darkGray bg-card rounded-lg p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <User size={28} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-anton uppercase text-text">Profil Personnel</h2>
              <p className="text-sm text-gray-400 mt-1">Vos informations personnelles</p>
            </div>
          </div>
          {!editingProfile && (
            <Button 
              icon={<Edit size={16} />}
              label="Modifier"
              className="bg-text text-background hover:bg-lightGray transition-colors"
              onClick={() => setEditingProfile(true)}
            />
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Avatar - Colonne 1 */}
          <div className="flex flex-col items-center p-6 border border-darkGray bg-background rounded-lg">
            <Avatar 
              label={agentProfile.nom.split(' ').map(n => n[0]).join('')}
              size="xlarge"
              shape="circle"
              className="mb-4"
              style={{ width: '120px', height: '120px', fontSize: '2rem', backgroundColor: '#007BFF' }}
            />
            <h3 className="font-bold text-text text-center mb-1">{agentProfile.nom}</h3>
            <p className="text-xs text-gray-400 text-center mb-4">{agentProfile.id}</p>
            <Button 
              icon={<Camera size={16} />}
              label="Changer photo"
              size="small"
              className="w-full bg-text text-background hover:bg-lightGray transition-colors"
            />
          </div>

          {/* Informations - Colonnes 2-4 */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nom complet */}
            <div className="p-4 border border-darkGray bg-background rounded-lg">
              <label className="flex items-center gap-2 text-xs text-gray-400 uppercase font-semibold mb-2">
                <User size={14} />
                Nom complet
              </label>
              {editingProfile ? (
                <InputText 
                  value={agentProfile.nom}
                  className="w-full"
                />
              ) : (
                <p className="text-text font-bold text-lg">{agentProfile.nom}</p>
              )}
            </div>

            {/* Téléphone */}
            <div className="p-4 border border-darkGray bg-background rounded-lg">
              <label className="flex items-center gap-2 text-xs text-gray-400 uppercase font-semibold mb-2">
                <Phone size={14} />
                Téléphone
              </label>
              {editingProfile ? (
                <InputText 
                  value={agentProfile.telephone}
                  className="w-full"
                />
              ) : (
                <p className="text-text font-bold text-lg">{agentProfile.telephone}</p>
              )}
            </div>

            {/* Email */}
            <div className="p-4 border border-darkGray bg-background rounded-lg">
              <label className="flex items-center gap-2 text-xs text-gray-400 uppercase font-semibold mb-2">
                <Mail size={14} />
                Email
              </label>
              {editingProfile ? (
                <InputText 
                  value={agentProfile.email}
                  className="w-full"
                />
              ) : (
                <p className="text-text font-bold text-lg break-all">{agentProfile.email}</p>
              )}
            </div>

            {/* ID Agent */}
            <div className="p-4 border border-darkGray bg-background rounded-lg">
              <label className="flex items-center gap-2 text-xs text-gray-400 uppercase font-semibold mb-2">
                <Shield size={14} />
                ID Agent
              </label>
              <p className="text-text font-mono font-bold text-lg">{agentProfile.id}</p>
              <span className="text-xs text-secondary">Lecture seule</span>
            </div>

            {/* Point de Vente */}
            <div className="p-4 border border-darkGray bg-background rounded-lg md:col-span-2">
              <label className="flex items-center gap-2 text-xs text-gray-400 uppercase font-semibold mb-2">
                <MapPin size={14} />
                Point de Vente
              </label>
              <p className="text-text font-bold text-lg mb-1">{agentProfile.pointVente}</p>
              <p className="text-sm text-gray-400">{agentProfile.adressePointVente}</p>
              <span className="text-xs text-secondary">Lecture seule</span>
            </div>

            {editingProfile && (
              <div className="md:col-span-2 flex gap-2 pt-2">
                <Button 
                  icon={<Save size={16} />}
                  label="Enregistrer les modifications"
                  className="bg-text text-background hover:bg-lightGray transition-colors"
                  onClick={confirmSaveProfile}
                />
                <Button 
                  icon={<X size={16} />}
                  label="Annuler"
                  className="bg-text text-background hover:bg-lightGray transition-colors"
                  onClick={() => setEditingProfile(false)}
                />
              </div>
            )}
          </div>
        </div>
      </div>


      {/* 🟦 2️⃣ SÉCURITÉ */}
      <div className="border border-darkGray bg-card rounded-lg p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-red-500/10 rounded-lg">
            <Shield size={28} className="text-red-500" />
          </div>
          <div>
            <h2 className="text-xl font-anton uppercase text-text">Sécurité</h2>
            <p className="text-sm text-gray-400 mt-1">Protégez votre compte avec des mesures de sécurité avancées</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Mot de passe */}
          <div className="border border-darkGray bg-background rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Lock size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-text">Mot de passe</h3>
                <p className="text-xs text-gray-400">Dernière modification: 10 fév 2024</p>
              </div>
            </div>

            {!editingPassword ? (
              <div className="space-y-4">
                <div className="p-3 bg-darkGray rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Sécurité actuelle</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-500 font-semibold">Fort</span>
                  </div>
                </div>
                <Button 
                  label="Modifier le mot de passe"
                  icon={<Edit size={16} />}
                  className="w-full bg-text text-background hover:bg-lightGray transition-colors"
                  onClick={() => setEditingPassword(true)}
                />
              </div>
            ) : (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-400 uppercase font-semibold mb-2">
                    Mot de passe actuel
                  </label>
                  <Password 
                    placeholder="••••••••"
                    toggleMask
                    className="w-full"
                    feedback={false}
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase font-semibold mb-2">
                    Nouveau mot de passe
                  </label>
                  <Password 
                    placeholder="••••••••"
                    toggleMask
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase font-semibold mb-2">
                    Confirmer
                  </label>
                  <Password 
                    placeholder="••••••••"
                    toggleMask
                    className="w-full"
                    feedback={false}
                  />
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <Button 
                    icon={<Save size={16} />}
                    label="Enregistrer"
                    size="small"
                    className="w-full bg-text text-background hover:bg-lightGray transition-colors"
                    onClick={confirmSavePassword}
                  />
                  <Button 
                    icon={<X size={16} />}
                    label="Annuler"
                    size="small"
                    className="w-full bg-text text-background hover:bg-lightGray transition-colors"
                    onClick={() => setEditingPassword(false)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* PIN Agent */}
          <div className="border border-darkGray bg-background rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Key size={24} className="text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-text">Code PIN</h3>
                <p className="text-xs text-gray-400">4 chiffres pour transactions</p>
              </div>
            </div>

            {!editingPIN ? (
              <div className="space-y-4">
                <div className="p-3 bg-darkGray rounded-lg text-center">
                  <p className="text-3xl font-mono text-text tracking-widest">••••</p>
                  <p className="text-xs text-gray-400 mt-2">PIN configuré</p>
                </div>
                <Button 
                  label="Modifier le PIN"
                  icon={<Edit size={16} />}
                  className="w-full bg-text text-background hover:bg-lightGray transition-colors"
                  onClick={() => setEditingPIN(true)}
                />
              </div>
            ) : (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-400 uppercase font-semibold mb-2">
                    PIN actuel
                  </label>
                  <InputText 
                    type="password"
                    maxLength={4}
                    placeholder="••••"
                    className="w-full text-center text-2xl tracking-widest"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase font-semibold mb-2">
                    Nouveau PIN
                  </label>
                  <InputText 
                    type="password"
                    maxLength={4}
                    placeholder="••••"
                    className="w-full text-center text-2xl tracking-widest"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase font-semibold mb-2">
                    Confirmer
                  </label>
                  <InputText 
                    type="password"
                    maxLength={4}
                    placeholder="••••"
                    className="w-full text-center text-2xl tracking-widest"
                  />
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <Button 
                    icon={<Save size={16} />}
                    label="Enregistrer"
                    size="small"
                    className="w-full bg-text text-background hover:bg-lightGray transition-colors"
                    onClick={confirmSavePIN}
                  />
                  <Button 
                    icon={<X size={16} />}
                    label="Annuler"
                    size="small"
                    className="w-full bg-text text-background hover:bg-lightGray transition-colors"
                    onClick={() => setEditingPIN(false)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* 2FA */}
          <div className="border border-darkGray bg-background rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Shield size={24} className="text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-text">2FA</h3>
                <p className="text-xs text-gray-400">Authentification double</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-darkGray rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">Statut</span>
                  <InputSwitch 
                    checked={twoFactorEnabled}
                    onChange={(e) => confirm2FAToggle(e.value)}
                  />
                </div>
                {twoFactorEnabled && (
                  <Tag value="Activé" severity="success" icon={<CheckCircle size={12} />} className="w-full justify-center" />
                )}
              </div>

              {twoFactorEnabled && (
                <div>
                  <label className="block text-xs text-gray-400 uppercase font-semibold mb-2">
                    Méthode 2FA
                  </label>
                  <Dropdown
                    options={methodes2FA}
                    placeholder="Choisir"
                    className="w-full"
                  />
                </div>
              )}

              <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                <p className="text-xs text-gray-400 text-center">
                  <CheckCircle size={14} className="inline mr-1" />
                  Recommandé pour la sécurité
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🟦 3️⃣ PRÉFÉRENCES NOTIFICATIONS */}
      <div className="border border-darkGray bg-card rounded-lg p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-secondary/10 rounded-lg">
            <Bell size={28} className="text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-anton uppercase text-text">Préférences Notifications</h2>
            <p className="text-sm text-gray-400 mt-1">Choisissez comment vous souhaitez être notifié</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Types de notifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-darkGray bg-background rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertTriangle size={18} className="text-red-500" />
                  <div>
                    <h4 className="font-semibold text-text">Float critique</h4>
                    <p className="text-xs text-gray-400">Alertes de float faible</p>
                  </div>
                </div>
                <InputSwitch 
                  checked={notificationPrefs.floatCritique}
                  onChange={(e) => setNotificationPrefs({...notificationPrefs, floatCritique: e.value})}
                />
              </div>
            </div>

            <div className="p-4 border border-darkGray bg-background rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <X size={18} className="text-red-500" />
                  <div>
                    <h4 className="font-semibold text-text">Transaction échouée</h4>
                    <p className="text-xs text-gray-400">Échecs de transaction</p>
                  </div>
                </div>
                <InputSwitch 
                  checked={notificationPrefs.transactionEchouee}
                  onChange={(e) => setNotificationPrefs({...notificationPrefs, transactionEchouee: e.value})}
                />
              </div>
            </div>

            <div className="p-4 border border-darkGray bg-background rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-green-500" />
                  <div>
                    <h4 className="font-semibold text-text">Commission validée</h4>
                    <p className="text-xs text-gray-400">Paiements de commission</p>
                  </div>
                </div>
                <InputSwitch 
                  checked={notificationPrefs.commissionValidee}
                  onChange={(e) => setNotificationPrefs({...notificationPrefs, commissionValidee: e.value})}
                />
              </div>
            </div>

            <div className="p-4 border border-darkGray bg-background rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Settings size={18} className="text-gray-400" />
                  <div>
                    <h4 className="font-semibold text-text">Maintenance système</h4>
                    <p className="text-xs text-gray-400">Alertes techniques</p>
                  </div>
                </div>
                <InputSwitch 
                  checked={notificationPrefs.maintenance}
                  onChange={(e) => setNotificationPrefs({...notificationPrefs, maintenance: e.value})}
                />
              </div>
            </div>
          </div>

          {/* Méthode de notification */}
          <div className="p-4 border border-darkGray bg-background rounded-lg">
            <label className="block text-sm font-semibold text-gray-400 mb-3">
              Méthode de notification
            </label>
            <Dropdown
              options={methodesNotification}
              placeholder="Choisir une méthode"
              className="w-full md:w-96"
            />
          </div>
        </div>
      </div>


      {/* 🟦 4️⃣ PARAMÈTRES POINT DE VENTE */}
      <div className="border border-darkGray bg-card rounded-lg p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-green-500/10 rounded-lg">
            <MapPin size={28} className="text-green-500" />
          </div>
          <div>
            <h2 className="text-xl font-anton uppercase text-text">Point de Vente</h2>
            <p className="text-sm text-gray-400 mt-1">Informations de votre point de vente</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">
                Nom du point de vente
              </label>
              <p className="text-text font-semibold">{agentProfile.pointVente}</p>
              <span className="text-xs text-gray-400">Lecture seule</span>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">
                Adresse
              </label>
              <p className="text-text font-semibold flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                {agentProfile.adressePointVente}
              </p>
              <span className="text-xs text-gray-400">Lecture seule</span>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">
                Responsable / Manager
              </label>
              <p className="text-text font-semibold flex items-center gap-2">
                <User size={16} className="text-primary" />
                {agentProfile.responsable}
              </p>
              <span className="text-xs text-gray-400">Lecture seule</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">
                Horaires d'ouverture
              </label>
              <div className="space-y-2 text-sm text-text">
                <p>Lundi - Vendredi: 08h00 - 18h00</p>
                <p>Samedi: 08h00 - 14h00</p>
                <p>Dimanche: Fermé</p>
              </div>
              <span className="text-xs text-gray-400">Lecture seule</span>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">
                Numéro de contact (modifiable)
              </label>
              <div className="flex gap-2">
                <InputText 
                  value={agentProfile.telephone}
                  className="flex-1"
                />
                <Button 
                  icon={<Save size={16} />}
                  className="bg-text text-background hover:bg-lightGray transition-colors"
                  onClick={() => {
                    toast.current.show({
                      severity: 'success',
                      summary: 'Contact mis à jour',
                      detail: 'Le numéro de contact a été enregistré',
                      life: 3000
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🟦 5️⃣ HISTORIQUE ET SÉCURITÉ DU COMPTE */}
      <div className="space-y-6">
        {/* Dernières connexions */}
        <div className="border border-darkGray bg-card rounded-lg p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Activity size={28} className="text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-anton uppercase text-text">Dernières Connexions</h2>
                <p className="text-sm text-gray-400 mt-1">Surveillez l'activité de votre compte</p>
              </div>
            </div>
            <Button 
              icon={<LogOut size={16} />}
              label="Déconnecter tous"
              size="small"
              className="bg-text text-background hover:bg-lightGray transition-colors"
              onClick={confirmLogoutAll}
            />
          </div>

          <DataTable 
            ref={dt}
            value={connexions}
            dataKey="id"
            emptyMessage="Aucune connexion trouvée"
            className="text-sm"
            responsiveLayout="scroll"
          >
            <Column 
              field="date" 
              header="Date & Heure" 
              sortable
              style={{ minWidth: '140px' }}
              body={(rowData) => (
                <div>
                  <div className="font-semibold text-text">
                    {new Date(rowData.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <div className="text-xs text-gray-400">
                    {new Date(rowData.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
                  </div>
                </div>
              )}
            />
            <Column 
              field="appareil" 
              header="Appareil" 
              body={appareilTemplate}
              style={{ minWidth: '180px' }}
            />
            <Column 
              field="ip" 
              header="Adresse IP" 
              style={{ minWidth: '130px' }}
              body={(rowData) => (
                <span className="font-mono text-sm text-gray-400">{rowData.ip}</span>
              )}
            />
            <Column 
              field="localisation" 
              header="Localisation" 
              style={{ minWidth: '150px' }}
            />
            <Column 
              field="statut" 
              header="Statut" 
              body={statutConnexionTemplate}
              style={{ minWidth: '100px' }}
            />
            <Column 
              header="Actions" 
              body={actionConnexionTemplate}
              style={{ minWidth: '140px' }}
            />
          </DataTable>
        </div>

        {/* Alertes sécurité */}
        <div className="border border-darkGray bg-card rounded-lg p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-red-500/10 rounded-lg">
              <AlertTriangle size={28} className="text-red-500" />
            </div>
            <div>
              <h2 className="text-xl font-anton uppercase text-text">Alertes Sécurité</h2>
              <p className="text-sm text-gray-400 mt-1">Événements de sécurité récents</p>
            </div>
          </div>

          <div className="space-y-3">
            {alertesSecurite.map((alerte) => (
              <div 
                key={alerte.id}
                className="p-4 border border-darkGray bg-background rounded-lg hover:border-primary transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {severiteTemplate(alerte)}
                      <span className="text-xs text-gray-400">
                        {new Date(alerte.date).toLocaleString('fr-FR')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{alerte.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER - Règles de Sécurité */}
      <div className="border border-darkGray bg-card rounded-lg p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Info size={28} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-anton uppercase text-text">
              Règles de Sécurité
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Politiques de sécurité et bonnes pratiques
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border border-darkGray bg-background rounded-lg hover:border-primary transition-all">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-500/10 rounded-lg flex-shrink-0">
                <CheckCircle size={20} className="text-green-500" />
              </div>
              <div>
                <h4 className="font-semibold text-text mb-1">Audit complet</h4>
                <p className="text-sm text-gray-400">
                  Toutes les modifications sont enregistrées dans l'audit log
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 border border-darkGray bg-background rounded-lg hover:border-primary transition-all">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                <Lock size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-text mb-1">Mot de passe fort</h4>
                <p className="text-sm text-gray-400">
                  Minimum 8 caractères avec majuscules, chiffres et symboles
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 border border-darkGray bg-background rounded-lg hover:border-primary transition-all">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-secondary/10 rounded-lg flex-shrink-0">
                <Key size={20} className="text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-text mb-1">PIN unique</h4>
                <p className="text-sm text-gray-400">
                  4 chiffres différents pour sécuriser vos transactions
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 border border-darkGray bg-background rounded-lg hover:border-primary transition-all">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-500/10 rounded-lg flex-shrink-0">
                <Shield size={20} className="text-green-500" />
              </div>
              <div>
                <h4 className="font-semibold text-text mb-1">2FA recommandé</h4>
                <p className="text-sm text-gray-400">
                  Authentification à 2 facteurs fortement recommandée
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 border border-darkGray bg-background rounded-lg hover:border-primary transition-all">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                <Activity size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-text mb-1">Surveillance active</h4>
                <p className="text-sm text-gray-400">
                  Vérifiez régulièrement vos connexions actives
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 border border-darkGray bg-background rounded-lg hover:border-primary transition-all">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-red-500/10 rounded-lg flex-shrink-0">
                <AlertTriangle size={20} className="text-red-500" />
              </div>
              <div>
                <h4 className="font-semibold text-text mb-1">Activité suspecte</h4>
                <p className="text-sm text-gray-400">
                  Contactez le support immédiatement si détection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parametres;
