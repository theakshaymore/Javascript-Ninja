<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
    />
    <link rel="stylesheet" href="styles.css" />
    <title>Document</title>
  </head>
  <body>
    <!-- navbar -->
    <!-- <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="button is-primary mt-2 ml-2 mb-2" href="#">Get Code</a>
      </div>
    </nav> -->
    <div class="container mt-5">
      <!-- Heading -->
      <div class="notification is-primary ml-0">
        <span class="is-size-2 has-text-left has-text-weight-bold"
          >Age Calculator</span
        >
      </div>

      <!-- input fields -->
      <div class="container notification ml-5 my-3">
        <!-- birthdate -->
        <div class="field">
          <label class="label">Date of Birth</label>
          <div class="columns is-mobile">
            <div class="column">
              <input
                class="input is-small"
                type="text"
                placeholder="Date"
                id="date"
              />
            </div>
            <div class="column">
              <input
                class="input is-small"
                type="text"
                placeholder="Month"
                id="month"
              />
            </div>
            <div class="column">
              <input
                class="input is-small"
                type="text"
                placeholder="Year"
                id="year"
              />
            </div>
          </div>
        </div>

        <!-- output -->
        <div
          id="age"
          class="has-text-centered is-size-5 has-text-weight-bold"
        ></div>
        <!-- button -->
        <div class="control mt-5 has-text-centered">
          <button
            id="btn"
            class="
              button
              is-primary is-fullwidth
              has-text-weight-bold
              is-size-5
            "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    {/* <script src="script.js"></script> */}
  </body>
</html>
