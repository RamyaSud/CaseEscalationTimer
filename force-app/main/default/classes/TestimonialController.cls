public without sharing class TestimonialController {
    public TestimonialController() {

    }
    @AuraEnabled(cacheable = true)
    public static List<Testimonial__c> getStudentTestimonials(){
        try {
            return [select Testimonial_By__c, Relationship__c,Company_organization__c,Subject__c, Comment__c, Testimonial_Date__c,CreatedDate
                     from Testimonial__c
                     where Relationship__c = 'Training candidate'
                     order by CreatedDate DESC ];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable = true)
    public static List<Testimonial__c> getOtherTestimonials(){
        try {
            return [select Testimonial_By__c, Relationship__c,Company_organization__c,Subject__c, Comment__c, Testimonial_Date__c,CreatedDate
                     from Testimonial__c
                     where Relationship__c != 'Training candidate'
                     order by CreatedDate DESC ];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}