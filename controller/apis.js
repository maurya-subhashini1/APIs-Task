const {crickets}=require('../modle/schemaa')
const querystring=require('querystring')
const shechdule=require("node-schedule")



shiprocket = () => {
    const request = require("request-promise");
    const options = {
      uri:`http://194.195.119.155:7000/match-list?token=pavanrfvtgbhnjm345yhdfdhhdhhdhjjskk`,
    };
    request(options)
      .then( function (response) {
        data=JSON.parse(response)
        data.result.result.forEach ( async element => { 
          shechdule.scheduleJob("	*/10 * * * * ", async() => {
              console.log('running');
           if(element.sportId==='4'){
 
            try{
              const user=new crickets({
                  eventName:element.eventName,
                  eventId:element.eventId,
                  marketId:element.marketId
              })
              const insertdata=await user.save();
              console.log({status:200,succus:true,insertdata});
          }catch(e){
            console.log(e);
          }
           }

        })
        })
      })
      .catch(function (err) {
        console.log(err);
      });
    
  };  
  
  shiprocket()



  module.exports.getdatabyid = (req, res) => {
    const request = require("request-promise");
    const options = {
        method: "GET",
        uri:`http://194.195.119.155:7000/match-data/${req.params.marketId}?token=pavanrfvtgbhnjm345yhdfdhhdhhdhjjskk`,
        JSON:true
    };
  
    request(options)
      .then(function (response) {
        data=JSON.parse(response)
        k=(data.result[req.params.marketId].diamond);
        findData=JSON.parse(k)
        if(k){
          console.log(true);
            findData.data.t3.forEach(element => {
            data={
            mid:element.mid,
            nat:element.nat,
            sid:element.sid}
            })
          res.send(data)
        }else if(k===null){
          data={
            mid:[],
            nat:[],
            sid:[]}
            res.send(data)
        }
        
      })
      .catch(function (err) {
        res.send(err);
        console.log(err);
      });
  };




