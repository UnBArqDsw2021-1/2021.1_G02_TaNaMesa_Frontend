import imgMenu from 'assets/SideBar/simbolo_cardapio 1.png';
import imgOrder from 'assets/SideBar/simbolo_pedir 1.png';
import imgWaiter from 'assets/SideBar/simbolo_usuario 2.png';
import imgAccount from 'assets/SideBar/simbolo_conta 1.png';

const homeButtons = [
  {
    id: 0,
    icon: imgMenu,
    text: 'Cardápio',
    route: '/menu',
  },
  {
    id: 1,
    icon: imgOrder,
    text: 'Pedir',
  },
  {
    id: 2,
    icon: imgWaiter,
    text: 'Chamar Garçom',
  },
  {
    id: 3,
    icon: imgAccount,
    text: 'Minha Conta',
  },
];

export default homeButtons;
