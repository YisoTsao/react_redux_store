import React from "react";
import { BaseLayout } from "../components/Layout";
class Books extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      status: "In progress...",
      books: [],
      getUser: () => {
        return "gary tt";
      },
    };
  }

  static maxBook() {
    return 10;
  }

  componentDidMount() {
    console.log("Status: ", this.state.status);
    setTimeout(() => {
      this.setState({ books: ["salad", "cooking"] });
      this.setState({
        isLoading: false,
        status: "Complete!",
      });
    }, 1500);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate Status: ", this.state.books);
  }

  noticeMsg() {
    alert("gg");
  }

  getBookId() {
    return "gg";
  }

  render() {
    return (
      <BaseLayout>
        <div className="App">
          {this.state.isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              <h1>max</h1>
              <div>{Books.maxBook()}</div>
              <div>{this.state.getUser()}</div>
              <button
                onClick={() =>
                  this.setState({ books: ["newSalad", "newCooking"] })
                }
              >
                show alert
              </button>
              <input />
              <h2>{this.getBookId()}</h2>
            </div>
          )}
        </div>
      </BaseLayout>
    );
  }
}
export default Books;
