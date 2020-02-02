import React, { Component } from 'react';
import { storeProducts, detailsProduct } from './data';
const ProductContext = React.createContext();

//provider
//consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailsProduct: detailsProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailsProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
    }
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {
                products: tempProducts
            }
        })
    }
    increament = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(
            () => { return { cart: [...tempCart] } },
            () => {
                this.addTotal()
            })
        console.log("increame");
    }
    decreament = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
            this.removeItem(id);
        }
        else {
            product.total = product.count * product.price;
            this.setState(
                () => { return { cart: [...tempCart] } },
                () => {
                    this.addTotal()
                })

        }
        console.log("decre");
    }
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removeproduct = tempProducts[index];
        removeproduct.iCart = false;
        removeproduct.count = 0;
        removeproduct.total = 0;
        this.setState(
            () => {
                return {
                    cart: [...tempCart],
                    products: [...tempProducts]
                }
            }, () => {
                this.addTotal();
            }
        )

    }
    clearCart = () => {
        this.setState(() => {
            return { cart: [] };
         }, () => {
                this.setProducts();
                this.addTotal();
                
            
        })
        
    }
    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total,
            }
        })
        console.log(subTotal)
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;

    }
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                detailsProduct: product
            }
        })
        console.log("card details");
    }
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.iCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(
            () => {
                return { products: tempProducts, cart: [...this.state.cart, product] };
            },
            () => {
                this.addTotal();
            }

        );

    };

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        })
    }
    closeModal = (id) => {

        this.setState(() => {
            return { modalOpen: false }
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increament: this.increament,
                decreament: this.decreament,
                clearCart: this.clearCart,
                removeItem: this.removeItem,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };