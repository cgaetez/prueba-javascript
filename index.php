<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <!-- Bootstrap CSS 5.1.3-->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
     <!-- Reference CSS-->
     <link rel="stylesheet" href="./assets/css/style.css">
    <title>Prueba javascript</title>
</head>
<body>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-dark">
        <img src="" />
        <h1>SuperHero</h1>
    </header>
    <main class="container">
        <section class="row">
            <div class="col-6 offset-3">
                <img src="https://picsum.photos/id/237/800/400"  class="img-fluid"/>
            </div>
        </section>
        <section class="row mb-3">
            <form class="col-6 offset-3">
                <h2>Encuentra tu SuperHero</h2>
                <div class="input-group mb-3">
                    <label for="hero" class="d-block w-100">Ingresa el número del SuperHero a buscar</label>
                    <input type="text" id="hero" class="form-control d-block" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                <button class="btn btn-primary" id="buscar">Buscar</button>
              </form>
        </section>
        <section id="resultado" class="row">
            <div class="col-12 col-md-6">
                <div class="card mb-3">
                    <div class="row g-0">
                      <div class="col-md-6">
                        <img src="..." class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-6">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-12  col-md-6 bg-dark" id="canva">

            </div>
        </section>
    </main>
    <footer>

    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"></script>
    
    <script src="https://cdn.canvasjs.com/canvasjs.min.js"></script>
    <script src="./assets/js/script.js"></script>
</body>
</html>