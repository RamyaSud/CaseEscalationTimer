public with sharing class CaseController {
    public CaseController() {

    }
    @AuraEnabled(cacheable=true)
    public static long getEscalateTimeInSecs(Id caseRecordId){
        try {
            List<Long> hourMinSec = new List<Long>();
            Long seconds = 0;
            //decimal ecsaltionTime = 48;
            Case casRec = [select Id,CreatedDate from Case where Id=:caseRecordId];
           // Case cas = [select Id,CreatedDate from Case where Id='5008c00001WmWnjAAF'];
            datetime ecalateDatetime = casRec.CreatedDate + 2;  // 2 days -- 48 hours
            Long escalateTimeLong = ecalateDatetime.getTime();
            Long currentDTLong = DateTime.now().getTime();
            if(escalateTimeLong > currentDTLong){
                Long milliseconds = escalateTimeLong - currentDTLong ;
                seconds = (milliseconds / 1000);
            
            }
               sfdx
           return seconds;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}