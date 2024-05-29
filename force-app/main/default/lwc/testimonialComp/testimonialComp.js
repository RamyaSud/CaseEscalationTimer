import { LightningElement,wire} from 'lwc';
import getStudTestimonials from '@salesforce/apex/TestimonialController.getStudentTestimonials';

export default class TestimonialComp extends LightningElement {

        @wire(getStudTestimonials)
        CandidateTestimonials
}