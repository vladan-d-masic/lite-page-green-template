---
layout: default
title: Poljoprivredni proizvodi
---
{% include navigation.html %}

<section id="products" class="container my-5">
        <h2 class="text-center mb-4">{{ site.data.i18n.our_products }}</h2>
        <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                {% for image in site.data.landing.images %}
                    <div class="carousel-item {% if forloop.index == 1 %}active{% endif %} text-center">
                        <img src="{{ site.baseurl }}{{ image.url }}" class="d-block mx-auto" alt="{{ image.alt }}">
                        <p class="mt-2">{{ image.alt }}</p>
                    </div>
                {% endfor %}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon p-4" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon p-4" aria-hidden="true"></span>
            </button>
        </div>
</section>
<section id="contact" class="container my-5">
        <h2 class="text-center mb-4">Kontaktirajte nas</h2>
        <div class="row">
            <div class="col-md-6">
                <iframe class="w-100" height="300" src="https://www.google.com/maps/embed?" allowfullscreen></iframe>
            </div>
            <div class="col-md-6">
                <p class="mb-2"><strong>Adresa:</strong> {{ site.data.landing.address }}</p>
                <p class="mb-2"><strong>Telefon:</strong> +381 64 123 4567</p>
                <p class="mb-2"><strong>Email:</strong> info@poljoprivreda.rs</p>
                <p class="mb-2"><strong>Radno vreme:</strong></p>
                <ul class="p-0">
                    <li class="py-1">Ponedeljak - Petak: 08:00 - 18:00</li>
                    <li class="py-1">Subota: 08:00 - 14:00</li>
                    <li class="py-1">Nedelja: Zatvoreno</li>
                </ul>
            </div>
        </div>
</section>
