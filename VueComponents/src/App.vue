<script setup>


</script>

<template>
  <section class="section-3">
    <grid-comp columnType="col-1-of-4">
      <card-comp
          price="278"
          url="https://img.anime2you.de/2021/06/jujutsu.jpg"
          slot='col-1'
          title="New Card 1"
          card-front-color="blue"
          card-back-color="blue"
          span-color-input="blue"
          card-back-button-color="blue"
          card-back-button-color-font="white"
      >
        <p slot="p">
          Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque eveniet iste magn
        </p>
      </card-comp>
      <card-comp
          card-front-color="orange"
          card-back-color="orange"
          span-color-input="orange"
          price="279"
          url="https://i.pinimg.com/736x/6a/6e/d3/6a6ed31725bcbd9df4cb09dadbca44c3.jpg"
          slot='col-2'
          title="New Card 2"
          card-back-button-color="orange"
          card-back-button-color-font="white"
      >
        <p slot="p">
          Paragraph 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque eveniet iste magni
        </p>
      </card-comp>
      <card-comp
          card-front-color="red"
          card-back-color="red"
          span-color-input="red"
          price="229"
          url="https://www.animenachrichten.de/wp-content/uploads/2022/03/Jujutsu-Kaisen-Newsbild-Maerz-2022.jpg"
          slot='col-3'
          title="New Card 3"
          card-back-button-color="red"
          card-back-button-color-font="white"
      >
        <p slot="p">
          Paragraph 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque eveniet iste magni
        </p>
      </card-comp>
      <card-comp
          card-front-color="blue"
          card-back-color="blue"
          span-color-input="blue"
          price="249"
          url="https://areajugones.sport.es/wp-content/uploads/2021/11/jujutsu-kaisen-0-promocion.jpg"
          slot='col-4'
          title="New Card 4"
          card-back-button-color="blue"
          card-back-button-color-font="black"
      >
        <p slot="p">
          Paragraph 4: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque eveniet iste magni
        </p>
      </card-comp>
    </grid-comp>
  </section>

  <section class="section-7">
    <grid-comp>
      <drop-down background-color="red" slot='col-1'>
        <h4 slot="Title">Title 1</h4>
        <drop-link>Link 1</drop-link>
        <drop-link>Link 2</drop-link>
        <drop-link>Link 3</drop-link>
        <drop-link>Link 4</drop-link>
        <drop-link>Link 5</drop-link>
        <drop-link>Link 6</drop-link>
      </drop-down>
      <drop-down background-color="blue" slot="col-2">
        <h4 slot="Title">Title 2</h4>
        <drop-link>Link 1</drop-link>
        <drop-link>Link 2</drop-link>
      </drop-down>
      <drop-down background-color="orange" slot="col-3">
        <h4 slot="Title">Title 3</h4>
        <drop-link>Link 1</drop-link>
        <drop-link>Link 2</drop-link>
        <drop-link>Link 3</drop-link>
      </drop-down>
      <drop-down background-color="blue" slot="col-4">
        <h4 slot="Title">Title 4</h4>
        <drop-link>Link 1</drop-link>
      </drop-down>
    </grid-comp>
  </section>

  <section class="section-6">
    <grid-comp columnType="col-1-of-4">
      <btn-exp
          slot='col-1'
          color-button="blue"
          font-color="white"
          content="Button"></btn-exp>
      <btn-exp
          slot='col-2'
          color-button="red"
          font-color="white"
          content="Button"></btn-exp>
      <btn-exp
          slot='col-3'
          color-button="orange"
          font-color="white"
          content="Button"></btn-exp>
      <btn-exp
          slot='col-4'
          color-button="red"
          font-color="black"
          content="Button"></btn-exp>
    </grid-comp>
  </section>


  <section class="section-7">
    <grid-comp columnType="col-1-of-4">
      <ft-box
          title="xTitle 1"
          card-color="blue"
          slot='col-1'
          c="green"
      >
        <p slot="p">
          Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque eveniet iste magni,
        </p>
      </ft-box>
      <ft-box title="Title 2"
              slot='col-2'
              card-color="orange"
      >

        <p slot="p">
          Paragraph 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque eveniet iste magni,
        </p></ft-box>
      <ft-box title="Title 3"
              slot='col-3'
              card-color="red"
      >
        <p slot="p">
          Paragraph 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque eveniet iste magni,
        </p>
      </ft-box>
      <ft-box title="Title 4"
              slot='col-4'
              card-color="orange"
      >
        <p slot="p">
          Paragraph 4: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque eveniet iste magni,
        </p>
      </ft-box>
    </grid-comp>
  </section>

  <section class="section-2">
    <table-comp>
      <head-table number-column="4">
        <head-item slot="col-1">Name</head-item>
        <head-item slot="col-2">Lastname</head-item>
        <head-item slot="col-3">Age</head-item>
        <head-item slot="col-4">Phone Number</head-item>
      </head-table>
      <body-table number-column="4">
        <body-item slot="col-1">Lebron</body-item>
        <body-item slot="col-2">James</body-item>
        <body-item slot="col-3">38</body-item>
        <body-item slot="col-4">+4921145257</body-item>
      </body-table>
      <body-table number-column="4">
        <body-item slot="col-1">Russel</body-item>
        <body-item slot="col-2">Westbrook</body-item>
        <body-item slot="col-3">33</body-item>
        <body-item slot="col-4">+4921225257</body-item>
      </body-table>
      <body-table number-column="4">
        <body-item slot="col-1">James</body-item>
        <body-item slot="col-2">harden</body-item>
        <body-item slot="col-3">22</body-item>
        <body-item slot="col-4">+4921225257</body-item>
      </body-table>
      <body-table number-column="4">
        <body-item slot="col-1">Kendrick</body-item>
        <body-item slot="col-2">Lamar</body-item>
        <body-item slot="col-3">22</body-item>
        <body-item slot="col-4">+4921225257</body-item>
      </body-table>
      <body-table number-column="4">
        <body-item slot="col-1">John</body-item>
        <body-item slot="col-2">Wahl</body-item>
        <body-item slot="col-3">22</body-item>
        <body-item slot="col-4">+4921225257</body-item>
      </body-table>
    </table-comp>
  </section>

</template>


<style scoped>

.section-1 {
  background-image: linear-gradient(to right bottom, rgba(255, 0, 144, 0.63), rgba(128, 117, 0, 0.34)), url("https://www.itl.cat/pngfile/big/242-2421741_desktop-wallpaper-8k.jpg");
  background-size: cover;
  position: relative;
  height: 50rem;
  width: 100%;
}

.section-2 {
  position: relative;

  padding: 20rem 0;
  background-image: linear-gradient(to right bottom, rgba(0, 0, 255, 0.63), rgba(0, 128, 0, 0.34)), url("https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg");
  background-size: cover;
}

.section-3 {
  position: relative;
  width: 100%;
  margin-top: -7rem;
  height: 50rem;
  padding: 20rem 0;
  background-image: linear-gradient(to right bottom, rgba(255, 0, 0, 0.55), rgba(255, 165, 0, 0.4)), url("https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg");
  background-size: cover;
  clip-path: polygon(0 0, 100% 5rem, 100% 100%, 0 100%);
}

.section-4 {
  position: relative;
  margin-top: -15rem;
  padding: 4rem 8rem;
  background-image: linear-gradient(to right bottom, rgba(0, 0, 255, 0.63), rgba(0, 128, 0, 0.34)), url("https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg");
  background-size: cover;
}


.section-5 {
  position: relative;
  margin-top: -2rem;
  padding: 20rem 0;
  background-color: rgba(128, 128, 128, 0.2);;
  background-size: cover;
  transform: skewY(-2deg);
}

.section-6 {
  position: relative;
  margin-top: -7rem;
  height: 20rem;
  padding: 20rem 0;
  background-image: linear-gradient(to right bottom, rgb(0, 0, 0), rgba(0, 149, 255, 0.4)), url("https://i.pinimg.com/originals/7f/f5/aa/7ff5aa2204c532c80dcc425080aeb1be.jpg");
  background-size: cover;
  clip-path: polygon(0 0, 100% 5rem, 100% 100%, 0 100%);
}

.section-7 {
  position: relative;

  padding: 20rem 0;
  background-color: rgba(128, 128, 128, 0.2);;
  background-size: cover;
}

.section-8 {
  position: relative;
  margin-top: -2rem;
  padding: 20rem 0;
  background-color: rgba(128, 128, 128, 0.2);;
  background-size: cover;
}

p{
  margin-top: 30px;
}

grid-comp{
  position: absolute;
  top:200px;

}

</style>
