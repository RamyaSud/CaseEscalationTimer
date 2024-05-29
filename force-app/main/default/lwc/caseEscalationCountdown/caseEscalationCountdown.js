import { LightningElement,api,wire } from 'lwc';
import getEscalateTimeInSecs from '@salesforce/apex/CaseController.getEscalateTimeInSecs';

export default class CaseEscalationCountdown extends LightningElement {
    @api recordId 
    timerId 
    countDownHours = 0
    countDownMins = 0
    countDownSecs = 0
    escTextVisible = false
  /* connectedCallback(){
    this.startTimer()
    }*/
    @wire(getEscalateTimeInSecs,{caseRecordId:'$recordId'})
    escalateTime({data,error}){
        if(data){
           // alert('wire')
           // console.log('seconds= '+data)
          
           this.countDownSecs = data
           this.startTimer() 
        }
        else if(error){
            console.log(JSON.stringify(error))
        }
    }
   startTimer(){
        //alert('timer clicked')
        console.log(this.countDownSecs)
        if(this.countDownSecs !=0 && this.countDownSecs > 0){
           
           this.countDownHours = Math.floor(this.countDownSecs / 3600) // return only quotient
           console.log(this.countDownHours)
           this.countDownSecs = (this.countDownSecs % 3600) // return the remainder
           this.countDownMins = Math.floor(this.countDownSecs / 60)
           console.log(this.countDownMins)
           this.countDownSecs = (this.countDownSecs % 60)
           console.log(this.countDownSecs)

           this.timerId = setInterval(()=> {this.countDown()},1000)
        }
        
    }
    countDown () {
        //alert('countdown started')
        if(this.countDownHours == 0 && this.countDownMins == 0 && this.countDownSecs == 0){
            clearInterval(this.timerId)
            //alert('escalated')
            this.escTextVisible = true
        }
        if(this.countDownSecs == 0){
            if(this.countDownMins > 0){
                this.countDownMins = this.countDownMins - 1
                this.countDownSecs = 60
            }
            else if(this.countDownMins == 0){
                if(this.countDownHours > 0){
                    this.countDownHours = this.countDownHours - 1
                    this.countDownMins = 60   
                }
                else if(this.countDownHours == 0){
                    if(this.countDownMins > 0){
                        this.countDownMins = this.countDownMins - 1
                        this.countDownSecs = 60
                    }
                   
                }
            }
            
        }
        else{
            this.countDownSecs = this.countDownSecs - 1
        }
    }
     
}