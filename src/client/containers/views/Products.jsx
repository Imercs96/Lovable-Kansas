import React from "react";
import firebase from "../../../services/firebase";
import Products from "../../components/views/Products";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const DB = firebase.db;
const MySwal = withReactContent(Swal);
let orderToUpdate;
let orderToCreate;

class ProductContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      product: {},
      order: {
        numberOfTable: "completar con INFO",
        status: "draft",
        totalPrice: 0
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const doc = DB.collection("restaurants")
      .doc(this.props.match.params.idRestaurant)
      .collection("menu")
      .doc(this.props.match.params.idMenu)
      .collection("categories")
      .doc(this.props.match.params.idCategoria)
      .collection("products")
      .doc(this.props.match.params.idProduct);

    doc.get().then(querySnapshot =>
      this.setState({
        product: {
          description: querySnapshot.data().description,
          imageProduct: querySnapshot.data().imageProduct,
          name: querySnapshot.data().name,
          price: querySnapshot.data().price
        }
      })
    );
  }

  handleClick(e) {
    e.preventDefault();
    let RestaurantId = this.props.match.params.idRestaurant;

    let TablesRestaurant = DB.collection("restaurants")
      .doc(RestaurantId)
      .collection("tables")
      .doc(this.props.match.params.idTable);

    let RestaurantDoc = DB.collection("restaurants").doc(RestaurantId);

    TablesRestaurant.get().then(result => {
      this.setState({
        order: {
          numberOfTable: result.data().number,
          status: "draft",
          totalPrice: 0
        }
      });

      if (result.data().orderActual !== 0) {
        orderToUpdate = result.data().orderActual;

        let OrdersRestaurant = DB.collection("restaurants")
          .doc(RestaurantId)
          .collection("orders")
          .doc(`${orderToUpdate}`);
        OrdersRestaurant.collection("products")
          .doc()
          .set(this.state.product);
      } else {
        RestaurantDoc.get().then(result => {
          orderToCreate = result.data().orderTotalNumber;
          RestaurantDoc.update({ orderTotalNumber: orderToCreate + 1 });
          TablesRestaurant.update({
            orderActual: orderToCreate,
            orderStatus: "draft"
          });
          let newOrder = RestaurantDoc.collection("orders").doc(
            `${orderToCreate}`
          );
          newOrder.set(this.state.order);
          newOrder
            .collection("products")
            .doc()
            .set(this.state.product);
        });
      }
    });

    MySwal.fire({
      title: "Are you sure to add to cart?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm"
    })
    .then(result => {
      if (result.value) {
        MySwal.fire("Success!", `Your product has been added to cart.`, "success");
      }
    })
  }

  render() {
    return (
      <div>
        <Products handleClick={this.handleClick} product={this.state.product} />
      </div>
    );
  }
}

export default ProductContainer;
