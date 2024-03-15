function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

let img1 = document.querySelector(".img1");
function img1dec() {
  img1.style.width = "22%";
}

function img1incr() {
  img1.style.width = "46%";
}

function images() {
  let img2 = document.querySelector(".img2");

  img2.addEventListener("mouseenter", function () {
    img2.style.width = "46%";
    img1dec();
  });

  img2.addEventListener("mouseleave", function () {
    img2.style.width = "22%";
    img1incr();
  });

  let img3 = document.querySelector(".img3");

  img3.addEventListener("mouseenter", function () {
    img3.style.width = "46%";
    img1dec();
  });

  img3.addEventListener("mouseleave", function () {
    img3.style.width = "22%";
    img1incr();
  });
}
images();

// Page2 - cards

let cardsInfo = [
  {
    id: "ele1",
    image:
      "https://assets.website-files.com/617fa48948c7ab24b715140e/617fa5505ecb8e2f5f217405_categories_01.webp",
    h2: "Sales Marketing",
    p: "4 month",
  },
  {
    id: "ele1",
    image:
      "https://assets.website-files.com/617fa48948c7ab24b715140e/617fa550a239182daefe2e21_categories_02.webp",
    h2: "Data analytics",
    p: "3 month",
  },
  {
    id: "ele1",
    image:
      "https://assets.website-files.com/617fa48948c7ab24b715140e/617fa550c4055a4a51c6d4ff_categories_03.webp",
    h2: "Copywriting Pro",
    p: "2 month",
  },
  {
    id: "ele1",
    image:
      "https://assets.website-files.com/617fa48948c7ab24b715140e/617fa550a23918491cfe2e20_categories_04-p-500.webp",
    h2: "Design art",
    p: "4 month",
  },
];

let clutter = "";
cardsInfo.forEach((card) => {
  clutter += `<div class="${card.id}">
                <img src=${card.image} alt="">
                <h2>${card.h2}</h2>
                <p>${card.p}</p>
              </div>`;
});

document.querySelector(".page2-content").innerHTML = clutter;

// Page4 - cards

let CardsDetail = [
  {
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores voluptas soluta, dolores nam iure praesentium facere corrupti sapiente minus",
    image:
      "https://assets.website-files.com/617fa48948c7ab24b715140e/617fa55023c6a906cc955301_customers_ava-02.webp",
    h3: "Rob zuber",
    span: "CEO",
  },
  {
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores voluptas soluta, dolores nam iure praesentium facere corrupti sapiente minus",
    image:
      "https://assets.website-files.com/617fa48948c7ab24b715140e/617fa55023c6a906cc955301_customers_ava-02.webp",
    h3: "Rob zuber",
    span: "CEO",
  },
  {
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores voluptas soluta, dolores nam iure praesentium facere corrupti sapiente minus",
    image:
      "https://assets.website-files.com/617fa48948c7ab24b715140e/617fa55023c6a906cc955301_customers_ava-02.webp",
    h3: "Rob zuber",
    span: "CEO",
  },
  {
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores voluptas soluta, dolores nam iure praesentium facere corrupti sapiente minus",
    image:
      "https://assets.website-files.com/617fa48948c7ab24b715140e/617fa55023c6a906cc955301_customers_ava-02.webp",
    h3: "Rob zuber",
    span: "CEO",
  },
  {
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores voluptas soluta, dolores nam iure praesentium facere corrupti sapiente minus",
    image:
      "https://assets.website-files.com/617fa48948c7ab24b715140e/617fa55023c6a906cc955301_customers_ava-02.webp",
    h3: "Rob zuber",
    span: "CEO",
  },
  {
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores voluptas soluta, dolores nam iure praesentium facere corrupti sapiente minus",
    image:
      "https://assets.website-files.com/617fa48948c7ab24b715140e/617fa55023c6a906cc955301_customers_ava-02.webp",
    h3: "Rob zuber",
    span: "CEO",
  },
];

let clutter2 = "";

CardsDetail.forEach((card) => {
  clutter2 += `<div class="card">
                  <p>${card.p}</p>

                  <div class="profile">
                      <img src="${card.image}" alt="">

                      <div class="info">
                          <h3>${card.h3}</h3>
                          <span>${card.span}</span>
                      </div>
                  </div>
                </div>`;
});

document.querySelector(".page4 .cards")
.innerHTML = clutter2;
