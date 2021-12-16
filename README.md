Live Web App URL: https://forms.gle/uzrUyfq2cNxqhRpz5

Data storage: https://docs.google.com/spreadsheets/d/1jhcX6ngGVVH3ZBhjiJ663Che7asLaoZyYdWXB1TCyqo/edit?usp=sharing

Created by Google form, Google Apps Script & Google Sheets

Assumptions:
1. Approver work under @gmail.com email accounts
2. The approval base on contract based

To handle new requirements:
Option 1: Design the approval matrix by contract amount
e.g.
- amount < 5001, only 1 approver
- amount between 5001-100000, got 2 approvers
- amount > 100000, need 3 approvers
...etc

System will send the email to each approver one by one once previous approver approved. 
If one of them deny the request, the outcome will be Deny and send back the result to requester.


Option 2: Design the approval matrix per request items by BU/Cost center
e.g.
- Say like there is 2 items within the approval request, one is for A business unit and the other one is for B business unit
- System pre-set A & B business unit will send to different emails
- Once requester submit the request and system will send the seperate email to A business unit approver and B business unit approver
- Either one approver deny the request, the outcome will be Deny for this request and send back the result to requester.



