import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "albumId": 1,
                "_id": "1",
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "https://via.placeholder.com/600/92c952",
                "thumbnailUrl": "https://via.placeholder.com/150/92c952"
              },
              {
                "albumId": 1,
                "_id": "2",
                "title": "reprehenderit est deserunt velit ipsam",
                "url": "https://via.placeholder.com/600/771796",
                "thumbnailUrl": "https://via.placeholder.com/150/771796"
              },
              {
                "albumId": 1,
                "_id": "3",
                "title": "officia porro iure quia iusto qui ipsa ut modi",
                "url": "https://via.placeholder.com/600/24f355",
                "thumbnailUrl": "https://via.placeholder.com/150/24f355"
              },
              {
                "albumId": 1,
                "_id": "4",
                "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
                "url": "https://via.placeholder.com/600/d32776",
                "thumbnailUrl": "https://via.placeholder.com/150/d32776"
              },
              {
                "albumId": 1,
                "_id": "5",
                "title": "natus nisi omnis corporis facere molestiae rerum in",
                "url": "https://via.placeholder.com/600/f66b97",
                "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
              },
              {
                "albumId": 1,
                "_id": "6",
                "title": "accusamus ea aliquid et amet sequi nemo",
                "url": "https://via.placeholder.com/600/56a8c2",
                "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
              },
              {
                "albumId": 1,
                "_id": "7",
                "title": "officia delectus consequatur vero aut veniam explicabo molestias",
                "url": "https://via.placeholder.com/600/b0f7cc",
                "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
              },
              {
                "albumId": 1,
                "_id": "8",
                "title": "aut porro officiis laborum odit ea laudantium corporis",
                "url": "https://via.placeholder.com/600/54176f",
                "thumbnailUrl": "https://via.placeholder.com/150/54176f"
              },
              {
                "albumId": 1,
                "_id": "9",
                "title": "qui eius qui autem sed",
                "url": "https://via.placeholder.com/600/51aa97",
                "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
              },
              {
                "albumId": 1,
                "_id": "10",
                "title": "beatae et provident et ut vel",
                "url": "https://via.placeholder.com/600/810b14",
                "thumbnailUrl": "https://via.placeholder.com/150/810b14"
              },
              {
                "albumId": 1,
                "_id": "11",
                "title": "nihil at amet non hic quia qui",
                "url": "https://via.placeholder.com/600/1ee8a4",
                "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
              },
              {
                "albumId": 1,
                "_id": "12",
                "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
                "url": "https://via.placeholder.com/600/66b7d2",
                "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
              },
              {
                "albumId": 1,
                "_id": "13",
                "title": "repudiandae iusto deleniti rerum",
                "url": "https://via.placeholder.com/600/197d29",
                "thumbnailUrl": "https://via.placeholder.com/150/197d29"
              },
              {
                "albumId": 1,
                "_id": "14",
                "title": "est necessitatibus architecto ut laborum",
                "url": "https://via.placeholder.com/600/61a65",
                "thumbnailUrl": "https://via.placeholder.com/150/61a65"
              },
              {
                "albumId": 1,
                "_id": "15",
                "title": "harum dicta similique quis dolore earum ex qui",
                "url": "https://via.placeholder.com/600/f9cee5",
                "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
              },
              {
                "albumId": 1,
                "_id": "16",
                "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
                "url": "https://via.placeholder.com/600/fdf73e",
                "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
              },
              {
                "albumId": 1,
                "_id": "17",
                "title": "natus doloribus necessitatibus ipsa",
                "url": "https://via.placeholder.com/600/9c184f",
                "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
              },
              {
                "albumId": 1,
                "_id": "18",
                "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
                "url": "https://via.placeholder.com/600/1fe46f",
                "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
              },
              {
                "albumId": 1,
                "_id": "19",
                "title": "perferendis nesciunt eveniet et optio a",
                "url": "https://via.placeholder.com/600/56acb2",
                "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
              },
              {
                "albumId": 1,
                "_id": "20",
                "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
                "url": "https://via.placeholder.com/600/8985dc",
                "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
              },
              {
                "albumId": 1,
                "_id": "21",
                "title": "ad et natus qui",
                "url": "https://via.placeholder.com/600/5e12c6",
                "thumbnailUrl": "https://via.placeholder.com/150/5e12c6"
              },
              {
                "albumId": 1,
                "_id": "22",
                "title": "et ea illo et sit voluptas animi blanditiis porro",
                "url": "https://via.placeholder.com/600/45601a",
                "thumbnailUrl": "https://via.placeholder.com/150/45601a"
              },
              {
                "albumId": 1,
                "_id": "23",
                "title": "harum velit vero totam",
                "url": "https://via.placeholder.com/600/e924e6",
                "thumbnailUrl": "https://via.placeholder.com/150/e924e6"
              },
              {
                "albumId": 1,
                "_id": "24",
                "title": "beatae officiis ut aut",
                "url": "https://via.placeholder.com/600/8f209a",
                "thumbnailUrl": "https://via.placeholder.com/150/8f209a"
              },
              {
                "albumId": 1,
                "_id": "25",
                "title": "facere non quis fuga fugit vitae",
                "url": "https://via.placeholder.com/600/5e3a73",
                "thumbnailUrl": "https://via.placeholder.com/150/5e3a73"
              },
              {
                "albumId": 1,
                "_id": "26",
                "title": "asperiores nobis voluptate qui",
                "url": "https://via.placeholder.com/600/474645",
                "thumbnailUrl": "https://via.placeholder.com/150/474645"
              },
              {
                "albumId": 1,
                "_id": "27",
                "title": "sit asperiores est quos quis nisi veniam error",
                "url": "https://via.placeholder.com/600/c984bf",
                "thumbnailUrl": "https://via.placeholder.com/150/c984bf"
              },
              {
                "albumId": 1,
                "_id": "28",
                "title": "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
                "url": "https://via.placeholder.com/600/392537",
                "thumbnailUrl": "https://via.placeholder.com/150/392537"
              },
              {
                "albumId": 1,
                "_id": "29",
                "title": "aut ipsam quos ab placeat omnis",
                "url": "https://via.placeholder.com/600/602b9e",
                "thumbnailUrl": "https://via.placeholder.com/150/602b9e"
              },
              {
                "albumId": 1,
                "_id": "30",
                "title": "odio enim voluptatem quidem aut nihil illum",
                "url": "https://via.placeholder.com/600/372c93",
                "thumbnailUrl": "https://via.placeholder.com/150/372c93"
              },
              {
                "albumId": 1,
                "_id": "31",
                "title": "voluptate voluptates sequi",
                "url": "https://via.placeholder.com/600/a7c272",
                "thumbnailUrl": "https://via.placeholder.com/150/a7c272"
              },
              {
                "albumId": 1,
                "_id": "32",
                "title": "ad enim dignissimos voluptatem similique",
                "url": "https://via.placeholder.com/600/c70a4d",
                "thumbnailUrl": "https://via.placeholder.com/150/c70a4d"
              },
              {
                "albumId": 1,
                "_id": "33",
                "title": "culpa ipsam nobis qui fuga magni et mollitia",
                "url": "https://via.placeholder.com/600/501fe1",
                "thumbnailUrl": "https://via.placeholder.com/150/501fe1"
              },
              {
                "albumId": 1,
                "_id": "34",
                "title": "vitae est facere quia itaque adipisci perferendis id maiores",
                "url": "https://via.placeholder.com/600/35185e",
                "thumbnailUrl": "https://via.placeholder.com/150/35185e"
              },
              {
                "albumId": 1,
                "_id": "35",
                "title": "tenetur minus voluptatum et",
                "url": "https://via.placeholder.com/600/c96cad",
                "thumbnailUrl": "https://via.placeholder.com/150/c96cad"
              },
              {
                "albumId": 1,
                "_id": "36",
                "title": "expedita rerum eaque",
                "url": "https://via.placeholder.com/600/4d564d",
                "thumbnailUrl": "https://via.placeholder.com/150/4d564d"
              },
              {
                "albumId": 1,
                "_id": "37",
                "title": "totam voluptas iusto deserunt dolores",
                "url": "https://via.placeholder.com/600/ea51da",
                "thumbnailUrl": "https://via.placeholder.com/150/ea51da"
              },
              {
                "albumId": 1,
                "_id": "38",
                "title": "natus magnam iure rerum pariatur molestias dolore nisi",
                "url": "https://via.placeholder.com/600/4f5b8d",
                "thumbnailUrl": "https://via.placeholder.com/150/4f5b8d"
              },
              {
                "albumId": 1,
                "_id": "39",
                "title": "molestiae nam ullam et rerum doloribus",
                "url": "https://via.placeholder.com/600/1e71a2",
                "thumbnailUrl": "https://via.placeholder.com/150/1e71a2"
              },
              {
                "albumId": 1,
                "_id": "40",
                "title": "est quas voluptates dignissimos sint praesentium nisi recusandae",
                "url": "https://via.placeholder.com/600/3a0b95",
                "thumbnailUrl": "https://via.placeholder.com/150/3a0b95"
              },
              {
                "albumId": 1,
                "_id": "41",
                "title": "in voluptatem doloremque cum atque architecto deleniti",
                "url": "https://via.placeholder.com/600/659403",
                "thumbnailUrl": "https://via.placeholder.com/150/659403"
              },
              {
                "albumId": 1,
                "_id": "42",
                "title": "voluptatibus a autem molestias voluptas architecto culpa",
                "url": "https://via.placeholder.com/600/ca50ac",
                "thumbnailUrl": "https://via.placeholder.com/150/ca50ac"
              }
        ],
        // cart: [],
        // total: 0
        
    };

    // addCart = (id) =>{
    //     const {products, cart} = this.state;
    //     const check = cart.every(item =>{
    //         return item._id !== id
    //     })
    //     if(check){
    //         const data = products.filter(product =>{
    //             return product._id === id
    //         })
    //         this.setState({cart: [...cart,...data]})
    //     }else{
    //         alert("The product has been added to cart.")
    //     }
    // };

    // reduction = id =>{
    //     const { cart } = this.state;
    //     cart.forEach(item =>{
    //         if(item._id === id){
    //             item.count === 1 ? item.count = 1 : item.count -=1;
    //         }
    //     })
    //     this.setState({cart: cart});
    //     this.getTotal();
    // };

    // increase = id =>{
    //     const { cart } = this.state;
    //     cart.forEach(item =>{
    //         if(item._id === id){
    //             item.count += 1;
    //         }
    //     })
    //     this.setState({cart: cart});
    //     this.getTotal();
    // };

    // removeProduct = id =>{
    //     if(window.confirm("Do you want to delete this product?")){
    //         const {cart} = this.state;
    //         cart.forEach((item, index) =>{
    //             if(item._id === id){
    //                 cart.splice(index, 1)
    //             }
    //         })
    //         this.setState({cart: cart});
    //         this.getTotal();
    //     }
       
    // };

    // getTotal = ()=>{
    //     const{cart} = this.state;
    //     const res = cart.reduce((prev, item) => {
    //         return prev + (item.price * item.count);
    //     },0)
    //     this.setState({total: res})
    // };
    
    // componentDidUpdate(){
    //     localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
    //     localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    // };

    // componentDidMount(){
    //     const dataCart = JSON.parse(localStorage.getItem('dataCart'));
    //     if(dataCart !== null){
    //         this.setState({cart: dataCart});
    //     }
    //     const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
    //     if(dataTotal !== null){
    //         this.setState({total: dataTotal});
    //     }
    // }
  

    render() {
        const {products} = this.state;
        // const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


