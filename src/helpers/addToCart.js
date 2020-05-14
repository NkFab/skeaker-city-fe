const addItemCart = (_id, shoeSize, picture, brand, price) => {
    const oldItems =
        JSON.parse(localStorage.getItem('g8h0989h098h08')) || [];

    const newItem = {
        id: _id,
        selectedSize: shoeSize,
        sneakerImg: picture,
        sneakerModel: brand,
        sneakerPrice: price,
    };

    oldItems.push(newItem);

    localStorage.setItem('g8h0989h098h08', JSON.stringify(oldItems));
};

export default addItemCart;
