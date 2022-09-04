import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CommanderList } from "./commander/CommanderList";
import { CommanderCreate } from "./commander/CommanderCreate";
import { CommanderEdit } from "./commander/CommanderEdit";
import { CommanderShow } from "./commander/CommanderShow";
import { SoldierList } from "./soldier/SoldierList";
import { SoldierCreate } from "./soldier/SoldierCreate";
import { SoldierEdit } from "./soldier/SoldierEdit";
import { SoldierShow } from "./soldier/SoldierShow";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { OpinionList } from "./opinion/OpinionList";
import { OpinionCreate } from "./opinion/OpinionCreate";
import { OpinionEdit } from "./opinion/OpinionEdit";
import { OpinionShow } from "./opinion/OpinionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Commander"
          list={CommanderList}
          edit={CommanderEdit}
          create={CommanderCreate}
          show={CommanderShow}
        />
        <Resource
          name="Soldier"
          list={SoldierList}
          edit={SoldierEdit}
          create={SoldierCreate}
          show={SoldierShow}
        />
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="Opinion"
          list={OpinionList}
          edit={OpinionEdit}
          create={OpinionCreate}
          show={OpinionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
