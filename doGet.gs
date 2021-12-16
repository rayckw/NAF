/**
 * doGet function for the script
 */
function doGet(request) {
  if (request.parameters.state == "APPROVED") {
    var last = (request.parameters.last);
    writeData_("APPROVED", last);
    return ContentService.createTextOutput('Approved success.');
  }
  if (request.parameters.state == "DENIED") {
    var last = (request.parameters.last);   
    writeData_("DENIED", last);
    return ContentService.createTextOutput('Denied success.');
  }
}

/**
 * Write data in Google Sheet based on doGet
 */
function writeData_(state, last) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var dataRange = sheet.getRange(last, 1, 1, sheet.getLastColumn());
  var dataValues = dataRange.getValues();
  if (state === "APPROVED") {
    var rangeApprove = sheet.getRange(last, 7, 1, 1);
    rangeApprove.setValues([[state]]);
  }
  if (state === "DENIED") {
    var rangeDeny = sheet.getRange(last, 7, 1, 1);
    rangeDeny.setValues([[state]]);
  }
  var req_email = dataValues[0][1];
  var nos = dataValues[0][2];
  var content = dataValues[0][3];

  email_(nos,"","",req_email, content, last, state);
}
