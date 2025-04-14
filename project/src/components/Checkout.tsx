import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { 
  CreditCard, 
  Banknote, 
  Landmark, 
  QrCode, 
  Wallet, 
  ArrowLeft,
  CheckCircle2,
  Clock,
  Truck
} from 'lucide-react';
import { PaymentMethod, Address } from '../types';

const paymentMethods: PaymentMethod[] = [
  {
    id: 'credit-card',
    name: 'Cartão de Crédito',
    icon: CreditCard,
    description: 'Visa, Mastercard, Elo, American Express',
    installments: true
  },
  {
    id: 'debit-card',
    name: 'Cartão de Débito',
    icon: CreditCard,
    description: 'Visa, Mastercard, Elo'
  },
  {
    id: 'pix',
    name: 'PIX',
    icon: QrCode,
    description: 'Pagamento instantâneo'
  },
  {
    id: 'bank-slip',
    name: 'Boleto Bancário',
    icon: Landmark,
    description: 'Vencimento em 3 dias úteis'
  },
  {
    id: 'cash',
    name: 'Dinheiro',
    icon: Banknote,
    description: 'Pagamento na entrega'
  },
  {
    id: 'crypto',
    name: 'Criptomoedas',
    icon: Wallet,
    description: 'Bitcoin, Ethereum, USDT'
  }
];

const Checkout = () => {
  const navigate = useNavigate();
  const { state } = useCart();
  const [step, setStep] = useState<'address' | 'payment' | 'confirmation'>('address');
  const [selectedPayment, setSelectedPayment] = useState<string>('');
  const [installments, setInstallments] = useState<number>(1);
  const [address, setAddress] = useState<Address>({
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    zipCode: ''
  });

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h2>
            <button
              onClick={() => navigate('/loja')}
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Voltar para a loja
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmation');
  };

  const renderStep = () => {
    switch (step) {
      case 'address':
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Endereço de Entrega</h2>
            <form onSubmit={handleAddressSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    CEP
                  </label>
                  <input
                    type="text"
                    required
                    value={address.zipCode}
                    onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
                    className="w-full bg-gray-800 rounded-md px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Rua
                  </label>
                  <input
                    type="text"
                    required
                    value={address.street}
                    onChange={(e) => setAddress({ ...address, street: e.target.value })}
                    className="w-full bg-gray-800 rounded-md px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Número
                  </label>
                  <input
                    type="text"
                    required
                    value={address.number}
                    onChange={(e) => setAddress({ ...address, number: e.target.value })}
                    className="w-full bg-gray-800 rounded-md px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Complemento
                  </label>
                  <input
                    type="text"
                    value={address.complement}
                    onChange={(e) => setAddress({ ...address, complement: e.target.value })}
                    className="w-full bg-gray-800 rounded-md px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Bairro
                  </label>
                  <input
                    type="text"
                    required
                    value={address.neighborhood}
                    onChange={(e) => setAddress({ ...address, neighborhood: e.target.value })}
                    className="w-full bg-gray-800 rounded-md px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Cidade
                  </label>
                  <input
                    type="text"
                    required
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full bg-gray-800 rounded-md px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Estado
                  </label>
                  <input
                    type="text"
                    required
                    value={address.state}
                    onChange={(e) => setAddress({ ...address, state: e.target.value })}
                    className="w-full bg-gray-800 rounded-md px-4 py-2 text-white"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity mt-6"
              >
                Continuar para Pagamento
              </button>
            </form>
          </div>
        );

      case 'payment':
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Forma de Pagamento</h2>
            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <div className="grid gap-4">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-colors ${
                      selectedPayment === method.id
                        ? 'bg-purple-500/20 border border-purple-500'
                        : 'bg-gray-800 border border-transparent'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={selectedPayment === method.id}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="hidden"
                    />
                    <method.icon size={24} className="text-purple-400" />
                    <div className="flex-1">
                      <h3 className="font-semibold">{method.name}</h3>
                      <p className="text-sm text-gray-400">{method.description}</p>
                    </div>
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center">
                      {selectedPayment === method.id && (
                        <div className="w-3 h-3 rounded-full bg-purple-500" />
                      )}
                
                    </div>
                  </label>
                ))}
              </div>

              {selectedPayment === 'credit-card' && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Parcelas
                  </label>
                  <select
                    value={installments}
                    onChange={(e) => setInstallments(Number(e.target.value))}
                    className="w-full bg-gray-800 rounded-md px-4 py-2 text-white"
                  >
                    {[...Array(12)].map((_, i) => {
                      const value = i + 1;
                      const installmentValue = (state.total / value).toFixed(2);
                      return (
                        <option key={value} value={value}>
                          {value}x de R$ {installmentValue}
                          {value === 1 ? ' (sem juros)' : ` (com juros)`}
                        </option>
                      );
                    })}
                  </select>
                </div>
              )}

              <button
                type="submit"
                disabled={!selectedPayment}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 mt-6"
              >
                Finalizar Compra
              </button>
            </form>
          </div>
        );

      case 'confirmation':
        return (
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle2 size={64} className="text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Pedido Confirmado!</h2>
              <p className="text-gray-400">
                Seu pedido foi realizado com sucesso. Em breve você receberá um e-mail com mais informações.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Número do Pedido</span>
                <span className="font-mono">#123456</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Status</span>
                <span className="flex items-center gap-2 text-green-500">
                  <Clock size={16} />
                  Processando
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Entrega Prevista</span>
                <span className="flex items-center gap-2">
                  <Truck size={16} />
                  5-7 dias úteis
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate('/loja')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Continuar Comprando
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8"
        >
          <ArrowLeft size={20} />
          Voltar
        </button>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <div className="text-right">
            <p className="text-sm text-gray-400">Total do Pedido</p>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              R$ {state.total.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <div className={`flex-1 h-2 rounded-full ${step === 'address' ? 'bg-purple-500' : 'bg-purple-500/20'}`} />
          <div className={`flex-1 h-2 rounded-full mx-2 ${step === 'payment' ? 'bg-purple-500' : 'bg-purple-500/20'}`} />
          <div className={`flex-1 h-2 rounded-full ${step === 'confirmation' ? 'bg-purple-500' : 'bg-purple-500/20'}`} />
        </div>

        {renderStep()}
      </div>
    </div>
  );
};

export default Checkout;