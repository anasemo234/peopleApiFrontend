import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react'

// page components
import Index from '../pages/Index';
import Show from '../pages/Show';



const Main = (props) => {

    const [ people, setPeople ] = useState(null);

    const URL = 'http://localhost:4000/people/';

    const getPeople = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPeople(data);
    }


    const createPeople = async (person) => {
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify(person)
            });
            getPeople();
    };


    const updatePeople = async (updatedPerson, id) => {
            await fetch(URL + id, {
                method: "PUT",
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify(updatedPerson)
            });
            getPeople();
    }

    const deletePeople = async (id) => {
        // confirm deletion operations go here
        // if yes
            await fetch(URL + id, {
                method: "DELETE"
            });
            getPeople();
            // if no
                // return to previous page
    }




    useEffect(() => {
            getPeople();
    }, []);

    return (
        <main>
                <Route exact path="/">
                    <Index  people={people} createPeople={createPeople} />
                    </Route>
                <Route path="/people/:id" render={(renderProps) => (
                     <Show 
                            people={people}
                            {...renderProps} 
                            updatePeople={updatePeople}
                            deletePeople={deletePeople}
                         />
                    )} />



        </main>
    )
};

export default Main;