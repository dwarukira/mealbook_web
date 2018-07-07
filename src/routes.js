import React  from "react"
import { Route  } from "react-router-dom"
import { App } from "./pages/App";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import MenuList  from "./pages/MenuList";
import Orders  from "./pages/Orders";
import  MealList  from "./pages/MealList";
import AddMeal from "./pages/AddMeal";
import   DB  from "./pages/DashBoard";
import MealEdit from "./pages/MealEdit";
import MealDetails from "./pages/MealDetails";
import AdminOrders from "./pages/AdminOrders";

export const DashBoard = (props) => {
    const { url } = props.match
    
    return (
        <React.Fragment>
            <DB>
             <Route path={`${url}`} exact component={MealList}/>
             <Route path={`${url}/add`} exact component={AddMeal}/> 
             <Route path={`${url}/meal/edit/:id`} exact component={MealEdit}/> 
             <Route path={`${url}/meal/:id`} exact component={MealDetails}/> 
             <Route path={`${url}/menu`} exact component={MenuList}/> 
             <Route path={`${url}/orders`} exact component={AdminOrders}/>
            </DB>
        </React.Fragment>
    )
}



export const AppRoutes = (props) => {
    const { url } = props.match    
    return (
        <React.Fragment>
            <App>
                <Route path={`${url}`} exact component={MenuList}/> 
                <Route path={`${url}orders`} exact component={Orders}/>        
            </App>
        </React.Fragment>
    )
}


export const AuthRoutes = (props) => {
    const { match } = props;
    console.log(props);
    
    return (
        <div className="container">
            <Route path={`${match.url}/login`} exact component={Login} />
            <Route path={`${match.url}/register`} exact component={Register} />
        </div>
    )
}
