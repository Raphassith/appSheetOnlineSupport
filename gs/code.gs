var userId = null;
var displayName = null;
var pictureUrl = null;

function doGet(e) {
  userId = e.parameter.userId;
  displayName = e.parameter.displayName;
  pictureUrl = e.parameter.pictureUrl;
  
  return HtmlService.createTemplateFromFile("index").evaluate().setTitle("ระบบแจ้งซ่อม Online")
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function saveRequest(userId,displayName,pictureUrl,request){
  SpreadsheetApp.getActive().getSheetByName("requests").appendRow([userId,displayName,pictureUrl,request]);
}
