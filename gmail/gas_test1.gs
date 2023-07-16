function myFunction() {
  let recipient = '';
  let subject = 'GASによるメール';
  let body = 'これはGASによるメールです。';

  // メール送信
  GmailApp.sendEmail(recipient, subject, body);
}
