public with sharing class ContactController {
   
    @AuraEnabled(cacheable=true)


    public static List<Contact> getContactList(){
        List<Contact> conList = [
            SELECT Id, Name, FirstName, LastName, Title, Phone, Email, PhotoUrl 
            FROM Contact 
            WHERE PhotoUrl != null 
            WITH USER_MODE 
            limit 10
            ];

        return conList;
    }
}
