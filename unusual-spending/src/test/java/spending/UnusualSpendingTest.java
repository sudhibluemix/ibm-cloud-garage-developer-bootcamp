package spending;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class UnusualSpendingTest {
  @InjectMocks
  UnusualSpending unusualSpending;

  @Mock
  private Fetcher fetcher;

  @Mock
  private Categorizer categorizer;

  @Mock
  private Emailer emailer;

  @Test
  public void sendEmail() {

    Payments payments = new Payments();
    Payments categorizePayments = new Payments();

    when(fetcher.fetch(1L)).thenReturn(payments);

    when(categorizer.categorize(payments)).thenReturn(categorizePayments);

    unusualSpending.sendEmail(1L);

    verify(emailer).email(1L, categorizePayments);
  }

  @Test
  public void canary() {
    assertTrue("canary should be true", true);
  }
}
