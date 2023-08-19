class EmailService {
  sendEmail(message: string, receiver: string): void {
    console.log('Email sent to ' + receiver + ' with message: ' + message)
  }
}

class MyApplication {
  private email: EmailService = new EmailService()

  processMessage(msg: string, receiver: string): void {
    this.email.sendEmail(msg, receiver)
  }
}

let emailService = new EmailService()
emailService.sendEmail('Hello World', 'receiver@example.com')

const app = new MyApplication()
app.processMessage('Hello World', 'world@example.com')
