import Icons from 'utils/assets';

const homeButtons = [
  {
    id: 0,
    icon: Icons.simbolo_cardapio,
    text: 'Cardápio',
    route: '/menu',
  },
  {
    id: 1,
    icon: Icons.simbolo_conta,
    text: 'Meu Pedido',
    route: '/pedido',
  },
  {
    id: 2,
    icon: Icons.simbolo_usuario,
    text: 'Chamar Garçom',
    solicitationWaiter: true,
  },
  {
    id: 3,
    icon: Icons.simbolo_pedir,
    text: 'Pedir Conta',
    solicitationOrder: true,
  },
];

export default homeButtons;
