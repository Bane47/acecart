
import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import '../../CssFiles/SchoolProductsSecond.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { CartProvider, useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
const SchoolUniformProducts = () => {

  var Fname, Lname, email, password, category, dname, dcode, city, state, gst, resid;
  var cart = []

  const { id } = useParams();
  const navigate = useNavigate();
  const [logIn,setLogin] = useState(false)
  const [productCost, setProductCost] = useState(0)
  const [size, setSize] = useState(18);
  const [schoolProd, setSchoolProd] = useState(null)
  const [carImg, setCarImg] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    addItem,
    updateItemQuantity,
    removeItem,
    emptyCart } = useCart();
 
  const myToastAdded = () => toast.success("Successfully add to cart!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    closeButton: false,
    theme: "colored"
  })
  const myToastFailed = () => toast.error("Failed to add!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    closeButton: false,
    theme: "colored"
  })


  useEffect(() => {

    fetch(`https://bane47.onrender.com/uniforms/${id}`)

      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setSchoolProd(data)
      }

      );

    fetch(`https://bane47.onrender.com/uniforms`)

      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCarImg(data)
      })
      .catch((err) => {
        console.log(err)
      })


    console.log("The id is" + id)




  }, [id]);
  const sizeChange = (e) => {
    setSize(e.target.value)
  }

  const productCounter = (oldCost, offer) => {

    const newCost = parseInt(oldCost);
    let newOffer = parseInt(offer)
    if (!size) {
      return newCost;
    }

    if (size >= 24) {
      console.log("Old cost is 1 " + oldCost)
      
      oldCost = oldCost + 25; //old cost 450+25
    }
    if (size >= 26) {
      console.log("Old cost is 2 " + oldCost)

      oldCost = oldCost + 25; //475+25

    }
    if (size >= 28 && size <= 30) {
      console.log("Old cost is 3 " + oldCost)

      oldCost = oldCost + 25;   //500+25

    }
    if (size >= 32 && size <= 34) {
      console.log("Old cost is 4 " + oldCost)

      oldCost = oldCost + 25;     //525+25

    }



    if (size >= 18 && size <= 22) {

      return (newCost)

    } else if (size >= 24 && size <= 26)
      return (parseInt(newCost + ((newOffer * oldCost) / 100)), oldCost)
    else if (size >= 28 && size <= 30)
      return (parseInt(newCost + ((newOffer * oldCost) / 100)), oldCost)
    else if (size >= 32 && size <= 34)
      newOffer = newOffer - 2;
    return (parseInt(newCost + ((newOffer * oldCost) / 100)), oldCost)



  }
  const productOffer = (size, offer) => {

    if (size >= 18 && size <= 30) {

      return (offer)

    }
    else if (size >= 32 && size <= 34)

      return (parseInt(offer = offer - 2))


  }

  const productCode = (size, prodCode) => {
    console.log(prodCode[2])
    console.log(size)
    if (size == 18) {
      return prodCode[0]
    } else if (size == 20) {
      return prodCode[1]
    } else if (size == 22) {
      return prodCode[2]
    } else if (size == 24) {
      return prodCode[3]
    } else if (size == 26) {
      return prodCode[4]
    } else if (size == 28) {
      return prodCode[5]
    } else if (size == 30) {
      return prodCode[6]
    } else if (size == 32) {
      return prodCode[7]
    } else if (size == 34) {
      return prodCode[8]
    }

  }
  const quantityChange = (e) => {
    let quant = e.target.value;
    if (quant < 1) {
      quant = 1;
    }
    setQuantity(quant);
  }

  // const addItem = () => {
  //   const item = {
  //     image:schoolProd.image,
  //     cost:schoolProd.cost,
  //     quantity:quantity,
  //     title:schoolProd.title,
  //     id:schoolProd.id
  //   };

  //   updateItemQuantity(item);
  //   console.log('Item added to cart:', item);
  //   console.log(item.quantity);

  //   // POST item to Cartitems endpoint
  //   fetch('https://bane47.onrender.com/cart', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(item)
  //   })
  //     .then((response) => response.json())
  //     .then(() => {
  //       myToastAdded()

  //     })
  //     .catch((error) => {
  //       myToastFailed()

  //     });
  // };
  const addToCart = (e) => {
    const items = {
      image: e.image,
      price: e.cost,
      quantity: parseInt(quantity),
      title: e.title,
      size: size,
      id: e.id
    }


    console.log(schoolProd.id)
    addItem(items)


    axios.get("https://bane47.onrender.com/register?isLogged=true")
      .then((res) => {
        console.log(res.data[0].cart)
        Fname = res.data[0].fname;
        Lname = res.data[0].lname;
        email = res.data[0].email;
        password = res.data[0].password;
        category = res.data[0].category;
        dname = res.data[0].dname;
        dcode = res.data[0].dcode;
        city = res.data[0].city;
        state = res.data[0].state;
        gst = res.data[0].gst;
        cart = res.data[0].cart;
        setLogin(true)

        console.log("cart oda value " + cart)
        const checker = () => {
          var count = false
          //Redundancy elimination
          

          for (const obj of cart) {
            if (obj.id == items.id) {
              for (let i = 0; i <= cart.length; i++) {
                if(cart[i].id == obj.id) {
                  cart[i].quantity += 1;
                  count=true
                  console.log(cart[i].quantity)
                  break;
                } else {
                  count = false
                }
              }
            }
          }
          //pushing the new item to the cart array
          if (count == false) {
            cart.push(items)
            myToastAdded()

          } else {
           
            console.log("Already added")
          }
        }
        checker();


        resid = res.data[0].id;
        console.log(resid)
        console.log("Cart vandhu " + res.data[0].cart[0].image)
      })
      .then(() => {
        axios.put(`https://bane47.onrender.com/register/${resid}`, {
          fname: Fname,
          lname: Lname,
          email: email,
          password: password,
          category: category,
          dname: dname,
          dcode: dcode,
          city: city,
          state: state,
          gst: gst,
          cart: cart,
          isLogged: true

        })
          .then((response) => {



          })
          .catch((error) => {
            console.log(error)
            myToastFailed()
          })

      }).catch((error) => {
        if(!logIn){

          return     navigate("/Prompt")
      } 
      })
      
     



  }





  return (
    <div>
      {schoolProd &&


        <div>

          <Container>
            <div className='row pt-5 mt-5'>
              <div className='col-lg-6 col-md-6 col-sm-6 col-xl-6 pt-5 mt-5'>
                <img src={schoolProd.image} alt="Dress Image" />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 col-xl-6 pt-5 mt-5 text-black'>
                <h1>{schoolProd.title}</h1>

                <h5>Product code: {productCode(size, schoolProd.productcode)}</h5>
                <h5>Brand: {schoolProd.brand}</h5>
                <h5>Sold By: {schoolProd.soldby}</h5>
                <h1>&#8377;{productCounter(schoolProd.cost, schoolProd.offer)}<span className='h5'><del>&#8377;{productCounter(schoolProd.actualcost, schoolProd.offer)}</del></span></h1>
                <h6>{productOffer(size, schoolProd.offer)}% OFF</h6>

                <hr />

                <button className='bg-black text-white'>SIZE GUIDE</button>
                <select className='w-25 text-start' name="size" id="size" value={size} onChange={sizeChange} >
                  {schoolProd.size.map((size) => (
                    <option value={`${size}`}>{size}</option>
                  ))}
                </select>
                {/* <span>{schoolProd.stock} item left in Stock</span> */}

                <hr />
                <label className='bg-black text-white p-1' htmlFor="quantity">Quantity</label><input type="number" name="qty" id="quantity" value={quantity} onChange={quantityChange} />
                {/* <h5>
                  Cart ({totalUniqueItems}) total Items: ({totalItems})
                </h5> */}
                <div className='row container pt-5 mt-5'>
                  <CartProvider>
                    <button onClick={() => addToCart(schoolProd)} className='col-lg-4 me-1 bg-black text-white'>Add to Cart</button>
                  </CartProvider>
                  <button className='col-lg-4 ms-1 bg-black text-white'>Buy Now</button>

                </div>



              </div>

            </div>
           
            <div>

              <div className='bg-light p-2'>Description of product</div>
              <div className='p-2'>
                <h5 >NO RETURNS & NO EXCHANGE.</h5>
                <p >{schoolProd.material}</p>
              </div>
            </div>

          </Container>

        </div>


      }


      <div className='products container'>
        <div className='bg-light p-2'>Related Products</div>
        <div>
          {carImg &&

            <Carousel>

              {carImg.map((carImg) => (
                <Carousel.Item>

                  <Container>
                    <div className='row d-flex justify-content-center '>
                    <Link to='/schooluniformproduct'>

                      <div className="col-lg-2 col-sm-2 col-md-2 col-xl-2">
                        <img
                          className="col-lg-12 col-sm-12 col-md-12 col-xl-12"
                          src={`${carImg.image}`}
                          alt="First slide"
                        />
                        <h6 className='text-center'>{carImg.name}</h6>
                      </div>
                      </Link>


                    </div>
                  </Container>


                </Carousel.Item>
              ))}

            </Carousel>
          }
        </div>

      </div>

      {/* <button onClick={onBackClick}>Go back to the uniforms</button> */}

      <ToastContainer />
    </div>
  )

}


export default SchoolUniformProducts