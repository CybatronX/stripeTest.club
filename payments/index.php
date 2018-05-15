<HTML>
  <Head>
    <script src="https://js.stripe.com/v3/"></script>
    <script type="text/javascript" src="./payments.js"></script>

     <link rel="stylesheet" type="text/css" href="./payments.css">
        
  </Head>
  <Body>
    <form action="/charge" method="post" id="payment-form">
      <div class="form-row">
        <label for="card-element">
          Credit or debit card
        </label>
        <div id="card-element">
          <!-- A Stripe Element will be inserted here. -->
        </div>

        <!-- Used to display form errors. -->
        <div id="card-errors" role="alert"></div>
      </div>

      <button>Submit Payment</button>
    </form>
  </Body>

<HTML>