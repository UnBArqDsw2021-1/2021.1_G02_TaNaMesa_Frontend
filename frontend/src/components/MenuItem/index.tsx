import React from "react";

import { MenuItemContainer } from "components/MenuItem/styles";

interface IMenuItem {
    id: number;
    image: string;
    name: string;
    price: string;
    discount: number;
    description: string;
}

const MenuItem: React.FC<IMenuItem> = ({
    id,
    image,
    name,
    price,
    discount,
    description,
}: IMenuItem) => {
    //const addItem = ({ addItem } = useContext(ItemContext));
    return (
        <MenuItemContainer>
            <img src={image} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{description}</p>
                <h5>R${price}</h5>
                <button onClick={() => {}}>Adicionar</button>
            </div>
        </MenuItemContainer>
    );
};

export default MenuItem;
