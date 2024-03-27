public with sharing class contact_search_class {

    @AuraEnabled(cacheable=true)
    public static list<Contact>  emailcontact(string searchtext)
    {
        string key='%'+searchtext+'%';
        return [SELECT id, FirstName,LastName,Phone,Email FROM Contact where FirstName like:key];
    }

}