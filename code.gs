function autoFillGoogleDocFromForm(e) {

  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var last = sh.getLastRow();
  var Requesteremail = e.values[1];
  var ContractNo = e.values[2];
  var RequestContent = e.values[3];
  var Approveremail = e.values[5];
  var DocUrl = e.values[4];

  email_(ContractNo, DocUrl, Approveremail, Requesteremail, RequestContent, last); 
}
