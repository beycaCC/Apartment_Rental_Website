import React, {useState} from 'react'
import Navbar from "../components/Navbar";
import { FaSearch } from 'react-icons/fa';

var data = require("../suggestionQuery.json")

function ContactPage() {

    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log('search', searchTerm);
    }

    return (
        <div className="Contact-Page">
            <Navbar></Navbar>
            <div className="contact-text">
                {/*<img src={backgroundIMG} className="Contact-background-img" alt='question marks background Image'/>*/}
                <div className="centered-text2"><b>How can we help</b></div>

                <div className="search-container">
                    <div className="search-inner">
                        {/*<i className="fa-solid fa-magnifying-glass"></i>*/}
                        <FaSearch id="search-icon"/>
                        <input type="text" placeholder="Type to search..." value={value} onChange={onChange} />
                        {/*<span className="fa fa-info-circle errspan"></span>*/}
                        {/*<button className="search-button" onClick={ () => onSearch(value)}> Search </button>*/}
                    </div>
                </div>

                <div className="dropdown-menu">
                    {data.filter(item => {
                        const searchTerm = value.toLowerCase();
                        const question = item.the_question.toLowerCase();

                        return searchTerm && question.includes(searchTerm) && question !== searchTerm
                    })
                        .slice(0, 10)
                        .map((item) =>
                            (<div
                                    onClick={()=>onSearch(item.the_question)}
                                    className="dropdown-row"
                                    key={item.id}
                                >
                                    {item.the_question}
                            </div>
                    ))}
                </div>

            </div>


            {/*<div> Contact Page </div>*/}
        </div>
    )
}

export default ContactPage