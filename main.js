// Collecting _Google_form_Responses


function onFormSubmit(e){

  var ID = '1ZB3fj9EA6hnmQHbPxNHsLmypGdNss0j7-GqAs98noyQ';
  var Gform = FormApp.openById(ID); 
  var formResponses = Gform.getResponses();
  for (var i = 0; i < formResponses.length; i++) {
  var formResponse = formResponses[i];

  }
  // If all questions are required, getItemResponses returns responses in form-order
  var itemResponses = formResponse.getItemResponses();

  var PONumber = itemResponses[0].getResponse();  // returns a string
  var Name = itemResponses[1].getResponse();
  var Description = itemResponses[2].getResponse();
  var Plant = itemResponses[3].getResponse();
  var Currency = itemResponses[4].getResponse();
  var Amount = itemResponses[5].getResponse();
  var DocumentDate = itemResponses[6].getResponse();
  

  var BodyTemplate = HtmlService.createTemplateFromFile("Index.html").evaluate().getContent()
                                  .replace("{PONumber}",PONumber)
                                  .replace("{Name}",Name)
                                  .replace("{Description}",Description)
                                  .replace("{Plant}",Plant)
                                  .replace("{Currency}",Currency)
                                  .replace("{Amount}",Amount)
                                  .replace("{DocumentDate}",DocumentDate);


Logger.log([PONumber,Name,Description,Plant,Currency,Amount,DocumentDate])


 MailApp.sendEmail("dme@twigafiber.com","LC OPENING ONLINE REQUEST - " + Name +" ("+Plant +")"  ,BodyTemplate,{htmlBody:BodyTemplate})


}; 
