import Icons from 'utils/assets';

const homeButtons = [
  {
    id: 0,
    icon: Icons.visualizar_pedido,
    text: 'Visualizar Pedidos das Mesas',
  },
  {
    id: 1,
    icon: Icons.doubt,
    text: 'Mesas que solicitam ajuda',
    route: '/garcom/ajuda',
  },
  {
    id: 2,
    icon: Icons.doubt,
    text: 'Mesas que solicitam pagamento',
    route: '/garcom/pagamento',
  },
];

export default homeButtons;
