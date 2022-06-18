import './App.css';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import React,{useState} from 'react'
import AddItem from './components/AddItem';

function App() {

  const products = [
    {
      price: 95000,
      name: "iPhone 13",
      quantity: 0,
    },
    {
      price: 25000,
      name: "Xiaomi 11i",
      quantity: 0,
    },
    {
      price: 65000,
      name: "OnePlus 10",
      quantity: 0,
    },
  ]

  let [productList, setProductList] = useState(products)
  let [total, setTotal] = useState(0)
  
  const plusQuantity = (index) => {
    let newProductList = [...productList]
    let newTotal = total
    newProductList[index].quantity++;
    newTotal += newProductList[index].price;
    setTotal(newTotal);
    setProductList(newProductList);
  }

  const minusQuantity = (index) => {
    let newProductList = [...productList]
    let newTotal = total
    if(newProductList[index].quantity > 0) 
    {
      newProductList[index].quantity--
      newTotal -= newProductList[index].price
    }
    setTotal(newTotal);
    setProductList(newProductList);
  }

  const reset = () =>{
    let newProductList = [...productList]
    newProductList.map((products)=>{
      return products.quantity = 0;
    })
    setProductList(newProductList);
    setTotal(0);
  }

  const remove = (index) => {
    let newProductList = [...productList];
    let newTotal = total
    newTotal -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotal(newTotal);
  }

  const addItem = (name,price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  }

  const count = productList.length;

  return (
    <>
    <Navbar count={count} />
    <main className="container" style={{marginTop: '80px', marginBottom: '100px',}}>
      <AddItem addItem={addItem} />
      <hr className="m-4" />
      <ProductList
        productList={productList} 
        plusQuantity={plusQuantity} 
        minusQuantity={minusQuantity} 
        remove={remove}
      />
    </main>
    <Footer total={total} reset={reset} />
    </>
  );
}

export default App;
