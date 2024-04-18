public with sharing class AccountListControllerLwc {
    @AuraEnabled(cacheable=true)
    public static list<Account> queryAccountsByRevenue(Decimal annualRevenue)
    {
        return [SELECT Name, AnnualRevenue FROM Account where AnnualRevenue >=:annualRevenue];

    }

}