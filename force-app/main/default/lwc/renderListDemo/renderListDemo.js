import { LightningElement } from 'lwc';

export default class RenderListDemo extends LightningElement {
    superstars = ['Spiderman', 'Superman', 'Batman', 'Ironman', 'Hulk'];
    contactList =[
        {
            id:1,
            firstname:"Marc",
            lastname:"Benioff"
        },
        {
            id:2,
            firstname:"Tim",
            lastname:"Cook"
        },
        {
            id:3,
            firstname:"Elon",
            lastname:"Musk"
        },
        {
            id:4,
            firstname:"Sundar",
            lastname:"Pichai"
        }
];

}