import imgBurguer from 'assets/SideBar/smbolo_hamburguer 1.png';
import imgDrink from 'assets/SideBar/simbolo_bebida 1.png';
import imgFries from 'assets/SideBar/simbolo batata 1.png';
import imgDessert from 'assets/SideBar/simbolo_sobremesa 1.png';
import imgWaiter from 'assets/SideBar/simbolo_usuario 2.png';

const options = [
  {
    id: 0,
    icon: imgBurguer,
    text: 'Burguers',
  },
  {
    id: 1,
    icon: imgFries,
    text: 'Batatas',
  },
  {
    id: 2,
    icon: imgDrink,
    text: 'Bebidas',
  },
  {
    id: 3,
    icon: imgDessert,
    text: 'Sobremesas',
  },
];

const callWaiter = {
  id: 4,
  icon: imgWaiter,
  text: 'Chamar Garçom',
};

export default { options, callWaiter };
