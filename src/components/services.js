import React, { Component } from 'react';
import {FaCocktail,FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from './Titles';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,

                title: " free cocktail",

                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore tenetur, totam cum delectus veritatis facere, veniam perspiciatis neque possimus amet ea doloremque quae ut. Ab ex optio nemo reprehenderit."

            },
            {
                icon:<FaHiking />,

                title: " Endless Hiking",

                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore tenetur, totam cum delectus veritatis facere, veniam perspiciatis neque possimus amet ea doloremque quae ut. Ab ex optio nemo reprehenderit."


            }, {
                icon:<FaShuttleVan/>,

                title: "Travel friendly",

                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore tenetur, totam cum delectus veritatis facere, veniam perspiciatis neque possimus amet ea doloremque quae ut. Ab ex optio nemo reprehenderit."

            }, {
                icon:<FaBeer />,

                title: " free services",

                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore tenetur, totam cum delectus veritatis facere, veniam perspiciatis neque possimus amet ea doloremque quae ut. Ab ex optio nemo reprehenderit."

            },

        ]
    }
    render() {
        return (
            <div>
                <section className='services'>
                <Title title="services"/>
                <div className='services-center'>

                    {
                        this.state.services.map((item,index)=>{
                                return <article key  ={index} className='service'>
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                        })
                    }
                </div>
                </section>
               
                 
            </div>
        );
    }
}
