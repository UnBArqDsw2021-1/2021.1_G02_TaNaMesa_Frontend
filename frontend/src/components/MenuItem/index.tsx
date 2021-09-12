import React from "react";

import { MenuItemContainer } from "components/MenuItem/styles";

interface IMenuItem {
    id: number;
    image: string;
    name: string;
    price: number;
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
    const addItem = () => {};
    //const addItem = ({ addItem } = useContext(ItemContext));
    return (
        <MenuItemContainer>
            <img src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <h2>${price}</h2>
                <button
                    onClick={() => {
                        addItem;
                    }}
                >
                    Adicionar
                </button>
            </div>
        </MenuItemContainer>
    );
};

export default MenuItem;
