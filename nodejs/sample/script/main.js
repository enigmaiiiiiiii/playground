var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendEmail = function (message, receiver) {
        console.log('Email sent to ' + receiver + ' with message: ' + message);
    };
    return EmailService;
}());
var emailService = new EmailService();
emailService.sendEmail('Hello World', 'receiver@example.com');
