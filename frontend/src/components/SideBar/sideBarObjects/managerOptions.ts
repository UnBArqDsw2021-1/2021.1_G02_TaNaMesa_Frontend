import imgWaiter from 'assets/SideBar/simbolo_usuario 2.png';
import imgMenu from 'assets/SideBar/simbolo_cardapio 1.png';
import imgOrder from 'assets/SideBar/simbolo_conta 1.png';
import imgKitchen from 'assets/SideBar/smbolo_hamburguer 1.png';

const kitchenOptions = [
  {
    id: 0,
    icon: imgMenu,
    text: 'Gerenciar Cardápio',
  },
  {
    id: 1,
    icon: imgOrder,
    text: 'Gerenciar Contas',
  },
  {
    id: 2,
    icon: imgWaiter,
    text: 'Gerenciar Garçons',
  },
  {
    id: 3,
    icon: imgKitchen,
    text: 'Gerenciar Cozinha',
  },
];

export default kitchenOptions;
