/**
 * Send email based on a template message intent from Dialogflow Agent.
 */
function email_(ContractNo, DocUrl, Approveremail, Requesteremail, RequestContent, Last, state) {
  var scriptUri = "https://script.google.com/macros/s/AKfycbxx3dEjiB396eGWDOywF9QggiAMhnPLQ3eJBnpyMX2ZE9ALZx3a4wqw1D-blZVCpZllMw/exec";
  var ApprovalUrl = scriptUri + '?state=APPROVED&last=' + Last;
  var DenyUrl = scriptUri + '?state=DENIED&last=' + Last;
  
  var form = {
    requester_Email: Requesteremail,
    requester_Content: RequestContent,
    Contract_No: ContractNo,
    Doc_link: DocUrl,
    approval_Url: ApprovalUrl,
    deny_Url: DenyUrl
  };
  if (state === undefined) {
    var templ = HtmlService.createTemplateFromFile('EmailTemp');
    templ.form = form;
    var message = templ.evaluate().getContent();
    MailApp.sendEmail({
      to: Approveremail,
      bcc: Session.getEffectiveUser().getEmail(),
      subject: "New New contract approval request",
      htmlBody: message
    });
  }
  if (state === "APPROVED") {
    var templ = HtmlService.createTemplateFromFile('EmailApprove');
    templ.form = form;
    var message = templ.evaluate().getContent();
    MailApp.sendEmail({
      to: Requesteremail,
      bcc: Session.getEffectiveUser().getEmail(),
      subject: "Your request Approved",
      htmlBody: message
    });
  }
  if (state === "DENIED") {
    var templ = HtmlService.createTemplateFromFile('EmailDeny');
    templ.form = form;
    var message = templ.evaluate().getContent();
    MailApp.sendEmail({
      to: Requesteremail,
      bcc: Session.getEffectiveUser().getEmail(),
      subject: "Your request Denied",
      htmlBody: message
    });
  }
}
