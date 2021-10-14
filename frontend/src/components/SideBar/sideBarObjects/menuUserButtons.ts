import Icons from 'utils/assets';

const options = [
  {
    id: 0,
    icon: Icons.simbolo_hamburguer,
    text: 'Hambúrgueres',
    category: 'hamburgueres',
  },
  {
    id: 1,
    icon: Icons.fries,
    text: 'Batatas',
    category: 'petiscos',
  },
  {
    id: 2,
    icon: Icons.drink,
    text: 'Bebidas',
    category: 'bebidas',
  },
  {
    id: 3,
    icon: Icons.dessert,
    text: 'Sobremesas',
    category: 'sobremesas',
  },
];

const callWaiter = {
  id: 4,
  icon: Icons.simbolo_usuario,
  text: 'Chamar Garçom',
};

export default { options, callWaiter };
