import { LightningElement,wire} from 'lwc';
import getOtherTestimonials from '@salesforce/apex/TestimonialController.getOtherTestimonials';

export default class OtherTestimonialsComp extends LightningElement {
    @wire(getOtherTestimonials)
        OtherTestimonials
}