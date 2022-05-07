import axios from "axios";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileInfo from "./profileInfo";
import TableUser from "./tableUser";

export default class App extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const persons = response.data;
      this.setState({ persons });
    });
  }
  render() {
    return (
      <>
        <TableUser />
        <Routes>
          {this.state.persons.map((person) => {
            return (
              <Route
                key={person.id}
                path={`/${person.id}`}
                element={<ProfileInfo person={person} />}
              />
            );
          })}
        </Routes>
      </>
    );
  }
}
