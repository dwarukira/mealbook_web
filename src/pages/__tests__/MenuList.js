import React from "react"
import { MenuList } from "../MenuList"
import { BrowserRouter as Router } from "react-router-dom";
import  renderer from "react-test-renderer";
describe("The MenuList Component", () => {

    describe("The MenuList ", ()=>{
        it(`Should not regress`, ()=> {
            const menu = {
                "menu":{
                    "menu_items": [
                    {
                        "meal": {
                            "id": 1,
                            "caterer": {
                                "username": "duncan",
                                "id": 1,
                                "email": "dwarukira@gmail.com"
                            },
                            "photo": "http://localhost:5000/uploads/ID_1.JPG",
                            "_links": {
                                "self": "http://localhost:5000/api/v2/meal/1",
                                "collection": "http://localhost:5000/api/v2/meals"
                            },
                            "posted_on": "2018-07-08T12:15:20.738076+00:00",
                            "name": "Cool",
                            "price": 10.0
                        },
                        "id": 9
                    },
                    {
                        "meal": {
                            "id": 2,
                            "caterer": {
                                "username": "duncan",
                                "id": 1,
                                "email": "dwarukira@gmail.com"
                            },
                            "photo": "http://localhost:5000/uploads/ID_2.JPG",
                            "_links": {
                                "self": "http://localhost:5000/api/v2/meal/2",
                                "collection": "http://localhost:5000/api/v2/meals"
                            },
                            "posted_on": "2018-07-08T12:15:49.312743+00:00",
                            "name": "test",
                            "price": 10.0
                        },
                        "id": 10
                    }]
                }
            }

            const dispatch =() =>{
                
            }
            const tree = renderer.create(
                <Router>
                    <MenuList menu={menu} dispatch={dispatch}/>
                </Router>
            )

            expect(tree.toJSON()).toMatchSnapshot()
        })
    })
   
})