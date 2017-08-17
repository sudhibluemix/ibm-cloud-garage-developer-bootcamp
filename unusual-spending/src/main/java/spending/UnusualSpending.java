package spending;

class UnusualSpending {
  private Fetcher fetcher;
  private Categorizer categorizer;
  private Emailer emailer;

  public UnusualSpending(Fetcher fetcher, Categorizer categorizer, Emailer emailer) {
    this.fetcher = fetcher;
    this.categorizer = categorizer;
    this.emailer = emailer;
  }

  void sendEmail(long userId) {
    Payments payments = fetcher.fetch(userId);
    Payments categorizePayments = categorizer.categorize(payments);
    emailer.email(userId, categorizePayments);
  }
}
