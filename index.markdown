---
layout: default
title: Poljoprivredni proizvodi
---
{% include navigation.html %}

<section id="proizvodi" class="container my-5">
        <h2 class="text-center mb-4">{{ site.data.i18n.our_products }}</h2>
        <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active text-center">
                    <img src="{{ site.baseurl }}/assets/images/apples.jpg" class="d-block mx-auto" alt="Jabuke">
                    <p class="mt-2">Jabuke</p>
                </div>
                <div class="carousel-item text-center">
                    <img src="/assets/images/lettuce.jpg" class="d-block mx-auto" alt="Zelena salata">
                    <p class="mt-2">Zelena salata</p>
                </div>
                <div class="carousel-item text-center">
                    <img src="/assets/images/tomato_juice.jpg" class="d-block mx-auto" alt="Mleveni paradajz">
                    <p class="mt-2">Mleveni paradajz</p>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
</section>
<section id="kontakt" class="container my-5">
        <h2 class="text-center mb-4">Kontaktirajte nas</h2>
        <div class="row">
            <div class="col-md-6">
                <iframe class="w-100" height="300" src="https://www.google.com/maps/embed?" allowfullscreen></iframe>
            </div>
            <div class="col-md-6">
                <p><strong>Adresa:</strong> Ulica Poljoprivrednika 12, Beograd, Srbija</p>
                <p><strong>Telefon:</strong> +381 64 123 4567</p>
                <p><strong>Email:</strong> info@poljoprivreda.rs</p>
                <p><strong>Radno vreme:</strong></p>
                <ul>
                    <li>Ponedeljak - Petak: 08:00 - 18:00</li>
                    <li>Subota: 08:00 - 14:00</li>
                    <li>Nedelja: Zatvoreno</li>
                </ul>
            </div>
        </div>
</section>
